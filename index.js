const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('✅ WhatsApp Bot is running!');
});
app.listen(PORT, () => console.log(`🌐 Web server on http://localhost:${PORT}`));

// Define your trigger keywords (case-insensitive)
const triggers = [
  'hi', 'hello', 'you there?', 'are you free?', 'available?', 'ping', "what's up?",
  'yo', 'sup', 'hey', 'howdy', 'hola', 'ola', 'hi there', 'hello there',
  'hy', 'hii', 'oye', 'lucky', 'oye lucky'
];

// Init WhatsApp client
const client = new Client({
  authStrategy: new LocalAuth({
    dataPath: './local-session' // ✅ Store session locally, not in OneDrive
  }),
  puppeteer: {
    headless: false,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', // ✅ Optional, adjust if needed
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-extensions',
      '--disable-dev-shm-usage',
      '--disable-gpu'
    ]
  }
});

// Generate QR code
client.on('qr', qr => {
  console.log('📱 Scan this QR code:');
  qrcode.generate(qr, { small: true });
});

// Confirm ready
client.on('ready', () => {
  console.log('✅ WhatsApp Bot is ready!');
});

// Handle messages
client.on('message', async msg => {
  // Ignore if it's a group
  if (msg.from.includes('-')) return;

  // Get sender's number (without @c.us)
  const sender = msg.from.split('@')[0];

  // Prevent replying to your own messages
  if (msg.fromMe) return;

  const text = msg.body.trim().toLowerCase();

  if (triggers.includes(text)) {
    console.log(`📩 Trigger received from ${sender}: ${msg.body}`);
    msg.reply('👋 Hey! I am Lucky\'s bot. How can I help you?\n You can drop your message Boss will get back to you soon');
  }
});

client.initialize();
