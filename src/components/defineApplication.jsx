import React from 'react';
import { ModalButton } from './modal';
import '../styles/defineApplication.scss'

const DefineApplication = ({ setApplicationModalActive }) => {
    return (
        <>
            <div className="main">
                <form>
                    <div className="form-group row">
                        <label htmlFor="staticEmail" className="col-md-4 col-lg-3 col-form-label">Application Name</label>
                        <div className="col-md-8 col-lg-9">
                            <input type="text" className="form-control" id="staticEmail1" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-md-4 col-lg-3 col-form-label">Application Type</label>
                        <div className="col-md-8 col-lg-9">
                            <input type="password" className="form-control" id="inputtype" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="staticEmail" className="col-md-4 col-lg-3 col-form-label">Application Desc</label>
                        <div className="col-md-8 col-lg-9">
                            <input type="text" className="form-control" id="staticDesc" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-md-4 col-lg-3 col-form-label">Application Port</label>
                        <div className="col-md-8 col-lg-9">
                            <input type="password" className="form-control" id="inputPort" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="staticEmail" className="col-md-4 col-lg-3 col-form-label">End point</label>
                        <div className="col-md-8 col-lg-9">
                            <input type="text" className="form-control" id="staticEndpoint" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-4 col-lg-3">
                            <h2 style={{ fontSize: '20px' }}>Host/Server</h2>
                        </div>
                        <div className="col-md-8 col-lg-9 text-left">
                            <div className="custom-control custom-checkbox mb-2">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">All Servers</label>
                            </div>
                            <p className='mb-0'>Select Server</p>
                            <div className="sub-form-group p-4">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                    <label className="custom-control-label" htmlFor="customCheck2">10.1.101.53</label>
                                </div>
                                <hr className='my-2' />
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck3" />
                                    <label className="custom-control-label" htmlFor="customCheck3">10.1.101.53</label>
                                </div>
                                <hr className='my-2' />
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck4" />
                                    <label className="custom-control-label" htmlFor="customCheck4">10.1.101.53</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="ml-auto mt-5 d-flex align-items-center justify-content-between health-form-buttons">
                <a href="#">Cancel</a>
                <ModalButton text="Add Application" data-target="#applicationModal" onClick={() => setTimeout(()=>setApplicationModalActive(false), 1000)} className="btn btn-primary ml-3" style={{ height: '50px' }} />
            </div>

        </>
    )
}

export default DefineApplication;