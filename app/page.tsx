import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import BgGradient from "@/components/common/bg-gradient";
import DemoSection from "@/components/home/DemoSection";
import PricingSection from "@/components/home/PricingSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <div className="relative w-full">
      <BgGradient/>
      <div className="flex flex-col">
<HeroSection/>
<DemoSection/>      
<HowItWorks/>
<PricingSection/>
<CTASection/>
    </div>
    </div>
  );
}
