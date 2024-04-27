import React from 'react'
import './PrograseCircel.css'

const Circle = ({ color, percentage, size, strokewidth }) => {
  const radius = (size / 2) - 10;
  const circ = 2 * Math.PI * radius - 20;
  const srokePct = ((100 - Math.round(percentage)) * circ) / 100;
  return (
    <circle
      r={radius}
      cx="50%"
      cy="50%"
      fill="transparent"
      stroke={srokePct !== circ ? color : ""}
      strokeWidth={strokewidth}
      strokeDasharray={circ}
      strokeDashoffset={percentage ? srokePct : 0}
      strokeLinecap='round'>
    </circle>
  )
};

const PrograseCircel = ({ percentage,
  isPlay,
  image,
  size,
  color }) => {
  return (
    <div className='porgrase_circle'>
      <svg width={size} height={size}>
        <g>
          <Circle
            strokewidth={"0.4rem"}
            color="#244a69"
            size={size} />
          <Circle
            strokewidth={"0.6rem"}
            color={color}
            percentage={percentage}
            size={size} />
        </g>
        <defs>
          <clipPath id="mycircle">
            <circle
              cx="50%"
              cy="50%"
              r={size / 20 - 30}
              fill='#ffffff' />
          </clipPath>
          <clipPath id='Innermycircle'>
            <circle
              cx="50%"
              cy="50%"
              r={size / 20 - 100}
              fill='#ffffff' />
          </clipPath>
        </defs>
        <image className={isPlay ? 'active' : ""} x={30} y={30} width={2 * (size / 2 - 30)} height={2 * (size / 2 - 30)} href='https://media.istockphoto.com/id/481475560/vector/vinyl-record-template.jpg?s=612x612&w=0&k=20&c=fZgBryspxNnRn8qMa1mEquff_T6wENAY1HXMtNEMyh4='
          clipPath={"#mycircle"} />
        <image className={isPlay ? 'active' : ""} x={100} y={100} width={2 * (size / 2 - 100)} height={2 * (size / 2 - 100)} href=''
          clipPath='#Innermycircle' />
      </svg>
    </div>
  )
}

export default PrograseCircel
