import React, { useEffect, useState } from 'react';
import '../Asets/player.css'
import { useLocation } from 'react-router-dom';
import apiClient from '../sptify';
import Song from './songcomponets/Song';
import Queue from './queue/Queue';
import AdiopPlay from './AdioPlay/AdiopPlay';
const Playar = () => {
  const locat = useLocation();
  const [tracks,setTracks] = useState([]);
  const [curentTracks,setCurentTracks]=useState({});
  const [correntIndex,setCurrentIndex]=useState(0);
  useEffect(() => {
    if (locat?.state) {
      apiClient.get("albums/" + locat?.state?.id).then(
        res => {
          setTracks(res?.data);
          setCurentTracks(res?.data?.tracks?.items);
        }
      )
    }
  }, []);
  useEffect(()=>{
   
  },[correntIndex,tracks])
  return (
    <div className='screen_conteiner flex'>
      <div className='left-player-body'>
        <AdiopPlay curentTracks={curentTracks}/>
      </div>
      <div className='right-player-body'>
        <Song albems={tracks}/>
        <Queue tracks={curentTracks} setCurrentIndex={setCurrentIndex}/>
      </div>
    </div>
  )
}

export default Playar
