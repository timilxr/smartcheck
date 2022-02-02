import React from 'react';
import { ModalButton } from './modal';
import checkmark from '../assets/checkmark.png'
import closemark from '../assets/close.png'
import rotate from '../assets/rotate.png'
import rightarrow from '../assets/right-arrows.png'
import '../styles/healthResult.scss';


const HealthResult = ({ setShowResult, setHeaderModalActive }) => {
    const closeModal = () => {
        setShowResult(false);
        setTimeout(()=>setHeaderModalActive(false), 1000)
    }

    return (
        <>
            <div className="main">
                <div className='body d-flex justify-content-between'>
                    <div className="divider p-0">
                        <div className="cover">
                            <div className="d-flex align-items-center">
                                <span>App Name 1</span>
                                <div className={`sign bg-success rounded-circle ml-2`} style={{ width: '10px', height: '10px' }}></div>
                            </div>
                            <hr className="my-1" />
                            <span>End point</span>
                            <hr className="my-2" />
                            <div className="d-flex align-items-center ml-4">
                                <img src={rightarrow} width="20px" alt="" className="img-fluid mr-1" />
                                <span>Server 1</span>
                                <div className={`sign bg-success rounded-circle ml-4 ml-lg-5`} style={{ width: '10px', height: '10px' }}></div>
                            </div>
                            <hr className="my-1" />
                            <div className="d-flex align-items-center ml-4">
                                <img src={rightarrow} width="20px" alt="" className="img-fluid mr-1" />
                                <span>Server 2</span>
                                <img src={closemark} width="10px" alt="" className="img-fluid ml-4 ml-lg-5" />
                            </div>
                            <hr className="my-1" />
                            <div className="d-flex align-items-center ml-4">
                                <img src={rightarrow} width="20px" alt="" className="img-fluid mr-1" />
                                <span>Server 3</span>
                                <img src={checkmark} width="10px" alt="" className="img-fluid ml-4 ml-lg-5" />
                            </div>
                            <hr className="my-1" />
                            <div className="d-flex align-items-center ml-4">
                                <img src={rightarrow} width="20px" alt="" className="img-fluid mr-1" />
                                <span>Server 4</span>
                                <img src={checkmark} width="10px" alt="" className="img-fluid ml-4 ml-lg-5" />
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-end">
                                <img src={rotate} width="15px" alt="" className="img-fluid mr-1" />
                                <span className='text-info'>Refresh</span>
                            </div>
                    </div>
                    <div className="divider p-0">
                        <div className="cover">
                            <div className="d-flex align-items-center">
                                <span>App Name 1</span>
                                <div className={`sign bg-success rounded-circle ml-2`} style={{ width: '10px', height: '10px' }}></div>
                            </div>
                            <hr className="my-1" />
                            <span>End point</span>
                            <hr className="my-2" />
                            <div className="d-flex align-items-center ml-4">
                                <img src={rightarrow} width="20px" alt="" className="img-fluid mr-1" />
                                <span>Server 1</span>
                                <div className={`sign bg-success rounded-circle ml-4 ml-lg-5`} style={{ width: '10px', height: '10px' }}></div>
                            </div>
                            <hr className="my-1" />
                            <div className="d-flex align-items-center ml-4">
                                <img src={rightarrow} width="20px" alt="" className="img-fluid mr-1" />
                                <span>Server 2</span>
                                <img src={closemark} width="10px" alt="" className="img-fluid ml-4 ml-lg-5" />
                            </div>
                            <hr className="my-1" />
                            <div className="d-flex align-items-center ml-4">
                                <img src={rightarrow} width="20px" alt="" className="img-fluid mr-1" />
                                <span>Server 3</span>
                                <img src={checkmark} width="10px" alt="" className="img-fluid ml-4 ml-lg-5" />
                            </div>
                            <hr className="my-1" />
                            <div className="d-flex align-items-center ml-4">
                                <img src={rightarrow} width="20px" alt="" className="img-fluid mr-1" />
                                <span>Server 4</span>
                                <img src={checkmark} width="10px" alt="" className="img-fluid ml-4 ml-lg-5" />
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-end">
                                <img src={rotate} width="15px" alt="" className="img-fluid mr-1" />
                                <span className='text-info'>Refresh</span>
                            </div>
                    </div>
                </div>
                <div className="ml-auto mt-5 d-flex justify-content-between">
                    <ModalButton className="btn btn-sm btn-primary ml-auto" data-target="#headerModal" text="Cancel" onClick={() => closeModal()} />
                </div>
            </div>
        </>
    )
}

export default HealthResult;