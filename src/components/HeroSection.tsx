export default function HeroSection() {
  return (
    <section className="w-full bg-[#1d4ed8] text-white py-12 md:py-16 px-4 sm:px-6 md:px-8 border-b border-blue-800">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6">
            Gotcha! You just scanned a potentially dangerous QR code.
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 font-normal leading-relaxed">
            This is a harmless educational demonstration. Real malicious QR codes
            can redirect you to fake websites, steal your login details, or trick
            you into making payments.
          </p>
        </div>

        {/* Right Decorative Barcode Illustration with Red Line */}
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow-md border-2 border-blue-200 flex flex-col items-center">
            {/* Barcode SVG */}
            <div className="relative w-64 h-36 flex items-center justify-center bg-gray-50 p-3 rounded border border-gray-300">
              <svg
                viewBox="0 0 240 100"
                className="w-full h-full"
                fill="#111827"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Decorative barcode illustration"
              >
                {/* Barcode lines */}
                <rect x="10" y="10" width="6" height="80" />
                <rect x="20" y="10" width="3" height="80" />
                <rect x="27" y="10" width="8" height="80" />
                <rect x="40" y="10" width="4" height="80" />
                <rect x="48" y="10" width="10" height="80" />
                <rect x="63" y="10" width="5" height="80" />
                <rect x="72" y="10" width="3" height="80" />
                <rect x="79" y="10" width="7" height="80" />
                <rect x="90" y="10" width="12" height="80" />
                <rect x="106" y="10" width="4" height="80" />
                <rect x="114" y="10" width="8" height="80" />
                <rect x="126" y="10" width="3" height="80" />
                <rect x="133" y="10" width="10" height="80" />
                <rect x="147" y="10" width="5" height="80" />
                <rect x="156" y="10" width="9" height="80" />
                <rect x="169" y="10" width="4" height="80" />
                <rect x="177" y="10" width="12" height="80" />
                <rect x="193" y="10" width="6" height="80" />
                <rect x="203" y="10" width="4" height="80" />
                <rect x="211" y="10" width="8" height="80" />
                <rect x="223" y="10" width="5" height="80" />

                {/* Prominent Red Line Across Barcode */}
                <line
                  x1="5"
                  y1="95"
                  x2="235"
                  y2="5"
                  stroke="#dc2626"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Label */}
            <div className="mt-4 px-3 py-1.5 bg-red-100 border border-red-300 text-red-800 text-xs sm:text-sm font-bold tracking-wider rounded text-center">
              EXAMPLE ONLY – NOT SCANNABLE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
