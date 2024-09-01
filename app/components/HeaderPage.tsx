import React from 'react'
interface props {
    bg_img?: string,
    title:string,
    font:string,
    about: boolean
}

const HeaderPage: React.FC<props> = ({bg_img,title,font,about}) => {
    return (
        <>
            {/* Header */}
            <div className='relative w-full h-[300px] '>
                <div className='absolute w-full h-[300px] '>
                    <img src={`${bg_img? bg_img:'/bg/about.jpg'}`} className='h-full w-full' />
                </div>
                <div className='relative w-full h-full text-center content-end pb-10 select-none'>
                    <span className={`${font} ${about ? 'text-[80px]' : 'text-5xl' }   text-pink-600`}>{title}</span>
                </div>
            </div>
        </>
    )
}

export default HeaderPage