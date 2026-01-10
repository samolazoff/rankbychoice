export default function PricingCard({ title, price, features, cta, popular }) {
    return (
        <div className={`flex flex-col justify-between rounded-2xl border border-black/5 p-6 shadow-sm transition hover:shadow-md ${popular ? "border-indigo-600 bg-indigo-50" : "bg-white"}`}>
            {
                popular && (
                    <div className="mb-4 text-xs font-semibold text-indigo-600 uppercase">
                        Most popular
                    </div>
                )
            }

            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            <p className="mt-2 text-3xl font-bold text-slate-900">{price}</p>

            <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                    <span className="text-indigo-600">✔</span>
                    {feature}
                </li>
                ))}
            </ul>

            <button className={`mt-6 w-full rounded-md px-4 py-2 text-sm font-semibold transition ${
                popular
                ? "bg-indigo-600 text-white hover:bg-indigo-500"
                : "bg-slate-100 text-slate-900 hover:bg-slate-200"
            }`}>
                {cta}
            </button>
        </div>
    )
}