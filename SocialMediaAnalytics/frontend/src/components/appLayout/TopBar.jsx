import React, { useState, useEffect } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CustomizedSwitches from "./toggleTheme";
import Button from "../Button/Button";
import BusinessTwoToneIcon from '@mui/icons-material/BusinessTwoTone';



function TopBar(props) {

    return (
        <div
            className="app-topbar"
            style={{
                backgroundColor: "var(--background-1)",
                display: "flex",
                padding: "3px 7px",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid var(--border-color)",
                gap: 20,
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%"
                }}
            >
                <div onClick={props.sidebar} className="sidebar-menu">
                    <MenuIcon />
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <BusinessTwoToneIcon sx={{ fontSize: "35px" }} className="techLehren-icon" />
                    <div>
                        <h2 className="app-name">Social Media Alalytics</h2>
                        <p style={{ fontFamily: "'Playpen Sans', cursive", fontSize: '12px', fontWeight: '700', letterSpacing: '1px' }}>Full Stack Project</p>
                    </div>
                </div>

                <div className="top-bar-menus">
                    <CustomizedSwitches />
                    <div className="profile-section">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;
