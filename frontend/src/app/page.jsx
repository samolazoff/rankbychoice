import ExamplesSection from "@/components/Examples/ExamplesSection";
import FeaturesSection from "@/components/Features/FeaturesSection";
import FinalCTA from "@/components/Hero/FinalCTA";
import HeroSection from "@/components/Hero/HeroSection";
import PricingSection from "@/components/Prices/PricingSection";

export default function Home() {
    return (
        <main>
            <HeroSection/>
            <FeaturesSection/>
            <ExamplesSection/>
            <PricingSection/>
            <FinalCTA/>
        </main>
    );
}
