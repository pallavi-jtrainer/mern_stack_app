import ReactDom from 'react-dom';

const Modal = ({show, close, title, children}) => {
  //  console.log(show);
    return ReactDom.createPortal(
        <>
            <div className="modalContainer">
                        <div className="modal">
                            <header>
                                <h2>{title}</h2>
                                <button onClick={() => close()}>Close</button>
                            </header>
                            <main>
                                {children}
                            </main>
                            <footer>
                                <button onClick={() => close()}>Cancel</button>
                                <button>Submit</button>
                            </footer>
                        </div>
                    </div>
            {/* {
                show ? 
                <div className="modalContainer" onClick={() => close()}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <header>
                            <h2>{title}</h2>
                            <button onClick={() => close()}>Close</button>
                        </header>
                        <main>
                            {children}
                        </main>
                        <footer>
                            <button onClick={() => close()}>Cancel</button>
                            <button>Submit</button>
                        </footer>
                    </div>
                </div>
                : null
            } */}
        </>, document.getElementById("portal-root")
        
    )
}

export default Modal;