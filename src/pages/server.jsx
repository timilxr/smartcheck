import React, { useState } from "react";
// import StatsCard from "../components/stats_card";
import Table from "../components/table";
import Pagination from "../components/pagination";
import '../styles/serverapplication.scss'
import CreateServer from "../components/createServer";
import { Modal, ModalButton } from "../components/modal";
import search from '../assets/magnifying-glass.png'

const info = [
    {
        'SERVER NAME': 'Server name goes here',
        'IP ADDRESS': 'IP Address goes here',
        'CPU(%)': '85.6',
        'MEMORY(%)': '73.9',
        'STORAGE(%)': '50'
    },
    {
        'SERVER NAME': 'Server name goes here',
        'IP ADDRESS': 'IP Address goes here',
        'CPU(%)': '85.6',
        'MEMORY(%)': '73.9',
        'STORAGE(%)': '50'
    },
    {
        'SERVER NAME': 'Server name goes here',
        'IP ADDRESS': 'IP Address goes here',
        'CPU(%)': '85.6',
        'MEMORY(%)': '73.9',
        'STORAGE(%)': '60'
    },
    {
        'SERVER NAME': 'Server name goes here',
        'IP ADDRESS': 'IP Address goes here',
        'CPU(%)': '85.6',
        'MEMORY(%)': '73.9',
        'STORAGE(%)': '40'
    },
    {
        'SERVER NAME': 'Server name goes here',
        'IP ADDRESS': 'IP Address goes here',
        'CPU(%)': '85.6',
        'MEMORY(%)': '73.9',
        'STORAGE(%)': '50'
    },
]
const Server = () => {
    const [serverModalActive, setServerModalActive] = useState(false);
    return (
        <>
            {
                serverModalActive &&
                <Modal title='Create a Server' id="serverModal">
                    <CreateServer setServerModalActive={setServerModalActive} />
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
                        <ModalButton text="Create Server" data-target="#serverModal" onClick={()=>setServerModalActive(true)} className="btn btn-primary ml-auto mb-2" style={{ height: '50px' }} />
                    </div>
                    <div className="table-holder">
                        <Table data={info} useCase="server" />
                        <Pagination />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Server;