import React from 'react'

const Instructions = ({ arcade }) => {
  return (
    <div className='tw-mt-12 max-lg:tw-mt-5 tw-border-b tw-pb-5'>
        <div className='tw-text-[2rem] max-lg:tw-text-2xl'>Instructions</div>
        <p className='tw-text-xl max-lg:tw-text-base max-sm:tw-text-sm tw-pr-5 tw-opacity-90 tw-mt-5'>{arcade.instruction}</p>
    </div>
  )
}

export default Instructions