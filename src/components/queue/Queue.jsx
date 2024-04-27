import React from 'react';
import './queue.css';

const Queue = ({ tracks, setCurrentIndex }) => {
  console.log(tracks);
  if (!Array.isArray(tracks)) {
    return <p>No tracks available</p>;
  }

  return (
    <div className='queue_continer flex'>
      <div className='Queue flex'>
        <p className="upnext">Up Next</p>
        <div className="queue_list">
          {tracks.map((track, index) => (
            <div key={index} className="track-item flex" onClick={()=>{setCurrentIndex(index)}}>
              <p className='track_name'>{track.name}</p>
              <p>0.36</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Queue;
