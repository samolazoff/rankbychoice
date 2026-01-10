export default function HeroSection() {
	return (
		<section className="bg-indigo-50 py-32">
		<div className="mx-auto max-w-7xl px-6 text-center">
			<h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
			Rank anything, effortlessly
			</h1>
			<p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
			Create ranked lists of books, music, wine, movies or anything else.
			Compare items step by step and let Rank by Choice automatically find the perfect order.
			</p>

			<div className="mt-10 flex justify-center gap-4">
			<a
				href="/register"
				className="rounded-md bg-indigo-600 px-6 py-3 text-lg font-semibold text-white hover:bg-indigo-500 transition"
			>
				Get started
			</a>
			<a
				href="#features"
				className="rounded-md bg-white border border-slate-200 px-6 py-3 text-lg font-semibold text-slate-900 hover:bg-slate-100 transition"
			>
				Learn more
			</a>
			</div>
		</div>
		</section>
	)
}
