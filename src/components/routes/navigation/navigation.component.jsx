//NavBar
import './navigation.styles.scss'
import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
import { Fragment } from "react"
import { FaPersonChalkboard } from "react-icons/fa6";
import { useState } from 'react';
// import {ReactComponent as MyLogo} from '../../../assets/afarislogo.svg'

//Use intials for Image
import React from "react";

const ProfileImage = ({ name }) => {
  const nameParts = name.split(" ");
  const firstNameInitial = nameParts[0] ? nameParts[0][0] : "";
  const lastNameInitial = nameParts[1] ? nameParts[1][0] : "";

  return (
   
 <span className="user-profile-image">
      {firstNameInitial}
      {lastNameInitial}
    </span>
   
   
  );
};


export const Navigation=()=>{
//Underlining a clicked button
const [activeButton, setActiveButton]= useState(null)

const toggleActiveButton =(buttonId)=>{
    if(activeButton===buttonId){
        setActiveButton(null)
    }else{
        setActiveButton(buttonId)
    }
}

const getButtonClass =(buttonId)=>{
return activeButton===buttonId ? 'aboutmeUnderline':'aboutmeLink'
}

    return(
      <Fragment>
         <div className="navigation">
        <Link className="myLogo" to='/'><ProfileImage name='Stephen Afari'/></Link>
       
        <div className="nav-links-container">
            <Link className={getButtonClass("aboutmeBtn")} to='/aboutme' onClick={()=>toggleActiveButton("aboutmeBtn")}>
            ABOUT ME &ensp;
            </Link>
            <br/>
            <Link className={getButtonClass("skillsBtn")}  to='/skills' onClick={()=>toggleActiveButton("skillsBtn")}>
            SKILLS &ensp;
            </Link>
            <Link className={getButtonClass("resumeBtn")}  to='/resume' onClick={()=>toggleActiveButton("resumeBtn")}>
            RESUME &ensp;
            </Link>
        </div>
        </div>
        <Outlet/>
      </Fragment>
    )
  }