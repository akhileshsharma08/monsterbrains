import React from 'react'
import ManVideo from '../img/media/man.mp4'


const ManScreen = () => {
  return (
   
        <div className="videoContainer w-full">
          <video autoPlay loop muted id='video' className="video z-10 w-full" >
        <source src={ManVideo} type="video/mp4" />
      </video>
    </div>
  )
}

export default ManScreen