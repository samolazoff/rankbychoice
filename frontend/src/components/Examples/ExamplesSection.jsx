import ExampleCard from "./ExampleCard"

const EXAMPLES = [
  {
    title: "Books",
    description: "Rank your favorite novels or authors from best to worst.",
    emoji: "📚",
  },
  {
    title: "Music",
    description: "Create your ultimate playlist ranking all your favorite songs.",
    emoji: "🎵",
  },
  {
    title: "Wine",
    description: "Compare wines and find the perfect order for tasting notes.",
    emoji: "🍷",
  },
  {
    title: "Movies",
    description: "Organize movies by preference to see your top picks at a glance.",
    emoji: "🎬",
  },
]

export default function ExamplesSection() {
  return (
    <section id="examples" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            Real use cases
          </h2>
          <p className="mt-4 text-slate-600">
            RankByChoice works for anything you want to organize — books, music, movies, and even wine.
          </p>
        </div>

        {/* Grid of examples */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {EXAMPLES.map((example, index) => (
            <ExampleCard key={index} {...example} />
          ))}
        </div>
      </div>
    </section>
  )
}