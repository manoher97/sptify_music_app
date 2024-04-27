import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Lybrary from './components/Lybrary';
import Feed from './components/Feed';
import Playar from './components/Playar';
import Faveretes from './components/Faveretes';
import Trends from './components/Trends';
import './Asets/Route.css'
import SideIndex from './components/SidBar/SideIndex';
import LogPag from './authLog/LogPag';
import { setClientToken } from './sptify';


const Routers = () => {
    const [token, setToken] = useState("");

    useEffect(() => {
        const token = window.localStorage.getItem("token")
        const hash = window.location.hash;
        window.location.hash = "";
        if (!token && hash) {
            const _token = hash.split("&")[0].split("=")[1];
            window.localStorage.setItem("token", _token);
            setToken(_token);
            setClientToken(_token);
        } else {
            setToken(token);
        }

    }, [])
    return (!token ?
        <LogPag /> :
        <div>
            <BrowserRouter>
                <div className='Screen_dec'>

                    <SideIndex />
                    <Routes>
                        <Route exact path='/' element={<Lybrary />} />
                        <Route exact path='/Feed' element={<Feed />} />
                        <Route exact path='/Playar' element={<Playar />} />
                        <Route exact path='/Faveretes' element={<Faveretes />} />
                        <Route exact path='/Trends' element={<Trends />} />
                    </Routes>
                </div>
            </BrowserRouter>

        </div>
    )
}

export default Routers
