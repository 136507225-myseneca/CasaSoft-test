import React from 'react'
import { Modal } from 'react-bootstrap'
import './styles.css'
import { ModalData } from './modalData'

const MainModal = ({ show, onHide, image }) => {
  return (
    <Modal
      fullscreen={window.innerWidth < 550 ? true : false}
      show={show}
      onHide={onHide}
      centered
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
    >
      <Modal.Header>
        <div
          className='main-img-modal'
          style={{
            background: `linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 30.21%,
      rgba(0, 0, 0, 0.518634) 74.68%,
      #000000 100%
    ),
    url(${image}) no-repeat center`,
          }}
        >
          <div className='close-btn' onClick={onHide}>
            X
          </div>
          <div className='modal-row'>
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
            </div>
            <div className='main-btn3'>{`ACTIVATE`}</div>
          </div>
        </div>
      </Modal.Header>
      <Modal.Body className='modal-body'>{ModalData.body}</Modal.Body>
    </Modal>
  )
}

export default MainModal
