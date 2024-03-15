import Wrapper from "@/components/UI/Wrapper";
import Image from "next/image";
import Awards from "@/assets/images/awards.svg";
import Developer2020 from "@/assets/images/developer-2020.png.webp"

export default function Developer() {
    return (
        <div className={"py-[100px] aboutCompanyBg"}>
            <Wrapper>
                <div className={""}>
                    <p className={"text-[#474796] font-medium"}>Golden House</p>
                    <div className={"text-[25px] font-bold"}>Девелопер года — это про нас!</div>
                    <div className={"mt-[25px] flex justify-between"}>
                        <div className={"flex flex-col gap-[30px]"}>
                            <p className={"text-[14px]"}>
                                Golden House участвовал в открытом голосовании III Международного маркетингового
                                бизнес-форума MAKON <br/> Marketing Forum и получил премию «Бренд Года 2020» в категории
                                «Девелоперы».
                                <br/>
                                <br/>
                                «Бренд Года» — ежегодная премия для лучших брендов Узбекистана по мнению населения и
                                ведущих экспертов <br/> среди наиболее популярных категорий товаров и услуг.
                            </p>
                            <p className={"text-[12px]"}>
                                Мы очень рады, что наши проекты были признаны и по достоинству <br/>
                                оценены профессиональным сообществом.
                                <br/>
                                <br/>
                                Поздравляем всех наших жильцов с правильным выбором!
                            </p>
                        </div>
                        <Image src={Developer2020} alt={"Developer"} width={200}/>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}