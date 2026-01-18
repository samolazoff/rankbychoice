export default function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm border border-black/5">
            <h2 className="text-2xl font-semibold text-slate-900">
                {title}
            </h2>
            {
                subtitle && (
                    <p className="mt-2 text-sm text-slate-600">
                        {subtitle}
                    </p>
                )
            }
            <div className="mt-6">
                {children}
            </div>
        </div>
    </div>
  )
}