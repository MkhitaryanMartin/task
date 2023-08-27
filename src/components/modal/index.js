import React from "react";
import "./style.scss";
import { createPortal } from "react-dom";
import CloseIcon from "../svg/close";

export const Modal = ({
  isVisible = false,
  title,
  content,
  footer,
  onClose,
  children,
}) => {
  const modal = (
    <div className="modal" onClick={onClose}>
      <div
        className="modal__dialog"
        onClick={e => e.stopPropagation()}
      >
        <div className="modal__header">
          <h3 className="modal__title">{title}</h3>
          <CloseIcon onClick={onClose} />
        </div>
        <div className="modal__body">
          <div
            className="modal__content"
          >{content}</div>
          {children}
        </div>
        {footer && <div className="modal__footer">{footer}</div>}
      </div>
    </div>
  )
  return (
    <>
      {
        !isVisible ? null : createPortal(<div id="portal">{modal}</div>, document.body)
      }
    </>
  )


};