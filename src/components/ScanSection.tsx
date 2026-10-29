"use client";

import { useSyncExternalStore } from "react";
import { QRCodeSVG } from "qrcode.react";
import { getGotchaUrl } from "@/config/site";

function subscribe(callback: () => void) {
  if (typeof window !== "undefined") {
    window.addEventListener("popstate", callback);
    return () => window.removeEventListener("popstate", callback);
  }
  return () => {};
}

function getClientSnapshot(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return `${process.env.NEXT_PUBLIC_SITE_URL.trim().replace(/\/+$/, "")}/gotcha`;
  }
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;
    if (
      hostname !== "localhost" &&
      hostname !== "127.0.0.1" &&
      !hostname.endsWith(".local")
    ) {
      return `${window.location.origin}/gotcha`;
    }
  }
  return getGotchaUrl();
}

function getServerSnapshot(): string {
  return getGotchaUrl();
}

export default function ScanSection() {
  const targetUrl = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot
  );

  return (
    <section
      id="qr-scan"
      className="w-full bg-[#047857] text-white py-12 md:py-16 px-4 sm:px-6 md:px-8 border-b border-emerald-800"
    >
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight uppercase text-white mb-3">
          Think Before You Scan!
        </h2>

        {/* Section Description */}
        <p className="text-base sm:text-lg text-emerald-100 font-normal max-w-xl mx-auto leading-relaxed mb-8">
          Scan this QR code to experience a short cybersecurity awareness
          demonstration.
        </p>

        {/* QR Code Card */}
        <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-emerald-200 flex flex-col items-center max-w-sm w-full mx-auto">
          {/* Badge */}
          <div className="mb-4 px-3.5 py-1.5 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold tracking-wider rounded-full uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            Live Scannable QR Code
          </div>

          {/* QR Code Container */}
          <div className="p-3 bg-white border-2 border-slate-200 rounded-xl shadow-inner flex items-center justify-center">
            <QRCodeSVG
              value={targetUrl}
              size={240}
              level="H"
              includeMargin={true}
              role="img"
              aria-label="Scannable QR Code pointing to cybersecurity awareness demonstration"
              className="w-56 h-56 sm:w-60 sm:h-60"
            />
          </div>

          <p className="mt-4 text-xs sm:text-sm font-semibold text-slate-700">
            Scan using any smartphone camera
          </p>
        </div>
      </div>
    </section>
  );
}
