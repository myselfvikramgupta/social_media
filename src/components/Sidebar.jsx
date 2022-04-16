import React from 'react'
import {HomeIcon,NotificationIcon,SettingIcon,BookMarkIcon,CompassIcon,CloseIcon} from './svgIcons'
function Sidebar() {
    const sideMenuClose=()=>{
        let menuBtn=document.getElementById("side_menu");
        menuBtn.classList.remove('active')
     }
    return (
        <div className="side_menu " id="side_menu">
            <div className="card">
                <div className="card_body">
                    <div className='side_menu_close'>
                        <button className='colse_bnt' onClick={sideMenuClose}><CloseIcon /></button>
                    </div>
                    <div className="sidebar">
                        <a href="#" className="sidebar_menu_item active">
                            <HomeIcon /> <h4>Home</h4>
                        </a>
                        <a href="#" className="sidebar_menu_item">
                            <CompassIcon /> <h4>Explore</h4>
                        </a>
                        <a href="#" className="sidebar_menu_item">
                            <div className='notify'>
                                <NotificationIcon />
                                <span className="notify_alert"></span>
                            </div>
                            <h4>Notifications</h4>

                        </a>
                        <a href="#" className="sidebar_menu_item">
                            <BookMarkIcon />  <h4>BookMarks</h4>
                        </a>
                        <a href="#" className="sidebar_menu_item">
                            <SettingIcon />  <h4>Settings</h4>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar