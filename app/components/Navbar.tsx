'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import '../components/logo';
import Logo from '../components/logo';
import { BellIc, CloseIc, ToggleIc } from '@/app/components/icon'

const Navbar: React.FC = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showServicesDropdown, setShowServicesDropdown] = useState(false);
    const [showProductsDropdown, setShowProductsDropdown] = useState(false);
    const stickyElementRef = useRef<HTMLDivElement>(null);
    const [scrollY, setScrollY] = useState(0);


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

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav className="bg-transparent w-[110%]">
                <div ref={stickyElementRef} className={`h-auto w-[100%] top-0 ${scrollY > 20 || showMobileMenu ? `fixed transition ease-in-out duration-700 bg-white` : `absolute`}`}>
                    <div className="flex xs:justify-start md:justify-center hover:bg-white transition ease-in-out duration-700">


                        <div className="xs:hidden md:hidden sm:hidden lg:flex space-x-6 lg:space-x-5 xl:space-x-8 2xl:space-x-14  p-2 justify-center content-center items-center">
                            <Link href="/" className="navItem">TRANG CHỦ</Link>
                            <Link href="/about" className="navItem">GIỚI THIỆU</Link>
                            <div className="relative content-center" onMouseEnter={toggleServicesDropdown}>
                                <Link href="/Services" className="navItem">DỊCH VỤ</Link>
                                <ul onMouseEnter={toggleServicesDropdown}
                                    onMouseLeave={closeServicesDropdown}
                                    className={`absolute ${showServicesDropdown ? 'block' : 'hidden'} bg-white shadow rounded-md mt-2 w-56`}>
                                    <li><Link href="/Services?page=meso" className="navChildItem">MESOTHERAPY</Link></li>
                                    <li><Link href="/Services?page=peel" className="navChildItem">DỊCH VỤ CHUYÊN SÂU (Chemical Peel)</Link></li>
                                    <li><Link href="/Services?page=trimun" className="navChildItem">CHĂM SÓC MỤN</Link></li>
                                </ul>
                            </div>
                            <div className="relative content-center" onMouseEnter={toggleProductsDropdown} >
                                <Link href="/Products" className="navItem">SẢN PHẨM</Link>
                                <ul onMouseEnter={toggleProductsDropdown}
                                    onMouseLeave={closeProductsDropdown}
                                    className={`absolute ${showProductsDropdown ? 'block' : 'hidden'} bg-white shadow-xl rounded-md mt-2 w-48`}>
                                    <li><a href="#" className="navChildItem">KEM DƯỠNG</a></li>
                                    <li><a href="#" className="navChildItem">KEM CHỐNG NẮNG</a></li>
                                    <li><a href="#" className="navChildItem">SỮA RỮA MẶT</a></li>
                                </ul>
                            </div>

                            <Logo />

                            <Link href="/Blog" className="hidden navItem">CẨM NANG</Link>
                            <Link href="/Library" className="navItem">THƯ VIỆN</Link>
                            <Link href="/Discount" className="navItem">ƯU ĐÃI</Link>
                            <Link href="/Contact" className="navItem">LIÊN HỆ</Link>
                            <Link href="/WorkingDay" className="group btn bg-pink-200 text-pink-600 hover:text-white border-none hover:bg-pink-600 font-bold lg:text-base xl:text-xl font-Lora" >
                                ĐẶT LỊCH
                                <BellIc />
                            </Link>
                        </div>


                        <div className="flex lg:hidden w-full border-none">
                            <label className="btn swap swap-rotate bg-transparent hover:bg-transparent border-none">
                                {/* this hidden checkbox controls the state */}
                                <input type="checkbox" onClick={toggleMobileMenu} className=' border-none'/>

                                {/* hamburger icon */}
                                <ToggleIc />

                                {/* close icon */}
                                <CloseIc />
                            </label>
                            <div className='flex justify-center items-center mr-12 w-full'>
                                <Logo />
                            </div>

                        </div>

                    </div>


                    <div className={`${showMobileMenu ? 'block' : 'hidden'} bg-gradient-to-b from-pink-50 to-pink-300 shadow-md`}>
                        <div className="container mx-auto px-4 py-3 flex flex-col space-y-4 justify-center items-center">
                            <a href="/" className="mbNavItem">TRANG CHỦ</a>
                            <a href="/about" className="mbNavItem">GIỚI THIỆU</a>
                            <a href="/Services" className="mbNavItem">DỊCH VỤ</a>
                            <a href="/Products" className="mbNavItem">SẢN PHẨM</a>
                            <a href="#" className="mbNavItem">THƯ VIỆN</a>
                            <a href="#" className="mbNavItem">KHUYẾN MÃI</a>
                            <a href="#" className="mbNavItem">LIÊN LẠC</a>
                            <Link href="/Workingday" className="group btn font-Lora bg-pink-200 text-pink-600 hover:text-white border-none hover:bg-pink-600 font-bold text-lg lg:text-xl"
                            >
                                ĐẶT LỊCH
                                <svg className="group-hover:text-white w-6 h-6 text-pink-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.133 12.632v-1.8a5.407 5.407 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V3.1a1 1 0 0 0-2 0v2.364a.933.933 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175Zm-13.267-.8a1 1 0 0 1-1-1 9.424 9.424 0 0 1 2.517-6.391A1.001 1.001 0 1 1 6.854 5.8a7.43 7.43 0 0 0-1.988 5.037 1 1 0 0 1-1 .995Zm16.268 0a1 1 0 0 1-1-1A7.431 7.431 0 0 0 17.146 5.8a1 1 0 0 1 1.471-1.354 9.424 9.424 0 0 1 2.517 6.391 1 1 0 0 1-1 .995ZM8.823 19a3.453 3.453 0 0 0 6.354 0H8.823Z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;