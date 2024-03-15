import Image from "next/image";
import AboutCompanyImage from "@/assets/images/infinity-house-7.jpg"
import {faArrowCircleDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Building from "@/assets/images/apartment-1.svg"
import Wrapper from "@/components/UI/Wrapper";

export default function AboutCompanyHome() {
    return (
        <div className={"relative"}>
            <Image src={AboutCompanyImage} alt={"AboutCompanyImage"} className={"h-[80vh] max-sm:object-cover sm:h-screen w-full brightness-50"}/>
            <Wrapper>
                <div className={"absolute max-sm:top-[250px] top-[300px] z-[99] flex flex-col gap-[20px] text-white"}>
                    <div className={"font-bold text-[32px] sm:text-[40px]"}>
                        Golden House — искусство создавать
                    </div>
                    <p className={"text-[14px]"}>
                        Вся наша команда работает для того, чтобы отразить вашу <br/>
                        индивидуальность в месте, где вы проводите половину своего времени”
                    </p>
                    <div className={"flex items-center gap-[25px] mt-[20px]"}>
                        <button
                            className={"text-white bg-[#474796] transition-all duration-300 hover:transition-all hover:duration-300 hover:bg-[#474796] rounded-[5px] py-[8px] px-[25px] sm:py-[1.6vh] sm:px-[4vh] font-medium border-none flex items-center justify-center gap-[5px] sm:gap-[10px] text-[12px] sm:text-[14px]"}
                        >
                            <FontAwesomeIcon icon={faArrowCircleDown}/>
                            Скачать презентацию
                        </button>
                        <button className={"bg-transparent rounded-[5px] font-medium border-none flex items-center justify-center gap-[5px] sm:gap-[10px] text-[12px] sm:text-[14px]"}>
                            <Image src={Building} alt={"Building"} className={"h-full w-full"}/>
                            <p className={"border-b border-white"}>
                                Проекты
                            </p>
                        </button>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}