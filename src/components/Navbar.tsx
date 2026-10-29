import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-[#14532d] text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 sm:px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
        <Link
          href="/"
          className="font-bold tracking-widest text-lg sm:text-xl text-emerald-100 hover:text-white transition-colors"
        >
          SCAN / THINK
        </Link>
        <div className="text-xs sm:text-sm font-semibold tracking-wider text-emerald-200 uppercase">
          DIGITAL SAFETY AWARENESS
        </div>
      </div>
    </header>
  );
}
