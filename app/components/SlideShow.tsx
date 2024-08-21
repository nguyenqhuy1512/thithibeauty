import React from 'react'

interface propsType {
  img: string,
  title: string,
  whichSlide?: 'homeslide' | 'aboutslide' | 'prodslide',
  descript?: string,
  price?: string,
  sellPrice?: string,
}

const SlideShow: React.FC<propsType> = ({ img, title, whichSlide, descript,price,sellPrice }) => {
  return (
    <>
      {whichSlide === 'homeslide' &&
        <div className='flex w-screen h-screen relative'>
          <div className='flex w-full h-screen' >
            <img className='w-full h-1/2 md:h-full lg:h-full '
              src={img}
              alt="banner" />
          </div>
        </div>}

      {whichSlide === 'aboutslide' &&
        <div className='flex w-full h-[500px]'>
          <div className='flex-grow w-1/2 h-[500px] p-5 place-content-center'>
            <div className='flex justify-center'>
              <span className='text-gray-700 font-bold text-lg'>{title}</span>
            </div>
            <div className='flex justify-center'>
              <span className='text-gray-700 text-md'>{descript}</span>
            </div>
            <div className='flex justify-center space-x-5 mt-5'>
              <div className='flex justify-center group '>
                <button className="btn hover:bg-pink-600 group-hover:text-white hover:underline hover:font-bold ">
                  ĐẶT LỊCH
                  <svg className="group-hover:text-white w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.133 12.632v-1.8a5.407 5.407 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V3.1a1 1 0 0 0-2 0v2.364a.933.933 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175Zm-13.267-.8a1 1 0 0 1-1-1 9.424 9.424 0 0 1 2.517-6.391A1.001 1.001 0 1 1 6.854 5.8a7.43 7.43 0 0 0-1.988 5.037 1 1 0 0 1-1 .995Zm16.268 0a1 1 0 0 1-1-1A7.431 7.431 0 0 0 17.146 5.8a1 1 0 0 1 1.471-1.354 9.424 9.424 0 0 1 2.517 6.391 1 1 0 0 1-1 .995ZM8.823 19a3.453 3.453 0 0 0 6.354 0H8.823Z" />
                  </svg>
                </button>
              </div>
              <div className='flex justify-center group'>
                <button className='btn w-full group-hover:text-white hover:bg-gray-500 hover:outline-none hover:underline hover:font-bold'>
                  XEM CHI TIẾT
                  <svg className="group-hover:text-white w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                  </svg>
                </button>
              </div>
            </div>

          </div>
          <div className='flex w-1/2 pt-5 pb-5 pl-24 pr-24'>
            <img className='w-full h-auto rounded-lg'
              src={img}
              alt="banner" />
          </div>
        </div>
      }

      {whichSlide === 'prodslide' &&
        <div className='flex-grow w-full h-[500px] p-5'>
          <div className='flex h-5/6'>
            <img src={img} className='w-full h-auto rounded-lg' />
          </div>
          <div className='flex-grow h-1/6'>
            <div className='flex h-1/2 justify-center content-center'>
              <span className='text-lg font-bold text-pink-600'>{title}</span>
            </div>
            <div className='flex h-1/2 justify-center content-center space-x-5'>
              <span className='line-through'>{price} VNĐ</span>
              <span className='text-red-500 font-bold'>{sellPrice} VNĐ</span>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default SlideShow