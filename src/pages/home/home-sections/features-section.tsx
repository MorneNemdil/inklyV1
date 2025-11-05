import { Card, CardContent } from "@/components/ui/card"
import Invoices from "@/assets/features/invoices-screenshot.png";
import ContractPage from "@/assets/features/contract-page2.png";
import ProposalsPage from "@/assets/features/proposals-page2.png";

const FeaturesSection = () => {
    return (<>
        <div className="mt-50" />
        <div id="features" className="flex flex-col items-center gap-15">
            <div className="flex flex-col items-center text-center gap-10">
                <div className="text-4xl lg:text-5xl text-center">One Platform. Endless Flow.</div>
                <div className="w-[90%] lg:w-[60%] text-lg text-gray-600 text-center">From first hello to final paycheck, all in one place</div>
            </div>
            <div className="flex flex-col items-center xl:flex-row gap-10 w-full xl:w-[80%]">
                <Card className="shadow-xl w-2/3 xl:w-1/3 h-full">
                    <CardContent className="flex flex-col gap-6 items-center text-center h-full p-6">
                        <div className="text-2xl font-semibold">Impressive Proposals</div>
                        <div className="text-base text-gray-600">
                            Create stunning proposals in minutes with smart templates tailored to your needs.
                        </div>
                        <img
                            src={ProposalsPage}
                            alt="Proposals preview"
                            className="w-full object-contain"
                        />
                    </CardContent>
                </Card>

                <Card className="shadow-xl w-2/3 xl:w-1/3 h-full">
                    <CardContent className="flex flex-col gap-6 items-center text-center h-full p-6">
                        <div className="text-2xl font-semibold">Seamless Contracts & E-Sign</div>
                        <div className="text-base text-gray-600">
                            Auto-generate legally sound contracts and get securely signed in just a few clicks.
                        </div>
                        <img
                            src={ContractPage}
                            alt="Contracts preview"
                            className="w-full object-contain"
                        />
                    </CardContent>
                </Card>

                <Card className="shadow-xl w-2/3 xl:w-1/3 h-full">
                    <CardContent className="flex flex-col gap-6 items-center text-center h-full p-6">
                        <div className="text-2xl font-semibold">Effortless Invoicing & Tracking</div>
                        <div className="text-base text-gray-600">
                            Control invoices, accept payments, and track your cash flow with built-in analytics.
                        </div>
                        <img
                            src={Invoices}
                            alt="Invoices preview"
                            className="w-full object-contain"
                        />
                    </CardContent>
                </Card>
            </div>
        </div>
    </>)
}

export default FeaturesSection