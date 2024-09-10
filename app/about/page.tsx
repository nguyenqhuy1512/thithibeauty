import React from 'react'
import { AboutContent } from '../components/content'
import HeaderPage from '../components/HeaderPage'
import { BellIc, NextIc, RightIc } from '../components/icon'
import Link from 'next/link'

const page = () => {
  return (
    <div className='overflow-hidden'>
      {/* Header */}
      <HeaderPage title={'Về Thi Thi Beauty Spa'} about={true} />

      {/* About */}
      <div className='pageChild h-fit '>
        <div className='flex w-full h-1/3 items-center justify-center
                        xs:p-0 xs:pt-10 xs:pb-10
                        md:p-10
                        lg:pl-[10%] lg:pr-[10%] lg:pt-20 lg:pb-20 '>
          <div className='flex xs:w-1/3 md:w-2/5 h-full xs:text-center md:text-start p-2'>
            <span className='text-pink-400 font-Cormorant xs:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>{AboutContent.firstPart.title}</span>
          </div>
          <div className='flex xs:w-2/3 md:w-3/5 h-full p-3'>
            <span className='txtSzBaseDecor'>{AboutContent.firstPart.content()}</span>
          </div>
        </div>

        <div className='flex w-full xs:h-40 sm:h-60 md:h-80 lg:h-[350px] xl:h-[400px] 2xl:h-[500px] overflow-x-auto'>
          {AboutContent.secondPart.map((item,index) => (
            <img key={index} src={item} className='w-auto h-full' />
          ))}
        </div>
      </div>

      {/* Reason */}
      <div className='pageChild h-fit bg-gradient-to-r from-pink-50 to-pink-200 pt-10 pb-10
                      xs:pl-5 xs:pr-5
                      md:pl-10 md:pr-10
                      lg:pl-20 lg:pr-20'>
        <div className='xs:flex-grow md:flex h-full w-full'>
          <div className='flex xs:h-1/2 md:h-full xs:w-full md:w-1/2'>
            <span className='txtSzBaseDecor text-center'>{AboutContent.thirdPart.content()}</span>
          </div>
          <div className='flex xs:h-1/2 xs:w-full md:w-1/2 md:h-full 
                               xs:p-10 sm:p-20 md:p-10 md:mt-16 2xl:mt-0 2xl:p-24'>
            <img src={AboutContent.thirdPart.img} className='h-full w-full rounded-2xl shadow-2xl' />
          </div>
        </div>
        <div className='xs:flex-grow md:flex xs:p-0 md:pl-[20%] md:pr-[20%] 2xl:pl-[30%] 2xl:pr-[30%] w-full h-fit justify-center mt-10 xs:space-y-5 md:space-x-5 md:space-y-0 '>
          <div className='flex h-fit w-full justify-center'>
            <Link href="/WorkingDay" className="group btn w-72 bg-pink-200 text-pink-600 hover:text-white border-none rounded-none hover:bg-pink-600 font-bold lg:text-base xl:text-xl font-Lora" >
              ĐẶT LỊCH NGAY
              <BellIc />
            </Link>
          </div>
          <div className='flex h-fit w-full justify-center'>
            <Link href="/WorkingDay" className="group btn w-72 bg-white text-pink-600 hover:text-white border-none rounded-none hover:bg-pink-600 font-bold lg:text-base xl:text-xl font-Lora" >
              GỬI CÂU HỎI
              <RightIc />
            </Link>
          </div>
        </div>

      </div>

    </div>

  )
}

export default page