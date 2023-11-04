import React from 'react'
import { Link } from 'react-router-dom'
import './DashboardCard.css'

const DashboardCard2 = ({ className1, cardHeading, cardText, cardText2, pageLink }) => {
  return (
    <>
        <Link to={pageLink} className={`grid-card tw-w-full tw-pt-6 tw-px-4 max-lg:tw-h-[28rem] tw-text-white tw-text-center tw-rounded-[2rem] tw-relative ${className1}`}>
            <div className="grid_item tw-p-6 max-xl:tw-px-5 max-sm:tw-p-4 tw-rounded-[2rem]">
                <h2 className='tw-text-[1.369rem] max-xl:tw-text-base max-xl:tw-font-bold'>{cardHeading}</h2>
                <p className='tw-text-[0.95rem] tw-mt-7'>{cardText}</p>
            </div>
            {cardText2 && (
                <div className='tw-mt-[4.3rem] tw-mb-2 tw-text-[11.5px] tw-absolute tw-bottom-0 tw-left-2 max-lg:tw-left-1/2 -tw-translate-x-1/2 max-lg:tw-bottom-6'>{cardText2}</div>
            )}
        </Link>
    </>
  )
}

export default DashboardCard2