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
            <img src="/images/logo.png" alt="logo" className="logo" />
        </div>
        
        <button className="btn btn_primary">Login</button>
      </div>
    </div>
    <Outlet />
    </>
  )
}

export default Header