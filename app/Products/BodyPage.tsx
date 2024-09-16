'use client';
import React, { useState, useEffect } from 'react'
import HeaderPage from '../components/HeaderPage'
import { CartIc, SearchIc, ToggleIc } from '../components/icon';
import { Category } from '../components/content';

const BodyPage: React.FC = () => {

    interface TmpCart {
        id: number,
        prodNm: string,
    }

    const [isShowFastSearch, setShowFastSearch] = useState(false);
    const [isShowMenuSearch, setShowMenuSearch] = useState(false);

    // cart picking tmp
    const [cartItems, setCartItems] = useState<TmpCart[]>([]);

    return (
        <div className='overflow-x-hidden'>
            {/* Header */}
            <HeaderPage bg_img={'/bg/bg-product.png'} title={'SẢN PHẨM'} about={false} />

            {/* navbar search */}
            <div className='flex h-16 w-full bg-pink-200
                      xs:pl-0 xs:pr-0
                      2xl:pl-[15%] 2xl:pr-[15%] '>


                <div className='flex h-full w-full items-center'>
                    {/* Danh mục */}
                    <div className="flex-grow w-1/4 items-center "
                        onMouseEnter={() => {
                            setShowFastSearch(false)
                            setShowMenuSearch(true)
                        }}>
                        <div className='flex'>
                            <ToggleIc />
                            <button className="txtSzBaseTt ml-2 select-none text-pink-600 hover:text-pink-400">
                                DANH MỤC TÌM KIẾM
                            </button>
                        </div>  

                        <div className="flex">
                            <div className='px-5 z-10 absolute w-auto h-fit border-2 border-gray-200 bg-white justify-end shadow-xl'
                                onMouseLeave={() => setShowMenuSearch(false)}>
                                <ul className='py-5'>
                                    {Category.map((item) => (
                                        <li key={item.id} className='hover:text-pink-400 p-2 txtSzBase'>
                                            <a href='#'>{item.cateNm}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>

                    {/* search */}
                    <div className='flex w-2/3 h-full '>
                        <div className='flex w-full h-full justify-center items-center '>
                            <input type="text"
                                className="flex input input-md focus:outline-none focus:border-none text-lg ml-10 w-full font-Lora rounded-l-full"
                                placeholder="Nhập tìm kiếm tên sản phẩm, thương hiệu,..."
                                onFocus={() => {
                                    setShowMenuSearch(false);
                                    setShowFastSearch(true);
                                }} />
                        </div>
                        <div className='flex w-20 h-full justify-start items-center'>
                            <div className='flex w-auto h-auto pr-0 bg-white rounded-r-full'>
                                <button className='btn w-full h-full bg-pink-400 text-white hover:text-white hover:bg-pink-600 rounded-full border-none'
                                    onClick={() => {
                                        // setOpenBrec(true)
                                    }}>
                                    <SearchIc />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* cart */}
                    <div className='flex w-1/6 h-full justify-end items-center'>
                        <button className='w-full btn bg-pink-300 hover:bg-pink-400 border-none'>
                            <CartIc />
                            <span className='xs:hidden lg:block text-base text-white font-normal'>Giỏ hàng ({cartItems.length})</span>
                        </button>
                    </div>

                </div>


            </div>



        </div>
    )
}

export default BodyPage