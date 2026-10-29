"use client";

import { useState } from "react";

export default function SimulationSection() {
  const [hasScanned, setHasScanned] = useState(false);

  return (
    <section className="w-full bg-slate-100 py-12 md:py-16 px-4 sm:px-6 md:px-8 border-b border-slate-200">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight uppercase mb-3">
            TRY THE SIMULATION
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto">
            See why scanning unknown QR codes can be risky.
          </p>
        </div>

        {/* Demonstration Container */}
        <div className="bg-white rounded-xl border border-slate-300 shadow-sm p-6 sm:p-8 flex flex-col items-center">
          {/* Fictional QR Code Box */}
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="w-48 h-48 sm:w-56 sm:h-56 p-4 bg-white border-2 border-slate-800 rounded-lg shadow-sm flex items-center justify-center">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                fill="#0f172a"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Fictional QR Code"
              >
                {/* Top-Left Finder */}
                <rect x="5" y="5" width="28" height="28" fill="#0f172a" rx="2" />
                <rect x="9" y="9" width="20" height="20" fill="#ffffff" />
                <rect x="13" y="13" width="12" height="12" fill="#0f172a" />

                {/* Top-Right Finder */}
                <rect x="67" y="5" width="28" height="28" fill="#0f172a" rx="2" />
                <rect x="71" y="9" width="20" height="20" fill="#ffffff" />
                <rect x="75" y="13" width="12" height="12" fill="#0f172a" />

                {/* Bottom-Left Finder */}
                <rect x="5" y="67" width="28" height="28" fill="#0f172a" rx="2" />
                <rect x="9" y="71" width="20" height="20" fill="#ffffff" />
                <rect x="13" y="75" width="12" height="12" fill="#0f172a" />

                {/* Fictional Data Modules */}
                <rect x="38" y="8" width="6" height="6" fill="#0f172a" />
                <rect x="48" y="12" width="6" height="6" fill="#0f172a" />
                <rect x="56" y="8" width="6" height="6" fill="#0f172a" />

                <rect x="10" y="38" width="6" height="6" fill="#0f172a" />
                <rect x="22" y="44" width="6" height="6" fill="#0f172a" />
                <rect x="38" y="24" width="6" height="6" fill="#0f172a" />
                <rect x="48" y="24" width="6" height="6" fill="#0f172a" />

                <rect x="38" y="38" width="8" height="8" fill="#0f172a" />
                <rect x="50" y="38" width="8" height="8" fill="#0f172a" />
                <rect x="62" y="38" width="8" height="8" fill="#0f172a" />
                <rect x="78" y="38" width="6" height="6" fill="#0f172a" />
                <rect x="88" y="44" width="6" height="6" fill="#0f172a" />

                <rect x="38" y="52" width="6" height="6" fill="#0f172a" />
                <rect x="48" y="56" width="6" height="6" fill="#0f172a" />
                <rect x="58" y="50" width="6" height="6" fill="#0f172a" />
                <rect x="70" y="54" width="6" height="6" fill="#0f172a" />
                <rect x="84" y="56" width="6" height="6" fill="#0f172a" />

                <rect x="38" y="68" width="6" height="6" fill="#0f172a" />
                <rect x="48" y="74" width="6" height="6" fill="#0f172a" />
                <rect x="60" y="68" width="8" height="8" fill="#0f172a" />
                <rect x="74" y="72" width="6" height="6" fill="#0f172a" />
                <rect x="86" y="68" width="6" height="6" fill="#0f172a" />

                <rect x="38" y="82" width="8" height="8" fill="#0f172a" />
                <rect x="52" y="86" width="6" height="6" fill="#0f172a" />
                <rect x="68" y="84" width="8" height="8" fill="#0f172a" />
                <rect x="82" y="82" width="8" height="8" fill="#0f172a" />
              </svg>
            </div>
            <p className="mt-2 text-xs text-slate-500 font-medium">
              Fictional Demonstration Code
            </p>
          </div>

          {/* Action Button */}
          {!hasScanned ? (
            <button
              id="simulate-scan-button"
              type="button"
              onClick={() => setHasScanned(true)}
              className="px-6 py-3 bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-bold text-base rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              Simulate Scan
            </button>
          ) : (
            /* Warning Result Box */
            <div
              id="simulation-result-box"
              className="w-full max-w-xl bg-amber-50 border-2 border-amber-400 rounded-lg p-5 text-center flex flex-col items-center"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-200 text-amber-900 font-black text-xl mb-3">
                !
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-amber-950 mb-2">
                Warning! You could be redirected to an unsafe website.
              </h3>

              <p className="text-sm sm:text-base text-amber-900 leading-relaxed mb-4">
                A malicious QR code might take you to a fake login page, a
                fraudulent payment page, or an unsafe download.
              </p>

              {/* Fictional URL Example */}
              <div className="w-full bg-white border border-amber-300 rounded-md py-2.5 px-4 mb-3 font-mono text-sm sm:text-base text-red-600 font-semibold break-all select-all">
                suspicious-example.invalid
              </div>

              <span className="text-xs text-amber-800 font-medium mb-5">
                This is a simulated example. No real website is opened.
              </span>

              <button
                id="reset-simulation-button"
                type="button"
                onClick={() => setHasScanned(false)}
                className="px-5 py-2.5 bg-slate-800 hover:bg-slate-900 text-white font-semibold text-sm rounded-md transition-colors cursor-pointer"
              >
                Reset Simulation
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
