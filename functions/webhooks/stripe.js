export async function onRequestPost({ request, env }) {
  const stripe = require('stripe')(env.STRIPE_SECRET_KEY); // Stripeライブラリの初期化
  const webhookSecret = env.STRIPE_WEBHOOK_SECRET; // Webhookシークレット
  const slackWebhookUrl = env.SLACK_WEBHOOK_URL; // Slack Webhook URL

  const sig = request.headers.get('stripe-signature');
  const payload = await request.text();

  let event;

  try {
    // Stripeの署名検証
    event = stripe.webhooks.constructEvent(payload, sig, webhookSecret);
  } catch (err) {
    console.error('Webhook Error:', err.message);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // イベントタイプによる処理
  let message;
  switch (event.type) {
    case 'customer.subscription.created':
      message = `🎉 新しいサブスクリプションが作成されました！\n顧客ID: ${event.data.object.customer}`;
      break;
    case 'customer.subscription.deleted':
      message = `⚠️ サブスクリプションが解約されました。\n顧客ID: ${event.data.object.customer}`;
      break;
    default:
      console.log(`Unhandled event type: ${event.type}`);
      return new Response('Event Not Handled', { status: 200 });
  }

  // Slack通知を送信
  try {
    await fetch(slackWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: message }),
    });
    return new Response('Notification sent to Slack', { status: 200 });
  } catch (err) {
    console.error('Slack Notification Error:', err.message);
    return new Response(`Slack Notification Error: ${err.message}`, { status: 500 });
  }
}