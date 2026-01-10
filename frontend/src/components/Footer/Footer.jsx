import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 py-12">
        <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-0 border-b border-slate-700 pb-8">
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold text-white">
                Rank by <span className="text-indigo-500">Choice</span>
                </h2>
                <p className="text-sm text-slate-400 max-w-xs">
                Create ranked lists of anything you love. Simple, fast, and addictive.
                </p>
            </div>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-slate-300">Product</h3>
                    <Link href="#features" className="text-sm hover:text-white transition">Features</Link>
                    <Link href="#examples" className="text-sm hover:text-white transition">Examples</Link>
                    <Link href="#pricing" className="text-sm hover:text-white transition">Pricing</Link>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-slate-300">Company</h3>
                    <Link href="/about" className="text-sm hover:text-white transition">About</Link>
                    <Link href="/blog" className="text-sm hover:text-white transition">Blog</Link>
                    <Link href="/contact" className="text-sm hover:text-white transition">Contact</Link>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-slate-300">Legal</h3>
                    <Link href="/terms" className="text-sm hover:text-white transition">Terms</Link>
                    <Link href="/privacy" className="text-sm hover:text-white transition">Privacy</Link>
                </div>
            </div>
        </div>

            <div className="mt-8 flex flex-col md:flex-row md:justify-between md:items-center gap-6">
                <Link
                    href="/register"
                    className="rounded-md bg-indigo-600 px-6 py-3 text-center font-semibold text-white hover:bg-indigo-500 transition w-full md:w-auto"
                >
                    Get started for free
                </Link>
                <p className="text-sm text-slate-400 text-center md:text-left">
                    © {new Date().getFullYear()} Rank by Choice. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
  )
}
