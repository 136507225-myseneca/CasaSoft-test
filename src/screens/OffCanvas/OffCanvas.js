import React from 'react'
import { Offcanvas, Container, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import './styles.css'

import home from '../../assets/images/off-canvas-homepage.svg'
import live from '../../assets/images/off-canvas-live-casino.svg'
import head from '../../assets/images/off-canvas-headset.svg'
import gift from '../../assets/images/off-canvas-gift.svg'
import promo1 from '../../assets/images/promo-full-1.jpg'
import promo2 from '../../assets/images/promo-full-2.jpg'
import promo3 from '../../assets/images/promo-full-3.jpg'

import Modal from '../../componet/Modal/Modal'

const OffCanvas = () => {
  const [show, setShow] = useState(false)
  const [image, setImage] = useState('')
  const [showpopup, setShowpopup] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const handleClosePopup = () => setShowpopup(false)
  const handleShowPopup = (image) => {
    setShowpopup(true)
    setImage(image)
  }

  return (
    <div className={show ? 'off-can2' : 'off-can'}>
      <div className={show ? 'menu-icon2' : 'menu-icon'}>
        <i
          className={show ? 'fas fa-times' : 'fas fa-bars'}
          onClick={handleShow}
        ></i>
      </div>

      <Container className='main-con'>
        <Row className='main-row'>
          <Col sm={6} md={4} lg={show ? 4 : 3} className=' overlay '>
            <div className='main-img1'>
              <div className='main-content'>
                <div className='main-title2'>
                  {<>GET €1000 IN BONUSES & 1000 FREE SPINS</>}
                </div>
                <div className='main-text2'>
                  <div>
                    Receive up to €100 for free when making your first deposit &
                    you get 1000 free spins
                  </div>
                </div>
                <div
                  className='main-btn2'
                  onClick={() => handleShowPopup(promo1)}
                >{`SIGN UP`}</div>
              </div>
            </div>
          </Col>
          <Col sm={6} md={4} lg={show ? 4 : 3} className=' overlay'>
            <div className='main-img2'>
              <div className='main-content'>
                <div className='main-title2'>
                  {<>GET €1000 IN BONUSES & 1000 FREE SPINS</>}
                </div>
                <div className='main-text2'>
                  <div>
                    Receive up to €100 for free when making your first deposit &
                    you get 1000 free spins
                  </div>
                </div>
                <div
                  className='main-btn2'
                  onClick={() => handleShowPopup(promo2)}
                >{`SIGN UP`}</div>
              </div>
            </div>
          </Col>
          <Col sm={6} md={4} lg={show ? 4 : 3} className=' overlay'>
            <div className='main-img3'>
              <div className='main-content'>
                <div className='main-title2'>
                  {<>GET €1000 IN BONUSES & 1000 FREE SPINS</>}
                </div>
                <div className='main-text2'>
                  <div>
                    Receive up to €100 for free when making your first deposit &
                    you get 1000 free spins
                  </div>
                </div>
                <div
                  className='main-btn2'
                  onClick={() => handleShowPopup(promo3)}
                >{`SIGN UP`}</div>
              </div>
            </div>
          </Col>
          <Col sm={6} md={4} lg={show ? 4 : 3} className=' overlay'>
            <div className='main-img1'>
              <div className='main-content'>
                <div className='main-title2'>
                  {<>GET €1000 IN BONUSES & 1000 FREE SPINS</>}
                </div>
                <div className='main-text2'>
                  <div>
                    Receive up to €100 for free when making your first deposit &
                    you get 1000 free spins
                  </div>
                </div>
                <div
                  className='main-btn2'
                  onClick={() => handleShowPopup(promo1)}
                >{`SIGN UP`}</div>
              </div>
            </div>
          </Col>
          <Col sm={6} md={4} lg={show ? 4 : 3} className='overlay'>
            <div className='main-img2'>
              <div className='main-content'>
                <div className='main-title2'>
                  {<>GET €1000 IN BONUSES & 1000 FREE SPINS</>}
                </div>
                <div className='main-text2'>
                  <div>
                    Receive up to €100 for free when making your first deposit &
                    you get 1000 free spins
                  </div>
                </div>
                <div
                  className='main-btn2'
                  onClick={() => handleShowPopup(promo2)}
                >{`SIGN UP`}</div>
              </div>
            </div>
          </Col>
          <Col sm={6} md={4} lg={show ? 4 : 3} className='overlay'>
            <div className='main-img3'>
              <div className='main-content'>
                <div className='main-title2'>
                  {<>GET €1000 IN BONUSES & 1000 FREE SPINS</>}
                </div>
                <div className='main-text2'>
                  <div>
                    Receive up to €100 for free when making your first deposit &
                    you get 1000 free spins
                  </div>
                </div>
                <div
                  className='main-btn2'
                  onClick={() => handleShowPopup(promo3)}
                >{`SIGN UP`}</div>
              </div>
            </div>
          </Col>
          <Col sm={6} md={4} lg={show ? 4 : 3} className='overlay'>
            <div className='main-img1'>
              <div className='main-content'>
                <div className='main-title2'>
                  {<>GET €1000 IN BONUSES & 1000 FREE SPINS</>}
                </div>
                <div className='main-text2'>
                  <div>
                    Receive up to €100 for free when making your first deposit &
                    you get 1000 free spins
                  </div>
                </div>
                <div
                  className='main-btn2'
                  onClick={() => handleShowPopup(promo1)}
                >{`SIGN UP`}</div>
              </div>
            </div>
          </Col>
          <Col sm={6} md={4} lg={show ? 4 : 3} className='overlay'>
            <div className='main-img2'>
              <div className='main-content'>
                <div className='main-title2'>
                  {<>GET €1000 IN BONUSES & 1000 FREE SPINS</>}
                </div>
                <div className='main-text2'>
                  <div>
                    Receive up to €100 for free when making your first deposit &
                    you get 1000 free spins
                  </div>
                </div>
                <div
                  className='main-btn2'
                  onClick={() => handleShowPopup(promo2)}
                >{`SIGN UP`}</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Offcanvas
        show={show}
        onHide={handleClose}
        keyboard={true}
        // scroll={true}
        className='offSlide'
      >
        <Offcanvas.Header closeButton={window.innerWidth < 900 ? true : false}>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='row1'>
            <div className='nav-row-first'>
              <img className='nav-icon' alt='icon' src={home} />

              <div className='nav-col'>Homepage</div>
            </div>
            <div className='activeborder'></div>
          </div>
          <div className='row1'>
            <div className='nav-row'>
              <img className='nav-icon' alt='icon' src={live} />
              <div className='nav-col'>Live Casino</div>
            </div>
            <div className='activeborder'></div>
          </div>
          <div className='row1'>
            <div className='nav-row'>
              <img className='nav-icon' alt='icon' src={gift} />
              <div className='nav-col'>Promotions</div>
            </div>
            <div className='activeborder'></div>
          </div>
          <div className='row1'>
            <div className='nav-row'>
              <img className='nav-icon' alt='icon' src={head} />
              <div className='nav-col'>Contact</div>
            </div>
            <div className='activeborder'></div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <Modal show={showpopup} onHide={handleClosePopup} image={image} />
    </div>
  )
}

export default OffCanvas
