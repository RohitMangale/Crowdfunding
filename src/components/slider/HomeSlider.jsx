import React, { useState } from 'react';
import './HomeSlider.css'

import Campaigns from '../../assets/data/campaignsData'
import CamCard from '../campaignCard/CamCard'
import Flickity from 'react-flickity-component'; // Import Flickity directly as an ES module

const flickityOptions = {
    initialIndex: 2,
    prevNextButtons: false,
    pageDots: false,
    draggable: true,
    freeScroll: true,
    wrapAround: false,
    contain: true,

};


const HomeSlider = () => {
    return (
        <div className="homeCarousel container">

            <div className="subHeading">Offerings that have raised the most money in the last few days</div>
            <div className="para"></div>
            <Flickity
                className={'carousel container'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate={true} // Add curly braces for boolean value
                static={false} // Add curly braces for boolean value
            >
                {Campaigns.map(campaign => (
                    <div  key={campaign.camId} className="carousel-cell">
                        <CamCard {...campaign} />
                    </div>
                ))}



            </Flickity>
        </div>

    );
}



export default HomeSlider
