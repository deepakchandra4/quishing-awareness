export default function RiskSection() {
  const risks = [
    {
      title: "Fake Websites",
      description: "Scammers can create websites that look like real websites.",
    },
    {
      title: "Password Theft",
      description:
        "Fake login pages can trick you into sharing your password.",
    },
    {
      title: "Payment Fraud",
      description:
        "Fake payment pages can steal your financial details.",
    },
    {
      title: "Unsafe Downloads",
      description:
        "Unknown links may ask you to download harmful files.",
    },
    {
      title: "Fake Destinations",
      description:
        "A QR code may take you somewhere you did not expect.",
    },
    {
      title: "Personal Data Theft",
      description:
        "Fake forms may ask for private information.",
    },
  ];

  return (
    <section className="w-full bg-[#facc15] text-slate-900 py-12 md:py-16 px-4 sm:px-6 md:px-8 border-b border-yellow-500">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight uppercase text-slate-950 mb-2">
            KNOW THE RISK
          </h2>
          <p className="text-base sm:text-lg text-slate-900 font-medium max-w-xl mx-auto">
            A quick scan can open the wrong door.
          </p>
        </div>

        {/* 6 Simple Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {risks.map((risk, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-yellow-300 shadow-sm flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                  {risk.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {risk.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
