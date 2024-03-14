"use client"

/**
 *
 * @author Azizkhuja Saidrahmonov
 */

import {A11y, Autoplay, EffectFade, Navigation, Pagination} from 'swiper/modules';

import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SwiperImage1 from '@/assets/images/swiper-img-1.webp'
import SwiperImage2 from '@/assets/images/swiper-img-2.webp'
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import Wrapper from "@/components/UI/Wrapper";
import Degree from "@/assets/images/360-degrees.png"

const swiperData = [
    {
        image: SwiperImage1
    },
    {
        image: SwiperImage2
    },
    {
        image: SwiperImage1
    },
    {
        image: SwiperImage1
    }

]

export default function Apartment() {

    return (
        <div className={"pt-[80px] select-none relative"}>
            <Swiper
                modules={[Navigation, Pagination, A11y, Autoplay, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{clickable: true}}
                speed={1000}
                autoplay={true}
            >
                {
                    swiperData.map((el: any, i: number) => (
                        <SwiperSlide key={i}>
                            <Image src={el.image} alt={"swiperImage"}
                                   className={"overflow-hidden object-cover max-sm:h-[500px] h-full w-full"}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div>
                <Wrapper>
                    <div className={"absolute max-sm:top-[250px] top-[350px] z-[99] flex flex-col gap-[30px]"}>
                        <div className={"text-white font-bold text-[60px] max-sm:text-[32px]"}>Union</div>
                        <div className={"grid grid-cols-2 gap-[20px] text-white"}>
                            <div>
                                <div className={"font-bold sm:text-[18px]"}>Сквер А.Тимура</div>
                                <p className={"text-[12px] sm:text-[14px]"}>5 мин. на авто</p>
                            </div>
                            <div className={"sm:ml-[30px]"}>
                                <div className={"font-bold sm:text-[18px]"}>3 парка 15Га</div>
                                <p className={"text-[12px] sm:text-[14px]"}>в шаговой доступности</p>
                            </div>
                            <div>
                                <div className={"font-bold sm:text-[18px]"}>Пешеходная набережная</div>
                                <p className={"text-[12px] sm:text-[14px]"}>10 км</p>
                            </div>
                            <div className={"sm:ml-[30px]"}>
                                <div className={"font-bold sm:text-[18px]"}>4 жилые башни</div>
                                <p className={"text-[12px] sm:text-[14px]"}>336 квартир</p>
                            </div>
                        </div>
                        <div className={"flex items-center gap-[25px] mt-[20px]"}>
                            <button
                                className={"text-white bg-[#474796] transition-all duration-300 hover:transition-all hover:duration-300 hover:bg-[#474796] rounded-[5px] py-[8px] px-[25px] sm:py-[1.6vh] sm:px-[4vh] font-medium border-none flex items-center justify-center text-[14px]"}>
                                Оставить заявку
                            </button>
                            <button
                                className={"text-[#474796] bg-white rounded-[5px] py-[8px] px-[25px] sm:py-[1.6vh] sm:px-[4vh] font-medium border-none flex items-center justify-center gap-[10px] text-[14px]"}>
                                <FontAwesomeIcon icon={faPhone}/>
                                <div>Позвонить</div>
                            </button>
                        </div>
                    </div>
                    <div className={"degree"}>
                        <Image src={Degree} alt={"Degree"} className={"p-[15px]"}/>
                    </div>
                </Wrapper>
            </div>
        </div>
    )
}