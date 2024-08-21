'use client';

import React from 'react'
import Slider from "react-slick"
import SlideShow from '../components/SlideShow'
import TabService from './TabService';


const page = () => {

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    speed: 1000,
  };

  var settingsAbout = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    speed: 1000,
  };

  var settingsProd = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    speed: 1000,
  };

  const slideData = [
    {
      id: 0,
      img: "/background1.jpg",
      title: "car1"
    },
    {
      id: 1,
      img: "/background2.jpg",
      title: "car3"
    },

  ]

  const aboutData = [
    {
      id: 0,
      img: "https://www.saspa.vn/wp-content/uploads/2022/05/Facial-icon.svg",
      title: "SPA - CHĂM SÓC DA",
      content: {
        imgItem: "/about1.jpg",
        descript: "000 Các bước trị liệu được thiết kế để điều trị các khuyết điểm, dấu hiệu lão hóa trên mặt, mang lại cho bạn một làn da phục hồi, căng sáng và trẻ trung. Phong phú lựa chọn từ các sản phẩm thiên nhiên, hữu cơ đến chuyên nghiệp."
      }

    },
    {
      id: 1,
      img: "https://www.saspa.vn/wp-content/uploads/2022/05/Massage-1.svg",
      title: "TRỊ MỤN CHUYÊN SÂU",
      content: {
        imgItem: "/about2.jpg",
        descript: "A Các bước trị liệu được thiết kế để điều trị các khuyết điểm, dấu hiệu lão hóa trên mặt, mang lại cho bạn một làn da phục hồi, căng sáng và trẻ trung. Phong phú lựa chọn từ các sản phẩm thiên nhiên, hữu cơ đến chuyên nghiệp."
      }
    },
    {
      id: 2,
      img: "https://www.saspa.vn/wp-content/uploads/2022/05/Body-Treatments-1.svg",
      title: "LIỆU TRÌNH 3 BUỔI MESO",
      content: {
        imgItem: "/about3.jpg",
        descript: "B Các bước trị liệu được thiết kế để điều trị các khuyết điểm, dấu hiệu lão hóa trên mặt, mang lại cho bạn một làn da phục hồi, căng sáng và trẻ trung. Phong phú lựa chọn từ các sản phẩm thiên nhiên, hữu cơ đến chuyên nghiệp."
      }
    },
    {
      id: 3,
      img: "https://www.saspa.vn/wp-content/uploads/2022/05/Cosmetology-1.svg",
      title: "LÀM TRẮNG DA",
      content: {
        imgItem: "/about1.jpg",
        descript: "C Các bước trị liệu được thiết kế để điều trị các khuyết điểm, dấu hiệu lão hóa trên mặt, mang lại cho bạn một làn da phục hồi, căng sáng và trẻ trung. Phong phú lựa chọn từ các sản phẩm thiên nhiên, hữu cơ đến chuyên nghiệp."
      }
    },
  ]

  const productLst = [
    {
      id: 0,
      img: "/mp1.jpg",
      title: "Serum Ivatherm",
      price: "100.000",
      sellPrice: "90.000",
    },
    {
      id: 1,
      img: "/mp2.jpg",
      title: "Kem dưỡng trắng da AHOHWA",
      price: "150.000",
      sellPrice: "120.000",
    },
    {
      id: 2,
      img: "/mp3.jpg",
      title: "Long Lashes",
      price: "200.000",
      sellPrice: "190.000",
    },
    {
      id: 3,
      img: "/mp4.jpg",
      title: "Serum AHOHWA",
      price: "330.000",
      sellPrice: "300.000",
    },
    {
      id: 4,
      img: "/mp1.jpg",
      title: "Serum AHOHWA",
      price: "330.000",
      sellPrice: "300.000",
    }
  ]


  return (
    <>
      <div className='relative'>
        <Slider {...settings} className='z-0'>
          {slideData.map((item) => (
            <SlideShow
              key={item.id}
              img={item.img}
              title={item.title}
              whichSlide='homeslide'
            />
          ))}
        </Slider>
      </div>
      {/* About Service LICH TRINH */}
      <div className='relative w-full h-[700px] mt-20 pl-[20%] pr-[20%]'>
        <TabService props={aboutData} />
      </div>

      {/* Products */}
      <div className='relative w-full h-[600px] bg-pink-50 mt-10'>
        <div className='relative w-full h-[100px] content-center text-center'>
          <span className='xs:hidden sm:block md:hidden lg:block ml-5 focus:text-pink-600 font-bold text-4xl text-pink-400 font-about'>
            SẢN PHẨM LÀM ĐẸP
          </span>
        </div>
        <div className='relative w-full h-[500px] pl-[10%] pr-[10%]'>
          <div className='relative w-full h-[500px]'>

            <Slider {...settingsProd}>
              {productLst.map((item) => (
                <SlideShow
                  key={item.id}
                  img={item.img}
                  title={item.title}
                  whichSlide='prodslide'
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