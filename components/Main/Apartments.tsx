// "use client"
//
// /**
//  *
//  * @author Azizkhuja Saidrahmonov
//  */
//
// import Union from "@/assets/images/union-3.jpg"
// import Wrapper from "@/components/UI/Wrapper";
// import Image from "next/image";
// import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {useRouter} from "next/navigation";
// import {useEffect, useState} from "react";
// import axios from "axios";
//
// export default function Apartments() {
//     const [apartmentsList, setApartmentsList] = useState([])
//
//     useEffect(() => {
//         axios.get("https://capmamax.pythonanywhere.com/api/apartment-list")
//             .then((res: any) => {
//                 setApartmentsList(res.data)
//                 console.log(res.data)
//             })
//             .catch((err: any) => {
//                 console.log(err)
//             })
//     }, [])
//
//     const router = useRouter()
//
//     const apartments = [
//         {
//             image: Union,
//             status: "В продаже",
//             salePrice: "180",
//             title: "Жилой комплекс",
//             name: "Union",
//             location: "Шайхантохурски",
//             price: "1,6",
//             area: "46.73",
//             areaKvMeter: "68,53"
//         },
//         {
//             image: Union,
//             status: "В продаже",
//             salePrice: "189",
//             title: "Жилой комплекс",
//             name: "Union",
//             location: "Шайхантохурски",
//             price: "1,6",
//             area: "46.73",
//             areaKvMeter: "68,53"
//         }, {
//             image: Union,
//             status: "В продаже",
//             salePrice: "180",
//             title: "Жилой комплекс",
//             name: "Union",
//             location: "Шайхантохурски",
//             price: "1,6",
//             area: "46.73",
//             areaKvMeter: "68,53"
//         }
//     ]
//
//     return (
//         <div className={"pt-[30px] sm:pt-[50px]"}>
//             <Wrapper>
//                 <div className={"font-bold text-[20px] sm:text-[22px] py-[15px]"}>Купить квартиру в Ташкенте</div>
//                 <div className={"grid grid-cols-2 sm:grid-cols-3 gap-[15px] sm:gap-[20px]"}>
//                     {
//                         apartments.map((el: any, i: number) => (
//                             <div onClick={() => router.push(`/${i}`)} key={i}
//                                  className={"apartmentCard cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 hover:transition-all hover:duration-300 rounded-[7px]"}>
//                                 <div className={"relative overflow-hidden rounded-[7px]"}>
//                                     <p className={"absolute z-[9] bg-green-500 text-white text-[14px] px-[10px] py-[2px] rounded-tl-[5px] rounded-br-[7px]"}>{el.status}</p>
//                                     <Image src={el.image} alt={el.name} objectFit={"cover"}
//                                            className={"apartmentImage h-[20vh] sm:h-[33vh] w-full object-cover rounded-[7px]"}/>
//                                     <p className={"absolute bottom-0 right-0 font-bold bg-[#474796] text-white text-[12px] sm:text-[14px] px-[10px] py-[2px] rounded-tl-[7px] rounded-br-[5px] apartmentSalePrice transition-all duration-300"}>{el.salePrice} {"mln so'm chegirma"}</p>
//                                 </div>
//                                 <p className={"text-[12px] text-gray-500 m-[10px] max-sm:mb-0"}>{el.title}</p>
//                                 <div className={"m-[10px] max-sm:mt-0"}>
//                                     <div className={"flex max-sm:flex-col sm:items-center justify-between"}>
//                                         <p className={"font-bold transition-all duration-300 apartmentName"}>
//                                             {el.name}
//                                         </p>
//                                         <p className={"max-sm:font-bold max-sm:text-[#bbb] font-medium text-[14px]"}>
//                                             от {el.price} млрд
//                                         </p>
//                                     </div>
//                                     <div className={"flex items-center justify-between"}>
//                                         <div className={"hidden sm:flex items-center gap-[5px]"}>
//                                             <FontAwesomeIcon icon={faLocationDot} size={"xs"} color={"#474796"}/>
//                                             <p className={"text-[12px]"}>{el.location}</p>
//                                         </div>
//                                         <div className={"hidden sm:block text-[12px] py-[2px] px-[10px] bg-gray-200 rounded-[5px]"}>
//                                             от {el.area} до {el.areaKvMeter} м<sup>2</sup>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))
//                     }
//                 </div>
//             </Wrapper>
//         </div>
//     )
// }