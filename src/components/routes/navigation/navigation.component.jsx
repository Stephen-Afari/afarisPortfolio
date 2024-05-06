//NavBar
import './navigation.styles.scss'
import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
import { Fragment } from "react"
import { FaPersonChalkboard } from "react-icons/fa6";
import { useState } from 'react';

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
        <Link className="myLogo" to='/'><FaPersonChalkboard className='personImag'/></Link>
       
        <div className="nav-links-container">
            <Link className={getButtonClass("aboutmeBtn")} to='/aboutme' onClick={()=>toggleActiveButton("aboutmeBtn")}>
            ABOUT ME &ensp;
            </Link>
            <br/>
            <Link className='skillsLink' to='/skills'>
            SKILLS &ensp;
            </Link>
            <Link className='resumeLink' to='/resume'>
            RESUME &ensp;
            </Link>
        </div>
        </div>
        <Outlet/>
      </Fragment>
    )
  }