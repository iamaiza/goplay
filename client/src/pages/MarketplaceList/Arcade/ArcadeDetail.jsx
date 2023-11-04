import React from 'react'
import { Title, Wrapper, ArcadeSlider, ArcadeDesc, Instructions, LeaderBoard, Info, ArcadeContentSlider } from '../../imports'
import { useParams } from 'react-router-dom'
import { arcadeList } from '../../Marketplace/Marketplace'
import { Col, Row } from 'react-bootstrap'

const ArcadeDetail = () => {
  const { id } = useParams()
  let titleId = id.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

  if(titleId === 'Leave Me Alone') {
    titleId = 'Leave me alone'
  }
  const arcade = arcadeList.find(el => el.title == titleId)
  return (
    <Wrapper className="tw-pt-28 max-lg:tw-pt-20">
      <Title title='Arcade' isArcade={true} prodTitle={arcade.title} />
      <Row className='tw-mt-12 tw-grid tw-grid-cols-[1.2fr_1.5fr] tw-gap-x-24 max-lg:tw-grid-cols-1'>
        <Col>
          <div className='tw-hidden max-lg:tw-block'>
            <Info title={arcade.title} coin={arcade.coin} likes={arcade.likes} />
          </div>
          <div className='tw-w-full tw-border-b max-lg:tw-border-b-0 tw-pb-14 max-lg:tw-pb-10'>
            <figure className='tw-rounded-3xl'>
              <img className='tw-w-full tw-object-cover tw-rounded-3xl' style={{ boxShadow: '0 0 40px 0 rgba(0,0,0,.27)' }} src={arcade.img} alt="" />
            </figure>
          </div>
          <button className='btn-bg tw-text-white tw-w-full tw-py-4 tw-px-2 tw-rounded-[1.3rem] tw-text-sm tw-hidden max-lg:tw-block'>Play now</button>
          
          <div className='tw-hidden max-lg:tw-block'>
            <ArcadeContentSlider arcade={arcade} />
          </div>
          
          <div className='tw-mt-12'>
            <ArcadeSlider arcadeList={arcadeList} />
          </div>
        </Col>

        <Col className='max-lg:tw-hidden'>
        
          <Info title={arcade.title} coin={arcade.coin} likes={arcade.likes} />

          <div>
            <ArcadeDesc arcade={arcade} />
            <Instructions arcade={arcade} />
            <LeaderBoard arcade={arcade} />
          </div>
        </Col>
      </Row>
    </Wrapper>
  )
}

export default ArcadeDetail