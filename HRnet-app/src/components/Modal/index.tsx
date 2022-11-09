import React from 'react';
import './modal.scss';

export interface ModalProps {
  img: string;
  text: string;
  open: boolean;
  hideModal: any;
}

function Modal({ img, text, open, hideModal }: ModalProps) {
  const pic = './img/pic.svg';
  if (!open) return null;

  return (
    <div className="modalContainer">
      <div className="overlay">
        <div className="modal">
          <div className="modalImg">
            <img src={img || pic} alt="" />
          </div>
          <div className="modalContent">{text}</div>
          <button type="button" className="closeBtn" onClick={hideModal}>
            X
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
