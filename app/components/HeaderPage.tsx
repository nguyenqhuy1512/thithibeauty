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
            <div className='relative w-full xs:h-[200px] lg:h-[300px] '>
                <div className='absolute w-full xs:h-[200px] lg:h-[300px] '>
                    <img src={`${bg_img? bg_img:'/bg/about.jpg'}`} className='h-full w-full' />
                </div>
                <div className='relative w-full h-full text-center xs:pt-[120px] lg:pt-[160px] select-none '>
                    {about && <div className='xs:text-[36px] lg:text-[64px] xl:text-[80px] font-GVibes text-pink-600'>{title}</div>}
                    {!about && <div className='xs:text-3xl sm:text-4xl lg:text-5xl font-Lora text-pink-600'>{title}</div>}
                </div>
            </div>
        </>
    )
}

export default HeaderPage