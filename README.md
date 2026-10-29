# Quishing Awareness Website

A clean, minimal, responsive cybersecurity awareness website built for a college digital safety project.

The primary objective of this project is to educate everyday people about **QR-code phishing (Quishing)** in simple, non-technical language and demonstrate how scanning an unverified QR code can pose serious risks.

---

## 🎨 Visual Structure & Design System

The layout follows a high-contrast color-coded educational section structure:

| Section | Background Color | Description |
| :--- | :--- | :--- |
| **Navigation** | **Dark Green** (`#14532d`) | Brand identity: `SCAN / THINK` and `DIGITAL SAFETY AWARENESS` |
| **Introduction / Hero** | **Blue** (`#1d4ed8`) | "Gotcha!" message with educational breakdown & decorative barcode illustration |
| **Think Before You Scan!** | **Deep Emerald** (`#047857`) | **Live Scannable QR Code** pointing to the safe `/gotcha` educational route |
| **Practical Demonstration** | **Slate White** | Interactive simulation button demonstrating simulated redirection risk to `suspicious-example.invalid` safely & locally |
| **Know the Risks** | **Yellow** (`#facc15`) | 6 cards detailing fake websites, password theft, payment fraud, unsafe downloads, fake destinations, and personal data theft |
| **Safety Checklist** | **Pink** (`#f472b6`) | Numbered safety rules for QR code safety |
| **Footer** | **Red** (`#dc2626`) | Final takeaway: "Pause. Check. Think before you scan." with educational disclaimer |

---

## 📱 Real QR Scanning Experience (`/gotcha` Route)

Scanning the QR code on the homepage with a smartphone opens the dedicated educational landing page:

- **Immediate Awareness Hook:** `# GOTCHA!!!` – alerting the user to how easily anyone can be prompted into scanning a code.
- **Harmless Demonstration Reassurance:** Explains that no harm was done, while prompting the user to reflect on what could happen on a real malicious site.
- **How Does This Scam Work?:** 3-step breakdown of attacker creation, distribution (posters, flyers, stickers), and credential harvesting.
- **Common QR Code Scams:** 4 cards highlighting Fake Login Pages, Payment Scams, Fake Websites, and Malware Downloads.
- **Safety Checklist:** 6 practical rules for staying safe.
- **Prominent Takeaway:** "PAUSE. CHECK. THINK BEFORE YOU SCAN." with a button to return to the homepage.

---

## 🛠️ Technology Stack

- **Next.js** (App Router)
- **React** (v19)
- **TypeScript**
- **Tailwind CSS** (v4)
- **qrcode.react** (for high-resolution, responsive vector QR generation)

---

## ⚙️ Environment Configuration

The QR code points to `[YOUR_DEPLOYED_WEBSITE_URL]/gotcha`. To set your actual deployed URL:

1. Copy `.env.example` to `.env` or `.env.local`:
   ```env
   NEXT_PUBLIC_SITE_URL=https://your-deployed-domain.com
   ```
2. When deploying to Vercel, Vercel's automatic production deployment URLs are also supported out of the box.

*Note: In compliance with project guidelines, the QR code never uses `localhost` so that scanning with an external smartphone camera always points to a valid web URL.*

---

## 🚀 Running Locally

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for Production**:
   ```bash
   npm run build
   npm run start
   ```

---

## 🔒 Safety & Ethics Notice

This website is purely educational:
- **No camera access** is requested or used.
- **No real phishing links** are included.
- **No personal data or passwords** are collected or stored.
- All simulations and demonstrations are completely safe and educational.
