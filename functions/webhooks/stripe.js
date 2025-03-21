export async function onRequestPost({ request, env }) {
  const stripe = require('stripe')(env.STRIPE_SECRET_KEY); // Stripeライブラリの初期化
  const webhookSecret = env.STRIPE_WEBHOOK_SECRET; // Webhookシークレット
  const slackWebhookUrl = env.SLACK_WEBHOOK_URL; // Slack Webhook URL

  const sig = request.headers.get('stripe-signature');
  const payload = await request.text();

  let event;

  try {
    // Stripeの署名検証
    event = await stripe.webhooks.constructEventAsync(payload, sig, webhookSecret);

  } catch (err) {
    console.error('Webhook Error:', err.message);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // イベントタイプによる処理
  let message;
  switch (event.type) {
    case 'customer.subscription.created': {
      const subscription = event.data.object;
      console.log('LOG DATA', subscription)
      message = `サブスクリプションが開始されました\nhttps://dashboard.stripe.com/subscriptions/${subscription.id}`;
      break;
    }
    case 'customer.subscription.updated': {
      const subscription = event.data.object;
      console.log('LOG DATA', subscription)
      message = `サブスクリプションが更新されました\nhttps://dashboard.stripe.com/subscriptions/${subscription.id}\n`;
      if (subscription.cancellation_details) {
        const details = subscription.cancellation_details;
        if (details.feedback) {
          message += `feedback ${details.feedback}\n`
        }
        if (details.comment) {
          message += `feedback ${details.comment}\n`
        }
      }
      break;
    }
    case 'customer.subscription.deleted': {
      const subscription = event.data.object;
      console.log('LOG DATA', subscription)
      message = `サブスクリプションが解約されました\nhttps://dashboard.stripe.com/subscriptions/${subscription.id}`;
      break;
    }
    case 'customer.updated': {
      const customer = event.data.object;
      console.log('LOG DATA', customer)
      message = `顧客情報が変更されました\nhttps://dashboard.stripe.com/customers/${customer.id}\n`;
      if (customer.address) {
        const address = customer.address;
        message += `🏠 顧客の住所が変更されました:\n顧客ID: ${customer.id}\n新しい住所:\n${address.line1 || ''}\n${address.city || ''}, ${address.state || ''} ${address.postal_code || ''}\n${address.country || ''}\n`;
      }

      if (customer.shipping && customer.shipping.address) {
        const shippingAddress = customer.shipping.address;
        message += `\n📦 配送先住所が変更されました:\n${shippingAddress.line1 || ''}\n${shippingAddress.city || ''}, ${shippingAddress.state || ''} ${shippingAddress.postal_code || ''}\n${shippingAddress.country || ''}\n`;
      }
      break;
    }
    default:
      console.log(`Unhandled event type: ${event.type} ID: ${event.data.object.id}`);
      message = `LOG DATA ${event.type}` + JSON.stringify(event.data.object)
  }

  // Slack通知を送信
  if (message) {
    try {
      await fetch(slackWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: message }),
      });
    } catch (err) {
      console.error('Slack Notification Error:', err.message);
      return new Response(`Slack Notification Error: ${err.message}`, { status: 500 });
    }
  }

  return new Response('Notification sent to Slack', { status: 200 });
}
