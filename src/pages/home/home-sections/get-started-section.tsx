import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MailCheck } from "lucide-react"

const GetStartedSection = () => {
    return (<>
        <div className="mt-50" />
        <div id="getstarted" className="flex flex-col items-center gap-10">
            <div className="text-4xl lg:text-5xl text-center">Sign up for early access</div>
            <div className="w-[90%] lg:w-[60%] text-lg text-gray-600 text-center">Dont worry, we'll only send you an email once development for Inkly is complete - no spam and no nonsense</div>
            <div className="flex w-[60%] xl:w-[20%]">
                <Input name="getstartedinput" type="email" placeholder="Email" />
                <Button>Submit<MailCheck></MailCheck></Button>
            </div>
        </div>
    </>)
}

export default GetStartedSection