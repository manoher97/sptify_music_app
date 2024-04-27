import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import APIKit from '../sptify';
import '../Asets/library.css';
import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom'
const Lybrary = () => {
  const [playList, setPlayLiast] = useState(null);
  useEffect(() => {
    APIKit.get("artists/1vCWHaC5f2uS3yhpwWbIA6/albums?album_type=SINGLE&offset=20&limit=30").then((response) => {
      setPlayLiast(response.data.items);
      // console.log(response.data.items);
    })
  }, []);
  const navigate = useNavigate();

  const playPlayliat = (id) => {
    navigate("/playar", { state: { id: id } });
  }
  return (
    <div className='screen_conteiner'>
      <div className='library_body'>
        {playList?.map((playList) => (
          <div className='playlist_cart' key={playList?.id} onClick={() => playPlayliat(playList?.id)}>
            <img src={playList?.images[1]?.url} className='playlist_img' alt="..." />
            <p className='playlist_titel '> {playList?.name}</p>
            <p className='playlist_subtitel'>{playList?.total_tracks}songs</p>
            <div className='playliat_fade'>
              <IconContext.Provider value={{ size: '50px', color: '#E99D72' }}>
                < AiFillPlayCircle />
              </IconContext.Provider>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Lybrary;
