import React from 'react';
import './SidebarBit.css';
import { Link, useLocation } from "react-router-dom"
import {IconContext} from 'react-icons'
const SidebarButton = (props) => {
    const location=useLocation()

    const isActive=location.pathname===props.to;

    const btnClass=isActive? "btn_body active" : "btn_body";
  return (
    <Link to={props.to} >
        <div className={btnClass}>
            <IconContext.Provider value={{size:'24px',className:'btn-icon'}}>

            {props.icon}
            <p className='btn_titel'>{props.titel}</p>
            </IconContext.Provider>
            
        </div>
    </Link> 
        
  )
}

export default SidebarButton
