export default function FeatureCard({ title, description, icon }) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:shadow-md">
      
      <div className="mb-4 text-3xl">
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm text-slate-600 leading-relaxed">
        {description}
      </p>
    </div>
  )
}