'use client';
import React, { useState } from 'react'
import Slider from "react-slick"
import { HomeSlide, ProductSlide, FeedSlide, AboutSlide } from '../components/SlideShow'
import TabService from './TabService';
import { setSlide, setProd, setFeed, setAbout } from '@/app/components/config'
import { slideData, serviceData, prodList, slideFeed, slideAbout, aboutInfo, PhotoLibrary } from '../components/content';
import LightBox from './LightBox';


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
      <div className='homeChild pl-[15%] pr-[15%] bg-pink-50'>
        <div className='childTitle'>
          <span className='homeTitle'>
            THI THI BEAUTY
          </span>
          <div className='flex h-auto w-full justify-center'>
            <span className='w-fit text-[40px] font-logo text-center'>Be Natural</span>
            <span className='text-pink-600 text-[40px] font-logo ml-5 mr-5'>♥</span>
            <span className='w-fit  text-[40px] font-logo text-center'>Be Beautiful</span>
            <span className='text-pink-600 text-[40px] font-logo ml-5 mr-5'>♥</span>
            <span className='w-fit text-[40px] font-logo text-center'>Be You</span>
          </div>
        </div>

        <div className='childContent'>
          <div className='relative w-1/2 h-full'>
            <Slider {...setAbout}>
              {slideAbout.map((item) => (
                <AboutSlide key={item.id} img={item.img} />
              ))}
            </Slider>
          </div>
          <div className='flex-grow w-1/2 h-full ml-10 rounded-2xl '>
            <div className='flex-grow w-full h-fit bg-white shadow-xl rounded-2xl p-5 '>
              <span className=' flex font-service text-2xl justify-center font-bold w-auto'>Vì sao chọn
                <span className='text-pink-400'>&nbsp; THI THI BEAUTY &nbsp;</span> ?</span>
              <span>{aboutInfo.profile}</span>
            </div>
            <div className='flex-grow w-full h-fit bg-white shadow-xl rounded-2xl mt-5 p-5'>
              <span className=' flex font-service text-2xl justify-center font-bold' >Không gian</span>
              <span>{aboutInfo.condition}</span>
            </div>
            <div className='flex-grow w-full h-fit bg-white shadow-xl rounded-2xl mt-5 p-5 '>
              <span className=' flex font-service text-2xl justify-center font-bold'>Chuyên môn</span>
              <span>{aboutInfo.profession}</span>
            </div>
          </div>

        </div>
      </div>


      {/*LIEU TRINH */}
      <div className='homeChild pl-[15%] pr-[15%] bg-white' >
        <div className='childTitle'>
          <span className='homeTitle'>
            LIỆU TRÌNH
          </span>
        </div>
        <TabService props={serviceData} />
      </div>

      {/* FEEDBACK */}
      <div className='homeChild pl-[15%] pr-[15%] bg-pink-50 h-fit pb-20'>
        <div className='childTitle'>
          <span className='homeTitle'>
            CẢM NHẬN KHÁCH HÀNG
          </span>
        </div>
        <div className='childContentR mt-10'>
          <Slider {...setFeed}>
            {slideFeed.map((item) => (
              <FeedSlide key={item.id} img={item.img} />
            ))}
          </Slider>
        </div>
      </div>

      {/* SLIDE SAN PHAM LAM DEP */}
      <div className='homeChild pl-[10%] pr-[10%] bg-white h-fit'>
        <div className='relative w-full h-1/2'>
          <div className='childTitle'>
            <span className='homeTitle'>
              SẢN PHẨM LÀM ĐẸP
            </span>
          </div>
          <div className='childContentR mt-10 mb-20 space-x-10'>
            <Slider {...setProd}>
              {prodList.map((item) => (
                <ProductSlide
                  key={item.id}
                  img={item.img}
                  title={item.title}
                  price={item.price}
                  sellPrice={item.sellPrice}
                //descript={item.descript}
                />
              ))}
            </Slider>
            <div className='relative w-full h-[90%] '>

            </div>
          </div>
        </div>


      </div>

      {/* PHOTO LIBRARY */}

      <div className='homeChild pl-[15%] pr-[15%] bg-pink-50 h-fit'>
        <div className='childTitle'>
          <span className='homeTitle'>
            THƯ VIỆN HÌNH ẢNH
          </span>
        </div>
        <div className='childContentR  mt-10'>
          <LightBox
            images={PhotoLibrary}/>
        </div>
      </div>

    </>
  )
}

export default page