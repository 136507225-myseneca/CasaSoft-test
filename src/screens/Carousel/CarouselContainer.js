import React from 'react'
import { Carousel } from 'react-bootstrap'
import back1 from '../../assets/images/back-1.png'
import back2 from './../../assets/images/back-2.jpg'
import back3 from './../../assets/images/back-3.png'
import image1 from './../../assets/images/image-1.png'
import image2 from './../../assets/images/image-2.png'
import image3 from './../../assets/images/image-3.png'
import './styles.css'

const CarouselContainer = () => {
  return (
    <Carousel touch={true}>
      <Carousel.Item>
        <img
          className={window.innerWidth > 600 ? 'd-block  w-100' : 'd-block'}
          src={back1}
          alt='First slide'
          height='500'
        />

        <Carousel.Caption>
          <div className='left-content'>
            <div className='main-title'>
              {<>Grab 100% up to €200 & 200 Free Spin</>}
            </div>
            <div className='main-text'>
              <p>
                Get ready to party with us! <b>Unlock hundreds in bonus</b> cash
                and collect piles of <b>free spins for 10 days</b> on your first
                deposit of €20 or more
              </p>
            </div>
            <div className='main-btn'>{`SIGN UP`}</div>
          </div>

          <div className='image-overlay543'>
            <img className='main-image' src={image1} alt='Overlay image1' />
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src={back2}
          alt='Second slide'
          height='500'
        />
        <Carousel.Caption>
          <div className='left-content'>
            <div className='main-title'>{<>Win and enjoy!</>}</div>
            <div className='main-text'>
              <p>Get the most of your wins and enjoy your holiday!</p>
            </div>
            <div className='main-btn'>{`SIGN UP`}</div>
          </div>

          <div className='image-overlay543'>
            <img className='main-image' src={image2} alt='Overlay image2' />
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src={back3}
          alt='Third slide'
          height='500'
        />
        <Carousel.Caption>
          <div className='left-content'>
            <div className='main-title'>{<>Ready for the thrill?</>}</div>
            <div className='main-text'>
              <p>
                Isn't it exciting to win whilst you're enjoying from home. Then
                come visit our portal and get your chance to win unlimited
                prizes that can change your life from today to tomorrow! Are you
                ready?
              </p>
            </div>
            <div className='main-btn'>{`SIGN UP`}</div>
          </div>

          <div className='image-overlay543'>
            <img className='main-image' src={image3} alt='Overlay image3' />
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselContainer
