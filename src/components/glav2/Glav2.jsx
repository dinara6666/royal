import React from 'react';
import img1 from '../../assets/img_1.png';
import img2 from '../../assets/img_2.png';
import t1 from '../../assets/t1.svg';
import cl1 from '../../assets/cl1.svg';

const Glav2 = () => { return (
    <div className={"container relative bottom-[350px]"}>
        <div className={"absolute "}>
            <p className={" text-[gray] mt-[220px] text-[20px] ml-[70px] font-[Florentia] font-light italic text-[18px] leading-[33px] tracking-[0%]font-[Florentia]" +
                " font-light italic text-[18px] leading-[33px] tracking-[0%]  relative  top-[10px] "}>О компании</p>
            <img className={"w-[270px]  ml-[70px] mb-[10px]"} src={img1} alt=""/>

            <div className={"flex mt-[60px] "}>
                <img className={" absolute left-[50px] bottom-[430px] "} src={t1} alt=""/>
                <p className={'font-gilroy text-base text-gray-700 leading-relaxed ml-[70px]'}><span
                    className={'ml-[55px]'}> OYAL  </span>- строительная компания, которая <br/> сдает свои объекты
                    в эксплуатацию в
                    обещанные <br/> сроки.<br/> <br/> Наши объекты строятся в 5-минутной ходьбе от <br/>
                    парково-прогулочных зон, основных объектов <br/> соцбыта с удобной транспортной развязкой.</p>
            </div>

            <img className={"ml-[100px] mt-[100px]"} src={cl1} alt=""/>
        </div>

        <div className={" absolute ml-[540px]  "}>

            <p className="absolute text-green-500  left-[45px] top-[30px] text-17xl text-[39px] mr-[200px] right-1/5 leading-loose top-[50px] relative">
                <span className={"text-[rgba(1,102,94,1)] ml-[120px] "}> ДЛЯ НАС СТРОИТЕЛЬСТВО</span>— ЭТО <br/> ИСКУССТВО
                СОЗДАВАТЬ НАДЁЖНЫЕ, <br/>
                ФУНКЦИОНАЛЬНЫЕ И <br/>ВДОХНОВЛЯЮЩИЕ ПРОСТРАНСТВА
            </p>
            <img className={"w-[600px] ml-[140px]"} src={img2} alt=""/>
        </div>

    </div>
);
};

export default Glav2;
