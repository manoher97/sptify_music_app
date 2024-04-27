import React from 'react';
import './albeminfo.css';

const AlbemInfo = ({ albems }) => {
  const artist = [];
  albems?.artists?.forEach((element) => {
    artist.push(element.name)
  })

  return (
    <div className='albeminfo_card'>
      <div className='info_continer'>
        <div className="marquee">
          <p>{albems?.name + "-" + artist.join(', ')}</p>
        </div>
      </div>
      <div className='albem_ifo'>
        <p>{`${albems?.name} is an ${albems?.album_type} with ${albems?.total_tracks
          } tracks`}</p>
      </div>
      <div className='albem_release'>
        <p>Release Date: {albems.release_date}</p>
      </div>
    </div>
  )
}

export default AlbemInfo
