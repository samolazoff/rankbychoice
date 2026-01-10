import PricingCard from "./PricingCard"

const PLANS = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Create up to 3 rankings",
      "Basic comparison system",
      "Limited categories",
    ],
    cta: "Get started",
    popular: false,
  },
  {
    title: "Pro",
    price: "$9/mo",
    features: [
      "Unlimited rankings",
      "Advanced comparison system",
      "All categories unlocked",
      "Priority support",
    ],
    cta: "Upgrade now",
    popular: true,
  },
  {
    title: "Team",
    price: "$29/mo",
    features: [
      "Unlimited rankings",
      "Team collaboration",
      "Admin control",
      "Priority support",
    ],
    cta: "Contact sales",
    popular: false,
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <div className="mb-16 max-w-2xl text-center mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            Choose your plan
          </h2>
          <p className="mt-4 text-slate-600">
            Simple and transparent pricing. Upgrade anytime as your needs grow.
          </p>
        </div>

        {/* Pricing cards grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
          {PLANS.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  )
}