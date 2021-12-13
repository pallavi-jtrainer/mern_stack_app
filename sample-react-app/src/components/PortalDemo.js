import React, { useState } from 'react';
import Modal from './modal';

function PortalDemo() {

    const [openModal, setOpenModal] = useState(false);
    const Toggle = () => setOpenModal(!openModal);

    return (
        <div>
            <button className='modalBtn' onClick={() => Toggle()}>
                Show Modal
            </button>

            <Modal show={openModal} title="Modal" close={Toggle}>
                New Modal Content    
            </Modal>
        </div> 
    )
    // return ReactDom.createPortal(
    //     <h2>Portal Demo</h2>, document.getElementById('portal-root')
    // );
}

export default PortalDemo;