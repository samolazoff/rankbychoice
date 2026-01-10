import ExamplesSection from "@/components/Examples/ExamplesSection";
import FeaturesSection from "@/components/Features/FeaturesSection";
import HeroSection from "@/components/Hero/HeroSection";
import PricingSection from "@/components/Prices/PricingSection";

export default function Home() {
    return (
        <main>
            {/* <div className="container mx-auto"> */}
                <HeroSection/>
                <FeaturesSection/>
                <ExamplesSection/>
                <PricingSection/>
            {/* </div> */}
        </main>
    );
}
