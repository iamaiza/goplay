import React, { useEffect } from 'react'
import "./WelcomePage.css"
import { Logo } from "../imports"
import { useLocation, useNavigate } from 'react-router-dom'

const WelcomePage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/marketplace')
    }, 3000)

    return () => clearTimeout(timeout)
  }, [location])

  return (
    <div className='tw-h-screen tw-w-full welcome tw-p-4 tw-overflow-y-auto'>
        <Logo logosize="tw-w-11 tw-h-11" />

        <div className='tw-text-center tw-mt-20 tw-text-white'>
            <h1 className='tw-text-5xl max-sm:tw-text-3xl'>Welcome Sameed Test</h1>
            <figure className='tw-w-64 max-sm:tw-w-56 tw-mx-auto tw-mt-10'>
                <img className='tw-w-full tw-h-full tw-object-cover tw-rounded-full' src="https://api.myxplora.com/file?id=189615070b18e11ea8bdd216546f146d4" alt="" />
            </figure>
        </div>
    </div>
  )
}

export default WelcomePage