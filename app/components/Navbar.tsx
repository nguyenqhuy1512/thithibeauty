'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showServicesDropdown, setShowServicesDropdown] = useState(false);
    const [showProductsDropdown, setShowProductsDropdown] = useState(false);

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    const toggleServicesDropdown = () => {
        setShowServicesDropdown(true);
        closeProductsDropdown();
    };

    const closeServicesDropdown = () => {
        setShowServicesDropdown(false);
    }

    const toggleProductsDropdown = () => {
        setShowProductsDropdown(true);
        closeServicesDropdown();
    };

    const closeProductsDropdown = () => {
        setShowProductsDropdown(false);
    }

    return (
        <>
            {/* mini navbar for address & phone, booking click */}
            {/* < div className="w-full h-auto bg-white hidden sm:block md:block lg:inline-flex relative" >

                < div className="w-full h-10 hidden sm:block content-center" >
                    <div className="flex w-full justify-center">
                        <div className="flex place-items-center">
                            <div className="h-5 w-5">
                                <img src="/location.png" />
                            </div>
                            <div className="ml-2">
                                <span>
                                    133 Đường 19 tháng 4, P. Phú Thủy, TP. Phan thiết, Bình Thuận
                                </span>
                            </div>
                        </div>
                    </div>
                </div > 

                < div className="w-full h-10 hidden sm:block content-center" >
                    <div className="flex w-full justify-center">
                        <div className="flex place-items-center">
                            <div className="h-5 w-5">
                                <img src="/phone.png" />
                            </div>
                            <div className="ml-2">
                                <span>
                                    Liên hệ : 0912 234 4567
                                </span>
                            </div>
                            <div className="flex ml-5 h-auto w-32">
                                <div className="btn btn-sm w-full bg-pink-500 hover:bg-pink-200 rounded-lg grid place-content-center ">
                                    <span className="text-white font-sans text-lg">Đặt lịch</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div > 
            </div >  */}

            <nav className="bg-transparent">
                <div className="mx-auto px-10 py-2 flex justify-between items-center hover:bg-white">
                    <div className="grid items-center justify-items-center bg-transparent">
                        <img className='w-max h-16 rounded-full hover:text-pink-600 focus:text-pink-600 object-cover cursor-pointer' src="./logo.png" />
                        <a href="/" className="xs:hidden sm:block md:hidden lg:block ml-5 hover:text-pink-600 focus:text-pink-600 font-bold text-4xl font-logo text-pink-400">
                            THI THI BEAUTY
                        </a>
                    </div>
                    <div className="hidden md:flex space-x-6 lg:space-x-14">
                        <a href="/" className="content-center text-pink-600 hover:text-pink-300 hover:underline font-bold text-md lg:text-xl">TRANG CHỦ</a>
                        <a href="/" className="content-center text-pink-600 hover:text-pink-300 hover:underline font-bold text-md lg:text-xl">GIỚI THIỆU</a>
                        <div className="relative content-center" onMouseEnter={toggleServicesDropdown}> {/* onMouseLeave={toggleFeaturesDropdown} */}
                            <Link href="/Services" className="text-pink-600 hover:text-pink-300 hover:underline font-bold text-md lg:text-xl">DỊCH VỤ</Link>
                            <ul onMouseEnter={toggleServicesDropdown} onMouseLeave={closeServicesDropdown} className={`absolute ${showServicesDropdown ? 'block' : 'hidden'} bg-white shadow rounded-md mt-2 w-36 z-3`}>
                                <li><a href="#" className="block px-4 py-2 hover:bg-pink-100 text-pink-600">SPA</a></li>
                                <li><a href="#" className="block px-4 py-2 hover:bg-pink-100 text-pink-600">SKINCARE</a></li>
                                <li><a href="#" className="block px-4 py-2 hover:bg-pink-100 text-pink-600">PHUN XÂM</a></li>
                                <li><a href="#" className="block px-4 py-2 hover:bg-pink-100 text-pink-600">TRỊ MỤN</a></li>
                            </ul>
                        </div>
                        <div className="relative content-center" onMouseEnter={toggleProductsDropdown} > {/* onMouseLeave={toggleFeaturesDropdown} */}
                            <Link href="/Products" className="text-pink-600 hover:text-pink-300 hover:underline font-bold text-md lg:text-xl">SẢN PHẨM</Link>
                            <ul onMouseEnter={toggleProductsDropdown} onMouseLeave={closeProductsDropdown} className={`absolute ${showProductsDropdown ? 'block' : 'hidden'} bg-white shadow rounded-md mt-2 w-48 z-4`}>
                                <li><a href="#" className="block px-4 py-2 hover:bg-pink-100 text-pink-600">KEM DƯỠNG</a></li>
                                <li><a href="#" className="block px-4 py-2 hover:bg-pink-100 text-pink-600">KEM CHỐNG NẮNG</a></li>
                                <li><a href="#" className="block px-4 py-2 hover:bg-pink-100 text-pink-600">SỮA RỮA MẶT</a></li>
                            </ul>
                        </div>
                        <Link href="/Blog" className="hidden content-center text-pink-600 hover:text-pink-300 hover:underline font-bold text-md lg:text-xl">CẨM NANG</Link>
                        <Link href="/Library" className="content-center text-pink-600 hover:text-pink-300 hover:underline font-bold text-md lg:text-xl">THƯ VIỆN</Link>
                        <Link href="/Discount" className="content-center text-pink-600 hover:text-pink-300 hover:underline font-bold text-md lg:text-xl">KHUYẾN MÃI</Link>
                        <Link href="/Contact" className="content-center text-pink-600 hover:text-pink-300 hover:underline font-bold text-md lg:text-xl">LIÊN HỆ</Link>
                        <Link href="/WorkingDay" className="btn bg-pink-200 text-pink-600 hover:text-white hover:underline border-none hover:bg-pink-600 font-bold text-md lg:text-xl" >ĐẶT LỊCH</Link>
                    </div>
                    <button className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        onClick={() => { return 1 }}>
                        <img className="w-5 h-5" src='./phone.png' />
                    </button>
                    <button className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        onClick={() => {
                        }}>
                        <img className="w-5 h-5" src='./location.png' />
                    </button>
                    <button className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-pink-600 hover:text-pink-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" onClick={toggleMobileMenu}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                <div className={`md:hidden ${showMobileMenu ? 'block' : 'hidden'} bg-pink-200 shadow-md`}>
                    <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
                        <a href="#" className="text-pink-600 hover:text-pink-300 hover:underline font-bold">TRANG CHỦ</a>
                        <a href="#" className="text-pink-600 hover:text-pink-300 hover:underline font-bold">GIỚI THIỆU</a>
                        <a href="#" className="text-pink-600 hover:text-pink-300 hover:underline font-bold">DỊCH VỤ</a>
                        <a href="#" className="text-pink-600 hover:text-pink-300 hover:underline font-bold">SẢN PHẨM</a>
                        <a href="#" className="text-pink-600 hover:text-pink-300 hover:underline font-bold">THƯ VIỆN</a>
                        <a href="#" className="text-pink-600 hover:text-pink-300 hover:underline font-bold">KHUYẾN MÃI</a>
                        <a href="#" className="text-pink-600 hover:text-pink-300 hover:underline font-bold">LIÊN LẠC</a>
                        <a href="#" className="btn lg:text-xl text-pink-600 hover:text-pink-300 hover:underline font-bold">ĐẶT LỊCH</a>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;