import React, { useState, useEffect, useRef } from "react";
import "./Layout.css";
import { Link, useLocation } from "react-router-dom";

import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';

import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';

import { useNavigate } from 'react-router-dom';
// Dummy JSON data for sidebar items
const sidebarData = [
    {
        name: 'Dashboard',
        path: '/dashboard',
        icon_path: 'GridViewRoundedIcon'
    },

];
function getIconComponent(iconPath) {
    switch (iconPath) {
        case 'GridViewRoundedIcon':
            return <GridViewRoundedIcon className="custom-sidebar-icon3" />;
        default:
            return null;
    }
}

function SideBar(props) {
    const [activeItem, setActiveItem] = useState("");
    const location = useLocation();
    const sidebarRef = useRef(null);

    const navigate = useNavigate();
    useEffect(() => {
        const pathname = location.pathname;


        const activeItem = sidebarData.find(item => item.path === pathname);
        if (activeItem) {
            setActiveItem(activeItem.name);
        }
    }, [location]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                props.handleSideBar(); // Close the sidebar if clicked outside
            }
        };

        if (props.open) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [props.open]);


    return (
        <div ref={sidebarRef} className={props.open ? "app-sidebar sidebar-open" : "app-sidebar"}>
            <ul className="list-div">
                {sidebarData.map(item => (
                    <li
                        key={item.path}
                        className={`list-items ${location.pathname.startsWith(item.path) ? "active" : ""}`}
                        onClick={() => { setActiveItem(item.name); props.handleSideBar(); }}
                    >
                        <Link className="link" to={item.path}>
                            {getIconComponent(item.icon_path)}
                            <p className="menu-names">{item.name}</p>
                        </Link>
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default SideBar;
