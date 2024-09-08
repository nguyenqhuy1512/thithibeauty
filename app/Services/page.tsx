'use client';
import React, { useEffect } from 'react'
import HeaderPage from '../components/HeaderPage'
import { serviceData, ServicesContent } from '../components/content'
import { useSearchParams } from 'next/navigation';
import { it } from 'node:test';

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
      <HeaderPage title={'DỊCH VỤ'} about={false} />

      {ServicesContent.map((item)=> (
        <>
        <div key={item.id} className='pageChild pt-10 pb-10 h-fit'>
        {/* title */}
        <div className='flex h-fit w-full justify-center items-center'>
          <span className='text-yellow-500 fontSzTitleService'>{item.title}</span>
        </div>
        {/* info */}
        <div className='flex-grow h-full w-full pt-5 
                        xs:pl-0 xs:pr-0
                        lg:pl-10 lg:pr-10
                        xl:pl-10 xl:pr-10
                        2xl:pl-[10%] 2xl:pr-[10%]'>
          <div className='xs:flex-grow lg:flex h-fit w-full items-start '>
            <div className='flex h-1/2 xs:w-full lg:w-1/2 fontSzCont xs:ml-10 lg:ml-0'>
              {item.content.info()}
            </div>
            <div className='flex-grow h-1/2 xs:w-full lg:w-1/2 xs:mt-5 lg:mt-0 ml-10'>
              <div className='flex h-full w-full'>
                <span className='font-semibold fontSzCont'>Bảng giá ( liệu trình 1 buổi )</span>
              </div>
              <div className='flex-grow h-full w-full'>
                {item.content.menu.map((itemChild) => (
                  <div key={item.id} className='flex h-full w-full '>
                    <div className='flex h-full w-4/5 '>
                      <span className='fontSzCont'>{itemChild.method}</span>
                    </div>
                    <div className='flex h-auto w-1/3 justify-center items-center'>
                      <span className='fontSzCont xl:text-lg'> {itemChild.price} </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className='flex h-fit w-full'>
                <span className='font-semibold font-about xs:text-md lg:text-lg text-red-600'>
                  Khuyến mãi
                </span>
                <span className='font-child  xs:text-xl lg:text-3xl'>
                  <br />Khách mua liệu trình 5 buổi tặng 1 buổi<br />
                  Liệu trình 4 buổi tặng 1 buổi peel da 1.200.000đ
                </span>
                <br />
              </div>
            </div>
          </div>
        </div>
        {/* picture & book */}
        <div className='relative imgService w-full '>
          <div className='z-10 relative imgService w-full hover:bg-black hover:bg-opacity-40 content-center xs:pl-[25%] lg:pl-[45%]'>
            <button className='flex btn group bg-white text-pink-900  h-14 w-52 rounded-none justify-center items-center 
              hover:bg-pink-900 hover:text-white hover:border-none font-about'>
              ĐẶT LỊCH
              <svg className=" w-6 h-6 text-pink-900 group-hover:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.133 12.632v-1.8a5.407 5.407 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V3.1a1 1 0 0 0-2 0v2.364a.933.933 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175Zm-13.267-.8a1 1 0 0 1-1-1 9.424 9.424 0 0 1 2.517-6.391A1.001 1.001 0 1 1 6.854 5.8a7.43 7.43 0 0 0-1.988 5.037 1 1 0 0 1-1 .995Zm16.268 0a1 1 0 0 1-1-1A7.431 7.431 0 0 0 17.146 5.8a1 1 0 0 1 1.471-1.354 9.424 9.424 0 0 1 2.517 6.391 1 1 0 0 1-1 .995ZM8.823 19a3.453 3.453 0 0 0 6.354 0H8.823Z" />
              </svg>
            </button>
          </div>
          <div className='z-7 absolute imgService w-full top-0 left-0'>
            <img src={item.img[0]} className='h-full w-full' />
          </div>
        </div>
      </div >
        </>
      ))}
      
      
    </>

  )
}

export default page