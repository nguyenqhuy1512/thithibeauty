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

interface ProductSlide {
  img: string,
}

//HomeSlide
export const HomeSlide: React.FC<propsHomeSlide> = ({ img }) => {
  return (
    <>
      <div className='relative w-screen xs:h-[300px] md:h-[400px] lg:h-[600px] xl:h-screen'>
        <div className='flex w-full h-full'>
          <img className='w-full xs:[300px] lg:h-full'
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
      <div className='xs:flex lg:relative w-full h-full xs:p-2 lg:p-4 rounded-2xl bg-white'>
        <img className='relative w-full xs:h-[300px] lg:h-[610px] border-l-2 border-gray-200 rounded-2xl'
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
      <div className='relative w-full h-full bg-white xs:p-2 lg:p-5'>
        <img className=' w-full h-full border-l-2 border-gray-200 rounded-2xl'
          src={img}
          alt="banner" />
      </div>
    </>
  )
}

// ProductSlide
export const ProductSlide: React.FC<propsProdSlide> = ({ img, title, price, sellPrice }) => {
  return (
    <>
      <div className='flex-grow w-auto h-[500px] xs:p-10 lg:p-5 border-2 border-gray-100 rounded-lg ml-3 cursor-pointer'>
        <div className='flex h-5/6 overflow-hidden'>
          <img src={img} className='w-full h-auto rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:shadow-2xl shadow-gray-600' />
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


//ProductPageSlide
export const ProductsSlide: React.FC<ProductSlide> = ({ img }) => {
  return (
    <>
      <div className='flex w-full h-[25vw] bg-white'>
        <img className='flex w-full h-full'
          src={img}
          alt="banner" />
      </div>
    </>
  )
}


// BestSellerSlide
export const BestSellerSlide: React.FC<propsProdSlide> = ({ img, title, price, sellPrice }) => {
  return (
    <>
      <div className='flex-grow w-auto h-[400px] xs:p-10 lg:p-5 border-2 border-gray-100 rounded-lg ml-3 cursor-pointer bg-white'>
        <div className='flex h-5/6 overflow-hidden'>
          <img src={img} className='w-full h-auto rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:shadow-2xl shadow-gray-600' />
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