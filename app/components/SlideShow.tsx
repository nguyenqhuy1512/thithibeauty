import React from 'react'

interface propsHomeSlide {
  img: string
}

interface propsAboutSlide {
  img: string,
}

interface propsProdSlide {
  img: string,
  title: string,
  price?: string,
  sellPrice?: string,
}

interface propsFeedlide {
  img: string,
}






//HomeSlide
export const HomeSlide: React.FC<propsHomeSlide> = ({ img }) => {
  return (
    <>
      <div className='homeChild relative'>
        <div className='flex w-full h-screen' >
          <img className='w-full h-1/2 md:h-full lg:h-full '
            src={img}
            alt="banner" />
        </div>
      </div>

    </>
  )
}

//AboutSlide
export const AboutSlide: React.FC<propsAboutSlide> = ({ img }) => {
  return (
    <>
      <div className='relative w-full h-full p-4 rounded-2xl bg-white'>
        <img className='relative w-full h-[560px] border-l-2 border-gray-200 rounded-2xl'
          src={img}
          alt="banner" />
      </div>
    </>
  )
}





//Feedback
export const FeedSlide: React.FC<propsFeedlide> = ({ img }) => {
  return (
    <>
      <div className='relative w-full h-full bg-white p-5'>
        <img className=' w-full h-full border-l-2 border-gray-200 rounded-2xl'
          src={img}
          alt="banner" />
      </div>
    </>
  )
}


export const ProductSlide: React.FC<propsProdSlide> = ({ img, title, price, sellPrice }) => {
  return (
    <>
      <div className='flex-grow w-auto h-[500px] p-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 border-2 border-gray-100 rounded-lg ml-3 hover:shadow-2xl shadow-gray-600 cursor-pointer'>
        <div className='flex h-5/6'>
          <img src={img} className='w-full h-auto rounded-lg' />
        </div>
        <div className='flex-grow h-1/6'>
          <div className='flex h-1/2 justify-center content-center'>
            <span className='text-lg '>{title}</span>
          </div>
          <div className='flex h-1/2 justify-center content-center space-x-5'>
            <span className='line-through'>{price} VNĐ</span>
            <span className='text-red-500 '>{sellPrice} VNĐ</span>
          </div>
        </div>
      </div>
    </>
  )
}
