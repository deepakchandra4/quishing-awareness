export default function ChecklistSection() {
  const checklist = [
    {
      number: "01",
      text: "Check where the QR code comes from.",
    },
    {
      number: "02",
      text: "Always inspect the website address before opening it.",
    },
    {
      number: "03",
      text: "Never share passwords through unknown QR links.",
    },
    {
      number: "04",
      text: "Avoid making payments through unverified websites.",
    },
    {
      number: "05",
      text: "Do not scan damaged, covered, or suspicious QR codes.",
    },
    {
      number: "06",
      text: "Keep your phone and security software updated.",
    },
    {
      number: "07",
      text: "When in doubt, use the official website or application.",
    },
  ];

  return (
    <section className="w-full bg-[#f472b6] text-white py-12 md:py-16 px-4 sm:px-6 md:px-8 border-b border-pink-400">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight uppercase text-white mb-2">
            YOUR SAFETY CHECKLIST
          </h2>
          <p className="text-base sm:text-lg text-pink-100 font-medium">
            How to stay safe from Quishing.
          </p>
        </div>

        {/* 7 Checklist Points */}
        <div className="space-y-3.5">
          {checklist.map((item) => (
            <div
              key={item.number}
              className="bg-white text-slate-800 rounded-xl p-4 sm:p-5 border border-pink-200 shadow-sm flex items-center gap-4"
            >
              <div className="shrink-0 w-11 h-11 bg-pink-100 text-pink-700 font-extrabold text-base sm:text-lg rounded-lg flex items-center justify-center border border-pink-300">
                {item.number}
              </div>
              <p className="text-base sm:text-lg font-semibold text-slate-900 leading-snug">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
