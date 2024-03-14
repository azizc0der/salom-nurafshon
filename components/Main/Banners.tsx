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
import Wrapper from "@/components/UI/Wrapper";

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

export default function Banners() {

    return (
        <div className={"pt-[100px] select-none"}>
            <Wrapper>
                <Swiper
                    modules={[Navigation, Pagination, A11y, Autoplay, EffectFade]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    pagination={{clickable: true}}
                    speed={7000}
                    className={"rounded-[15px]"}
                    autoplay={true}
                >
                    {
                        swiperData.map((el: any, i: number) => (
                            <SwiperSlide key={i}>
                                <Image src={el.image} alt={"swiperImage"}
                                       className={"overflow-hidden object-cover h-[500px] rounded-[15px]"}/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </Wrapper>
        </div>
    )
}