import React from 'react';
import img_4 from "../../assets/img_4.png"
import met1 from "../../assets/met1.svg"
import met2 from "../../assets/met2.svg"
import img_5 from "../../assets/img_5.png"
import img_6 from "../../assets/img_6.png"
import img_7 from "../../assets/img_7.png"
import img_8 from "../../assets/img_8.png"
import img10 from "../../assets/img10.svg"
import tr2 from "../../assets/tr2.svg"
import tr3 from "../../assets/tr3.svg"

const Glav3 = () => {
    return (
        <div className=" bg-[rgba(250,249,246,1)]   relative top-[1000px]">
            <div className="max-w-7xl  mx-auto px-4">
                <p className="text-[20px] container left-[1070px] relative  top-[70px]  font-[Florentia] font-light italic text-[18px] leading-[33px] tracking-[0%] text-[rgba(34,34,34,1)]">Объекты</p>
                <div className="flex justify-center">
                    <p className="text-[50px]   font-[Florentia] font-normal text-[60px] leading-[100%] tracking-[0%]">Фильтруйте.
                        Сравнивайте. <span className={" text-[rgba(1,102,94,1)]"}> Выбирайте.</span></p>
                </div>

                <div className={" container"}>
                    <div
                        className="flex p-[6px] ml-[560px] pl-[8px] pr-[12px] items-center bg-[#00665A] rounded-full px-2 py-1 w-fit">
                        <div
                            className="bg-[white] p-[12px] pl-[13px] pr-[13px] bg-[white] text-black text-sm px-3 py-1 rounded-full   font-[Gilroy] font-medium text-[16px] leading-[100%] tracking-[0%]">
                            30 объектов
                        </div>
                        <div
                            className="text-[white] pl-[26px] pr-[12px]  text-sm ml-2  font-[Gilroy] font-medium text-[16px] leading-[100%] tracking-[0%]">
                            8 Жилых домов
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-[16px] mt-[50px] rounded-[20px] ml-[100px]">
                        <button
                            className="rounded-[20px] bg-[white] font-[Gilroy] font-normal text-[16px] leading-[100%] tracking-[0%] bg-white pl-[15px] pr-[15px] p-[8px] border border-solid border-[rgba(230,230,230,1)]"
                        >
                            Все
                        </button>


                        <button
                            className="rounded-[20px] font-[Gilroy] font-normal text-[16px] leading-[100%] tracking-[0%] bg-[white] pl-[12px] pr-[12px] p-[5px] border border-solid border-gray-400  border border-solid border-[rgba(230,230,230,1)]">
                            Строящиеся
                        </button>

                        <button
                            className="rounded-[20px] font-[Gilroy] font-normal text-[16px] leading-[100%] tracking-[0%] bg-[white] pl-[12px] pr-[12px] p-[5px] border border-solid border-gray-400  border border-solid border-[rgba(230,230,230,1)]">
                            Завершенные
                        </button>

                        <button
                            className="rounded-[20px]    font-[Gilroy] font-normal text-[16px] leading-[100%] tracking-[0%] bg-[white] pl-[12px] pr-[12px] p-[5px] border border-solid border-gray-400  border border-solid border-[rgba(230,230,230,1)]">
                            На стадии завершения
                        </button>

                        <div className="w-full"></div>

                        <button
                            className="rounded-[20px] font-[Gilroy] font-normal text-[16px] leading-[100%] tracking-[0%] bg-[white] pl-[12px] pr-[12px] p-[8px] border border-solid border-gray-400  border border-solid border-[rgba(230,230,230,1)]">
                            Выберите локацию
                        </button>

                        <div className="flex flex-col items-center gap-4">
                            <button
                                className="rounded-[20px] font-[Gilroy] font-normal text-[16px] leading-[100%] tracking-[0%] bg-[white] pl-[27px] pr-[27px] p-[10px] border border-solid border-[rgba(230,230,230,1)]"
                            >
                                от 5 этажей <span className="text-[white]"> asgj</span>
                                <span className="text-[gray]"> - до </span>
                                <span> 28 этажей</span>
                            </button>

                            <img
                                src={img10}
                                alt=""
                                className="w-auto h-auto"
                            />
                        </div>


                        <button
                            className="rounded-[20px] font-[Gilroy] font-normal text-[16px] leading-[100%] tracking-[0%] bg-[white] pl-[12px] pr-[12px] p-[5px] border border-solid border-gray-400  border border-solid border-[rgba(230,230,230,1)]">
                            Квартиры
                        </button>

                        <button
                            className="rounded-[20px] font-[Gilroy] font-normal text-[16px] leading-[100%] tracking-[0%] bg-[white] pl-[12px] pr-[12px] p-[5px] border border-solid border-gray-400  border border-solid border-[rgba(230,230,230,1)]">
                            Офисы
                        </button>

                        <button
                            className="rounded-[20px] font-[Gilroy] font-normal text-[16px] leading-[100%] tracking-[0%] bg-[white] pl-[12px] pr-[12px] p-[5px] border border-solid border-gray-400  border border-solid border-[rgba(230,230,230,1)]">
                            Коттеджи
                        </button>

                        <button
                            className="rounded-[20px] font-[Gilroy] font-normal text-[16px] leading-[100%] tracking-[0%] bg-[white] pl-[12px] pr-[12px] p-[5px] border border-solid border-gray-400  border border-solid border-[rgba(230,230,230,1)]">
                            Коммерческие помещения
                        </button>
                    </div>

                </div>


            </div>


            <div className="flex gap-[18px] justify-center py-[0px]">
                <div className="p-6 bg-white w-[650px] rounded-lg shadow-lg relative">
                    <p className="font-[Florentia] font-medium text-[50px] leading-[100%] tracking-[0%] mb-[20px]">
                        Ынтымак
                    </p>

                    <div className="flex items-center gap-[15px] ">
     <span
         className="bg-[rgba(255,132,0,0.15)] text-[rgba(255,119,0,1)] font-[Gilroy] font-medium text-[14px] leading-[100%] tracking-[0%] px-[10px] py-[7px] rounded-[100px]">
  Строится
</span>


                        <span
                            className="text-gray-700 text-sm flex items-center gap-1 font-[Gilroy] font-medium text-[14px] leading-[100%] tracking-[0%]">
        <img className="mr-[5px]" src={met1} alt=""/>
Молдобасанова 8а
                        </span>

                        <span
                            className="text-gray-700 text-sm flex items-center gap-1 font-[Gilroy] font-medium text-[14px] leading-[100%] tracking-[0%]">
        <img className="mr-[5px]" src={met2} alt=""/>
        Центр отдыха
      </span>
                    </div>

                    <div className="relative">
                        <button
                            className="absolute border-[rgba(230,230,230,1)] top-[35px] left-[15px] bg-[rgba(255,255,255,0.7)] text-black font-[Florentia] font-medium text-[14px] leading-[100%] tracking-[0%] rounded-[100px] px-[16px] py-[9px] flex gap-[10px] shadow">
                            СТАРТ ПРОДАЖ
                        </button>

                        <img
                            src={img_5}
                            alt="Ынтымак"
                            className="w-full rounded-lg shadow-md mt-[20px]"
                        />
                    </div>
                </div>

                <div className="p-6 bg-white w-[650px] rounded-lg shadow-lg relative">
                    <p className="font-[Florentia] font-medium text-[50px] leading-[100%] tracking-[0%] mb-[20px]">
                        Tower
                    </p>

                    <div className="flex items-center gap-[15px] ">
      <span
          className="bg-[rgba(94,255,0,0.15)] text-[rgba(1,142,13,1)] font-[Gilroy] font-medium text-[14px] leading-[100%] tracking-[0%] px-[10px] py-[7px] rounded-[100px]">
        Завершен
      </span>

                        <span
                            className="text-gray-700 text-sm flex items-center gap-1 font-[Gilroy] font-medium text-[14px] leading-[100%] tracking-[0%]">
        <img className="mr-[5px]" src={met1} alt=""/>
        пр. Чынгыза Айтматова
      </span>

                        <span
                            className="text-gray-700 text-sm flex items-center gap-1 font-[Gilroy] font-medium text-[14px] leading-[100%] tracking-[0%]">
        <img className="mr-[5px]" src={met2} alt=""/>
        Жилой дом
      </span>
                    </div>

                    <div className="relative">
                        <button
                            className="absolute border-[rgba(230,230,230,1)] top-[35px] left-[15px] bg-[rgba(255,255,255,0.7)] text-black font-[Florentia] font-medium text-[14px] leading-[100%] tracking-[0%] rounded-[100px] px-[16px] py-[9px] flex gap-[10px] shadow">
                            СТАРТ ПРОДАЖ
                        </button>

                        <img
                            src={img_4}
                            alt="Tower"
                            className="w-full rounded-lg shadow-md mt-[20px]"
                        />
                    </div>
                </div>
            </div>


            <div className="flex gap-[18px] justify-center">
                <div className="p-6 bg-white w-[650px] rounded-lg shadow-lg relative">
                    <p className="font-[Florentia] font-medium text-[50px] leading-[100%] tracking-[0%] mb-[20px]">
                        Royal Resort
                    </p>

                    <div className="flex items-center gap-[15px] ">
 <span
     className="bg-[rgba(255,132,0,0.15)] text-[rgba(255,119,0,1)] font-[Gilroy] font-medium text-[14px] leading-[100%] tracking-[0%] px-[10px] py-[7px] rounded-[100px]">
  Строится
</span>
                        <span
                            className="text-gray-700 text-sm flex items-center gap-1 font-[Gilroy] font-medium text-[14px] leading-[100%] tracking-[0%]">
        <img className="mr-[5px]" src={met1} alt=""/>
       с. Чок-Тал Иссык-Куль
      </span>

                        <span
                            className="text-gray-700 text-sm flex items-center gap-1 font-[Gilroy] font-medium text-[14px] leading-[100%] tracking-[0%]">
        <img className="mr-[5px]" src={met2} alt=""/>
        Центр отдыха
      </span>
                    </div>

                    <div className="relative">
                        <button
                            className="absolute border-[rgba(230,230,230,1)] top-[35px] left-[15px] bg-[rgba(255,255,255,0.7)] text-black font-[Florentia] font-medium text-[14px] leading-[100%] tracking-[0%] rounded-[100px] px-[16px] py-[9px] flex gap-[10px] shadow">
                            СТАРТ ПРОДАЖ
                        </button>

                        <img
                            src={img_6}
                            alt="Ынтымак"
                            className="w-full rounded-lg shadow-md mt-[20px]"
                        />
                    </div>
                </div>
                <div className="p-6 bg-white w-[650px] rounded-lg shadow-lg relative">
                    <p className="font-[Florentia] font-medium text-[50px] leading-[100%] tracking-[0%] mb-[20px]">
                        Cambridge
                    </p>

                    <div className="flex items-center gap-[15px] ">
      <span
          className="bg-[rgba(94,255,0,0.15)] text-[rgba(1,142,13,1)] font-[Gilroy] font-medium text-[14px] leading-[100%] tracking-[0%] px-[10px] py-[7px] rounded-[100px]">
        Завершен
      </span>

                        <span
                            className="text-gray-700 text-sm flex items-center gap-1 font-[Gilroy] font-medium text-[14px] leading-[100%] tracking-[0%]">
        <img className="mr-[5px]" src={met1} alt=""/>
Малдыбаева 279
                        </span>

                        <span
                            className="text-gray-700 text-sm flex items-center gap-1 font-[Gilroy] font-medium text-[14px] leading-[100%] tracking-[0%]">
        <img className="mr-[5px]" src={met2} alt=""/>
        Жилой дом
      </span>
                    </div>

                    <div className="relative">
                        <button
                            className="absolute border-[rgba(230,230,230,1)] top-[35px] left-[15px] bg-[rgba(255,255,255,0.7)] text-black font-[Florentia] font-medium text-[14px] leading-[100%] tracking-[0%] rounded-[100px] px-[16px] py-[9px] flex gap-[10px] shadow">
                            СТАРТ ПРОДАЖ
                        </button>

                        <div className={"absolute"}>
                            <img className={" relative left-[540px] top-[70px]"} src={tr2} alt=""/>
                            <img className={" relative left-[500px] top-[50px]"} src={tr3} alt=""/>
                        </div>

                        <img
                            src={img_7}
                            alt="Tower"
                            className="w-full rounded-lg shadow-md mt-[20px]"
                        />
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-[45px]">
                <img src={img_8} alt=""/>
            </div>

        </div>
    );
};

export default Glav3;
