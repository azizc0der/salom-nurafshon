import Wrapper from "@/components/UI/Wrapper";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faInstagramSquare,
    faSquareFacebook,
    faTelegramPlane,
    faYoutubeSquare
} from "@fortawesome/free-brands-svg-icons";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Footer() {
    return (
        <div className={"bg-[#f9f8f6]"}>
            <Wrapper>
                <div className={""}>
                    <div className={"py-[25px] sm:py-[50px] grid grid-cols-2 sm:grid-cols-4 place-items-center sm:border-b"}>
                        <a href={"tel:+998781130354"}
                           className={"font-bold relative text-[20px] sm:text-[24px] phoneNumberHoverEffect"}>78
                            113-03-54</a>
                        <button
                            className={"border border-[#000] rounded-[5px] text-[12px] px-[20px] py-[10px]"}>
                            Перезвоните мне
                        </button>
                        <p className={"hidden sm:block text-[14px]"}>
                            Есть жалобы и предложения?
                        </p>
                        <button
                            className={"hidden sm:block w-full bg-[#474796] hover:bg-[#175BCD] transition-all duration-300 hover:transition-all hover:duration-300 text-white text-[14px] h-[40px] rounded-[7px] font-bold"}>
                            Service
                        </button>
                    </div>
                    <div className={"hidden py-[50px] sm:grid sm:grid-cols-5 gap-[40px] sm:gap-[50px]"}>
                        <div className={"flex flex-col"}>
                            <div className={"text-[14px] font-bold mb-[15px]"}>Жилые комплексы</div>
                            <div className={"flex flex-col gap-[10px] sm:gap-[15px]"}>
                                <a href={"#"} className={"hover:text-[#175BCD] text-[12px]"}>Union</a>
                                <a href={"#"}
                                   className={"hover:text-[#175BCD] text-[12px]"}>INFINITY</a>
                                <a href={"#"}
                                   className={"hover:text-[#175BCD] text-[12px]"}>{"O`Z Zamin"}</a>
                                <a href={"#"}
                                   className={"hover:text-[#175BCD] text-[12px]"}>{"O’Z Mahal"}</a>
                                <a
                                    href={"#"}
                                    className={"hover:text-[#175BCD] text-[12px]"}>{"O`Z Makon"}</a>
                                <a href={"#"}
                                   className={"hover:text-[#175BCD] text-[12px]"}>{"Assalom Bog’lar"}</a>
                                <a
                                    href={"#"}
                                    className={"hover:text-[#175BCD] text-[12px]"}>{"Assalom Jomiy"}</a>
                                <a href={"#"}
                                   className={"hover:text-[#175BCD] text-[12px]"}>{"Assalom sohil"}</a>
                                <a
                                    href={"#"}
                                    className={"hover:text-[#175BCD] text-[12px]"}>{"Assalom Havo"}</a>
                            </div>
                        </div>
                        <div className={"flex flex-col"}>
                            <div className={"text-[14px] font-bold mb-[15px]"}>Акции</div>
                            <div className={"flex flex-col gap-[10px] sm:gap-[15px]"}>
                                <a href={"#"} className={"hover:text-[#175BCD] text-[12px]"}>Купи коммерческую
                                    недвижимость и получи Сертификат на семейный отдых в Amirsoy Mountain Resort.</a>
                                <a href={"#"}
                                   className={"hover:text-[#175BCD] text-[12px]"}>Стартовали продажи во втором проекте в
                                    формате O`Z</a>
                            </div>
                        </div>
                        <div className={"flex flex-col"}>
                            <div className={"text-[14px] font-bold mb-[15px]"}>Новости</div>
                            <div className={"flex flex-col gap-[10px] sm:gap-[15px]"}>
                                <a href={"#"} className={"hover:text-[#175BCD] text-[12px]"}>Стартовали продажи в
                                    третьем проекте в формате O`Z</a>
                                <a href={"#"}
                                   className={"hover:text-[#175BCD] text-[12px]"}>В офисе продаж O’z Mahal прошло
                                    заседание клуба Маркетинговой ассоциации Узбекистана</a>
                                <a href={"#"} className={"hover:text-[#175BCD] text-[12px]"}>«Golden House» превращает
                                    Новогодние праздники в яркое событие для своих ЖК!</a>
                                <a href={"#"}
                                   className={"hover:text-[#175BCD] text-[12px]"}>Компания Golden House провела эко-день
                                    в ЖК “Махтумкули-2”</a>
                                <a href={"#"}
                                   className={"hover:text-[#175BCD] text-[12px]"}>Cтарт продаж в новом жилом комплексе
                                    “HARIZMA” от Golden House</a>

                            </div>
                        </div>
                        <div className={"flex flex-col"}>
                            <div className={"text-[14px] font-bold mb-[15px]"}>Соц.сети</div>
                            <div className={"grid grid-cols-2 sm:flex flex-col gap-[15px]"}>
                                <a className={"flex items-center gap-[10px]"} href="https://www.facebook.com"
                                   aria-label="Facebook">
                                    <FontAwesomeIcon icon={faSquareFacebook} size={"lg"}/>
                                    <span className={"text-[12px]"}>Facebook</span>
                                </a>
                                <a className={"flex items-center gap-[10px]"} href="https://www.instagram.com"
                                   aria-label="Instagram">
                                    <FontAwesomeIcon icon={faInstagramSquare} size={"lg"}/>
                                    <span className={"text-[12px]"}>Instagram</span>
                                </a>
                                <a className={"flex items-center gap-[10px]"} href="https://www.youtube.com"
                                   aria-label="YouTube">
                                    <FontAwesomeIcon icon={faYoutubeSquare} size={"lg"}/>
                                    <span className={"text-[12px]"}>YouTube</span>
                                </a>
                                <a className={"flex items-center gap-[10px]"} href="https://www.telegram.org"
                                   aria-label="Telegram">
                                    <FontAwesomeIcon icon={faTelegramPlane} size={"lg"}/>
                                    <span className={"text-[12px]"}>Telegram</span>
                                </a>
                            </div>
                        </div>
                        <div className={"flex flex-col"}>
                            <div className={"text-[14px] font-bold mb-[15px]"}>Контакты</div>
                            <div className={"flex flex-col gap-[15px]"}>
                                <div>
                                    <div className={"text-[13px] font-bold"}>Мы расположены по адресу:</div>
                                    <p className={"text-[12px]"}>Яшнабадский район, ул. Истикбол 45-1. Офис продаж
                                        Infinity</p>
                                </div>
                                <div>
                                    <div className={"text-[13px] font-bold"}>Ориентир:</div>
                                    <p className={"text-[12px]"}>Бывший вин завод. Жилой комплекс “Infinity”</p>
                                </div>
                                <div>
                                    <div className={"text-[13px] font-bold"}>Время работы:</div>
                                    <p className={"text-[12px]"}>
                                        Отдел продаж: <br/>
                                        Пн-Пт: с 9:00 до 19:00 <br/>
                                        Сб-Вс: с 10:00 до 18:00
                                    </p>
                                    <br/>
                                    <p className={"text-[12px]"}>
                                        Коммерческий отдел: <br/>
                                        Пн-Пт: с 9:00 до 19:00 <br/>
                                        Сб-Вс: с 10:00 до 18:00
                                    </p>
                                </div>
                                <div>
                                    <div className={"text-[13px] font-bold"}>По вопросам трудоустройства:</div>
                                    <p className={"text-[12px]"}>
                                        +998 (77) 701-72-20
                                    </p>
                                    <br/>
                                    <div className={"flex items-center gap-[10px] text-[12px]"}>
                                        Чат-бот для соискателе
                                        <FontAwesomeIcon icon={faTelegramPlane} size={"2xl"}/>
                                    </div>
                                    <br/>
                                    <p className={"text-[12px]"}>
                                        job@gh.u
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"sm:hidden"}>
                        <Accordion sx={{
                            margin: "0px!important",
                            backgroundColor: "transparent",
                            boxShadow: "none",
                            borderTop: "1px solid #aaa!important",
                            borderTopLeftRadius: "0px!important",
                            borderTopRightRadius: "0px!important"
                        }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon fontSize={"small"}/>}
                                aria-controls="panel1-content"
                                id="panel1-header"
                                sx={{fontSize: "14px", fontWeight: "bold", margin: "0px", border: "transparent"}}
                            >
                                Жилые комплексы
                            </AccordionSummary>
                            <AccordionDetails sx={{border: "transparent", paddingBottom: "20px!important"}}>
                                <div className={"grid grid-cols-2 gap-[10px]"}>
                                    <a href={"#"} className={"hover:text-[#175BCD] text-[12px]"}>Union</a>
                                    <a href={"#"}
                                       className={"hover:text-[#175BCD] text-[12px]"}>INFINITY</a>
                                    <a href={"#"}
                                       className={"hover:text-[#175BCD] text-[12px]"}>{"O`Z Zamin"}</a>
                                    <a href={"#"}
                                       className={"hover:text-[#175BCD] text-[12px]"}>{"O’Z Mahal"}</a>
                                    <a
                                        href={"#"}
                                        className={"hover:text-[#175BCD] text-[12px]"}>{"O`Z Makon"}</a>
                                    <a href={"#"}
                                       className={"hover:text-[#175BCD] text-[12px]"}>{"Assalom Bog’lar"}</a>
                                    <a
                                        href={"#"}
                                        className={"hover:text-[#175BCD] text-[12px]"}>{"Assalom Jomiy"}</a>
                                    <a href={"#"}
                                       className={"hover:text-[#175BCD] text-[12px]"}>{"Assalom sohil"}</a>
                                    <a
                                        href={"#"}
                                        className={"hover:text-[#175BCD] text-[12px]"}>{"Assalom Havo"}</a>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{
                            margin: "0px!important",
                            backgroundColor: "transparent",
                            boxShadow: "none",
                            borderTop: "1px solid #aaa!important",
                            borderTopLeftRadius: "0px!important",
                            borderTopRightRadius: "0px!important"
                        }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon fontSize={"small"}/>}
                                aria-controls="panel1-content"
                                id="panel1-header"
                                sx={{fontSize: "14px", fontWeight: "bold"}}
                            >
                                Акции
                            </AccordionSummary>
                            <AccordionDetails sx={{border: "transparent", paddingBottom: "20px!important"}}>
                                <div className={"grid grid-cols-2 gap-[10px]"}>
                                    <a href={"#"} className={"hover:text-[#175BCD] text-[12px]"}>Купи коммерческую
                                        недвижимость и получи Сертификат на семейный отдых в Amirsoy Mountain
                                        Resort.</a>
                                    <a href={"#"}
                                       className={"hover:text-[#175BCD] text-[12px]"}>Стартовали продажи во втором
                                        проекте в
                                        формате O`Z</a>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{
                            margin: "0px!important",
                            backgroundColor: "transparent",
                            boxShadow: "none",
                            borderTop: "1px solid #aaa!important",
                            borderTopLeftRadius: "0px!important",
                            borderTopRightRadius: "0px!important"
                        }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon fontSize={"small"}/>}
                                aria-controls="panel1-content"
                                id="panel1-header"
                                sx={{fontSize: "14px", fontWeight: "bold"}}
                            >
                                Новости
                            </AccordionSummary>
                            <AccordionDetails sx={{border: "transparent", paddingBottom: "20px!important"}}>
                                <div className={"grid grid-cols-2 gap-[10px]"}>
                                    <a href={"#"} className={"hover:text-[#175BCD] text-[12px]"}>Стартовали продажи в
                                        третьем проекте в формате O`Z</a>
                                    <a href={"#"}
                                       className={"hover:text-[#175BCD] text-[12px]"}>В офисе продаж O’z Mahal прошло
                                        заседание клуба Маркетинговой ассоциации Узбекистана</a>
                                    <a href={"#"} className={"hover:text-[#175BCD] text-[12px]"}>«Golden House»
                                        превращает
                                        Новогодние праздники в яркое событие для своих ЖК!</a>
                                    <a href={"#"}
                                       className={"hover:text-[#175BCD] text-[12px]"}>Компания Golden House провела
                                        эко-день
                                        в ЖК “Махтумкули-2”</a>
                                    <a href={"#"}
                                       className={"hover:text-[#175BCD] text-[12px]"}>Cтарт продаж в новом жилом
                                        комплексе
                                        “HARIZMA” от Golden House</a>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{
                            margin: "0px!important",
                            backgroundColor: "transparent",
                            boxShadow: "none",
                            borderTop: "1px solid #aaa!important",
                            borderTopLeftRadius: "0px!important",
                            borderTopRightRadius: "0px!important"
                        }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon fontSize={"small"}/>}
                                aria-controls="panel1-content"
                                id="panel1-header"
                                sx={{fontSize: "14px", fontWeight: "bold"}}
                            >
                                Соц.сети
                            </AccordionSummary>
                            <AccordionDetails sx={{border: "transparent", paddingBottom: "20px!important"}}>
                                <div className={"grid grid-cols-2 gap-[10px]"}>
                                    <a className={"flex items-center gap-[10px]"} href="https://www.facebook.com"
                                       aria-label="Facebook">
                                        <FontAwesomeIcon icon={faSquareFacebook} size={"lg"}/>
                                        <span className={"text-[12px]"}>Facebook</span>
                                    </a>
                                    <a className={"flex items-center gap-[10px]"} href="https://www.instagram.com"
                                       aria-label="Instagram">
                                        <FontAwesomeIcon icon={faInstagramSquare} size={"lg"}/>
                                        <span className={"text-[12px]"}>Instagram</span>
                                    </a>
                                    <a className={"flex items-center gap-[10px]"} href="https://www.youtube.com"
                                       aria-label="YouTube">
                                        <FontAwesomeIcon icon={faYoutubeSquare} size={"lg"}/>
                                        <span className={"text-[12px]"}>YouTube</span>
                                    </a>
                                    <a className={"flex items-center gap-[10px]"} href="https://www.telegram.org"
                                       aria-label="Telegram">
                                        <FontAwesomeIcon icon={faTelegramPlane} size={"lg"}/>
                                        <span className={"text-[12px]"}>Telegram</span>
                                    </a>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{
                            margin: "0px!important",
                            backgroundColor: "transparent",
                            boxShadow: "none",
                            borderTop: "1px solid #aaa!important",
                            borderBottom: "1px solid #aaa!important",
                            borderTopLeftRadius: "0px!important",
                            borderTopRightRadius: "0px!important"
                        }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon fontSize={"small"}/>}
                                aria-controls="panel1-content"
                                id="panel1-header"
                                sx={{fontSize: "14px", fontWeight: "bold"}}
                            >
                                Контакты
                            </AccordionSummary>
                            <AccordionDetails sx={{border: "transparent", paddingBottom: "20px!important"}}>
                                <div className={"grid gap-[10px]"}>
                                    <div>
                                        <div className={"text-[13px] font-bold"}>Мы расположены по адресу:</div>
                                        <p className={"text-[12px]"}>Яшнабадский район, ул. Истикбол 45-1. Офис продаж
                                            Infinity</p>
                                    </div>
                                    <div>
                                        <div className={"text-[13px] font-bold"}>Ориентир:</div>
                                        <p className={"text-[12px]"}>Бывший вин завод. Жилой комплекс “Infinity”</p>
                                    </div>
                                    <div>
                                        <div className={"text-[13px] font-bold"}>Время работы:</div>
                                        <p className={"text-[12px]"}>
                                            Отдел продаж: <br/>
                                            Пн-Пт: с 9:00 до 19:00 <br/>
                                            Сб-Вс: с 10:00 до 18:00
                                        </p>
                                        <br/>
                                        <p className={"text-[12px]"}>
                                            Коммерческий отдел: <br/>
                                            Пн-Пт: с 9:00 до 19:00 <br/>
                                            Сб-Вс: с 10:00 до 18:00
                                        </p>
                                    </div>
                                    <div>
                                        <div className={"text-[13px] font-bold"}>По вопросам трудоустройства:</div>
                                        <p className={"text-[12px]"}>
                                            +998 (77) 701-72-20
                                        </p>
                                        <br/>
                                        <div className={"flex items-center gap-[10px] text-[12px]"}>
                                            Чат-бот для соискателе
                                            <FontAwesomeIcon icon={faTelegramPlane} size={"2xl"}/>
                                        </div>
                                        <br/>
                                        <p className={"text-[12px]"}>
                                            job@gh.u
                                        </p>
                                    </div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <div className={"flex flex-col py-[30px] gap-[10px]"}>
                            <p className={"sm:hidden text-[14px]"}>
                                Есть жалобы и предложения?
                            </p>
                            <button
                                className={"sm:hidden w-full bg-[#474796] hover:bg-[#175BCD] transition-all duration-300 hover:transition-all hover:duration-300 text-white text-[14px] h-[40px] rounded-[7px] font-bold"}>
                                Service
                            </button>
                        </div>
                    </div>
                    <div className={"pt-[25px] pb-[50px] sm:py-[50px] flex max-sm:flex-col items-center sm:items-end sm:justify-between max-sm: gap-[50px]"}>
                        <div className={"text-[10px]"}>
                            Группа компаний Golden House © 2022 ООО «Golden House Development». Информация на сайте
                            предоставлена в ознакомительных целях. Для <br/> получения более точной информации обратитесь к
                            менеджерам компании
                            <br/>
                            <br/>
                            Подробнее о получении скидки по телефону 78 113-04-60. Предложение не является публичной
                            офертой.
                        </div>
                        <div className={"text-[12px]"}>
                            Created by
                            <b>
                                {" Azizxo'ja Saidrahmonov"}
                            </b>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}