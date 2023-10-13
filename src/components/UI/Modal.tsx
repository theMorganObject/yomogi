import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

export const ModalBackdrop: React.FC<{ onClose: () => void }> = ({
  onClose,
}) => {
  return <div className={classes.backdrop} onClick={onClose} />;
};

export const ModalOverlay: React.FC<{ children: React.ReactNode }> =
  function ModalOverlay({ children }) {
    return (
      <div className={classes.modal}>
        <div className={classes.content}>{children}</div>
      </div>
    );
  };

interface ModalProps {
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return createPortal(children, document.body);
};

export default Modal;
