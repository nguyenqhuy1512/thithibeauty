import Link from 'next/link'
import React from 'react'

const logo: React.FC = () => {
    return (
        <>
            <div className='xs:hidden md:hidden sm:hidden lg:block xl:block 2xl:block'>
                <Link href="/" className='flex-grow group w-[120px] h-fit text-center content-center pt-2 '>
                    <div className='flex w-full font-gvibes text-pink-400 content-center xs:text-2xl lg:text-3xl xl:text-4xl '>
                        <label className='cursor-pointer select-none group-hover:text-pink-600'>Thi Thi</label>
                    </div>
                    <div className='flex w-full font-gvibes text-pink-400 content-start xs:text-2xl lg:text-3xl xl:text-4xl'>
                        <label className='cursor-pointer select-none group-hover:text-pink-600 '>Beauty</label>
                    </div>
                </Link>
            </div>
            <div className='xs:block md:block sm:block lg:hidden xl:hidden 2xl:hidden'>
                <Link href="/" className='flex group w-auto h-fit text-center content-center pt-2 '>
                    <div className='flex w-full font-gvibes text-pink-400 content-center text-3xl'>
                        <span className='cursor-pointer select-none group-hover:text-pink-600'>Thi Thi Beauty</span>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default logo