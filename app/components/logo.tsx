import Link from 'next/link'
import React from 'react'

const logo: React.FC = () => {
    return (
        <>
            <div className='xs:hidden md:hidden sm:hidden lg:block xl:block 2xl:block text-center'>
                <Link href="/" className='flex-grow group w-full h-fit pt-2 '>
                    <div className='flex w-full font-GVibes text-pink-400 lg:text-3xl xl:text-4xl'>
                        <span className='cursor-pointer select-none group-hover:text-pink-600'>Thi Thi</span>
                    </div>
                    <div className='flex w-full font-GVibes text-pink-400 justify-center lg:text-3xl xl:text-4xl'>
                        <span className='cursor-pointer select-none group-hover:text-pink-600 '>Beauty</span>
                    </div>
                </Link>
            </div>
            <div className='xs:block md:block sm:block lg:hidden xl:hidden 2xl:hidden '>
                <a href="/" className='flex group w-auto h-fit text-center content-center pt-2 '>
                    <div className='flex w-full font-GVibes text-pink-400 justify-center'>
                        <span className='cursor-pointer select-none group-hover:text-pink-600 xs:text-3xl'>Thi Thi Beauty</span>
                    </div>
                </a>
            </div>
        </>
    )
}

export default logo