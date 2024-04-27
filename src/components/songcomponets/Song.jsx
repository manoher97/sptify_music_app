import React, { useEffect, useState } from 'react';
import './song.css';
import AlbemImage from './AlbemImage';
import AlbemInfo from './AlbemInfo';


const Song = ({albems}) => {
  return (
    <div className='song_body flex'>
      {albems.length===0?("no data"):(<AlbemImage url={albems.images[0]?.url}/> )}
      <AlbemInfo albems={albems}/>
    </div>
  )
}

export default Song
