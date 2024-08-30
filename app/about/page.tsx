import React from 'react'
import { AboutContent } from '../components/content'

const page = () => {
  return (
    <>
      {/* Header */}
      <div className='relative w-full h-[350px] '>
        <div className='absolute w-full h-[350px] '>
          <img src='/bg/about.jpg' className='h-full w-full' />
        </div>
        <div className='relative w-full h-full text-center content-end pb-10 select-none'>
          <span className='font-gvibes text-[80px] text-pink-600 '>Về Thi Thi Beauty Spa</span>
        </div>
      </div>

      {/* About */}
      <div className='pageChild h-fit'>
        <div className='flex w-full h-1/3 lg:pl-[15%] lg:pr-[15%] lg:pt-20 lg:pb-20 items-center justify-center'>
          <div className='flex w-2/5 h-full text-start'>
            {AboutContent.firstPart.title()}
          </div>
          <div className='flex w-3/5 h-full pl-10 p-5'>
            {AboutContent.firstPart.content()}
          </div>
        </div>
        <div className='flex w-full h-2/3 bg-green-400'>
          <img src={AboutContent.secondPart.img} className='h-[80%] w-full' />
        </div>
      </div>

      {/* Reason */}
      <div className='pageChild bg-pink-50 lg:pl-[15%] lg:pr-[15%] pt-20 pb-10 '>
        <div className='flex h-full w-full'>
          <div className='flex h-full w-1/2 '>
            <img src={AboutContent.thirdPart.img} className='h-full w-full rounded-2xl shadow-2xl' />
          </div>
          <div className='flex h-full w-1/2 pt-10 pl-20 '>
            {AboutContent.thirdPart.content()}
          </div>
        </div>
      </div>
    </>

  )
}

export default page