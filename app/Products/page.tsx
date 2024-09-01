'use client';
import React, { useEffect, useState } from 'react'
import HeaderPage from '../components/HeaderPage'
import Link from 'next/link'
import { brandNmList, Category, prodList, ProductSlideList } from '../components/content';
import { BestSellerSlide, ProductSlide, ProductsSlide } from '../components/SlideShow';
import Slider from 'react-slick';
import { setProd, setProductSlide } from '../components/config';

const page = () => {

  const [isMenuOpened, setMenuOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("");

  return (
    <>
      <HeaderPage bg_img={'/bg/bg-product.png'} title={'SẢN PHẨM'} font={'font-about'} about={false} />

      <div className='flex h-16 w-full pl-[15%] pr-[15%] bg-pink-200'>
        <div className='flex h-full w-full items-center'>
          <div className="flex w-[20%]">
            <svg
              className="hover cursor-pointer text-pink-600"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 512 512">
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
            <button className="text-xl font-about ml-2 select-none hover:text-pink-600"
              onClick={() => setMenuOpen(!isMenuOpened)}>
              DANH MỤC SẢN PHẨM
            </button>

          </div>

          <input type="text" className="flex input input-md text-lg ml-10 mr-2 w-[50%] font-about" placeholder="Nhập tìm kiếm bất kì" />

          <button className='btn bg-pink-50 hover:bg-pink-400  hover:text-white'>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 ">
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd" />
            </svg>
            <span className='font-about text-lg font-normal'>Tìm kiếm</span>
          </button>


          <button className='btn bg-pink-50 hover:bg-pink-400 hover:text-white ml-2'>

            <svg className="w-6 h-6 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
            </svg>
            <span className='font-about text-lg font-normal'>Giỏ hàng ( 3 )</span>
          </button>
        </div>
      </div>

      {isMenuOpened && <div className='grid grid-cols-7 h-fit w-full pl-[15%] pr-[15%] bg-pink-200 fade-in items-center space-x-2 font-about'>
        {Category.map((item) => (
          <div key={item.id}>
            <button className='btn btn-ghost text-md hover:underline hover:text-pink-600 font-normal'
              onClick={() => setSelectedMenu(item.title)}>
              {item.title} ({3})
            </button>
          </div>
        ))}
      </div>}

      <div className='flex h-10 w-full pl-[15%] pr-[15%] bg-pink-50 items-center  '>
        <div className="breadcrumbs text-sm font-about">
          <ul>
            <li><Link href='/'>Trang chủ</Link></li>
            <li><a href='/Products' onClick={() => setSelectedMenu('')}>Sản phẩm</a></li>
            {selectedMenu && <li><a>{selectedMenu}</a></li>}
          </ul>
        </div>
      </div>

      <div className='pageChild h-fit'>
        <div className='flex h-1/2 w-full pl-[15%] pr-[15%]'>
          <div className='relative h-full w-full'>
            <Slider {...setProductSlide}>
              {ProductSlideList.map((item) => (
                <ProductsSlide
                  key={item.id}
                  img={item.img}
                />
              ))}
            </Slider>
          </div>
        </div>
        {/* <div className='flex h-1/2 w-full pl-[15%] pr-[15%] bg-slate-300 mt-10'>

        </div> */}
      </div>

      <div className='pageChild pt-20 h-fit'>
        <div className='relative h-fit w-full justify-center items-center bg-pink-200 pt-10 '>
          <span className='flex text-pink-400 font-about text-4xl font-bold justify-center '>HÀNG BÁN CHẠY</span>

          <div className='flex h-full w-full pl-[15%] pr-[15%] bg-pink-200'>
            <div className='childContentR mt-10 mb-10  h-full w-full  rounded-lg'>
              <Slider {...setProd}>
                {prodList.map((item) => (
                  <BestSellerSlide
                    key={item.id}
                    img={item.img}
                    title={item.title}
                    price={item.price}
                    sellPrice={item.sellPrice}
                  />
                ))}
              </Slider>
            </div>
          </div>

        </div>
      </div>

      <div className='pageChild h-fit'>
        <div className='relative h-fit w-full justify-center items-center bg-pink-200 pt-10 '>
          <span className='flex text-pink-400 font-about text-4xl font-bold justify-center '>HÀNG KHUYẾN MÃI</span>

          <div className='flex h-full w-full pl-[15%] pr-[15%] bg-pink-200'>
            <div className='childContentR mt-10 mb-10  h-full w-full  rounded-lg'>
              <Slider {...setProd}>
                {prodList.map((item) => (
                  <BestSellerSlide
                    key={item.id}
                    img={item.img}
                    title={item.title}
                    price={item.price}
                    sellPrice={item.sellPrice}
                  />
                ))}
              </Slider>
            </div>
          </div>

        </div>
      </div>

      <div className='pageChild pl-[15%] pr-[15%] pt-10'>
        <div className='flex-grow h-full w-full'>
          <span>Thương hiệu</span>
          <div className='flex space-x-5'>
            {brandNmList.map((item) => (
              <div key={item.id} className='flex xs:h-28 xs:w-40 lg:h-16 lg:w-32 xs:p-2  rounded-2xl justify-center items-center
                  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 '>
                <img src={item.img} className='h-full w-full' />
              </div>
            ))}
          </div>


        </div>




      </div>


    </>

  )
}

export default page