import ExamplesSection from "@/components/Examples/ExamplesSection";
import FeaturesSection from "@/components/Features/FeaturesSection";

export default function Home() {
    return (
        <main>
            <div className="container mx-auto">
                <FeaturesSection/>
                <ExamplesSection/>
            </div>
        </main>
    );
}
