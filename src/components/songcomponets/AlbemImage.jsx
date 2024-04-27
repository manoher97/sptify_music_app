import React from 'react';
import './albem.css';

const AlbemImage = ({url}) => {
  return (
    <div>
      <div className='albemImage flex'>
        <img src={url} alt="albem_image" className='albem_image_art' />

      <div className='albemImage_shadow'>
        <img src={url} alt="albem_image" className='albem_image_art' />
      </div>
      </div>
    </div>
  )
}

export default AlbemImage
