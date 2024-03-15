import Wrapper from "@/components/UI/Wrapper";
import Image from "next/image";
import Partnerss from "@/assets/images/partner-15.svg"

export default function Partners() {
    return (
        <div className={"pt-[50px]"}>
            <Wrapper>
                <div className={""}>
                    <p className={"text-[#474796] font-medium"}>Golden House</p>
                    <div className={"text-[25px] font-bold"}>Партнёры</div>
                    <div className={"mt-[25px] grid grid-cols-4"}>
                        {
                            Array(16).fill("").map((_: any, i: number) => (
                                <Image src={Partnerss} alt={"Partners"} key={i} className={"w-full"}/>
                            ))
                        }
                    </div>
                </div>
                <div className={"mt-[50px] text-center text-[14px]"}>
                    Выбирая лучших мы создаём безупречный продукт!
                </div>
            </Wrapper>
        </div>
    )
}