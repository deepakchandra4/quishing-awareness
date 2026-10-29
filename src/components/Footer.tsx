export default function Footer() {
  return (
    <footer className="w-full bg-[#dc2626] text-white py-10 px-4 sm:px-6 md:px-8">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-3">
        <p className="text-xl sm:text-2xl font-extrabold tracking-wide text-white">
          Pause. Check. Think before you scan.
        </p>
        <p className="text-xs sm:text-sm text-red-100 max-w-xl font-normal leading-relaxed">
          Educational project for cybersecurity awareness. No real barcode or
          malicious destination is used.
        </p>
      </div>
    </footer>
  );
}
