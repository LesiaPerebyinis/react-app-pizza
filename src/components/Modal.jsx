import { createPortal } from "react-dom";

function Modal({ children, isOpen, onClose }) {
  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className={isOpen ? "modal-content -active" : "modal-content"} onClick={(e) => e.stopPropagation()}>
        {children}
        <button className="close-modal" onClick={onClose}>
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>,
    document.body
  );
}
export default Modal;