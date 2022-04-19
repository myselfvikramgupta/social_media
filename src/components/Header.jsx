import React from 'react'
import { Outlet } from "react-router-dom";
import {MenuIcon} from './svgIcons'
const Header = () => {
  const sideMenuOpen=()=>{
     let menuBtn=document.getElementById("side_menu");
     menuBtn.classList.add('active')
  }
  return (
    <>
    <div className='header'>
      <div className='container d_flex_space_between'>
        <div className='menu_wrap'>
            <button className='colse_bnt' onClick={sideMenuOpen}><MenuIcon /></button>
           <h1 className="header_title">The Real Dairy</h1>
        </div>
        
        <button className="btn btn_primary">Login</button>
      </div>
    </div>
    <Outlet />
    </>
  )
}

export default Header