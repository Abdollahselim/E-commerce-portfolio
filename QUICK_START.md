# 🚀 Quick Start Checklist — Lead Capture System

## For: First-Time Setup

**Time Required:** ~15 minutes to get working  
**Difficulty:** Easy (step-by-step)

---

## Phase 1: Get API Keys (5 minutes)

### [ ] 1. Create Resend Account

1. Go to https://resend.com
2. Click "Sign Up"
3. Enter your email and create password
4. Verify email
5. You're in! ✅

### [ ] 2. Get Resend API Key

1. In Resend dashboard, click **"API Keys"** (left sidebar)
2. Click **"Create API Key"**
3. Give it a name (e.g., "Portfolio Contact Form")
4. Copy the key (starts with `re_`)
5. **Save temporarily** (you'll need it in 2 minutes)

### [ ] 3. Verify Sender Email

1. In Resend, click **"Domains"** (left sidebar)
2. For testing: You can use `onboarding@resend.dev` (no setup needed)
3. For production: Add your custom domain
   - Click "Add Domain"
   - Follow DNS setup (can take 5 min)

---

## Phase 2: Setup Local Environment (3 minutes)

### [ ] 4. Create `.env.local`

In your project root, create a new file:

**File:** `.env.local`

```env
# Email (REQUIRED)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
RESEND_FROM_ADDRESS=onboarding@resend.dev
OWNER_EMAIL=your-email@gmail.com

# Optional
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Don't set TELEGRAM variables yet (optional)
```

**Fill in:**
- `RESEND_API_KEY` ← Paste the key you copied
- `OWNER_EMAIL` ← Your email address

### [ ] 5. Install/Verify Dependencies

```bash
# Make sure all packages are installed
npm install

# Check build works
npm run build

# Should complete without errors
```

---

## Phase 3: Test Locally (3 minutes)

### [ ] 6. Start Dev Server

```bash
npm run dev
```

You should see:
```
✓ Ready in XXXms
```

### [ ] 7. Open Form in Browser

1. Go to http://localhost:3000
2. Scroll to **Contact** section (or click #contact in URL)
3. You should see the contact form ✅

### [ ] 8. Submit Test Form

Fill out:
- Name: "Test User"
- Business: "Test Company"
- Email: "your-email@gmail.com" (use a real email you can check)
- Phone: "+966 50 123 4567"
- Platform: "Salla"
- Budget: "1,000-5,000 $"
- Store URL: "https://example.com"
- Goal: "I need to improve my store performance and increase conversions"

Click **"Request Free Audit"**

### [ ] 9. Check Results

**✅ You should see:**
- Loading spinner appears
- Form disappears
- Success message appears: "Request Received" ✅

**✅ Check your email (OWNER_EMAIL):**
- Subject: "🔔 New Lead: Test User — Salla / 1,000-5,000 $"
- Contains all your submission details
- Should arrive within 5 seconds

**✅ Check auto-reply (your test email):**
- Subject: "Your Audit Request Has Been Received ✓"
- Warm welcome message
- Should arrive within 10 seconds

---

## Phase 4: Deploy to Vercel (5 minutes)

### [ ] 10. Push to GitHub

```bash
git add .
git commit -m "chore: add production lead capture system"
git push origin main
```

### [ ] 11. Add Secrets to Vercel

1. Go to https://vercel.com/dashboard
2. Select your project
3. Click **Settings** → **Environment Variables**
4. Add these variables:

| Name | Value | Type |
|------|-------|------|
| `RESEND_API_KEY` | Your API key | Secret 🔒 |
| `RESEND_FROM_ADDRESS` | `onboarding@resend.dev` | Plain |
| `OWNER_EMAIL` | Your email | Secret 🔒 |
| `NEXT_PUBLIC_SITE_URL` | `https://yoursite.com` | Plain |

Click **"Save"** for each

### [ ] 12. Redeploy

1. Go to **Deployments** tab
2. Find latest commit
3. Click **"Redeploy"**
4. Wait ~1 minute for build

### [ ] 13. Test on Production

1. Click the production URL
2. Scroll to Contact section
3. Submit a test form
4. Check email arrives
5. Success! ✅

---

## Phase 5: Optional — Telegram Alerts

### [ ] 14. Create Telegram Bot (Optional)

1. Open Telegram
2. Search for **@BotFather**
3. Send `/newbot`
4. Follow steps (choose name, username)
5. Copy bot token (long string)
6. Paste into `.env.local`:

```env
TELEGRAM_BOT_TOKEN=1234567890:ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefgh
```

### [ ] 15. Get Telegram Chat ID (Optional)

1. Start a chat with your new bot
2. Send any message
3. Visit: `https://api.telegram.org/bot<YOUR_TOKEN>/getUpdates`
   - Replace `<YOUR_TOKEN>` with your bot token
4. Look for `"id":123456789` (your chat ID)
5. Paste into `.env.local`:

```env
TELEGRAM_CHAT_ID=123456789
```

### [ ] 16. Test Telegram

1. Restart dev server: `npm run dev`
2. Submit another test form
3. Check your Telegram chat for alert
4. Success! ✅

### [ ] 17. Add to Vercel

Same as Phase 4, but add:

| Name | Value | Type |
|------|-------|------|
| `TELEGRAM_BOT_TOKEN` | Your token | Secret 🔒 |
| `TELEGRAM_CHAT_ID` | Your chat ID | Plain |

---

## ✅ You're Done!

Your contact system is now:
- ✅ Running locally
- ✅ Deployed to Vercel
- ✅ Sending emails (you receive all leads)
- ✅ Sending auto-replies (clients get confirmation)
- ✅ Sending Telegram alerts (instant notifications) — if configured
- ✅ Protecting against spam (rate limiting + honeypot)
- ✅ Validating all inputs (server-side)
- ✅ Ready for production

---

## 🎯 Next Steps

### Monitor Leads
- Check OWNER_EMAIL for incoming submissions
- Reply to leads within 24 hours (as promised in auto-reply)
- Telegram alerts help you respond quickly

### Customize (Optional)
- See [DEVELOPER_REFERENCE.md](DEVELOPER_REFERENCE.md) for customization
- Change form fields, email text, rate limits, etc.

### Setup Analytics (Optional)
- See [LEAD_CAPTURE_SETUP.md](LEAD_CAPTURE_SETUP.md) for GA4/Clarity setup
- Track form submissions and conversions

---

## 🆘 Troubleshooting

### Form Submits But No Email

**Solution:**
1. Check `.env.local` has correct `RESEND_API_KEY`
2. Check `OWNER_EMAIL` is spelled correctly
3. Check spam folder in your email
4. Try restarting dev server: `npm run dev`
5. Look at console for error messages

### Rate Limit Error (429)

**Normal!** This means it's working. Just wait 1 minute and try again.

### Build Fails on Vercel

**Check:**
1. All environment variables are set in Vercel
2. Run `npm run build` locally to catch errors first
3. Check Vercel build logs for specific error

### Telegram Not Sending

**Check:**
1. `TELEGRAM_BOT_TOKEN` is correct
2. `TELEGRAM_CHAT_ID` is correct
3. Bot has permission to send messages
4. This won't block email (non-critical)

---

## 📞 Got Stuck?

1. **Read:** [LEAD_CAPTURE_SETUP.md](LEAD_CAPTURE_SETUP.md) (full guide)
2. **Reference:** [DEVELOPER_REFERENCE.md](DEVELOPER_REFERENCE.md) (technical details)
3. **Check:** [IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md) (what's included)

---

**You're all set! Start capturing leads! 🎉**
