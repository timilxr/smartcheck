import React, { useState } from "react";
// import StatsCard from "../components/stats_card";
import Table from "../components/table";
import Pagination from "../components/pagination";
import '../styles/serverapplication.scss'
import DefineApplication from "../components/defineApplication";
import { Modal, ModalButton } from "../components/modal";
import search from '../assets/magnifying-glass.png'

const info = [
    {
        'APPLICATION NAME': 'Application name goes here',
        'APPLICATION TYPE': 'Application type',
        'APPLICATION DESC': 'Application desc',
        'APPLICATION PORT': 'Application port',
        'END POINT': 'End point',
        'HOST/SERVER': '10.1.101.53',
    },
    {
        'APPLICATION NAME': 'Application name goes here',
        'APPLICATION TYPE': 'Application type',
        'APPLICATION DESC': 'Application desc',
        'APPLICATION PORT': 'Application port',
        'END POINT': 'End point',
        'HOST/SERVER': '10.1.101.53',
    },
    {
        'APPLICATION NAME': 'Application name goes here',
        'APPLICATION TYPE': 'Application type',
        'APPLICATION DESC': 'Application desc',
        'APPLICATION PORT': 'Application port',
        'END POINT': 'End point',
        'HOST/SERVER': '10.1.101.53',
    },
    {
        'APPLICATION NAME': 'Application name goes here',
        'APPLICATION TYPE': 'Application type',
        'APPLICATION DESC': 'Application desc',
        'APPLICATION PORT': 'Application port',
        'END POINT': 'End point',
        'HOST/SERVER': '10.1.101.53',
    },
    {
        'APPLICATION NAME': 'Application name goes here',
        'APPLICATION TYPE': 'Application type',
        'APPLICATION DESC': 'Application desc',
        'APPLICATION PORT': 'Application port',
        'END POINT': 'End point',
        'HOST/SERVER': '10.1.101.53',
    },
]
const Application = () => {
    const [applicationModalActive, setApplicationModalActive] = useState(false);
    return (
        <>
            {
                applicationModalActive &&
                <Modal title='Define Application' id="applicationModal">
                    <DefineApplication setApplicationModalActive={setApplicationModalActive} />
                </Modal>
            }
            <div className="container-body">
                <div className="info-container mt-4">
                    <div className="d-flex flex-wrap justify-content-between">
                        <form className="d-flex flex-wrap">
                            <div className="search">
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                    <img src={search} alt="search" width="13px" />

                                        </div>
                                    </div>
                                    <input type="search" className="form-control search-input" id="inlineFormInputGroup" name="search" placeholder="Enter a search keyword" />
                                </div>
                            </div>
                            <div className="btn-group ml-sm-3">
                                <select className="custom-select custom-select-lg mb-3">
                                    <option defaultValue="All Application">Active status</option>
                                    <option value="1">Active</option>
                                    <option value="1">Inactive</option>
                                    <option value="1">All</option>
                                </select>
                            </div>
                        </form>
                        <ModalButton text="Add Application" data-target="#applicationModal" onClick={()=>setApplicationModalActive(true)} className="btn btn-primary mb-2 ml-auto" style={{ height: '50px' }} />
                    </div>
                    <div className="table-holder">
                        <Table data={info} useCase="application" />
                        <Pagination />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Application;