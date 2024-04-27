import React from 'react';
import './Adiop.css';
import PrograseCircel from './PrograseCircel';

const AdiopPlay = ({curentTracks}) => {
    console.log("why",curentTracks);
  return (
    <div className='player_body'>
        <div className=".player_left">
            <PrograseCircel
             percentage={75}
             isPlay={true}
            //  image={""}
             size={300}
             color="#C96850"/>
        
        </div>
        <div className="player_right"></div>
      
    </div>
  )
}

export default AdiopPlay
