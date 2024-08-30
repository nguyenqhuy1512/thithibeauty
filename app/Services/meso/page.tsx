import React from 'react'

const page = () => {
  return (
    <>
      <div className='relative w-full h-[300px] bg-pink-50 text-center content-end pb-20'>
        <div className='childTitle'>
          <span className='homeTitle'>MESOTHERAPHY</span>
        </div>

      </div>
      <div className='pageChild lg:pl-[15%] lg:pr-[15%]'>
        <div className='flex w-full h-1/3 bg-green-200'>
          <div className='flex w-2/5 h-full bg-slate-700'>

          </div>
          <div className='flex w-3/5 h-full bg-slate-400'>

          </div>
        </div>
        <div className='flex w-full h-2/3 bg-green-400'>

        </div>
      </div>
    </>

  )
}

export default page