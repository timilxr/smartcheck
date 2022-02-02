import React from 'react';
import '../styles/modal.scss';

export const ModalButton = ({ text, ...props }) => {
    return (
        <>
            <button type="button" {...props} data-toggle="modal">
                {text}
            </button>
        </>
    )
}


export const Modal = ({ children, title, id }) => {
    return (
        <>
            <div className="modal fade" id={id} data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content text-left">
                        <h2 className='title mb-5'>{title}</h2>
                        { children }
                    </div>
                </div>
            </div>
        </>
    )
}
