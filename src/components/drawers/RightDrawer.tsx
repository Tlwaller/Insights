import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from "react-transition-group";
import { lockBodyScroll, unlockBodyScroll } from '../../utils/UIUtils';

interface RightDrawerProps {
  showDrawer: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

const RightDrawer: React.FC<RightDrawerProps> = ({ showDrawer, children, onClose }) => {
  const [show, setShow] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const closeOnEscapeKeyDown = (e:KeyboardEvent)  => {
    if (e.key === 'Escape' || e.key === 'Esc') {
      closeDrawer();
    }
  };

  const closeDrawer = () => {
    setOpenDrawer(false);
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
    if(showDrawer !== show) {
      if(showDrawer) { //opening drawer
        setTimeout(() => { setOpenDrawer(true); }, 50);
        setTimeout(() => { lockBodyScroll(); }, 300);
      } else {
        setOpenDrawer(false);
        unlockBodyScroll();
      }
      setShow(showDrawer);
    }
  }, [showDrawer]); // eslint-disable-line

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
        className={`fixed top-0 bottom-0 left-0 right-0 bg-gray-900/25 z-[10000] flex duration-300 ease-in-out transition-[opacity] opacity-0`} 
        onClick={closeDrawer}
      >
        <CSSTransition
          in={openDrawer}
          timeout={{ enter: 0, exit: 300 }}
          classNames={{
            enterActive: 'right-[-320px]',
            enterDone: 'right-0',
            exit: 'right-[-320px]',
          }}
        >
          <div className="bg-white w-full sm:w-80 shadow flex flex-col fixed h-full transition-[right] duration-200 ease-in-out right-[-320px] overflow-auto" onClick={e => e.stopPropagation()}>
            {children}
          </div>
        </CSSTransition>
      </div>
    </CSSTransition>,
    document.getElementById("root") as Element
  );
};

export default RightDrawer;

