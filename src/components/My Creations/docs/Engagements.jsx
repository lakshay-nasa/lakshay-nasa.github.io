import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"; // Import ImageGallery CSS

import "./engagements.css"

import Particle from "../../Common/Particle";

const images = [
    {
        original: "src/Assets/Engagements/KCD1.jpg",
        thumbnail: "src/Assets/Engagements/KCD1.jpg",
        originalHeight: "500px",
        originalWidth: "auto",
    },
    {
        original: "src/Assets/Engagements/KCD2.jpg",
        thumbnail: "src/Assets/Engagements/KCD2.jpg",
        originalHeight: "500px",
    },
    {
        original: "src/Assets/Engagements/KCD3.jpg",
        thumbnail: "src/Assets/Engagements/KCD3.jpg",
        originalHeight: "500px",
    },
    {
        original: "src/Assets/Engagements/KCD4.jpg",
        thumbnail: "src/Assets/Engagements/KCD4.jpg",
        originalHeight: "500px",
    },
    {
        original: "src/Assets/Engagements/KCD5.jpg",
        thumbnail: "src/Assets/Engagements/KCD5.jpg",
        originalHeight: "500px",
    },
    {
        original: "src/Assets/Engagements/1.jpg",
        thumbnail: "src/Assets/Engagements/1.jpg",
        originalHeight: "500px",
    },
    {
        original: "src/Assets/Engagements/2.jpg",
        thumbnail: "src/Assets/Engagements/2.jpg",
        originalHeight: "500px",
    },
    {
        original: "src/Assets/Engagements/3.jpg",
        thumbnail: "src/Assets/Engagements/3.jpg",
        originalHeight: "500px",
    },
    {
        original: "src/Assets/Engagements/4.jpg",
        thumbnail: "src/Assets/Engagements/4.jpg",
        originalHeight: "500px",
    },
    {
        original: "src/Assets/Engagements/5.jpg",
        thumbnail: "src/Assets/Engagements/5.jpg",
        originalHeight: "500px",
    },
];

const MyEngagements = () => {
    return (
        <div className="main-container">
            <Particle />
            <h1 className="engagemnts-heading">
                Events & <strong className="blue">Engagements 🚀 </strong>
            </h1>
            <div className="engagemnts-container">
                <ImageGallery items={images} />
            </div>
        </div>
    );
};

export default MyEngagements;