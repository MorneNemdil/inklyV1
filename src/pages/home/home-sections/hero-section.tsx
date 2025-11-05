import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Code, TabletSmartphone } from "lucide-react"
import HeroImage from "@/assets/features/sign-up-early-access.png";
import { Link } from "react-scroll";

const HeroSection = () => {
    return (<>
        <div className="mt-20" />
        <div id="hero" className="flex flex-col items-center">
            <div className="flex flex-col items-center w-[80vw]">
                <div className="flex flex-col items-center w-full gap-10">
                    <div className="text-4xl lg:text-5xl text-center">Stop Juggling Tools. Start Closing Deals.</div>
                    <div className="w-[90%] lg:w-[60%] text-lg text-gray-600 text-center">Streamline your entire client interaction—from proposal to payment—all in one intuitive platform.</div>
                    <div className="flex items-center gap-15">
                        <Link to="getstarted" smooth={true}><Button size={'lg'}>Get started for free<ArrowRight /></Button></Link>
                        <Link
                        to="features"
                        smooth={true}
                        offset={-160}
                        >
                            <div className="font-bold hover:scale-103 transition-transform duration-300 cursor-pointer">Learn more</div>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row pb-20 pt-10 md:pb-40 md:pt-20">
                    <div className="w-full md:w-1/2 flex items-center justify-center px-6 md:px-0 mb-10 md:mb-0">
                        <div className="max-w-lg text-lg md:text-2xl text-center md:text-left">
                            Win clients, close deals, and get paid—all in one place. Our all-in-one
                            platform helps freelancers and small agencies create polished proposals,
                            auto-generate contracts, and collect secure e-signatures in minutes. No
                            more juggling multiple tools—just a simple, affordable workflow designed
                            to help you look professional and move faster.
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src={HeroImage}
                            alt="Freelancer productivity illustration"
                            className="w-[80%] md:w-full max-w-md md:max-w-none"
                        />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-15">
                    <div className="flex flex-col gap-5 lg:max-w-80">
                        <Code size={'38'} />
                        <div className="text-2xl font-semibold">Project management</div>
                        <div className="text-lg">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</div>
                    </div>
                    <div className="flex flex-col gap-5 lg:max-w-80">
                        <Clock size={'38'} />
                        <div className="text-2xl font-semibold">Time tracking</div>
                        <div className="text-lg">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</div>
                    </div>
                    <div className="flex flex-col gap-5 lg:max-w-80">
                        <TabletSmartphone size={'38'} />
                        <div className="text-2xl font-semibold">Beautiful mobile app</div>
                        <div className="text-lg">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default HeroSection