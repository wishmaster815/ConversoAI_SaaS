# 🧠 Converso – The Dev-Focused LMS SaaS Platform

**Converso** is a powerful, real-time SaaS Learning Management System built for coding geeks, dev educators, and CS students. Powered by **Next.js**, **Supabase**, **Stripe**, and **Vapi**, it enables instructors to host interactive teaching sessions with **AI voice integration**, while managing subscriptions, authentication, and real-time content — all in one platform.

> Teach smarter. Learn faster. Converse better. 🚀

---

## ⚙️ Features

- 🔐 **User Authentication** – Secure login/signup using Supabase Auth
- 💳 **Stripe Integration** – Monetize your courses with full subscription management
- 🧑‍🏫 **Instructor Dashboard** – Create, update, and manage your content
- 🧠 **AI Vocal Agent** – Voice-powered learning via Vapi for real-time conversations
- 🧵 **Real-Time Learning** – Live class capability with seamless student interaction
- 🌐 **Fully Serverless** – Powered by modern, scalable tools for speed and security
- 📊 **Analytics Ready** – Track student progress and engagement

---

## 🚀 Tech Stack

| Technology | Role                             |
|------------|----------------------------------|
| Next.js    | Frontend & SSR                   |
| Supabase   | Auth, DB, and Realtime features  |
| Stripe     | Subscriptions & Payment Gateway  |
| Vapi       | AI Voice Assistant Integration   |
| TypeScript | Static Typing for Safer Dev      |
| TailwindCSS| UI Styling & Customization       |

---

## 🔍 Live Preview

🚀 **Try Out the Application Now**  
👉 [Converso – AI-Powered LMS](https://converso-ai-ten.vercel.app/)

Experience real-time learning assistance, AI companions, and more — all in one place.

## 🧪 Getting Started

Follow these steps to run Converso locally:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/converso.git
   cd converso
2. **Install Dependencies**
   ```bash
   npm install
3. **Set Environment Variables**
   ```bash
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   STRIPE_SECRET_KEY=your-stripe-secret-key
   STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret
   NEXT_PUBLIC_VAPI_API_KEY=your-vapi-api-key
   NEXT_PUBLIC_SENTRY_DSN=your-sentry-dsn

4. **Run the app**
   ```bash
   npm run dev
5. **Open http://localhost:3000 in your browser and explore**
