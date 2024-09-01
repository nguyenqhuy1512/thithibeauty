'use client';
import React, { useEffect } from 'react'
import HeaderPage from '../components/HeaderPage'
import { ServicesContent } from '../components/content'
import { useSearchParams  } from 'next/navigation';

const page = () => {
  const searchParams = useSearchParams();
  const strPage = searchParams.get('page'); 

  useEffect(() => {
    switch (strPage) {
      case 'peel':
        window.scrollTo(0, 1550);
        break;
      case 'trimun':
        window.scrollTo(0, 2850);
        break;
      default:
        window.scrollTo(0, 0);
        break;
    }
  }, [strPage]);

  return (
    <>
      <HeaderPage title={'DỊCH VỤ'} font={'font-about'} about={false} />

      {/* meso */}
      <div className='pageChild pt-10 pb-10 h-fit'>
        {/* title */}
        <div className='flex h-fit w-full  justify-center items-center'>
          <span>{ServicesContent.meso.title()}</span>
        </div>
        {/* info */}
        <div className='flex-grow h-full w-full pt-5 lg:pl-[15%] lg:pr-[15%]'>

          <div className='flex h-fit w-full items-start '>
            <div className='flex h-1/2 w-1/2'>
              {ServicesContent.meso.content.info()}
            </div>
            <div className='flex-grow h-1/2 w-1/2 ml-10'>
              <div className='flex h-full w-full'>
                <span className='font-semibold font-about xs:text-md lg:text-lg'>Bảng giá ( liệu trình 1 buổi )</span>
              </div>
              <div className='flex-grow h-full w-full'>
                {ServicesContent.meso.content.menu.map((item) => (

                  <div key={item.id} className='flex h-full w-full '>
                    <div className='flex h-full w-4/5 '>
                      <span className='font-about text-lg'>{item.method}</span>
                    </div>
                    <div className='flex h-auto w-1/3 justify-center items-center'>
                      <span className='font-about text-md'> {item.price} </span>
                    </div>

                  </div>

                ))}
              </div>
              <br />
              <div className='flex h-fit w-full'>
                <span className='font-semibold font-about xs:text-md lg:text-lg text-red-600'>
                  Khuyến mãi
                </span>
                <span className='font-child xs:text-md lg:text-3xl'>
                  <br />Khách mua liệu trình 5 buổi tặng 1 buổi<br />
                  Liệu trình 4 buổi tặng 1 buổi peel da 1.200.000đ
                </span>
                <br />
              </div>

            </div>
          </div>


        </div>

        {/* picture & book */}
        <div className='relative h-[600px] w-full '>

          <div className='z-10 relative h-[600px] w-full hover:bg-black hover:bg-opacity-40 content-center pl-[45%]'>
            <button className='flex btn group bg-white text-pink-900  h-14 w-52 rounded-none justify-center items-center 
              hover:bg-pink-900 hover:text-white hover:border-none font-about'>
              ĐẶT LỊCH
              <svg className=" w-6 h-6 text-pink-900 group-hover:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.133 12.632v-1.8a5.407 5.407 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V3.1a1 1 0 0 0-2 0v2.364a.933.933 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175Zm-13.267-.8a1 1 0 0 1-1-1 9.424 9.424 0 0 1 2.517-6.391A1.001 1.001 0 1 1 6.854 5.8a7.43 7.43 0 0 0-1.988 5.037 1 1 0 0 1-1 .995Zm16.268 0a1 1 0 0 1-1-1A7.431 7.431 0 0 0 17.146 5.8a1 1 0 0 1 1.471-1.354 9.424 9.424 0 0 1 2.517 6.391 1 1 0 0 1-1 .995ZM8.823 19a3.453 3.453 0 0 0 6.354 0H8.823Z" />
              </svg>
            </button>
          </div>
          <div className='z-7 absolute h-[600px] w-full top-0 left-0'>
            <img src={ServicesContent.meso.img[0]} className='h-full w-full' />
          </div>
        </div>
      </div >

      {/* peel */}
      <div className='pageChild pt-10 pb-10 h-fit'>
        {/* title */}
        <div className='flex h-fit w-full  justify-center items-center'>
          <span>{ServicesContent.peel.title()}</span>
        </div>
        {/* info */}
        <div className='flex-grow h-full w-full pt-5 lg:pl-[14%] lg:pr-[14%]'>

          <div className='flex h-fit w-full items-start '>
            <div className='flex h-1/2 w-1/2'>
              {ServicesContent.peel.content.info()}
            </div>
            <div className='flex-grow h-1/2 w-1/2 ml-10'>
              <div className='flex h-full w-full'>
                <span className='font-semibold font-about xs:text-md lg:text-lg'>Bảng giá ( liệu trình 1 buổi )</span>
              </div>
              <div className='flex-grow h-full w-full'>
                {ServicesContent.peel.content.menu.map((item) => (

                  <div key={item.id} className='flex h-full w-full '>
                    <div className='flex h-full w-4/5 '>
                      <span className='font-about text-lg'>{item.method}</span>
                    </div>
                    <div className='flex h-auto w-1/3 justify-center items-center'>
                      <span className='font-about text-md'> {item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* picture & book */}
        <div className='relative h-[600px] w-full '>

          <div className='z-10 relative h-[600px] w-full hover:bg-black hover:bg-opacity-40 content-center pl-[45%]'>
            <button className='flex btn group bg-white text-pink-900  h-14 w-52 rounded-none justify-center items-center 
              hover:bg-pink-900 hover:text-white hover:border-none font-about'>
              ĐẶT LỊCH
              <svg className=" w-6 h-6 text-pink-900 group-hover:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.133 12.632v-1.8a5.407 5.407 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V3.1a1 1 0 0 0-2 0v2.364a.933.933 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175Zm-13.267-.8a1 1 0 0 1-1-1 9.424 9.424 0 0 1 2.517-6.391A1.001 1.001 0 1 1 6.854 5.8a7.43 7.43 0 0 0-1.988 5.037 1 1 0 0 1-1 .995Zm16.268 0a1 1 0 0 1-1-1A7.431 7.431 0 0 0 17.146 5.8a1 1 0 0 1 1.471-1.354 9.424 9.424 0 0 1 2.517 6.391 1 1 0 0 1-1 .995ZM8.823 19a3.453 3.453 0 0 0 6.354 0H8.823Z" />
              </svg>
            </button>
          </div>
          <div className='z-7 absolute h-[600px] w-full top-0 left-0'>
            <img src={ServicesContent.peel.img[0]} className='h-full w-full' />
          </div>
        </div>
      </div >

      {/* trị mụn */}
      <div className='pageChild pt-10 pb-10 h-fit'>
        {/* title */}
        <div className='flex h-fit w-full  justify-center items-center'>
          <span>{ServicesContent.trimun.title()}</span>
        </div>
        {/* info */}
        <div className='flex-grow h-full w-full pt-5 lg:pl-[10%] lg:pr-[10%]'>

          <div className='flex h-fit w-full items-start '>
            <div className='flex h-1/2 w-2/5'>
              {ServicesContent.trimun.content.info()}
            </div>
            <div className='flex-grow h-1/2 w-3/5 ml-10'>
              <div className='flex h-full w-full'>
                <span className='font-semibold font-about xs:text-md lg:text-lg'>Bảng giá ( liệu trình 1 buổi )</span>
              </div>
              <div className='flex-grow h-full w-full'>
                {ServicesContent.trimun.content.menu.map((item) => (

                  <div key={item.id} className='flex h-full w-full '>
                    <div className='flex h-full w-5/6 '>
                      <span className='font-about text-lg'>{item.method} <br /> <span className='text-red-600'>{item.bonus}</span></span>

                    </div>
                    <div className='flex h-auto w-1/4 justify-center items-center'>
                      <span className='font-about text-md'> {item.price} </span>
                    </div>

                  </div>

                ))}
              </div>
            </div>
          </div>


        </div>

        {/* picture & book */}
        <div className='relative h-[600px] w-full '>

          <div className='z-10 relative h-[600px] w-full hover:bg-black hover:bg-opacity-40 content-center pl-[45%]'>
            <button className='flex btn group bg-white text-pink-900  h-14 w-52 rounded-none justify-center items-center 
              hover:bg-pink-900 hover:text-white hover:border-none font-about'>
              ĐẶT LỊCH
              <svg className="w-6 h-6 text-pink-900 group-hover:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.133 12.632v-1.8a5.407 5.407 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V3.1a1 1 0 0 0-2 0v2.364a.933.933 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175Zm-13.267-.8a1 1 0 0 1-1-1 9.424 9.424 0 0 1 2.517-6.391A1.001 1.001 0 1 1 6.854 5.8a7.43 7.43 0 0 0-1.988 5.037 1 1 0 0 1-1 .995Zm16.268 0a1 1 0 0 1-1-1A7.431 7.431 0 0 0 17.146 5.8a1 1 0 0 1 1.471-1.354 9.424 9.424 0 0 1 2.517 6.391 1 1 0 0 1-1 .995ZM8.823 19a3.453 3.453 0 0 0 6.354 0H8.823Z" />
              </svg>
            </button>
          </div>
          <div className='z-7 absolute h-[600px] w-full top-0 left-0'>
            <img src={ServicesContent.trimun.img[0]} className='h-full w-full' />
          </div>
        </div>
      </div >

    </>

  )
}

export default page