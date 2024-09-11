'use client';
import React, { useEffect, useState } from 'react'
import HeaderPage from '../components/HeaderPage'
import Link from 'next/link'
import { brandNmList, Category, Origin, prodList, ProductSlideList } from '../components/content';
import { ProductSlide, ProductsSlide } from '../components/SlideShow';
import Slider from 'react-slick';
import { setProd, setProductSlide } from '../components/config';
import { BuyIc, CartIc, SearchIc } from '../components/icon';
import Pagination from '../components/Pagination';

const page = () => {

  const [isMenuOpened, setMenuOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("");
  const [isOpenSort, setOpenSort] = useState(false);

  interface TmpList {
    id: number,
    cnt: number
  }

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = prodList.slice(indexOfFirstItem, indexOfLastItem);



  useEffect(() => {
    var lstTmpCate: TmpList[] = []
    var lstTmpBrand: TmpList[] = []
    var lstTmpOrigin: TmpList[] = []

    prodList.forEach(element => {
      //get count category
      if (lstTmpCate.length == 0) {
        lstTmpCate.push({
          id: element.cateId,
          cnt: 1
        })
      }
      else {
        var isFind = false;
        lstTmpCate.forEach(item => {
          if (item.id === element.cateId) {
            isFind = true;
            item.cnt += 1
          }
        })
        if (isFind === false) {
          lstTmpCate.push({
            id: element.cateId,
            cnt: 1
          })
        }
      }

      //get count brand
      if (lstTmpBrand.length == 0) {
        lstTmpBrand.push({
          id: element.brandId,
          cnt: 1
        })
      }
      else {
        var isFind = false;
        lstTmpBrand.forEach(item => {
          if (item.id === element.brandId) {
            isFind = true;
            item.cnt += 1
          }
        })
        if (isFind === false) {
          lstTmpBrand.push({
            id: element.brandId,
            cnt: 1
          })
        }
      }

      //get count origin
      if (lstTmpOrigin.length == 0) {
        lstTmpOrigin.push({
          id: element.origin,
          cnt: 1
        })
      }
      else {
        var isFind = false;
        lstTmpOrigin.forEach(item => {
          if (item.id === element.origin) {
            isFind = true;
            item.cnt += 1
          }
        })
        if (isFind === false) {
          lstTmpOrigin.push({
            id: element.origin,
            cnt: 1
          })
        }
      }
    });

    Category.forEach(item => {
      lstTmpCate.forEach(subItem => {
        if (subItem.id === item.id) {
          item.cnt = subItem.cnt
          return
        }
      })
    })
    brandNmList.forEach(item => {
      lstTmpBrand.forEach(subItem => {
        if (subItem.id === item.id) {
          item.cnt = subItem.cnt
          return
        }
      })
    })
    Origin.forEach(item => {
      lstTmpOrigin.forEach(subItem => {
        if (subItem.id === item.id) {
          item.cnt = subItem.cnt
          return
        }
      })
    })
  }, []);





  return (
    <div className='overflow-hidden'>
      <HeaderPage bg_img={'/bg/bg-product.png'} title={'SẢN PHẨM'} about={false} />

      <div className='flex h-16 w-full bg-pink-200
                      xs:pl-0 xs:pr-0
                      xl:pl-[15%] xl:pr-[15%] '>
        <div className='flex h-full w-full items-center'>


          <div className="flex w-[25%]">
            <svg
              className="hover cursor-pointer text-pink-600"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 512 512">
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
            <button className="text-xl font-about ml-2 select-none hover:text-pink-600"
              onClick={() => setMenuOpen(!isMenuOpened)}>
              DANH MỤC TÌM KIẾM
            </button>
          </div>


          <div className='flex w-[50%] h-full'>
            <div className='flex w-full h-full justify-center items-center '>
              <input type="text" className="flex input input-md text-lg ml-10 w-full font-Lora rounded-l-full" placeholder="Nhập tìm kiếm tên sản phẩm, thương hiệu,..." />
            </div>
            <div className='flex w-20 h-full justify-start items-center'>
              <div className='flex w-auto h-auto pr-0 bg-white rounded-r-full'>
                <button className='btn w-full h-full bg-pink-400 text-white hover:text-white hover:bg-pink-600 rounded-full border-none'>
                  <SearchIc />
                </button>
              </div>

            </div>




          </div>


          <div className='flex w-[25%] h-full justify-end items-center'>
            <button className='btn bg-pink-50 hover:bg-pink-400 hover:text-white ml-2'>

              <svg className="w-6 h-6 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
              </svg>
              <span className='font-about text-lg font-normal'>Giỏ hàng ( 3 )</span>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpened && <div className='flex fade-in font-Lora bg-pink-50
                                       xl:pl-[15%] xl:pr-[15%]'>
        <div className='flex-grow w-1/3 h-fit p-3 border-r-2 border-gray-200'>
          <div className='flex txtSzBaseTt mb-5'>Danh mục sản phẩm</div>
          <div className='flex-grow'>
            {Category.map((item) => (
              <div className="form-control mb-2">
                <label className="flex justify-start items-center space-x-5 select-none cursor-pointer">
                  <input type="checkbox" className="checkbox" />
                  <span className="label-text">{item.cateNm} ({item.cnt})</span>

                </label>
              </div>
            ))}
          </div>
        </div>

        <div className='flex-grow w-1/3 h-52 p-3 border-r-2 border-gray-200'>
          <div className='flex txtSzBaseTt mb-5'>Xuất xứ</div>
          <div className='flex-grow'>
            {Origin.map((item) => (
              <div className="form-control mb-2">
                <label className="flex justify-start items-center space-x-5 select-none cursor-pointer">
                  <input type="checkbox" className="checkbox" />
                  <span className="label-text">{item.originNm} ({item.cnt})</span>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className='flex-grow w-1/3 h-52 p-3 '>
          <div className='flex txtSzBaseTt mb-5'>Thương hiệu</div>
          <div className='flex-grow'>
            {brandNmList.map((item) => (
              <div className="form-control mb-2">
                <label className="flex justify-start items-center space-x-5 select-none cursor-pointer">
                  <input type="checkbox" className="checkbox" />
                  <span className="label-text">{item.brandNm} ({item.cnt})</span>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>}

      {/* Brea */}
      <div className='flex h-10 w-full pl-[15%] pr-[15%] bg-pink-50 items-center  '>
        <div className="breadcrumbs text-sm font-about">
          <ul>
            <li><Link href='/'>Trang chủ</Link></li>
            <li><a href='/Products' onClick={() => setSelectedMenu('')}>Sản phẩm</a></li>
            {selectedMenu && <li><a>{selectedMenu}</a></li>}
          </ul>
        </div>
      </div>

      <div className='pageChild pt-10 pb-10 h-fit'>
        <div className='flex w-full h- pt-10 pb-10 mb-10
                      xl:pl-[15%] xl:pr-[15%] '>
          <div className='flex-grow w-full h-full bg-white'>

            {/* sort */}
            <div className='flex w-full h-12 justify-end'>
              <div className='flex w-48 h-full pl-10 pr-10  justify-center items-center cursor-pointer select-none
                                border-2 border-gray-200  hover:border-gray-400 hover:bg-gray-300'
                onClick={() => setOpenSort(!isOpenSort)}>
                Sắp xếp theo ↓
              </div>
            </div>

            <div className='flex relative'>
              {isOpenSort && <div className='z-10 absolute w-48 h-fit border-2 border-gray-200 bg-white justify-end right-0 shadow-xl'>
                <ul className='space-y-2'>
                  <li className='hover:text-pink-400 cursor-pointer'>Mới nhất</li>
                  <li className='hover:text-pink-400 cursor-pointer'>Bán chạy nhất</li>
                  <li className='hover:text-pink-400 cursor-pointer'>Khuyến mãi</li>
                  <li className='hover:text-pink-400 cursor-pointer'>Giá giảm dần</li>
                  <li className='hover:text-pink-400 cursor-pointer'>Giá tăng dần</li>
                </ul>
              </div>}
            </div>
            {/* sort */}


            <div className='flex-grow  w-full h-full bg-white'>
              <div className='grid grid-cols-5 gap-6 w-full h-full'>
                {currentItems.map((item) => (


                  <div key={item.id} className='flex-grow h-96 '>
                    <div className='relative'>
                      <div className='absolute w-fit h-fit p-2 bg-red-600 top-0 right-0 justify-center items-center'>
                        <span className='text-white'>15%</span>
                      </div>
                    </div>
                    <div className='h-4/5 w-full overflow-hidden'>
                      <img src={item.img} className='h-full w-full hover:scale-110 transition duration-500 ease-in-out' />
                      <div className='relative'>
                        <button className='absolute btn w-12 p-2 bg-pink-200 bottom-0 right-0 mr-12 border-none rounded-full'>
                          <CartIc />
                        </button>
                        <button className='absolute btn w-12 p-2 bg-pink-400 bottom-0 right-0  border-none rounded-full'>
                          <BuyIc />
                        </button>
                      </div>
                    </div>
                    <div className='flex-grow h-1/5 w-full space-y-2'>
                      <div className='flex h-2/3 w-full'>
                        {item.prodNm}
                      </div>
                      <div className='flex h-1/3 w-full items-center pb-5'>
                        <span className='text-pink-600 text-xl'>{item.price}đ </span>
                        <span className='line-through'>{item.sellPrice}đ</span>
                      </div>
                    </div>














                  </div>
                ))}
              </div>
              <div className='flex relative justify-center items-center'>
                <Pagination
                  totalItems={prodList.length}
                  itemsPerPage={itemsPerPage}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                />
              </div>

            </div>


          </div>
        </div>
      </div>
      {/* Products */}







    </div>

  )
}

export default page