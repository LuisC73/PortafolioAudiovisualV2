import { IoCheckmarkCircleOutline, IoCloseOutline } from "react-icons/io5";

function Modal({ active, setActive }) {
  return (
    <>
      {active && (
        <div className="modal">
          <div className="modal__item">
            <IoCheckmarkCircleOutline className="modal__icon" />
            <IoCloseOutline
              className="modal__close"
              onClick={() => setActive(false)}
            />
            <div className="modal__content">
              <h4 className="modal__h4">Muchas gracias 😁</h4>
              <p className="modal__p">"El mensaje fue enviado con exito"</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
