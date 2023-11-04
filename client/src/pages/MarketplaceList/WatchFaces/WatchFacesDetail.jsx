import React from 'react'
import { Info, Title, WatchFaceDesc, WatchFaceSlider, Wrapper } from '../../imports'
import { useParams } from 'react-router-dom'
import  { watchFacesList } from "../../Marketplace/Marketplace"
import { Col, Row } from 'react-bootstrap'

const WatchFacesDetail = () => {
  const { id } = useParams()
  const titleId =  id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

  console.log(titleId);
  const watchList = watchFacesList.find(el => el.title === titleId)  

  return (
    <Wrapper className="tw-pt-28 max-xl:tw-pt-20">
      <Title title='Watch Faces' prodTitle={watchList.title} isWatchFaces={true} link='/watch-faces' />

      <Row className='tw-mt-16 tw-grid tw-grid-cols-[1fr_1.2fr] tw-gap-x-24 max-lg:tw-gap-x-16 max-md:tw-gap-x-10 max-sm:tw-grid-cols-1'>
        <Col className=''>
          <div className='tw-hidden max-sm:tw-block'>
            <Info title={watchList.title} coin={watchList.coin} likes={watchList.likes} isWatchFaces={true} />
          </div>
          <div className='tw-px-3 tw-pt-3 tw-pb-5 max-lg:tw-w-72 max-md:tw-w-64 max-sm:tw-w-full' style={{ boxShadow: '0 0 40px 0 rgba(0,0,0,.27)' }}>
            <figure className='tw-w-full tw-relative'>
              <img className='tw-w-full' src={watchList.img1} alt="" />
              <img className='tw-absolute tw-top-1/2 -tw-translate-y-1/2 tw-w-[35%] tw-mt-1 max-[400px]:tw-mt-[0.17rem] tw-left-1/2 -tw-translate-x-1/2 -tw-z-10' src={watchList.img2} alt="" />
            </figure>
          </div>
          <button className="btn-bg tw-py-4 tw-px-2 tw-w-full tw-rounded-2xl tw-text-white tw-text-sm tw-mt-11 tw-hidden max-sm:tw-block">
                Get
            </button>
          <hr className='tw-mt-14 max-lg:tw-w-72 max-md:tw-w-64 max-sm:tw-hidden' />

          <div className='tw-hidden max-sm:tw-block'>
            <WatchFaceDesc watchList={watchList} />
          </div>
          <WatchFaceSlider />
        </Col>
        <Col className='max-sm:tw-hidden'>
          <Info title={watchList.title} coin={watchList.coin} likes={watchList.likes} isWatchFaces={true} />
          <WatchFaceDesc watchList={watchList} />
        </Col>
      </Row>
    </Wrapper>
  )
}

export default WatchFacesDetail