import React from 'react';
import { IoHome } from "react-icons/io5"; // For Dashboard
import { FaBus } from "react-icons/fa"; // For Manage Buses
import { FaUserTie } from "react-icons/fa"; // For Manage Drivers
import { MdRoute } from "react-icons/md"; // For Set Routes
import { FaUserPlus } from "react-icons/fa"; // For Add Students
import { FaCommentDots } from "react-icons/fa"; // For Feedback
import '../Assests/Dashboard.css';

function Dashboard() {
    return (
        <div className="container-fluid">
            <div className="row1" style={{height:"8vh"}}>
                <div className="nav1">

                </div>
                <div className="nav2">
                    <h2>Welcome to Admin Dashboard</h2>
                </div>
                <div className="nav3">

                </div>
            </div>
            <div className="row" style={{ height: "89vh" }}>
                    <div className="side1">
                        <aside className="sidebar">
                            <h2>ROUTE ROVER</h2>
                            <ul>
                                <li>
                                    <a href="#">
                                    <IoHome fontSize="30px" /> Dashboard
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <FaBus fontSize="30px" /> Manage Buses
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <FaUserTie fontSize="30px" /> Manage Drivers
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <MdRoute fontSize="30px" /> Set Routes
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <FaUserPlus fontSize="30px" /> Add Students
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <FaCommentDots fontSize="30px" /> Feedback
                                    </a>
                                </li>
                            </ul>
                        </aside>
                    </div>
                    <div className="home">
                        <div className="cards">
                            <div className="buses">
                                <p><FaBus fontSize="30px"/></p>
                                <h3><b>Buses</b></h3>
                                <h6>22 Total</h6>
                            </div>
                            <div className="drivers">
                                <p><FaUserTie fontSize="30px" /></p>
                                <h3><b>Drivers</b></h3>
                                <h6>19 Total</h6>
                            </div>
                            <div className="routes">
                                <p><MdRoute fontSize="30px" /></p>
                                <h3><b>ROUTES</b></h3>
                                <h6>17 Total</h6>
                            </div>
                            <div className="students">
                                <p><FaUserPlus fontSize="30px" /></p>
                                <h3><b>Students</b></h3>
                                <h6>48 Total</h6>
                            </div>
                        </div>
                        
                    </div>
            </div>
        </div>
    );
}

export default Dashboard;
