import Link from 'next/link'
import React from 'react'

const logo = () => {
    return (
        <Link href="/" className='flex-grow group w-[120px] h-fit text-center content-center pt-2'>
            <div className=' w-full font-gvibes text-pink-400 content-center xs:text-3xl lg:text-4xl '>
                <label className='cursor-pointer select-none group-hover:text-pink-600'>Thi Thi</label>
            </div>
            <div className=' w-full font-gvibes text-pink-400 content-start xs:text-3xl lg:text-4xl'>
                <label className='cursor-pointer select-none group-hover:text-pink-600 '>Beauty</label>
            </div>
        </Link>
    )
}

export default logo