import Wrapper from "../UI/Wrapper";
import Image from "next/image";
import image from "@/assets/images/union-3.jpg"

export default function ApartmentInformation() {
    return (
        <div className={"pt-[50px] sm:pt-[100px]"}>
            <Wrapper>
                <div className={"flex max-sm:flex-col justify-between gap-[20px] sm:gap-[50px]"}>
                    <div className={"sm:hidden text-[30px] font-bold"}>
                        Union
                    </div>
                    <Image src={image} alt={"img"} className={"rounded-[5px] w-[650px] h-[350px] object-cover"}/>
                    <div className={"flex flex-col gap-[30px] text-[14px] font-medium"}>
                        <div className={"max-sm:hidden text-[30px] font-bold"}>
                            Union
                        </div>
                        <p className={""}>
                            Дом имеет свой приватный, закрытый двор, с несколькими зонами отдыха для взрослых и детей.
                            Отдельно предусмотрено помещение для консьержа и охраны. Из окон квартир открывается вид на
                            эксклюзивный ландшафтный двор-парк общей площадью более 1 Га, с прогулочными аллеями,
                            водными
                            объектами и летним кинотеатром.
                        </p>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}