import Wrapper from "@/components/UI/Wrapper";
import Image from "next/image";
import Awards from "@/assets/images/awards.svg"

export default function AboutCompanyAchievements() {
    return (
        <div className={"py-[100px] aboutCompanyBg"}>
            <Wrapper>
                <div className={""}>
                    <p className={"text-[#474796] font-medium"}>Golden House</p>
                    <div className={"text-[25px] font-bold"}>Достижения компании</div>
                    <p className={"mt-[25px] text-[12px]"}>Мы первые среди девелоперов Узбекистана, кто получил международное признание: 9 наград Asia
                        Pacific Property Awards.
                    </p>
                </div>
                <div className={"mt-[50px]"}>
                    <Image src={Awards} alt={"Awards"} className={"w-full"}/>
                </div>
            </Wrapper>
        </div>
    )
}