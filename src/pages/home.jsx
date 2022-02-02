import React from "react";
import StatsCard from "../components/stats_card";
import Table from "../components/table";
import Pagination from "../components/pagination";
import '../styles/home.scss'
import search from '../assets/magnifying-glass.png'

const statistics = [
    {
        topic: 'Application Status',
        data: [
            {
                figure: 10,
                text: 'all'
            },
            {
                figure: 6,
                text: 'Available'
            },
            {
                figure: 4,
                text: 'Critical'
            },
        ]
    },
    {
        topic: 'Server',
        data: [
            {
                figure: 4,
                text: 'all'
            },
            {
                figure: 2,
                text: 'Active'
            },
            {
                figure: 2,
                text: 'Inactive'
            },
        ]
    },
    {
        topic: 'Health check counts',
        data: [
            {
                figure: 60,
                text: 'counts'
            }
        ]
    },
]

const info = [
    {
        APPLICATION: 'Application name goes here',
        SERVERS_MAPPED: '3 servers',
        LAST_SCAN_DATE: '11/12/20 3: 57:29 PM',
        STATUS: 'Healthy'
    },
    {
        APPLICATION: 'Application name goes here',
        SERVERS_MAPPED: '2 servers',
        LAST_SCAN_DATE: '11/12/20 3: 57:29 PM',
        STATUS: 'Critical'
    },
    {
        APPLICATION: 'Application name goes here',
        SERVERS_MAPPED: '2 servers',
        LAST_SCAN_DATE: '11/12/20 3: 57:29 PM',
        STATUS: 'Healthy'
    },
    {
        APPLICATION: 'Application name goes here',
        SERVERS_MAPPED: '3 servers',
        LAST_SCAN_DATE: '11/12/20 3: 57:29 PM',
        STATUS: 'Healthy'
    },
    {
        APPLICATION: 'Application name goes here',
        SERVERS_MAPPED: '3 servers',
        LAST_SCAN_DATE: '11/12/20 3: 57:29 PM',
        STATUS: 'Healthy'
    },
]
const Home = () => {
    return (
        <div className="container-body">
            <div className="home-cards">
                {statistics.map((data, index) => (<div key={index} className="mx-2 my-2 my-lg-0"><StatsCard stat={data} /></div>))}
            </div>
            <div className="info-container mt-4">
                <form className="d-flex flex-wrap justify-content-between">
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
                    <div className="btn-group">
                        <select className="custom-select custom-select-lg mb-3">
                            <option defaultValue="All Application">All Application</option>
                            <option value="1">Application name 1</option>
                            <option value="1">Application name 2</option>
                        </select>
                    </div>
                    <div className="btn-group">
                        <select className="custom-select custom-select-lg mb-3">
                            <option defaultValue="All Application">All Server</option>
                            <option value="1">Server name 1</option>
                            <option value="1">Server name 2</option>
                        </select>
                    </div>
                    <div className="btn-group">
                        <select className="custom-select custom-select-lg mb-3">
                            <option defaultValue="All Application">Health Check Status</option>
                            <option value="1">All Status</option>
                            <option value="1">Healthy</option>
                            <option value="1">Critical</option>
                        </select>
                    </div>
                </form>
                <div className="table-holder">
                    <Table data={info} useCase="home" />
                    <Pagination />
                </div>
            </div>
        </div>
    )
}

export default Home;