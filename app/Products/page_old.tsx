'use client';
import React, { useEffect, useState } from 'react'
import HeaderPage from '../components/HeaderPage'
import Link from 'next/link'
import { brandNmList, Category, Origin, prodList, CommonSearchList, MenuSearchList } from '../components/content';
import { BuyIc, CartIc, SearchIc, ToggleIc } from '../components/icon';
import Pagination from '../components/Pagination';

const page = () => {

  interface TmpList {
    id: number,
    cnt: number
  }

  interface TmpCart {
    id: number,
    prodNm: string,
  }

  interface TmpSearch {
    id: number,
    title: string,
  }

  //open status
  const [isMenuOpened, setMenuOpen] = useState(false);
  const [isOpenSort, setOpenSort] = useState(false);
  const [isOpenBrec, setOpenBrec] = useState(false);
  const [isShowSearch, setShowSearch] = useState(false);


  //load list for search
  const [loadCate, setLoadCate] = useState(Category);
  const [loadBrand, setLoadBrand] = useState(brandNmList);
  const [loadOrigin, setLoadOrigin] = useState(Origin);

  //load list products
  const [loadProList, setLoadProList] = useState(prodList);

  //setting page
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // cart picking tmp
  const [cartItems, setCartItems] = useState<TmpCart[]>([]);

  // searching list tmp
  const [searchCate, setSearchCate] = useState<TmpSearch[]>([]);
  const [searchOrigin, setSearchOrigin] = useState<TmpSearch[]>([]);
  const [searchBrand, setSearchBrand] = useState<TmpSearch[]>([]);

  // add item to searching list tmp
  const handleChkBoxCateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name, checked } = event.target;
    if (checked) {
      setSearchCate([...searchCate, { id: parseInt(value), title: name }])
    }
    else {
      setSearchCate(() => (
        searchCate.filter((item) => item.id !== parseInt(value))
      ))
    }
  };
  const handleChkBoxOriginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name, checked } = event.target;
    if (checked) {
      setSearchOrigin([...searchOrigin, { id: parseInt(value), title: name }])
    }
    else {
      setSearchOrigin(() => (
        searchOrigin.filter((item) => item.id !== parseInt(value))
      ))
    }
  };
  const handleChkBoxBrandChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name, checked } = event.target;
    if (checked) {
      setSearchBrand([...searchBrand, { id: parseInt(value), title: name }])
    }
    else {
      setSearchBrand(() => (
        searchBrand.filter((item) => item.id !== parseInt(value))
      ))
    }
  };



  //first load page
  let currentItems = loadProList.sort((a, b) => new Date(b.dateImp).getTime() - new Date(a.dateImp).getTime())
    .slice(indexOfFirstItem, indexOfLastItem);



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
                      2xl:pl-[15%] 2xl:pr-[15%] '>
        <div className='flex h-full w-full items-center'>
          {/* Danh mục */}
          <div className="flex w-1/4 items-center" 
          onMouseEnter={() => {
            setShowSearch(false)
            setMenuOpen(true)
          }}>
            <ToggleIc />
            <button className="txtSzBaseTt ml-2 select-none text-pink-600 hover:text-pink-400">
              DANH MỤC TÌM KIẾM
            </button>
          </div>

          {/* search */}
          <div className='flex w-2/3 h-full '>
            <div className='flex w-full h-full justify-center items-center '>
              <input type="text"
                className="flex input input-md focus:outline-none focus:border-none text-lg ml-10 w-full font-Lora rounded-l-full"
                placeholder="Nhập tìm kiếm tên sản phẩm, thương hiệu,..."
                onFocus={() => {
                  setMenuOpen(false);
                  setShowSearch(true);
                }} />
            </div>
            <div className='flex w-20 h-full justify-start items-center'>
              <div className='flex w-auto h-auto pr-0 bg-white rounded-r-full'>
                <button className='btn w-full h-full bg-pink-400 text-white hover:text-white hover:bg-pink-600 rounded-full border-none'
                  onClick={() => {
                    // setOpenBrec(true)
                  }}>
                  <SearchIc />
                </button>
              </div>
            </div>
          </div>

          {/* cart */}
          <div className='flex w-1/6 h-full justify-end items-center'>
            <button className='w-full btn bg-pink-300 hover:bg-pink-400 border-none'>
              <CartIc />
              <span className='xs:hidden lg:block text-base text-white font-normal'>Giỏ hàng ({cartItems.length})</span>
            </button>
          </div>

        </div>
      </div>

      {/* fast search */}
      <div className='flex w-full 
                      xs:pl-0 xs:pr-0
                      2xl:pl-[15%] 2xl:pr-[15%] '>
        {/* Menu list */}
        {/* <div className="flex relative w-1/4 bg-slate-400">
          {
            isMenuOpened && <div className='px-5 z-10  absolute w-full h-fit border-2 border-gray-200 bg-white justify-end shadow-xl'
              onMouseLeave={() => setMenuOpen(false)}>
              <ul className='py-5'>
                {Category.map((item) => (
                  <li key={item.id} className='hover:text-pink-400 p-2 txtSzBase'>
                    <a href='#'>{item.cateNm}</a>
                  </li>
                ))}
              </ul>
            </div>
          }
        </div> */}
        {
          // isShowSearch && <div className='flex relative ml-20 mr-10 w-2/3'>
          //   <div className='px-5 z-10 absolute w-full h-fit border-2 border-gray-200 bg-white justify-end shadow-xl'
          //     onMouseLeave={() => setShowSearch(false)}>
          //     {/* Common keyword */}
          //     <div className='search-part'>
          //       <div className='search-part-title'>
          //         Từ khóa phổ biến
          //       </div>
          //       <div className='search-part-content '>
          //         <ul className='flex flex-wrap space-x-2'>
          //           {CommonSearchList.map((item, index) =>
          //             <li key={index} className='search-part-item'><a href='#'>{item}</a></li>
          //           )}
          //         </ul>
          //       </div>
          //     </div>

          //     {/* Common brand */}
          //     <div className='search-part'>
          //       <div className='search-part-title'>
          //         Thương hiệu nổi bật
          //       </div>
          //       <div className='search-part-content'>
          //         <ul className='flex-wrap w-full h-auto grid grid-cols-6 gap-2'>
          //           {brandNmList.slice(0, 6).map((item) =>
          //             <li key={item.id} className='border-2 border-gray-200 rounded-md p-1'>
          //               <img className="w-full h-full" src={item.img} />
          //             </li>
          //           )}
          //         </ul>
          //       </div>
          //     </div>

          //     {/* Common menu */}
          //     <div className='search-part'>
          //       <div className='search-part-title'>
          //         Danh mục nổi bật
          //       </div>
          //       <div className='search-part-content'>
          //         <ul className='flex flex-wrap space-x-2'>
          //           {MenuSearchList.map((item, index) =>
          //             <li key={index} className='search-part-item'><a href='#'>{item}</a></li>
          //           )}
          //         </ul>
          //       </div>

          //     </div>
          //   </div>
          // </div>
        }
        {/* <div className='flex w-1/6'>
        </div> */}
      </div>



      {/* menu search */}
      {isMenuOpened && <div className='flex fade-in font-Lora bg-pink-50
                                       xl:pl-[15%] xl:pr-[15%]'>

        {/* menu */}
        {/* <div className='flex-grow w-1/3 h-fit p-3 border-r-2 border-gray-200'>
          <div className='flex txtSzBaseTt mb-5'>Danh mục sản phẩm</div>
          <div className='flex-grow'>
            {loadCate.map((item) => (
              <div className="form-control mb-2">
                <label className="flex justify-start items-center space-x-5 select-none cursor-pointer">
                  <input type="checkbox" value={item.id} name={item.cateNm} className="checkbox checkbox-secondary" onChange={handleChkBoxCateChange} />



                  <span className="label-text">{item.cateNm} ({item.cnt})</span>
                </label>
              </div>
            ))}
          </div>
        </div> */}

        {/* origin */}
        {/* <div className='flex-grow w-1/3 h-52 p-3 border-r-2 border-gray-200'>
          <div className='flex txtSzBaseTt mb-5'>Xuất xứ</div>
          <div className='flex-grow'>
            {loadOrigin.map((item) => (
              <div className="form-control mb-2">
                <label className="flex justify-start items-center space-x-5 select-none cursor-pointer">
                  <input type="checkbox" value={item.id} name={item.originNm} className="checkbox checkbox-secondary" onChange={handleChkBoxOriginChange} />
                  <span className="label-text">{item.originNm} ({item.cnt})</span>
                </label>
              </div>
            ))}
          </div>
        </div> */}

        {/* brandname */}
        {/* <div className='flex-grow w-1/3 h-52 p-3 '>
          <div className='flex txtSzBaseTt mb-5'>Thương hiệu</div>
          <div className='flex-grow'>
            {loadBrand.map((item) => (
              <div className="form-control mb-2">
                <label className="flex justify-start items-center space-x-5 select-none cursor-pointer">
                  <input type="checkbox" value={item.id} name={item.brandNm} className="checkbox checkbox-secondary" onChange={handleChkBoxBrandChange} />
                  <span className="label-text">{item.brandNm} ({item.cnt})</span>
                </label>
              </div>
            ))}
          </div>
        </div> */}
      </div>}

      {/* Brea */}
      {/* <div className='flex h-10 w-full pl-[15%] pr-[15%] bg-pink-50 items-center'>
        <div className="breadcrumbs text-sm font-about">
          <ul>
            <li><Link href='/'>Trang chủ</Link></li>
            <li><a href='/Products' >Sản phẩm</a></li>
            <li>
              {isOpenBrec && searchCate.map((item) => (
                <Link href={''}>{item.title + ", "}</Link>
              ))}
            </li>

          </ul>
        </div>
      </div> */}

      {/* product form */}
      <div className='pageChild h-fit mt-10'>
        <div className='flex w-full h-full 
                      2xl:pl-[15%] 2xl:pr-[15%] '>
          <div className='flex-grow w-full h-full'>

            {/* sort */}
            <div className='flex w-full h-12 justify-between'>

              {/* tong san pham */}
              {/* <div className='flex w-fit h-fit items-center px-5 py-2 rounded-full bg-pink-200 '>
                <span className='text-pink-600'>Tổng sản phẩm: {loadProList.length}</span>
              </div> */}

              {/* option sort button*/}
              {/* <div className='flex w-48 h-full pl-10 pr-10 justify-center items-center cursor-pointer select-none
                                border-2 border-gray-200  hover:border-gray-400 hover:bg-gray-300'
                onClick={() => setOpenSort(!isOpenSort)}>
                Sắp xếp theo ↓
              </div> */}
            </div>

            {/* option sort */}
            {/* <div className='flex relative'>
              {isOpenSort && <div className='z-10 absolute w-48 h-fit border-2 border-gray-200 bg-white justify-end right-0 shadow-xl'>
                <ul className='space-y-2'>
                  <li className='hover:text-pink-400 cursor-pointer'>Mới nhất</li>
                  <li className='hover:text-pink-400 cursor-pointer'>Bán chạy nhất</li>
                  <li className='hover:text-pink-400 cursor-pointer'>Khuyến mãi</li>
                  <li className='hover:text-pink-400 cursor-pointer'>Giá giảm dần</li>
                  <li className='hover:text-pink-400 cursor-pointer'>Giá tăng dần</li>
                </ul>
              </div>}
            </div> */}
            {/* sort */}



            {/* products list */}
            <div className='flex-grow  w-full h-full bg-white mt-10'>
              {/* <div className='grid grid-cols-5 gap-6 w-full h-full'>
                {currentItems.map((item) => (

                  <div key={item.id} className='flex-grow h-96 '>
                    <div className='relative'>
                      <div className='absolute w-fit h-fit p-2 bg-red-600 top-0 right-0 justify-center items-center'>
                        <span className='text-white'>15%</span>
                      </div>
                    </div>
                    <div className='h-4/5 w-full overflow-hidden'>
                      <img src={item.img} className='h-full w-full hover:scale-110 transition duration-500 ease-in-out' />
                      <div className='flex relative '>
                        <button className='absolute btn w-12 p-2 bg-pink-200 bottom-0 right-0 mr-12 border-none rounded-full'
                          onClick={() => setCartItems([...cartItems, { id: item.id, prodNm: item.prodNm }])}>
                          <CartIc />
                        </button>
                        <button className='absolute btn w-12 p-2 bg-pink-400 bottom-0 right-0 border-none rounded-full'>
                          <BuyIc />
                        </button>
                      </div>
                    </div>
                    <div className='flex-grow h-1/5 w-full space-y-2'>
                      <div className='flex h-2/3 w-full'>
                        {item.prodNm}
                      </div>
                      <div className='flex h-1/3 w-full items-center pb-5'>
                        <span className='text-pink-600 text-xl'>{item.price}đ</span>
                        <span className='line-through ml-2'> {item.sellPrice}đ</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div> */}

              {/* <div className='flex relative justify-center items-center mt-10'>
                <Pagination
                  totalItems={prodList.length}
                  itemsPerPage={itemsPerPage}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                />
              </div> */}

            </div>
            {/* products list */}

          </div>
        </div>
      </div>
      {/* Products */}



    </div>

  )
}

export default page