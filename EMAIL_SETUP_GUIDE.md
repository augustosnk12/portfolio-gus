# 📧 Email Setup Guide for augustosnk12@gmail.com

## 🚀 Quick Setup Options (Choose One)

### Option 1: Formspree (Easiest - 2 minutes)
1. Go to [formspree.io](https://formspree.io)
2. Sign up with augustosnk12@gmail.com
3. Create a new form
4. Copy the form endpoint
5. Add to `.env.local`:
\`\`\`env
FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
\`\`\`

### Option 2: Gmail SMTP (Direct Gmail)
1. Enable 2-Factor Authentication on augustosnk12@gmail.com
2. Generate App-Specific Password:
   - Go to Google Account Settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. Add to `.env.local`:
\`\`\`env
GMAIL_USER=augustosnk12@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
\`\`\`

### Option 3: Resend API (Professional)
1. Sign up at [resend.com](https://resend.com)
2. Verify augustosnk12@gmail.com domain OR use a custom domain
3. Get API key
4. Add to `.env.local`:
\`\`\`env
RESEND_API_KEY=your-resend-api-key
FROM_EMAIL=augustosnk12@gmail.com
TO_EMAIL=augustosnk12@gmail.com
\`\`\`

### Option 4: Zapier Webhook (Visual Automation)
1. Create Zapier account
2. Create new Zap:
   - Trigger: "Webhooks by Zapier" → "Catch Hook"
   - Action: "Gmail" → "Send Email"
   - Configure to send to augustosnk12@gmail.com
3. Copy webhook URL
4. Add to `.env.local`:
\`\`\`env
WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/your-webhook-url
\`\`\`

## 🔧 Gmail App Password Setup (Detailed)

1. **Enable 2FA on Gmail:**
   - Go to myaccount.google.com
   - Security → 2-Step Verification
   - Follow setup process

2. **Generate App Password:**
   - Still in Security settings
   - 2-Step Verification → App passwords
   - Select app: "Mail"
   - Select device: "Other" → "Portfolio Website"
   - Copy the 16-character password

3. **Add to Environment:**
\`\`\`env
GMAIL_USER=augustosnk12@gmail.com
GMAIL_APP_PASSWORD=abcd efgh ijkl mnop
\`\`\`

## ✅ Testing Your Setup

After configuring any option above:

1. Deploy your changes
2. Visit your portfolio
3. Fill out the contact form
4. Submit and check augustosnk12@gmail.com for the email

## 🛡️ Fallback System

The system tries methods in this order:
1. Resend API (if configured)
2. Webhook (if configured)  
3. Formspree (if configured)
4. Gmail SMTP (if configured)
5. Direct email client (always works)

## 📱 Mobile Testing

The email fallback will open the Gmail app on mobile devices with the form data pre-filled.

## 🔍 Troubleshooting

**Gmail SMTP Issues:**
- Ensure 2FA is enabled
- Use App Password, not regular password
- Check "Less secure app access" is OFF (use App Password instead)

**Resend Issues:**
- Verify domain ownership
- Check API key permissions
- Ensure FROM_EMAIL domain is verified

**Formspree Issues:**
- Confirm email address in Formspree dashboard
- Check spam folder for confirmations
- Verify form endpoint URL
