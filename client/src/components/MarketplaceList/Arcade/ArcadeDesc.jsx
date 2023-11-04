import React from 'react'

const ArcadeDesc = ({ arcade }) => {
  return (
    <div className='tw-mt-11 max-lg:tw-mt-5 tw-border-b tw-pb-12'>
        <div className='tw-text-[2rem] max-lg:tw-text-2xl'>Game Description</div>
        <p className='tw-text-xl max-lg:tw-text-base max-sm:tw-text-sm tw-mt-4 tw-opacity-90'>{arcade.description}</p>
        <button className='btn-bg tw-text-white tw-mt-16 tw-w-64 tw-py-4 tw-px-2 tw-rounded-[1.3rem] tw-text-sm max-lg:tw-hidden'>Play now</button>
    </div>
  )
}

export default ArcadeDesc