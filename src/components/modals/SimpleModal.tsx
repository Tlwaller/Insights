import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from "react-transition-group";
import { SnapIcon } from '../../suit';
import { lockBodyScroll, unlockBodyScroll } from '../../utils/UIUtils';

interface SimpleModalProps {
  showModal: boolean;
  children: React.ReactNode;
  onClose: () => void;
  hideHeader?: boolean;
}

const SimpleModal: React.FC<SimpleModalProps> = ({ showModal, children, onClose, hideHeader  = false}) => {
  const [show, setShow] = useState(false);

  const closeOnEscapeKeyDown = (e:KeyboardEvent)  => {
    if (e.key === 'Escape' || e.key === 'Esc') {
      closeModal();
    }
  };

  const closeModal = () => {
    setShow(false);
    unlockBodyScroll();
    onClose();
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []); // eslint-disable-line

  useEffect(() => {
    if(showModal !== show) {
      if(showModal) { //opening modal
        setTimeout(() => { lockBodyScroll(); }, 300);
      }
      setShow(showModal);
    }
  }, [showModal]); // eslint-disable-line

  return ReactDOM.createPortal(
    <CSSTransition
      in={show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
      classNames={{
        enterActive: 'opacity-0',
        enterDone: 'opacity-100',
        exit: 'opacity-0',
      }}
    >
      <div 
        className={`fixed top-0 bottom-0 left-0 right-0 items-center justify-center bg-gray-900/25 z-[10000] flex duration-300 ease-in-out transition-[opacity] opacity-0`} 
        onClick={closeModal}
      >
        <div className="bg-white w-full sm:w-5/6 md:w-4/5 sm:rounded-xl shadow-md min-h-screen sm:min-h-0 flex flex-col" onClick={e => e.stopPropagation()}>
          {!hideHeader &&
            <div className="flex justify-end py-2 px-4 sm:px-6 border-gray-200 border-b border-solid">
              <SnapIcon icon="x-solid" size="md" className="cursor-pointer text-gray-500" onClick={closeModal} />
            </div>
          }
          {children}
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root") as Element
  );
};

export default SimpleModal;

