import React from 'react';

import './visiogen.css';
import ReactPlayer from 'react-player'

import Particle from '../../Common/Particle';

function Visiogen() {
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Lakshay Nasa</title>
                <link rel="icon" type="image/x-icon" href="/images/pfav.ico" />

                {/* Google Font */}
                <link href="https://fonts.googleapis.com/css2?family=Edu+VIC+WA+NT+Beginner:wght@400;500&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@300&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Qwitcher+Grypen:wght@700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@200&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@500&display=swap" rel="stylesheet" />

                {/* Font Awesome Icon - CSS */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
                <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />

                <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/unicons.css" />
            </head>
            <body>
                <Particle />
                {/* <span id="alert" style={{ visibility: "hidden", position: "absolute" }}>Sorry, portfolio is unavailable on mobile. Please visit on Desktop.</span> */}
                <section className="main-header">
                </section>

                <section id="doc">
                    <div className='article-header'>
                        <h2> 3D VisioGen: <strong className='green'>From 2D Images to 3D Models</strong></h2>
                        <p id="author-date">Lakshay Nasa | September 2023</p>
                    </div>

                    <div>
                        <p> In my research endeavor, I dedicated myself in advancing the processing of visual data through the
                            innovative approach of converting 2D images into intricate 3D models. Leveraging a combination of image
                            processing techniques with Structure From Motion Technique and libraries like <a href="https://github.com/cvg/LightGlue"
                                target="_blank">lightglue</a> OpenCV, PyTorch, SciPy, pyvista, MatplotLib, Joblib and using computer vision libraries as well as methodologies like Triangulation and TKf algorithm. My goal is to open new doors in spatial modeling applications ranging from automation and gaming to robotics, architecture and beyond.
                            Plus, I'm seeing ways to integrate it with Machine Learning and AI, which I think will take this project
                            "VisioGen" to the next level. Check out the video to see how this research is shaping the future!</p>
                    </div>
                    {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/RcAH8HbFBMI" frameborder="0" allowfullscreen></iframe> */}
                    <div id='content'>
                        <ReactPlayer url='https://www.youtube.com/embed/RcAH8HbFBMI' width="560" height="315" playing={true} muted={true} controls={true} loop={true} playbackRate={2} />




                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="src\Assets\Creations\fountain2D.png" alt="fountain2D" style={{ width: '50%' }} />
                        <div style={{ fontSize: '24px', margin: '0 10px' }}>➤</div>
                        <img src="src/Assets/Projects/VisioGen.gif" alt="fountain3D" style={{ width: '50%' }} />
                    </div>


                    <div>
                        {/* <h3>License and Agreement</h3> */}
                        <p>By viewing this video, you agree not to download, share, or modify the content without explicit
                            permission. Unauthorized reproduction or distribution is prohibited.</p>
                    </div>
                    <div className='contact-me'>
                        {/* <h3>Access and Collaboration</h3> */}
                        <p>If you would like to try out this project or discuss it further, kindly reach out me. I'm open to collaborate and
                            happy to share more details.</p>


                        <a href="https://www.linkedin.com/in/lakshaynasa/">LinkedIn</a>
                        <br />
                        <br />
                        <a href="mailto:lakshay1717@gmail.com">Mail Me</a>
                    </div>
                    <div>
                        <p><i>Resharing or distributing this video is strictly prohibited.</i></p>

                    </div>

                    <div>
                        <p>The images used in this dataset were obtained from publicly accessible online sources. I extend my gratitude to the photographers and creators who made their work accessible. Your contributions have been instrumental in the development of this project.
                        </p>

                    </div>
                </section>

                <script src="script.js"></script>
            </body>
        </html>
    );
}

export default Visiogen;
