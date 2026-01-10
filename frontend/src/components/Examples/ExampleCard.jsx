export default function ExampleCard({ title, description, emoji }) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:shadow-md">
      
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 text-xl">
        {emoji}
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