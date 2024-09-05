'use client';
import React, { useState } from 'react'
import Slider from "react-slick"
import { HomeSlide, ProductSlide, FeedSlide, AboutSlide } from '../components/SlideShow'
import TabService from './TabService';
import { setSlide, setProd, setFeed, setAbout, setFeedMb, setProdMb } from '@/app/components/config'
import { slideData, serviceData, prodList, slideFeed, slideAbout, aboutInfo, PhotoLibrary, brandNmList } from '../components/content';
import LightBox from './LightBox';
import '../components/logo';


const page = () => {

  return (
    <>
      {/* SLIDER */}
      <div className='relative bg-pink-50'>
        <Slider {...setSlide}>
          {slideData.map((item) => (
            <HomeSlide
              key={item.id}
              img={item.img}
            />
          ))}
        </Slider>
      </div>

      {/* ABOUT */}
      <div className='homeChild bg-pink-50 select-none md:pl-10 md:pr-10'>
        <div className='childTitle'>
          <span className='homeTitle'>
            THI THI BEAUTY
          </span>
          <div className='flex h-auto w-full justify-center xs:mt-2 xs:space-x-3 lg:mt-5'>
            <span className='w-fit xs:text-xl md:text-[24px] lg:text-[36px] font-gvibes text-center'>Be Natural</span>
            <span className='text-pink-600 xs:text-2xl lg:text-[40px] font-logo'>♥</span>
            <span className='w-fit xs:text-xl md:text-[24px] lg:text-[36px] font-gvibes text-center'>Be Beautiful</span>
            <span className='text-pink-600 xs:text-2xl lg:text-[40px] font-logo'>♥</span>
            <span className='w-fit xs:text-xl md:text-[24px] lg:text-[36px] font-gvibes text-center'>Be You</span>
          </div>
        </div>
        <div className='childContent items-start pb-10 
                        xs:mt-2 md:mt-5
                        sm:pl-[10%] sm:pr-[10%] md:pl-0 md:pr-0 2xl:pl-[10%] 2xl:pr-[10%]'>
          <div className='xs:flex-grow xs:w-full xs:h-1/2
                          md:relative md:w-1/2 md:h-full shadow-xl'>
            <Slider {...setAbout}>
              {slideAbout.map((item) => (
                <AboutSlide key={item.id} img={item.img} />
              ))}
            </Slider>
          </div>
          <div className='flex-grow rounded-2xl
                          xs:w-full xs:h-1/2 xs:ml-0 xs:mt-7 
                          md:mt-0 md:ml-5 md:w-1/2 md:h-full'>
            <div className='flex-grow w-full h-fit bg-white shadow-xl rounded-2xl p-5 '>
              {aboutInfo()}
            </div>
          </div>
        </div>
      </div>

      {/*LIEU TRINH */}
      <div className='homeChild xs:p-5 bg-white' >
        <div className='childTitle'>
          <span className='homeTitle'>
            LIỆU TRÌNH
          </span>
        </div>
        <div className='flex-grow w-full xs:h-[90%] md:h-[80%] pb-10'>
          <TabService props={serviceData} />
        </div>
      </div>

      {/* FEEDBACK */}
      <div className='homeChild xs:p-5 lg:pl-[15%] lg:pr-[15%] bg-pink-50 h-fit pb-20'>
        <div className='childTitle'>
          <span className='homeTitle'>
            CẢM NHẬN KHÁCH HÀNG
          </span>
        </div>
        <div className='xs:hidden sm:block md:block lg:block xl:block childContentR mt-10'>
          <Slider {...setFeed}>
            {slideFeed.map((item) => (
              <FeedSlide key={item.id} img={item.img} />
            ))}
          </Slider>
        </div>
        <div className='xs:block sm:hidden md:hidden lg:hidden xl:hidden childContentR mt-10'>
          <Slider {...setFeedMb}>
            {slideFeed.map((item) => (
              <FeedSlide key={item.id} img={item.img} />
            ))}
          </Slider>
        </div>
      </div>

      {/* SLIDE SAN PHAM LAM DEP */}
      <div className='homeChild pl-[10%] pr-[10%] bg-white'>
        <div className='relative w-full h-1/2'>

          <div className='childTitle'>
            <span className='homeTitle'>
              SẢN PHẨM LÀM ĐẸP
            </span>
          </div>

          {/* brandname */}
          <div className='flex-grow h-[20%] w-full bg-white mt-10'>

            <div className='flex h-full w-full mb-5 text-center'>
              <span className='fontSzCont font-about'>Thương hiệu mỹ phẩm uy tín đang hợp tác</span>
            </div>

            <div className='grid xs:grid-cols-1 xs:gap-2
                                 sm:grid-cols-2 
                                 md:grid-cols-4
                                 2xl:grid-cols-5 2xl:gap-5'>
              {brandNmList.map((item) => (
                <div key={item.id} className='flex border-gray-200 rounded-2xl justify-center items-center overflow-hidden cursor-pointer
                  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 
                  xs:h-28 xs:w-40 xl:h-40 xl:w-60 
                  xs:p-2 lg:p-5 border-2'
                >
                  <img src={item.img} className='h-full w-full' />
                </div>
              ))}
            </div>
          </div>

          <div className='childContentR mt-10 mb-20 lg:h-[60%]'>
            <div className='flex h-full w-full mb-5 text-center'>
              <span className='xs:text-md lg:text-xl font-about '>Các dòng sản phẩm nổi bật và được ưa chuận</span>
            </div>
            <Slider {...setProd}>
              {prodList.map((item) => (
                <ProductSlide
                  key={item.id}
                  img={item.img}
                  title={item.title}
                  price={item.price}
                  sellPrice={item.sellPrice}
                />
              ))}
            </Slider>
          </div>

          {/* <div className='childContentR mt-5 mb-10 xs:block sm:hidden md:hidden lg:hidden xl:hidden'>
            <div className='flex h-full w-full mb-5 text-center'>
              <span className='xs:text-md lg:text-xl font-about'>Các dòng sản phẩm nổi bật và được ưa chuận</span>
            </div>
            <Slider {...setProdMb}>
              {prodList.map((item) => (
                <ProductSlide
                  key={item.id}
                  img={item.img}
                  title={item.title}
                  price={item.price}
                  sellPrice={item.sellPrice}
                />
              ))}
            </Slider>
          </div> */}


        </div>
      </div>

      {/* PHOTO LIBRARY */}
      <div className='homeChild xs:p-5 lg:pl-[15%] lg:pr-[15%] bg-pink-50 h-fit'>
        <div className='childTitle'>
          <span className='homeTitle'>
            THƯ VIỆN HÌNH ẢNH
          </span>
        </div>
        <div className='childContentR xs:mt-0 lg:mt-10'>
          <LightBox
            images={PhotoLibrary} />
        </div>
      </div>

    </>
  )
}

export default page