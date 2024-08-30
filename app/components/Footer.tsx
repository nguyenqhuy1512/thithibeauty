import React from 'react'
import logo from './logo'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-200 to-pink-100  xs:h-fit lg:h-[400px] ">
      <div className='xs:flex-grow lg:flex h-full w-full xs:p-5 lg:pl-[10%] lg:pr-[10%]'>



        <div className='flex justify-center items-center xs:h-1/4 xs:w-full lg:h-full lg:w-1/6'>
          <div className='flex xs:h-[100px] xs:w-[100px] lg:h-[170px] lg:w-[170px] items-center bg-white rounded-full p-5'>
            {logo()}
          </div>
        </div>




        <div className='flex-grow xs:h-1/6 xs:w-full lg:h-full lg:w-1/6 lg:text-center xs:p-5 lg:p-10'>
          <h3 className="xs:text-lg lg:text-2xl font-semibold text-pink-600 xs:ml-5 lg:ml-0 mb-4 font-about">THÔNG TIN</h3>
          <ul className="text-sm space-y-2 text-start ml-7">
            <li><a href="#" className="infoTxt">Trang chủ</a></li>
            <li><a href="#" className="infoTxt">Giới thiệu</a></li>
            <li><a href="#" className="infoTxt">Dịch vụ</a></li>
            <li><a href="#" className="infoTxt">Sản phẩm</a></li>
            <li><a href="#" className="infoTxt">Thư viện</a></li>
            <li><a href="#" className="infoTxt">Khuyến mãi</a></li>
          </ul>
        </div>

        <div className='flex-grow xs:h-1/6 xs:w-full lg:h-full lg:w-1/6 lg:text-center xs:p-5 lg:p-10'>
          <h3 className="xs:text-lg lg:text-2xl font-semibold text-pink-600 xs:ml-5 mb-4 font-about">LIỆU TRÌNH</h3>
          <ul className="text-gray-400 text-sm space-y-2 text-start ml-7">
            <li><a href="#" className="infoTxt">Mesotheraphy</a></li>
            <li><a href="#" className="infoTxt">Chemical Peel</a></li>
            <li><a href="#" className="infoTxt">Chăm sóc mụn</a></li>
          </ul>
        </div>


        <div className='flex xs:h-2/5 xs:w-full lg:h-full lg:w-3/6 xs:p-5 lg:p-0 lg:pt-10'>
          <div className='flex-grow h-full w-full lg:text-center lg:p-0'>
            <h3 className="xs:text-lg lg:text-2xl font-semibold text-pink-600 xs:ml-5 lg:ml-0 xs:mr-0 lg:mr-28 mb-4 font-about">LIÊN HỆ</h3>
            <ul className="text-gray-400 text-sm">
              <li className='flex'>
                <div className='flex h-12 pl-5'>
                  <img src='./icon/location.png' className='flex w-7 h-7' />
                  <span className='flex ml-2 text-pink-600 xs:text-md lg:text-xl font-about'>133 Đường 19/4 - P.Xuân An - TP.Phan Thiết - T.Bình Thuận</span>
                </div>
              </li>
              <li className='flex xs:mt-5 lg:mt-0'>
                <div className='flex rounded-full h-12 pl-5 pr-5 '>
                  <img src='./icon/phone.png' className='flex w-10 h-10' />
                  <span className='flex ml-2 text-pink-600 font-bold xs:text-lg lg:text-3xl font-about'>0971 781 276</span>
                </div>
              </li>


              <li className='flex ml-5 mt-2'>
                <div className='flex  space-x-2 ' >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" id="facebook" className='w-10 h-10'>
                    <path fill="#1877f2" d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"></path><path fill="#fff" d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z">
                    </path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="102" height="102" viewBox="0 0 102 102" id="instagram" className='w-10 h-10'><defs><radialGradient id="a" cx="6.601" cy="99.766" r="129.502" gradientUnits="userSpaceOnUse"><stop offset=".09" stopColor="#fa8f21"></stop><stop offset=".78" stopColor="#d82d7e"></stop></radialGradient><radialGradient id="b" cx="70.652" cy="96.49" r="113.963" gradientUnits="userSpaceOnUse"><stop offset=".64" stopColor="#8c3aaa" stopOpacity="0"></stop><stop offset="1" stopColor="#8c3aaa"></stop></radialGradient></defs><path fill="url(#a)" d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"></path><path fill="url(#b)" d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"></path><path fill="#fff" d="M461.114,477.413a12.631,12.631,0,1,1,12.629,12.632,12.631,12.631,0,0,1-12.629-12.632m-6.829,0a19.458,19.458,0,1,0,19.458-19.458,19.457,19.457,0,0,0-19.458,19.458m35.139-20.229a4.547,4.547,0,1,0,4.549-4.545h0a4.549,4.549,0,0,0-4.547,4.545m-30.99,51.074a20.943,20.943,0,0,1-7.037-1.3,12.547,12.547,0,0,1-7.193-7.19,20.923,20.923,0,0,1-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082,21.082,0,0,1,1.3-7.037,12.54,12.54,0,0,1,7.193-7.193,20.924,20.924,0,0,1,7.037-1.3c3.994-.184,5.194-.22,15.309-.22s11.316.039,15.314.221a21.082,21.082,0,0,1,7.037,1.3,12.541,12.541,0,0,1,7.193,7.193,20.926,20.926,0,0,1,1.3,7.037c.184,4,.22,5.194.22,15.314s-.037,11.316-.22,15.314a21.023,21.023,0,0,1-1.3,7.037,12.547,12.547,0,0,1-7.193,7.19,20.925,20.925,0,0,1-7.037,1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786,27.786,0,0,0-9.2,1.76,19.373,19.373,0,0,0-11.083,11.083,27.794,27.794,0,0,0-1.76,9.2c-.187,4.04-.229,5.332-.229,15.623s.043,11.582.229,15.623a27.793,27.793,0,0,0,1.76,9.2,19.374,19.374,0,0,0,11.083,11.083,27.813,27.813,0,0,0,9.2,1.76c4.042.184,5.332.229,15.623.229s11.582-.043,15.623-.229a27.8,27.8,0,0,0,9.2-1.76,19.374,19.374,0,0,0,11.083-11.083,27.716,27.716,0,0,0,1.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786,27.786,0,0,0-1.76-9.2,19.379,19.379,0,0,0-11.08-11.083,27.748,27.748,0,0,0-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229" transform="translate(-422.637 -426.196)">
                  </path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 54" id="tiktok" className='w-10 h-10'><g><path fill="#e71d40" d="M8.52,36.36a14.66,14.66,0,1,0,29.32.14l.08-16.41L40,21.23a18.22,18.22,0,0,0,8.67,2.21l0-7.72A10.81,10.81,0,0,1,38,4.86l-7.72,0-.15,31.64a6.95,6.95,0,1,1-6.92-7l0-7.71A14.67,14.67,0,0,0,8.52,36.36Z"></path><path fill="#40d8ff" d="M6.61,34.42a14.66,14.66,0,1,0,29.32.15L36,18.16l2.11,1.14a18.17,18.17,0,0,0,8.68,2.2l0-7.71A10.81,10.81,0,0,1,36.09,2.93l-7.72,0-.16,31.64a6.95,6.95,0,1,1-6.91-7l0-7.71A14.67,14.67,0,0,0,6.61,34.42Z"></path><path fill="#1c1c1c" d="M46.8,21.5l0-6a10.89,10.89,0,0,1-6.6-4,10.87,10.87,0,0,1-4-6.64l-6,0-.15,31.64a6.94,6.94,0,0,1-12.74,3.79,6.94,6.94,0,0,1,3.91-12.7l0-5.67a14.65,14.65,0,0,0-9.47,23.85A14.65,14.65,0,0,0,35.93,34.57L36,18.16l2.11,1.14A18.17,18.17,0,0,0,46.8,21.5Z"></path></g></svg>
                  <img src='./icon/zalo.png' className='flex w-10 h-10 white' />
                </div>
              </li>
            </ul>
          </div>
        </div>





      </div>
      <div className='flex w-full h-[50px] bg-pink-50 justify-center items-center'>
        <span className='text-black'>Copyright © Thi Thi Beauty</span>
      </div>
    </footer>

  )
}

export default Footer