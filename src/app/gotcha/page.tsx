import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "GOTCHA! | Quishing Awareness Demonstration",
  description:
    "You just experienced how easily someone can trick you into scanning a QR code. Learn how Quishing works and how to protect yourself.",
};

export default function GotchaPage() {
  const steps = [
    {
      number: "01",
      title: "Scammers create a malicious QR code.",
      detail:
        "Attackers generate a QR code that encodes a link to a fraudulent or deceptive website designed to look completely legitimate.",
    },
    {
      number: "02",
      title:
        "They place it on posters, advertisements, payment stickers, or messages.",
      detail:
        "The fake codes are pasted over real parking meters, shared in emails, printed on public flyers, or sent through messaging apps.",
    },
    {
      number: "03",
      title:
        "When someone scans it, they may be redirected to a fake website that attempts to steal their information.",
      detail:
        "Victims land on spoofed portals asking for credentials, credit card numbers, or immediate file downloads.",
    },
  ];

  const scamCards = [
    {
      title: "Fake Login Pages",
      description: "Scammers imitate genuine websites to steal passwords.",
    },
    {
      title: "Payment Scams",
      description:
        "Fake payment pages trick users into sharing financial information.",
    },
    {
      title: "Fake Websites",
      description: "QR codes redirect people to fraudulent websites.",
    },
    {
      title: "Malware Downloads",
      description:
        "Suspicious links may encourage users to download harmful files.",
    },
  ];

  const safetyChecklist = [
    "Check the source of the QR code.",
    "Inspect the URL before opening it.",
    "Never enter passwords on unknown websites.",
    "Avoid unverified payment links.",
    "Use official apps and websites.",
    "Do not scan suspicious or tampered QR codes.",
  ];

  return (
    <div className="min-h-screen flex flex-col w-full bg-white text-slate-900 font-sans">
      <Navbar />

      <main className="flex-1 flex flex-col w-full">
        {/* ================================================================ */}
        {/* 2. GOTCHA Banner & Educational Reassurance */}
        {/* ================================================================ */}
        <section className="w-full bg-[#dc2626] text-white py-12 md:py-16 px-4 sm:px-6 md:px-8 border-b border-red-700">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-900/70 border border-red-300/40 text-red-100 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase mb-5">
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-300 animate-pulse" />
              Live Demonstration Triggered
            </span>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white mb-4">
              GOTCHA!!!
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl text-red-100 font-bold max-w-2xl leading-snug mb-8">
              You just experienced how easily someone can trick you into
              scanning a QR code.
            </p>

            {/* Reassurance Container */}
            <div className="w-full max-w-2xl bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-2xl border-2 border-red-200 text-left">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-2xl border border-emerald-300">
                  ✓
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">
                    Don&apos;t worry! This was a harmless educational
                    demonstration.
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    Imagine if this QR code had redirected you to a fake
                    website instead. You might have unknowingly shared your
                    password, payment information, or personal details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* 3. Explain How Quishing Works */}
        {/* ================================================================ */}
        <section className="w-full bg-slate-100 py-12 md:py-16 px-4 sm:px-6 md:px-8 border-b border-slate-200">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight uppercase text-slate-950 mb-3">
                How Does This Scam Work?
              </h2>
              <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto">
                Quishing takes advantage of natural curiosity and blind trust.
                Here is the 3-step breakdown:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="bg-white rounded-xl p-6 border border-slate-300 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 font-extrabold flex items-center justify-center text-lg mb-4 border border-blue-200">
                      {step.number}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* 4. Show Common QR Code Scams */}
        {/* ================================================================ */}
        <section className="w-full bg-[#facc15] text-slate-900 py-12 md:py-16 px-4 sm:px-6 md:px-8 border-b border-yellow-500">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight uppercase text-slate-950 mb-2">
                Common QR Code Scams
              </h2>
              <p className="text-base sm:text-lg text-slate-900 font-medium max-w-xl mx-auto">
                Be on the lookout for these 4 common deception tactics:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {scamCards.map((scam, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-yellow-300 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                      {scam.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                      {scam.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* 5. Add a Safety Checklist */}
        {/* ================================================================ */}
        <section className="w-full bg-[#f472b6] text-white py-12 md:py-16 px-4 sm:px-6 md:px-8 border-b border-pink-400">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight uppercase text-white mb-2">
                How Can You Stay Safe?
              </h2>
              <p className="text-base sm:text-lg text-pink-100 font-medium">
                Simple habits to protect your data whenever scanning a QR code:
              </p>
            </div>

            <div className="space-y-3.5">
              {safetyChecklist.map((rule, index) => (
                <div
                  key={index}
                  className="bg-white text-slate-800 rounded-xl p-4 sm:p-5 border border-pink-200 shadow-sm flex items-center gap-4"
                >
                  <div className="shrink-0 w-11 h-11 bg-pink-100 text-pink-700 font-extrabold text-base sm:text-lg rounded-lg flex items-center justify-center border border-pink-300">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p className="text-base sm:text-lg font-semibold text-slate-900 leading-snug">
                    {rule}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* 6. Final Awareness Message & Back Button */}
        {/* ================================================================ */}
        <section className="w-full bg-[#1e293b] text-white py-14 md:py-20 px-4 sm:px-6 md:px-8 text-center border-b border-slate-700">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <span className="text-xs sm:text-sm font-extrabold tracking-widest text-emerald-400 uppercase mb-3">
              Key Safety Rule
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white mb-8">
              PAUSE. CHECK. THINK BEFORE YOU SCAN.
            </h2>

            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-bold text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-95 cursor-pointer"
            >
              <span>&larr;</span> Back to Homepage
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

