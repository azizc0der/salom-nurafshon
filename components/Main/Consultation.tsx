import Wrapper from "@/components/UI/Wrapper";

export default function Consultation() {
    return (
        <div className={"py-[30px] sm:pt-[50px] sm:pb-[100px]"}>
            <Wrapper>
                <h2 className={"text-[20px] sm:text-[22px] font-bold"}>
                    Bepul konsultatsiya
                </h2>
                <div className={"grid grid-cols-1 sm:grid-cols-5 gap-[20px] mt-[25px]"}>
                    <div className={"sm:col-span-2"}>
                        <form className={'flex flex-col gap-[25px] border border-[#f9f8f6] bg-[#f9f8f6] p-[30px] rounded-[15px]'}>
                            <div className={"flex justify-between items-center gap-[25px]"}>
                                <div className={"w-full flex flex-col gap-[25px]"}>
                                    <input
                                        className={"text-[14px] w-full h-[45px] pl-[15px] rounded-[7px] border-transparent bg-white focus:outline-0 focus:border-transparent focus:transition-all focus:duration-500"}
                                        type="text" placeholder="Ismingiz"/>
                                    <input
                                        className={"text-[14px] w-full h-[45px] pl-[15px] rounded-[7px] border-transparent bg-white focus:outline-0 focus:border-transparent focus:transition-all focus:duration-500"}
                                        type="text" placeholder="Telefon raqamingiz"/>
                                </div>
                            </div>
                            <textarea
                                placeholder="Xabar yozing"
                                className={"text-[14px] w-full h-[100px] pl-[15px] pt-[15px] rounded-[7px] border-transparent bg-white focus:outline-0 focus:border-transparent focus:transition-all focus:duration-500"}
                            ></textarea>
                            <button
                                className={"w-full bg-[#474796] hover:bg-[#175BCD] transition-all duration-300 hover:transition-all hover:duration-300 text-white text-[14px] h-[45px] rounded-[7px] font-bold"}>
                                Yuborish
                            </button>
                        </form>
                    </div>
                    <div className={"sm:col-span-2 border border-[#474796] rounded-[15px] p-[30px] flex flex-col gap-[20px]"}>
                        <div className={"flex flex-col gap-[5px]"}>
                            <p className={"text-[12px] font-medium"}>Ipoteka krediti miqdori</p>
                            <div className={"text-[20px] text-[#474796] font-bold"}>{"127 500 000 so'm"}</div>
                            <p className={"text-[12px] text-[#aaa]"}>{"Kreditning maksimal mmiqdori 416 500 000 so'mni tashkil etadi, agar undan oshib ketgan bo'lsa, dastlabki to'lov avtomatik ravishda oshiriladi."}</p>
                        </div>
                        <div className={"flex flex-col gap-[5px]"}>
                            <p className={"text-[12px] font-medium"}>{"Birlamchi to'lov"}</p>
                            <div className={"text-[20px] text-[#474796] font-bold"}>{"22 500 000 so'm"}</div>
                        </div>
                        <div className={"flex flex-col gap-[5px]"}>
                            <p className={"text-[12px] font-medium"}>{"Oylik to'lov"}</p>
                            <div className={"text-[20px] text-[#474796] font-bold"}>{"2 166 001 so'm"}</div>
                        </div>

                        <div className={"mt-[10px] text-[12px] text-[#aaa]"}>{"Tijorat ipotekani qanday olish mumkin, iltimos, telefon orqali savdo bo'limiga murojat qiling"} <b className={"font-bold text-[#474796]"}>78 113-07-59</b></div>
                    </div>
                    <div className={"flex flex-col gap-[20px]"}>
                        <div
                            className={"bg-[#f9f9f9] rounded-tl-[15px] rounded-br-[15px] p-[30px] sm:p-[15px] h-[180px] sm:h-[33%] flex flex-col justify-between"}>
                            <div className={"text-[14px] sm:text-[12px] font-medium"}>Ipoteka haqida eng koʻp beriladigan savollar</div>
                            <button
                                className={"text-[14px] sm:text-[12px] font-medium py-[8px] sm:py-[4px] w-full bg-[#474796] hover:bg-[#175BCD] transition-all duration-300 hover:transition-all hover:duration-300 text-white rounded-[30px]"}>Qarang
                            </button>
                        </div>
                        <div
                            className={"bg-[#f9f9f9] rounded-tl-[15px] rounded-br-[15px] p-[30px] sm:p-[15px] h-[180px] sm:h-[33%] flex flex-col justify-between"}>
                            <div className={"text-[14px] sm:text-[12px] font-medium"}>Ipoteka haqida eng koʻp beriladigan savollar</div>
                            <button
                                className={"text-[14px] sm:text-[12px] font-medium py-[8px] sm:py-[4px] w-full bg-[#474796] hover:bg-[#175BCD] transition-all duration-300 hover:transition-all hover:duration-300 text-white rounded-[30px]"}>Qarang
                            </button>
                        </div>
                        <div
                            className={"bg-[#f9f9f9] rounded-tl-[15px] rounded-br-[15px] p-[30px] sm:p-[15px] h-[180px] sm:h-[33%] flex flex-col justify-between"}>
                            <div className={"text-[14px] sm:text-[12px] font-medium"}>Ipoteka haqida eng koʻp beriladigan savollar</div>
                            <button
                                className={"text-[14px] sm:text-[12px] font-medium py-[8px] sm:py-[4px] w-full bg-[#474796] hover:bg-[#175BCD] transition-all duration-300 hover:transition-all hover:duration-300 text-white rounded-[30px]"}>Qarang
                            </button>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}