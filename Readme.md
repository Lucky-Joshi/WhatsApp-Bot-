# 🤖 Instagram Auto-Reply Bot

An auto-reply bot for **Instagram DMs**, built using **Node.js** and the **Instagram Graph API**. Designed for **business/creator accounts** connected to a **Facebook Page**.

---

## 🚀 Features

* Auto-reply to direct messages on Instagram
* Works only for **business/creator** Instagram accounts
* Lightweight Express server
* Facebook Webhook verification
* Written in **Node.js**

---

## ⚠️ Limitations

| Feature                    | Supported?                               |
| -------------------------- | ---------------------------------------- |
| Personal IG accounts       | ❌ No                                     |
| Business/Creator accounts  | ✅ Yes                                    |
| Group DMs                  | ❌ No                                     |
| Auto-reply without message | ❌ No (only replies to incoming messages) |

---

## 🧰 Requirements

* Instagram **Business/Creator** account
* Facebook **Page** linked to Instagram
* [Facebook Developer App](https://developers.facebook.com/)
* Node.js (v14+)
* Verified webhook (via `ngrok`, Render, etc.)
* Page Access Token with:

  * `instagram_basic`
  * `instagram_manage_messages`
  * `pages_messaging`

---

## 🔧 Installation

```bash
git clone https://github.com/yourusername/instagram-auto-reply-bot.git
cd instagram-auto-reply-bot
npm install
```

---

## 🏦 Environment Setup

Create a `.env` file:

```env
VERIFY_TOKEN=your_custom_verify_token
PAGE_ACCESS_TOKEN=your_facebook_page_access_token
```

---

## ▶️ Run the Server

```bash
node index.js
```

You’ll see:

```bash
📡 Server listening on port 3000
```

---

## 🌐 Webhook Setup (using `ngrok`)

Start tunnel:

```bash
ngrok http 3000
```

Copy the HTTPS URL and set it as your **Webhook Callback URL** in your Facebook App:

```
https://your-ngrok-url/webhook
```

Verify Token = `VERIFY_TOKEN` you used in `.env`

---

## 📬 Webhook Callback Events

Enable:

* `messages`
* `messaging_postbacks`
* `message_reactions`

---

## 💬 Customize Your Auto-Reply

Inside `index.js`:

```js
message: { text: "👋 Hi! Thanks for messaging us. We'll get back to you shortly!" }
```

Change the reply to suit your needs.

---

## 🧪 Testing

1. Go to your Instagram business account
2. DM from another account
3. You’ll receive an auto-reply

---

## ☁️ Free Hosting Options

| Platform      | Webhook Support     | Notes                                     |
| ------------- | ------------------- | ----------------------------------------- |
| Render        | ✅ (web server only) | Use `web service`, not background workers |
| Glitch        | ✅                   | Easy deploy, free forever                 |
| Railway       | ✅                   | Free tier with hours                      |
| Local + ngrok | ✅                   | For testing                               |

---

## 📄 License

MIT

---

## 🤝 Contribute

PRs welcome. Open issues or suggest features!
