import React, { useEffect, useState } from 'react';
import './SideDec.css';

import SidebarButton from './SidebarButton';
import { MdFavorite,MdDashboard } from "react-icons/md";
import { FaGripfire,FaPlay  } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import apiClient from '../../sptify';

const SideIndex = () => {
  const [image,setImage]=useState(
    "https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=600"
  )
  useEffect(()=>{
    apiClient.get("artists/4Z8W4fKeB5YxbusRsdQVPb").then(respones=>{
      setImage(respones.data.images[0].url)
    })
  },[])
  return (
    <div className='Sidebar_dec'>
      <img src={image} className='Profile_img' alt="Profile" />
      <div>
        <SidebarButton titel='Feed' to='/Feed' icon={<MdDashboard />}/>
        <SidebarButton titel='Trends' to='/Trends' icon={<FaGripfire/>}/>
        <SidebarButton titel='Playar' to='/Playar' icon={<FaPlay/>}/>
        <SidebarButton titel='Faveretes' to='/Faveretes' icon={<MdFavorite/>}/>
        <SidebarButton titel='Lybrary' to='/' icon={<IoLibrary/>}/>
      </div>
      <SidebarButton titel='Sign Out' to='' icon={<FaSignOutAlt/>}/>
    </div>
  )
}

export default SideIndex
