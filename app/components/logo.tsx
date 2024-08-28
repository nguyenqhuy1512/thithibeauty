import React from 'react'

const logo = () => {
    return (
        <div className='flex-grow group w-[120px] h-fit  text-center content-center'>
            <div className=' w-full font-logo text-pink-400 content-center xs:text-3xl lg:text-5xl '>
                <label className='cursor-pointer select-none group-hover:text-pink-600'>Thi Thi</label>
            </div>
            <div className=' w-full font-logo text-pink-400 content-start xs:text-3xl lg:text-5xl'>
                <label className='cursor-pointer select-none group-hover:text-pink-600 '>Beauty</label>
            </div>
        </div>
    )
}

export default logo