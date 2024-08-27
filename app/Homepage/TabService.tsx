'use client';
import React, { useState, useEffect } from 'react'
import Slider from 'react-slick';
import { ProductSlide } from '../components/SlideShow';
import { setProd } from '../components/config';
import { prodList } from '../components/content';


interface propsTypes {
    props: propsType[];
}

interface propsType {
    id: number,
    img: string,
    title: string,
    content: {
        imgItem: string,
        descript: any
    }
}

const TabService: React.FC<propsTypes> = ({ props }: propsTypes) => {

    const [tabSelectId, setTabSelectId] = useState(0);

    const [selectedTab, setSelectedTab] = useState({
        imgItem: props[0].content.imgItem,
        descript: props[0].content.descript,
    });

    useEffect(() => {
        setSelectedTab({
            imgItem: props[tabSelectId].content.imgItem,
            descript: props[tabSelectId].content.descript,
        })
    }, [tabSelectId]);

    return (
        <>
            {/* LIST LIEU TRINH */}
            <div className='relative w-full h-[10%] items-center justify-center mt-10 lg:pl-[30%] lg:pr-[30%] select-none '>
                <ul className='flex h-full w-full items-center justify-center'>
                    {props.map((item) => (
                        <li key={item.id} onClick={() => { setTabSelectId(item.id) }}
                            className={`${item.id === tabSelectId && `border-2 border-pink-200 font-bold`} 
                            cursor-pointer grid  text-center content-center place-items-center w-full h-full
                            hover:underline hover:text-pink-400 p-5 group `}>
                            <img src={item.img} className='flex xs:w-10 xs:h-10 lg:w-20 lg:h-20 mb-2 cursor-pointer' />
                            <span className={`font-about border-none bg-transparent xs:text-sm group-hover:font-bold lg:text-lg hover:underline hover:text-pink-400 cursor-pointer 
                                    ${item.id === tabSelectId && `text-pink-400 underline`} `}>
                                {item.title}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* CONTENT LIEU TRINH */}
            <div className='relative w-full h-[60%] select-none lg:pl-[15%] lg:pr-[15%]'>
                <div className="absolute h-full bg-white bg-opacity-50 pr-[15%] pl-10 pt-10 pb-10">
                    
                    {/* content */}

                    <span className='text-black text-xl font-service font-semibold'>{selectedTab.descript()}</span>
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    {/* button */}
                    <div className='flex-grow w-full h-full'>
                        <div className='flex justify-center space-x-5 mt-5'>
                            <div className='flex justify-center group'>
                                <button className="btn hover:bg-pink-600 group-hover:text-white hover:font-bold bg-pink-200 text-pink-600 ">
                                    ĐẶT LỊCH
                                    <svg className="group-hover:text-white w-6 h-6 dark:text-white text-pink-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.133 12.632v-1.8a5.407 5.407 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V3.1a1 1 0 0 0-2 0v2.364a.933.933 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175Zm-13.267-.8a1 1 0 0 1-1-1 9.424 9.424 0 0 1 2.517-6.391A1.001 1.001 0 1 1 6.854 5.8a7.43 7.43 0 0 0-1.988 5.037 1 1 0 0 1-1 .995Zm16.268 0a1 1 0 0 1-1-1A7.431 7.431 0 0 0 17.146 5.8a1 1 0 0 1 1.471-1.354 9.424 9.424 0 0 1 2.517 6.391 1 1 0 0 1-1 .995ZM8.823 19a3.453 3.453 0 0 0 6.354 0H8.823Z" />
                                    </svg>
                                </button>
                            </div>
                            <div className='flex justify-center group'>
                                <button className='btn w-auto group-hover:text-white hover:bg-gray-500 hover:outline-none hover:font-bold bg-gray-300'>
                                    XEM CHI TIẾT
                                    <svg className="group-hover:text-white w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* background */}
                <img src={selectedTab.imgItem} alt="Image" className="w-full h-[600px] rounded-2xl" />
            </div>
        </>
    )
}

export default TabService