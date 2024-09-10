'use client';
import React, { useEffect } from 'react'
import HeaderPage from '../components/HeaderPage'
import { serviceData, ServicesContent } from '../components/content'
import { useSearchParams } from 'next/navigation';
import { BellIc } from '../components/icon';

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
    <div className='overflow-x-hidden'>
      <HeaderPage title={'DỊCH VỤ'} about={false} />

      {ServicesContent.map((item) => (
        <div key={item.id} className='pageChild pt-10 pb-10 h-fit'>
          {/* title */}
          <div className='flex h-fit w-full justify-center items-center'>
            <span className='text-yellow-500 fontSzTitleService'>{item.title}</span>
          </div>
          {/* info */}
          <div className='flex-grow h-full w-full pt-5 
                        xs:pl-5 xs:pr-5
                        md:pl-20 md:pr-20
                        lg:pl-10 lg:pr-10
                        xl:pl-10 xl:pr-10
                        2xl:pl-[10%] 2xl:pr-[10%]'>
            <div className='xs:flex-grow lg:flex h-fit w-full items-start '>
              <div className='lg:flex-grow h-1/2 xs:w-full lg:w-1/2'>
                {item.content.info.map((infoChild, index) => (
                  <div key={index} >
                    <span className='txtSzBaseTt  font-semibold'>{infoChild.issue}<br /></span>
                    {!infoChild.explain.includes("\n") ? <span className='txtSzBase'>{infoChild.explain}</span> :
                      <pre><span className='txtSzBase'>{infoChild.explain}</span></pre>
                    }
                  </div>
                ))}
              </div>
              <div className='flex-grow h-1/2 xs:w-full lg:w-1/2 xs:mt-5 lg:mt-0 lg:ml-5 '>
                <div className='flex h-full w-full'>
                  <span className='txtSzBaseTt font-semibold'>Bảng giá ( liệu trình 1 buổi )</span>
                </div>
                <div className='flex-grow h-full w-full'>
                  {item.content.menu.map((itemChild) => (
                    <div key={item.id} className='flex h-full w-full border-b-2 border-gray-200'>
                      <div className='flex-grow h-full w-full items-start'>
                        <div className='flex'>
                          <span className='txtSzBase'>{itemChild.method}</span>
                        </div>
                        {itemChild.bonus && <div className='flex'>
                          <span className='txtSzBase text-yellow-500'>{itemChild.bonus}</span>
                        </div>}
                      </div>
                      <div className='flex h-auto w-1/4 justify-end items-start'>
                        <span className='txtSzBase text-pink-600'> {itemChild.price} </span>
                      </div>
                    </div>

                  ))}
                </div>
                {item.content.discount &&
                  <>
                    <div className='flex h-full w-full xs:mt-5'>
                      <span className='txtSzBaseTt font-semibold'>Khuyến mãi</span><br />
                    </div>
                    <div className='flex h-full w-full'>
                      <pre className='italic txtSzBase text-yellow-500'>{item.content.discount}</pre>
                    </div>
                  </>
                }
              </div>
            </div>
          </div>
          {/* picture & book */}
          <div className='relative imgService w-full mt-5'>
            <div className='z-10 relative imgService w-full hover:bg-black hover:bg-opacity-40'>
              <div className='flex w-full h-full justify-center content-center items-center'>
                <button className='flex btn group bg-white text-pink-900 xs:h-10 xs:w-36 md:h-14 md:w-52 xl:w-72 rounded-none justify-center items-center 
                                 hover:bg-pink-900 hover:text-white hover:border-none font-Lora txtSzBaseTt'>
                  ĐẶT LỊCH
                  <BellIc />
                </button>
              </div>

            </div>
            <div className='z-7 absolute imgService w-full top-0 left-0'>
              <img src={item.img[0]} className='h-full w-full' />
            </div>
          </div>
        </div >
      ))}


    </div>

  )
}

export default page