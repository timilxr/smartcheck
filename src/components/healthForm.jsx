import React from 'react';
import '../styles/healthForm.scss';


const HealthForm = ({ setShowResult }) => {
    return (
        <>
            <form className='ml-auto health-form'>
                <div className="form-row health-form-inputs">
                    <div className="col-md-4">
                        <h2 style={{ fontSize: '20px' }}>Applications</h2>
                    </div>
                    <div className="col-md-8 text-left">
                        <div className="custom-control custom-checkbox mb-2">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">All Applications</label>
                        </div>
                        <p className='mb-0'>Select Application</p>
                        <div className="sub-form-group p-4">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                <label className="custom-control-label" htmlFor="customCheck2">App Name 1</label>
                            </div>
                            <hr className='my-2' />
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck3" />
                                <label className="custom-control-label" htmlFor="customCheck3">App Name 1</label>
                            </div>
                            <hr className='my-2' />
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck4" />
                                <label className="custom-control-label" htmlFor="customCheck4">App Name 1</label>
                            </div>
                        </div>
                    </div>
                    <div className='col-12' style={{ height: '20px' }}></div>
                    <div className="col-md-4">
                        <h2 style={{ fontSize: '20px' }}>Server</h2>
                    </div>
                    <div className="col-md-8 text-left">
                        <div className="custom-control custom-checkbox mb-2">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">All Servers</label>
                        </div>
                        <p className='mb-0'>Select Server</p>
                        <div className="sub-form-group p-4">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                <label className="custom-control-label" htmlFor="customCheck2">Server 1</label>
                            </div>
                            <hr className='my-2' />
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck3" />
                                <label className="custom-control-label" htmlFor="customCheck3">Server 1</label>
                            </div>
                            <hr className='my-2' />
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck4" />
                                <label className="custom-control-label" htmlFor="customCheck4">Server 1</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ml-auto mt-5 d-flex justify-content-between health-form-buttons">
                    <a href="#">Cancel</a>
                    <button type='button' onClick={() => setShowResult(true)} className="btn btn-sm btn-primary">Check Health Status</button>
                </div>
            </form>
        </>
    )
}

export default HealthForm;