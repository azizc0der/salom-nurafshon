"use client"

/**
 * @author Azizkhuja Saidrahmonov
 */


import Logo from "@/assets/images/salom-nurafshon-logo.svg"
import Image from "next/image";
import Wrapper from "@/components/UI/Wrapper";
import FlagRu from "@/assets/images/ru.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {faBars, faTimes, faPhoneVolume} from "@fortawesome/free-solid-svg-icons";
import DrawerUI from "@/components/UI/StyledDrawer"
import {useState} from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className={"border-b fixed w-full bg-white z-[999]"}>
            <Wrapper>
                <div className={"h-[80px] flex items-center justify-between"}>
                    <div className={"cursor-pointer"}>
                        <Image src={Logo} alt={"Logo"} className={"w-[150px]"}/>
                    </div>
                    <ul className={"hidden sm:flex items-center gap-[25px] font-medium text-[12px]"}>
                        <li>
                            <a href={"#"} className={"hover:text-[#175BCD]"}>Bosh sahifa</a>
                        </li>
                        <li>
                            <a href={"#"} className={"hover:text-[#175BCD]"}>Turar joy majmualari</a>
                        </li>
                        <li>
                            <a href={"#"} className={"hover:text-[#175BCD]"}>Konsultatsiya</a>
                        </li>
                        <li>
                            <a href={"#"} className={"hover:text-[#175BCD]"}>Kontaktlar</a>
                        </li>
                    </ul>
                    <div className={"hidden sm:flex items-center font-medium gap-[25px]"}>
                        <a href={"tel:+998781130354"}
                           className={"font-bold relative text-[14px] phoneNumberHoverEffect"}>78 113-03-54</a>
                        <button
                            className={"border transition-all duration-300 rounded-[5px] text-[12px] px-[12px] py-[6px] hover:border-[#000] hover:transition-all hover:duration-300"}>
                            Kirish
                        </button>
                        <div className={"flex items-center gap-[5px] hover:cursor-pointer"}>
                            <Image src={FlagRu} alt={"Flag"}/>
                            <p className={"text-[14px]"}>RU</p>
                        </div>
                        <FontAwesomeIcon icon={faHeart} size={"sm"} className={"cursor-pointer"}/>
                    </div>
                    <div className={"sm:hidden select-none outline-0"}>
                        <FontAwesomeIcon icon={faBars} color={"#474796"} size={"xl"} onClick={() => setOpen(true)}/>
                        <DrawerUI open={open} setOpen={setOpen} onClose={() => setOpen(false)}>
                            <div className="h-[80px] flex items-center justify-end pr-[15px]">
                                <FontAwesomeIcon icon={faTimes} size={'xl'} color={'white'} onClick={() => setOpen(false)}/>
                            </div>
                            <div className={'px-5 flex flex-col gap-[100px] my-5 text-white'}>
                                <ul className={"flex flex-col items-center gap-[25px] font-medium"}>
                                    <li>
                                        <a href={"#"}>Bosh sahifa</a>
                                    </li>
                                    <li>
                                        <a href={"#"}>Turar joy majmualari</a>
                                    </li>
                                    <li>
                                        <a href={"#"}>Konsultatsiya</a>
                                    </li>
                                    <li>
                                        <a href={"#"}>Kontaktlar</a>
                                    </li>
                                </ul>
                                <div className={"flex flex-col items-center justify-center font-medium gap-[25px]"}>
                                    <a href={"tel:+998781130354"}
                                       className={"flex items-center gap-[10px] font-bold relative"}>
                                        <FontAwesomeIcon icon={faPhoneVolume} size={"xl"}/>
                                        78 113-03-54</a>
                                    <div className={"flex items-center gap-[5px] hover:cursor-pointer"}>
                                        <Image src={FlagRu} alt={"Flag"}/>
                                        <p className={"text-[14px]"}>RU</p>
                                    </div>
                                </div>
                            </div>
                        </DrawerUI>
                    </div>
                </div>
            </Wrapper>
        </header>
    )
}