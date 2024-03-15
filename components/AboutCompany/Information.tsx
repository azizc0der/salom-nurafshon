import Wrapper from "@/components/UI/Wrapper";

export default function Information() {
    return (
        <div className={"pt-[50px]"}>
            <Wrapper>
                <div className={""}>
                    <p className={"text-[#474796] font-medium"}>О компании</p>
                    <div className={"text-[25px] font-bold"}>Golden House</div>
                    <div className={"mt-[25px] grid sm:grid-cols-2 text-[12px] gap-[20px]"}>
                        <p>Уже более 13 лет на рынке Узбекистана.
                            <br/>
                            За годы работы компания приобрела огромный опыт в девелопменте, что позволило занять одну
                            из
                            <br/>
                            лидирующих позиций на рынке недвижимости.
                            <br/>
                            На сегодняшний день компания осуществляет весь цикл девелопмента
                            реализовывая
                            <br/>
                            строительство во
                            всех сегментах рынка -жилье класса комфорт, проекты классов бизнес и премиум, <br/>
                            а также коммерческая недвижимость.
                        </p>
                        <p>
                            Развивая регион, Golden House стремится не только сохранить лидирующие позиции на рынке
                            <br/>
                            недвижимости Узбекистана, но и быть главным новатором.
                            <br/>
                            Мы всегда смотрим вперед, совершенствуемся и развиваемся, увеличивая тем самым количество
                            <br/>
                            качественных предложений на рынке жилой и коммерческой недвижимости.
                        </p>
                    </div>
                </div>
                <div className={"mt-[50px] grid grid-cols-2 sm:grid-cols-4 bg-[#f8f8f8] rounded-[10px]"}>
                    <div className={"flex flex-col gap-[10px] border-r my-[30px] mx-[36px]"}>
                        <div className={""}>
                            <span className={"font-bold text-[22px]"}>13</span>
                            <span className={"ml-[8px] text-[12px]"}>лет</span>
                        </div>
                        <p className={"text-[12px]"}>на рынке недвижимости Узбекистана.</p>
                    </div>
                    <div className={"flex flex-col gap-[10px] sm:border-r my-[30px] mx-[36px]"}>
                        <div className={""}>
                            <span className={"font-bold text-[22px]"}>13</span>
                            <span className={"ml-[8px] text-[12px]"}>лет</span>
                        </div>
                        <p className={"text-[12px]"}>на рынке недвижимости Узбекистана.</p>
                    </div>
                    <div className={"flex flex-col gap-[10px] border-r my-[30px] mx-[36px]"}>
                        <div className={""}>
                            <span className={"font-bold text-[22px]"}>13</span>
                            <span className={"ml-[8px] text-[12px]"}>лет</span>
                        </div>
                        <p className={"text-[12px]"}>на рынке недвижимости Узбекистана.</p>
                    </div>
                    <div className={"flex flex-col gap-[10px] my-[30px] mx-[36px]"}>
                        <div className={""}>
                            <span className={"font-bold text-[22px]"}>13</span>
                            <span className={"ml-[8px] text-[12px]"}>лет</span>
                        </div>
                        <p className={"text-[12px]"}>на рынке недвижимости Узбекистана.</p>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}