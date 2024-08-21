'use client';


import React,{useState} from 'react'
import Slider from "react-slick"
import { HomeSlide, ProductSlide, FeedSlide } from '../components/SlideShow'
import TabService from './TabService';
import { setSlide, setProd, setFeed, setAbout } from '@/app/components/config'
import { slideData, serviceData, prodList, slideFeed, slideService, slideCerti } from '../components/content';


const page = () => {

  const [height, setheight] = useState(270);

  return (
    <>
      {/* SLIDER */}
      <div className='relative'>
        <Slider {...setSlide} className='z-0'>
          {slideData.map((item) => (
            <HomeSlide
              key={item.id}
              img={item.img}
            />
          ))}
        </Slider>
      </div>

      {/* ABOUT */}
      <div className='relative w-full h-[800px] mt-20 pl-20 pr-20 bg-pink-50 '>
        <div className='relative w-full h-[150px] content-center text-center justify-center'>
          <div className='relative'>
            <span className='focus:text-pink-600 font-bold text-4xl font-about text-pink-400'>
              THI THI BEAUTY
            </span>
          </div>
          <div className='flex h-auto w-full justify-center'>
            <span className='w-40 text-[40px] font-logo '>Tận tình</span>
            <span className='text-pink-600 text-[40px] font-logo '>♥</span>
            <span className='w-40  text-[40px] font-logo '>Uy tín</span>
            <span className='text-pink-600 text-[40px] font-logo '>♥</span>
            <span className='w-40 text-[40px] font-logo '>Chất lượng</span>
          </div>
        </div>

        <div className='flex w-full h-[600px] space-x-5'>
          <div className='flex-grow w-1/2 h-[600px] bg-white shadow-xl shadow-pink-300 rounded-xl justify-center'>
            <div className='flex w-full h-[10%] justify-center items-center'>
              <span className='flex font-service text-2xl font-bold text-pink-400'>♣ DỊCH VỤ THẨM MỸ ♣</span>
            </div>
            <div className='flex-grow w-full h-[90%] pl-2 pr-2 pb-4 space-y-2'>
              <div className="flex w-full h-1/2 space-x-2">
                <div className="flex w-full h-full border-2 border-pink-200  rounded-xl justify-center items-center">
                  <img src={slideService[0].img} className='h-full w-full object-contain' />
                  <div className={`absolute bg-red-500 w-[320px] h-[270px]`}>
                    
                  </div>
                </div>
                <div className="flex w-full h-full border-2 border-pink-200  rounded-xl">
                  <img src={slideService[1].img} className='h-full w-full object-contain' />
                </div>
              </div>
              <div className="flex w-full h-1/2 space-x-2">
                <div className="flex w-full h-full border-2 border-pink-200  rounded-xl">
                  <img src={slideService[2].img} className='h-full w-full object-contain' />
                </div>
                <div className="flex w-full h-full border-2 border-pink-200  rounded-xl">
                  <img src={slideService[3].img} className='h-full w-full object-contain' />

                </div>
              </div>
            </div>
          </div>

          <div className='flex-grow w-1/2 h-auto bg-white shadow-xl shadow-pink-300 rounded-xl justify-center'>
            <div className='flex w-full h-[10%] justify-center items-center'>
              <span className='flex font-service text-2xl font-bold text-pink-400'>♣ KINH NGHIỆM - CHUYÊN MÔN ♣</span>
            </div>
            <div className='flex w-full h-[90%] justify-center bg-black'>



            </div>
          </div>
        </div>
      </div>


      {/*LIEU TRINH */}
      <div className='relative w-full h-[700px] mt-20 pl-[20%] pr-[20%]'>
        <TabService props={serviceData} />
      </div>

      {/* FEEDBACK */}
      <div className='relative w-full h-[700px] bg-pink-50 mt-20 pl-[20%] pr-[20%]'>
        <div className='relative w-full h-[100px] content-center text-center'>
          <span className='xs:hidden sm:block md:hidden lg:block ml-5 focus:text-pink-600 font-bold text-4xl text-pink-400 font-about'>
            CẢM NHẬN KHÁCH HÀNG
          </span>
        </div>
        <div className='relative w-full h-[600px]'>
          <div className='relative w-full h-[600px]'>
            <Slider {...setFeed}>
              {slideFeed.map((item) => (
                <FeedSlide key={item.id} img={item.img} />
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* SLIDE SAN PHAM LAM DEP */}
      <div className='relative w-full h-[600px] mt-10 '>
        <div className='relative w-full h-[100px] content-center text-center'>
          <span className='xs:hidden sm:block md:hidden lg:block ml-5 focus:text-pink-600 font-bold text-4xl text-pink-400 font-about'>
            SẢN PHẨM LÀM ĐẸP
          </span>
        </div>
        <div className='relative w-full h-[500px] pl-[10%] pr-[10%]'>
          <div className='relative w-full h-[500px] space-x-10'>
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
          </div>
        </div>
      </div>

    </>
  )
}

export default page