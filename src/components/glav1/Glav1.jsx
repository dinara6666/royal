import React from 'react';
import img from '../../assets/img.png';
import tema1 from '../../assets/tema1.svg';
import logo from '../../assets/logo.svg';
import bur from '../../assets/bur.svg';
import plan1 from '../../assets/plan1.svg';
import trel from '../../assets/trel.svg';

const Glav1 = () => {
    return (
        <div className="relative container">
            <img className=" absolute w-[1500px] object-cover -z-10" src={img} alt=""/>
            <div className="relative flex items-center justify-between px-[50px] pt-[20px] text-white">
                <div className="flex items-center left-[50px] gap-[50px]">
                    <img src={tema1} alt=""/>
                    <p className={"text-[white]"}>+996 556 111 444</p>

                    <div className={"flex gap-[10px]"}>
                        <img src={plan1} alt=""/>
                        <p className={"text-[white] font-[Gilroy] font-normal text-[14px] leading-[100%] tracking-[0%]"}>Русский</p>
                        <img src={trel} alt=""/>

                    </div>
                </div>

                <div className="flex items-center gap-[20px]">
                    <p className={"text-[white] font-[Gilroy] font-normal text-[14px] leading-[100%] tracking-[0%]"}>Квартиры
                        и объекты</p>
                    <img src={bur} alt=""/>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <img src={logo} alt=""/>
                </div>
            </div>


            <div className="relative bottom-[240px] left-[80px]">
                <p className=" royal-text  text-[white] text-[400px] leading-none font-bold tracking-wider">
                    ROYAL
                </p>
            </div>
        </div>
    );
};

export default Glav1