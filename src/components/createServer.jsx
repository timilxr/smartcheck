import React from 'react';
import { ModalButton } from './modal';
import '../styles/defineApplication.scss'

const CreateServer = ({ setServerModalActive }) => {
    return (
        <>
            <div className="main">
                <form>
                    <div className="form-group row">
                        <label className="col-12 col-form-label">Enter Server Details</label>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Server Name</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputtype" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Server IP</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="staticDesc" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">CPU</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPort" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Storage</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="staticEndpoint" />
                        </div>
                    </div>
                </form>
            </div>
            <div className="ml-auto mt-5 d-flex align-items-center justify-content-between health-form-buttons">
                <a href="#">Cancel</a>
                <ModalButton text="Create" data-target="#serverModal" onClick={() => setTimeout(()=>setServerModalActive(false), 1000)} className="btn btn-primary ml-3" style={{ height: '50px' }} />
            </div>

        </>
    )
}

export default CreateServer;