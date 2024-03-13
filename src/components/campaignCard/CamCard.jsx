import React from 'react'
import './CamCard.css'
import ProgressBar from '../progressBar/ProgressBar'


const CamCard = ({ camName, camTagLine, camImg, camPercent,camRaised ,camInvestors }) => {

  return (
      <div className='camCard'>
          <div className="camImg" style={{ backgroundImage: `url(${camImg})` }} />

          <div className="camDetails">
              <p className='camName' style={{ backgroundImage: `url(${camImg})` }}   >{camName}</p>
              <p className='para'>{camTagLine}</p>
          </div>
          <div className="cambar">
              <ProgressBar percentage={camPercent} />
              <div className="camValues">
              <p>Investors: {camInvestors} </p>
              <p>Raised: ${camRaised}M</p>
              </div>
          </div>
      </div>
  )
}

export default CamCard
