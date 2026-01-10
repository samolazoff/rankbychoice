import FeatureCard from "./FeatureCard";

const FEATURES = [
  {
    title: "Rank by comparison",
    description:
      "Add a new item by comparing it step-by-step with existing ones. The system finds the right position automatically.",
    icon: "⚖️",
  },
  {
    title: "Always consistent",
    description:
      "No more random ordering. Every ranking is logically consistent and reflects your real preferences.",
    icon: "⭐",
  },
  {
    title: "Works for anything",
    description:
      "Books, music, wine, movies, products — create rankings for any category you care about.",
    icon: "📚",
  },
  {
    title: "Fast & addictive",
    description:
      "Simple decisions, instant feedback. Ranking feels more like a game than a chore.",
    icon: "⚡",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 w-full">
        <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 max-w-2xl">
                <h2 className="text-3xl font-semibold tracking-tight text-(--color-main)">
                    Ranking, the way your brain actually works
                </h2>
                <p className="mt-4 text-(--color-main)">
                    Instead of dragging items blindly, you make simple comparisons.
                    Rank by Choice builds a perfect order for you.
                </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {
                    FEATURES.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))
                }
            </div>
        </div>
    </section>
  )
};