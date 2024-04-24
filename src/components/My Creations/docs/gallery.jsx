// Gallery.js

import React from 'react';
import ReactPlayer from 'react-player';

import Particle from '../../Common/Particle';

import "./gallery.css"

const Gallery = () => {
  return (
    <div className="gallery-container">
      <Particle />
      {/* <h1 className='title-top'>Innovation Hub 🎨</h1> */}
      <h1 className='blue'> Design | Motions | Visuals 🎨</h1>
      <div className="gallery">
        <div className="gallery-item video">
          <ReactPlayer url="src\Assets\Designs\DOKc Animation.mp4" playing={true} muted={true} controls={true} loop={true} width="640" height="auto" s />
        </div>
        <div className="gallery-item">
          <img src="src/Assets/Designs/Custom-Resource.png" alt="Image 1" />
        </div>
        <div className="gallery-item">
          {/* <a href="https://github.com/lakshay-nasa/DoK-Vocabulary-Cards" target="_blank"> */}
          <img src="src/Assets/Designs/ReplicationController.png" alt="Image 2" />
          {/* </a> */}
        </div>
        <div className="gallery-item">
          <img src="src/Assets/Designs/Deployments.png" alt="Image 3" />
        </div>
        <div className="gallery-item">
          <img src="src/Assets/Designs/Stateless-App.png" alt="Image 4" />
        </div>
        <div className="gallery-item video">
          <ReactPlayer url="src\Assets\Designs\trailer.mp4" playing={true} muted={true} controls={true} loop={true} width="640" height="auto" playbackRate={1} />
        </div>
        <div className="gallery-item video">
          <ReactPlayer url="src\Assets\Designs\Logo.mp4" playing={true} muted={true} controls={true} loop={true} width="640" height="auto" />
        </div>
        <div className="gallery-item">
          <img src="src/Assets/Designs/2D.png" alt="Image 4" />
        </div>
        <div className="gallery-item">
          <img src="src/Assets/Designs/window_crash.png" alt="Image 5" />
        </div>
        {/* Add more gallery items as needed */}
      </div>
    </div>
  );
};

export default Gallery;
