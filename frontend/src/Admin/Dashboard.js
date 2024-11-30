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
            <div className="row" style={{ height: "100vh" }}>
                <div className="col-md-3" style={{ height: "100%" }}>
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
            </div>
        </div>
    );
}

export default Dashboard;
