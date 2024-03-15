import AboutCompanyHome from "@/components/AboutCompany/AboutCompanyHome";
import Information from "@/components/AboutCompany/Information";
import AboutCompanyAchievements from "@/components/AboutCompany/AboutCompanyAchievements";
import Partners from "@/components/AboutCompany/Partners";
import Developer from "@/components/AboutCompany/Developer";

export default function AboutCompanyContainer() {
    return (
        <div>
            <AboutCompanyHome/>
            <Information/>
            <AboutCompanyAchievements/>
            <Partners/>
            <Developer/>
        </div>
    )
}