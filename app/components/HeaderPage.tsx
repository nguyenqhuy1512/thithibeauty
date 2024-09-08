import React from 'react'
interface props {
    bg_img?: string,
    title:string,
    fontSz?: string,
    about: boolean
}

const HeaderPage: React.FC<props> = ({bg_img,title,about}) => {
    return (
        <>
            {/* Header */}
            <div className='relative w-full h-[300px] '>
                <div className='absolute w-full h-[300px] '>
                    <img src={`${bg_img? bg_img:'/bg/about.jpg'}`} className='h-full w-full' />
                </div>
                <div className='relative w-full h-full text-center content-end pb-10 select-none'>
                    {about && <span className='xs:text-[44px] sm:text-[54px] lg:text-[64px] xl:text-[80px] font-gvibes text-pink-600'>{title}</span>}
                    {!about && <span className='xs:text-3xl sm:text-4xl lg:text-5xl font-about text-pink-600'>{title}</span>}
                </div>
            </div>
        </>
    )
}

export default HeaderPage