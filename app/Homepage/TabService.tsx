'use client';
import React, { useState, useEffect } from 'react'
import Slider from 'react-slick';
import { ProductSlide } from '../components/SlideShow';
import { setProd } from '../components/config';
import { prodList } from '../components/content';
import { BellIc, RightIc } from '../components/icon';


interface propsTypes {
    props: propsType[];
}

interface propsType {
    id: number,
    img: string,
    title: string,
    descript: any
}

const TabService: React.FC<propsTypes> = ({ props }: propsTypes) => {

    const [tabSelectId, setTabSelectId] = useState(0);

    const [selectedTab, setSelectedTab] = useState(
        props[0].descript
    );

    useEffect(() => {
        setSelectedTab(props[tabSelectId].descript)
    }, [tabSelectId]);

    return (
        <>
            {/* LIST LIEU TRINH */}
            <div className='flex w-full h-[10%] items-center justify-center select-none
                            xs:mt-5 md:mt-10
                            sm:pl-[15%] sm:pr-[15%]
                            md:pl-[15%] md:pr-[15%]
                            xl:pl-[20%] xl:pr-[20%]
                            2xl:pl-[30%] 2xl:pr-[30%]'>
                <ul className='flex h-full w-full items-center justify-center'>
                    {props.map((item) => (
                        <li key={item.id} onClick={() => { setTabSelectId(item.id) }}
                            className={`${item.id === tabSelectId && `border-2 border-pink-200 font-bold `} 
                            cursor-pointer grid  text-center content-center place-items-center w-1/3 h-fit
                            hover:underline hover:text-pink-400 xs:p-2 lg:p-5 group `}>
                            <img src={item.img} className='flex xs:w-10 xs:h-10 lg:w-20 lg:h-20 mb-2 cursor-pointer' />
                            <span className={`font-about border-none bg-transparent xs:text-[13px] group-hover:font-bold lg:text-lg hover:underline hover:text-pink-400 cursor-pointer 
                                    ${item.id === tabSelectId && `text-pink-400 underline`} `}>
                                {item.title}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* CONTENT LIEU TRINH */}
            <div className='flex-grow w-full h-[90%] 
                            sm:pl-[15%] sm:pr-[15%]
                '>
                <div className='flex w-full h-fit mt-5 text-center'>
                    <span className='fontSzCont'>{selectedTab}</span>
                </div>

                {/* button */}
                <div className='flex-grow w-full h-full mt-5'>
                    <div className='flex justify-center space-x-5'>
                        <div className='flex justify-center group'>
                            <button className="btn w-48 font-about hover:bg-pink-600 group-hover:text-white hover:font-bold bg-pink-200 text-pink-600 ">
                                ĐẶT LỊCH
                                <BellIc />
                            </button>
                        </div>
                        <div className='flex justify-center group'>
                            <button className='btn w-48 font-about group-hover:text-white hover:bg-gray-500 hover:outline-none hover:font-bold bg-gray-300'>
                                XEM CHI TIẾT
                                <RightIc />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TabService