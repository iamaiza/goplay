import React from 'react'
import "./Section-3.css"

const Section3 = () => {
  return (
    <section className='tw-bg-[#6165F3] tw-px-16 tw-pt-5 tw-pb-4 learn-section'>
        <div className='tw-h-[60vh] tw-flex tw-justify-between tw-items-center max-[1200px]:tw-h-full max-[980px]:tw-flex-col'>
            <div className='tw-flex-1'>
                <figure className='tw-max-w-[15rem] tw-w-full'>
                    <img className='tw-w-full tw-object-cover' src="https://goplay.myxplora.com/_nuxt/img/golearn-color-logo.764d0f6.png" alt="" />
                </figure>
                <p className='tw-text-base tw-text-white tw-mt-8 tw-mb-9'>Turn screentime into brain time with GoLearn!</p>
                <p className='tw-text-base tw-text-white tw-leading-normal tw-mr-36 text-m'>Explore a world of interesting articles, engaging stories, and fun activities. Learn about nature and animals, conduct experiments, bake cookies, and plan parties. GoLearn has endless learning activities so you will never feel bored!</p>
                <button className='tw-mt-10 tw-bg-[#5AB55E] tw-py-3 tw-px-14 tw-rounded-full tw-text-base tw-text-white btn-shadow max-[980px]:tw-hidden'>Let's Go Learn</button>
            </div>
            <figure className='animals-img'>
              <img className='tw-w-full tw-h-full tw-object-cover' src="https://goplay.myxplora.com/_nuxt/img/section-4-2.2471d35.png" alt="" />
            </figure>
        </div>
        <div className='tw-text-center tw-hidden btn-hidden'>
          <button className='tw-mt-10 tw-bg-[#5AB55E] tw-p-3 tw-max-w-[15rem] tw-w-full tw-rounded-full tw-text-lg tw-text-white btn-shadow'>Let's Go Learn</button>
        </div>

    </section>
  )
}

export default Section3
