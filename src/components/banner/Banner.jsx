import React from 'react'
import './Banner.css'
import crowd from '../../assets/imgs/crowdfunsing.jpg'
const Banner = () => {
  return (
    <div className="banner-maindiv container">

    <div className="banner-onediv">
        <p className='subHeading' >EazzyFunzz</p>
        <h1 >Invest in Innovation!</h1>
        <p className='para' >
        Explore groundbreaking ideas. Connect visionaries with investors. Fuel innovation and growth.  
        </p>
        <button target='_blank' className='btn' >Join Now</button>
    </div>

    <div className="banner-twodiv">
    </div>
</div>
  )
}

export default Banner
