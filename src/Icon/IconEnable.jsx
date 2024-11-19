import React from 'react'
import "../Icon/Icon.css"

const IconEnable = (props) => {
  return (
    <label className="toggle">
        <input id={`checkbox-${props.id}`} type="checkbox" />
        <div className="track">
            <div className="thumb"></div>
        </div>
  </label>
  )
}

export default IconEnable