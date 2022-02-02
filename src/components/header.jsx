import React, { useState } from "react";
import '../styles/header.scss';
import logo from '../assets/SmartcheckLogo.svg';
import serverIcon from '../assets/serverIcon.svg'
import homeIcon from '../assets/homeIcon.svg'
import applicationIcon from '../assets/applicationIcon.svg'
import { useLocation, Link } from "react-router-dom";
import { ModalButton, Modal } from "./modal";
import HealthForm from "./healthForm";
import HealthResult from "./healthResult";

const Header = () => {
    const [showResult, setShowResult] = useState(false);
    const [headerModalActive, setHeaderModalActive] = useState(false);
    let match = useLocation().pathname.split('/');
    // console.log(match);
    const currentPath = match[match.length - 1];
    return (
        <>
            {
                headerModalActive &&
                <Modal title={showResult ? 'Health Check Result' : 'Conduct Health Check'} id="headerModal" >
                    {
                        showResult ? <HealthResult setShowResult={setShowResult} setHeaderModalActive={setHeaderModalActive} />
                            : <HealthForm setShowResult={setShowResult} />
                    }
                </Modal>
            }
            <div id="header">
                <div id="top">
                    <img src={logo} alt="Smartcheck" />
                </div>
                <div id="bottom" className="py-2 py-md-0">
                    <nav id="header-nav" className="navbar bg-white navbar-expand-sm navbar-light">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse text-left" id="navbarTogglerDemo01">
                            <ul className="navbar-nav mr-auto mt-2 mb-2 mb-md-0 mt-lg-0">
                                <li className={`nav-item mr-md-4 ${!currentPath && 'active'}`}>
                                    <Link to='/' className={`nav-link`}>
                                        <img src={homeIcon} alt="Home" className="nav-icons" />
                                        <p>Home</p>
                                    </Link>
                                </li>   
                                <li className={`nav-item mr-md-4 ${(currentPath === 'server') && 'active'}`}>
                                    <Link to='/server' className={`nav-link`}>
                                        <img src={serverIcon} alt="Server" className="nav-icons" />
                                        <p>Server</p>
                                    </Link>
                                </li>
                                <li className={`nav-item ${(currentPath === 'application') && 'active'}`}>
                                    <Link to='/application' className={`nav-link`}>
                                        <img src={applicationIcon} alt="Application" className="nav-icons" />
                                        <p>Application</p>
                                    </Link>
                                </li>
                            </ul>
                            <ModalButton id="health-button" text="Check Health Status" data-target="#headerModal" onClick={() => setHeaderModalActive(true)} />
                        </div>
                    </nav>
                </div>
            </div>
           

        </>
    )
}
export default Header;