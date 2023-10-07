import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const Backdrop: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    return <div className={classes.backdrop} onClick={onClose} />;
  };

  const ModalOverlay: React.FC<{ children: React.ReactNode }> =
    function ModalOverlay({ children }) {
      return (
        <div className={classes.modal}>
          <div className={classes.content}>{children}</div>
        </div>
      );
    };
  return mounted
    ? createPortal(
        <>
          <Backdrop onClose={onClose} />
          <ModalOverlay>{children}</ModalOverlay>
        </>,
        document.body
      )
    : null;
};

export default Modal;
