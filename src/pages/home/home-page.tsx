import { useTheme } from "@/components/theme-provider"
import { useEffect } from "react";
import HeroSection from "@/pages/home/home-sections/hero-section";
import Footer from "@/pages/home/home-sections/footer-section";
import FeaturesSection from "@/pages/home/home-sections/features-section";
import GetStartedSection from "@/pages/home/home-sections/get-started-section";

const HomePage = () => {
    const { setTheme } = useTheme();

    useEffect(() => setTheme('light'), []);

    return (
        <div className="flex flex-col">
            <HeroSection />
            <FeaturesSection />
            <GetStartedSection />
            <Footer />
            <div className="mt-80" />
        </div>
    )
}

export default HomePage