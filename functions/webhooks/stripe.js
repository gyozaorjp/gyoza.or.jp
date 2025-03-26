export async function onRequestPost({ request, env }) {
  // 環境変数のチェック
  if (!env.STRIPE_SECRET_KEY || !env.STRIPE_WEBHOOK_SECRET || !env.SLACK_WEBHOOK_URL) {
    console.error('Missing required environment variables');
    return new Response('Server configuration error', { status: 500 });
  }

  const stripe = require('stripe')(env.STRIPE_SECRET_KEY);
  const webhookSecret = env.STRIPE_WEBHOOK_SECRET;
  const slackWebhookUrl = env.SLACK_WEBHOOK_URL;

  const sig = request.headers.get('stripe-signature');
  if (!sig) {
    console.error('No Stripe signature found');
    return new Response('No signature', { status: 400 });
  }

  const payload = await request.text();
  let event;

  try {
    event = await stripe.webhooks.constructEventAsync(payload, sig, webhookSecret);
  } catch (err) {
    console.error('Webhook Error:', err.message);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  let message;
  try {
    message = await handleStripeEvent(event);
  } catch (err) {
    console.error('Event handling error:', err.message);
    return new Response(`Event handling error: ${err.message}`, { status: 500 });
  }

  if (message) {
    try {
      const response = await fetch(slackWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: message }),
      });

      if (!response.ok) {
        throw new Error(`Slack API error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.error('Slack Notification Error:', err.message);
      return new Response(`Slack Notification Error: ${err.message}`, { status: 500 });
    }
  }

  return new Response('Notification sent to Slack', { status: 200 });
}

async function handleStripeEvent(event) {
  const handlers = {
    'customer.subscription.created': handleSubscriptionCreated,
    'customer.subscription.updated': handleSubscriptionUpdated,
    'customer.subscription.deleted': handleSubscriptionDeleted,
    'customer.updated': handleCustomerUpdated,
  };

  const handler = handlers[event.type];
  if (!handler) {
    console.log(`Unhandled event type: ${event.type} ID: ${event.data.object.id}`);
    return `LOG DATA ${event.type}` + JSON.stringify(event.data.object);
  }

  return handler(event.data.object);
}

function handleSubscriptionCreated(subscription) {
  console.log('LOG DATA', subscription);
  return `サブスクリプションが開始されました\nhttps://dashboard.stripe.com/subscriptions/${subscription.id}`;
}

function handleSubscriptionUpdated(subscription) {
  console.log('LOG DATA', subscription);
  let message = `サブスクリプションが更新されました\nhttps://dashboard.stripe.com/subscriptions/${subscription.id}\n`;
  
  if (subscription.cancellation_details) {
    const details = subscription.cancellation_details;
    if (details.feedback) message += `feedback ${details.feedback}\n`;
    if (details.comment) message += `feedback ${details.comment}\n`;
  }
  
  return message;
}

function handleSubscriptionDeleted(subscription) {
  console.log('LOG DATA', subscription);
  return `サブスクリプションが解約されました\nhttps://dashboard.stripe.com/subscriptions/${subscription.id}`;
}

function handleCustomerUpdated(customer) {
  console.log('LOG DATA', customer);
  let message = `顧客情報が変更されました\nhttps://dashboard.stripe.com/customers/${customer.id}\n`;
  
  if (customer.address) {
    const address = customer.address;
    message += `🏠 顧客の住所が変更されました:\n顧客ID: ${customer.id}\n新しい住所:\n${address.line1 || ''}\n${address.city || ''}, ${address.state || ''} ${address.postal_code || ''}\n${address.country || ''}\n`;
  }

  if (customer.shipping?.address) {
    const shippingAddress = customer.shipping.address;
    message += `\n📦 配送先住所が変更されました:\n${shippingAddress.line1 || ''}\n${shippingAddress.city || ''}, ${shippingAddress.state || ''} ${shippingAddress.postal_code || ''}\n${shippingAddress.country || ''}\n`;
  }
  
  return message;
}
