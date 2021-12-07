import React from "react";
import { Modal, useModal } from "react-simple-hook-modal";

const MyModal = ({onClickClose}) => {

    const { isModalOpen, closeModal } = useModal();
    // const [ show, setShow ] = useState(false);

    return (
        <>
            <div>
                <button onClick={onClickClose}>Close</button>
            </div>
            <Modal id="2" isOpen={isModalOpen} onBackdropClick={closeModal}>
                This is the content
            </Modal>
        </>
  );
}

export default MyModal;