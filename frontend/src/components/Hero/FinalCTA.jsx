import Link from "next/link";

export default function FinalCTA() {
    return (
        <section className="relative overflow-hidden bg-indigo-600 py-24">
            <div className="mx-auto max-w-7xl px-6 text-center">
                <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                 Start ranking the things you love
                </h2>
                <p className="mt-6 max-w-2xl mx-auto text-lg text-indigo-100">
                Create your first ranking in seconds.  
                No complex setup. No random ordering. Just clear choices.
                </p>
                <div className="mt-10 flex justify-center">
                    <Link
                        href="/register"
                        className="rounded-md bg-white px-8 py-4 text-lg font-semibold text-indigo-600 hover:bg-indigo-50 transition"
                    >
                        Get started for free
                    </Link>
                </div>
                <p className="mt-4 text-sm text-indigo-200">
                Free plan · No credit card required
                </p>
            </div>
        </section>
    )
};
