// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './timeline.css'
import Particle from "../Common/Particle";

import React, { useState, useEffect } from 'react';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';

import WorkIcon from "./work.svg";
import SchoolIcon from "./school.svg";

import { BiArrowToBottom, BiArrowFromBottom  } from "react-icons/bi";

import timelineElements from './timelineElements'; // Adjust the path as necessary

// Project = Green = badge-success = .text-projects
// Work Exp = Blue = badge-primary = .text-workExp
// Achievements = Yellow = badge-warning = .text-achievements
// Learnings = red = badge-danger = .text-learnings
// Education = grey = badge-secondary = .text-education

const MyTimeline = () => {
  const [selectedTag, setSelectedTag] = useState('All');
  const [scrollToTop, setScrollToTop] = useState(true);

  // Effect to manage icon selection and update selected tag in React state
  useEffect(() => {
    const icons = document.querySelectorAll('.select-element .icon-container');

    const handleClick = function () {
      const tag = this.querySelector('.icon-text').innerText;
      setSelectedTag(tag);

      // Remove 'selected' class and 'green-text' class from all icons and texts
      icons.forEach(i => {
        i.querySelector('i').classList.remove('selected');
        i.querySelector('.icon-text').classList.remove('green-text');
      });

      // Add 'selected' class to clicked icon and 'green-text' class to its text
      this.querySelector('i').classList.add('selected');
      this.querySelector('.icon-text').classList.add('green-text');
      console.log('Selected icon:', this.querySelector('i').className);
    };

    icons.forEach(iconContainer => {
      iconContainer.addEventListener('click', handleClick);
    });

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      icons.forEach(iconContainer => {
        iconContainer.removeEventListener('click', handleClick);
      });
    };
  }, []); // Empty dependency array to ensure the effect runs only once

  const handleScrollButtonClick = () => {
    if (scrollToTop) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setScrollToTop(!scrollToTop);
  };

  const getBadgeColor = (tag) => {
    switch (tag) {
      case 'Projects':
        return 'badge-success';
      case 'Experiences':
        return 'badge-primary';
      case 'Achievements':
        return 'badge-warning';
      case 'Learnings':
        return 'badge-danger';
      case 'Education':
        return 'badge-secondary';
      default:
        return '';
    }
  };

  const getTextClass = (tag) => {
    switch (tag) {
      case 'Projects':
        return 'text-projects';
      case 'Experiences':
        return 'text-workExp';
      case 'Achievements':
        return 'text-achievements';
      case 'Learnings':
        return 'text-learnings';
      case 'Education':
        return 'text-education';
      default:
        return '';
    }
  };

  const filteredElements = selectedTag === 'All' ? timelineElements : timelineElements.filter(element => element.tag === selectedTag);

  return (
    <div className="row d-flex justify-content-center mt-70 mb-70">
      <Particle/>
      <div className="col-12">
        <div className="main-card mb-3 card">
          <div className="card-body">
            <h1 className="card-title-timeline">
              My <strong className="green">Timeline🪴</strong>
            </h1>
            <p className='timeline-quote-top'>This timeline captures moments, but not every ripple in the ocean of life.
              <br />
              It's a glimpse, not the full story</p>
            <div className='select-element'>
              <div className='icon-container' onClick={() => setSelectedTag('All')}>
                <i className={`badge badge-dot badge-dot-xll badge-Dark selected`}> </i>
                <span className="icon-text green-text">All</span>
              </div>
              <div className='icon-container' onClick={() => setSelectedTag('Achievements')}>
                <i className={`badge badge-dot badge-dot-xll badge-warning`}> </i>
                <span className="icon-text">Achievements</span>
              </div>
              <div className='icon-container' onClick={() => setSelectedTag('Projects')}>
                <i className={`badge badge-dot badge-dot-xll badge-success`}> </i>
                <span className="icon-text">Projects</span>
              </div>
              <div className='icon-container' onClick={() => setSelectedTag('Learnings')}>
                <i className={`badge badge-dot badge-dot-xll badge-danger`}> </i>
                <span className="icon-text">Learnings</span>
              </div>
              <div className='icon-container' onClick={() => setSelectedTag('Experiences')}>
                <i className={`badge badge-dot badge-dot-xll badge-primary`}> </i>
                <span className="icon-text">Experiences</span>
              </div>
              <div className='icon-container' onClick={() => setSelectedTag('Education')}>
                <i className={`badge badge-dot badge-dot-xll badge-secondary`}> </i>
                <span className="icon-text">Education</span>
              </div>
            </div>


            <div className="vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
              {filteredElements.slice().reverse().map(element => (
                <div key={element.id} className="vertical-timeline-item vertical-timeline-element">
                  <div>
                    <span className="vertical-timeline-element-icon bounce-in">
                      <i className={`badge badge-dot badge-dot-xl ${getBadgeColor(element.tag)}`}> </i>
                    </span>
                    <div className="vertical-timeline-element-content bounce-in">
                      {element.title && ( // Check if title exists
                        <h4 className="timeline-title">
                          {element.title.split(' ').map((word, index, array) => (
                            <span key={index} className={index === array.length - 1 ? getTextClass(element.tag) : ''}>
                              {word}{' '}
                            </span>
                          ))}
                        </h4>
                      )}
                      {/* Render key points if they exist */}
                      {element.keyPoints && element.keyPoints.map((point, index) => (
                        <p key={index}>
                          {/* Check if 'parts' array exists */}
                          {point.parts ? (
                            point.parts.map((part, idx) => (
                              <React.Fragment key={idx}>
                                {part.link ? (
                                  <>
                                    {part.text.split(' ').slice(0, -1).join(' ')}{' '}
                                    <a href={part.link} data-abc="true" className={getTextClass(element.tag)}>
                                      {part.text.split(' ').slice(-1)[0]}
                                    </a>
                                    {part.textAfterLink && ` ${part.textAfterLink}`}
                                  </>
                                ) : (
                                  <>{part.text}</>
                                )}
                              </React.Fragment>
                            ))
                          ) : (
                            // If 'parts' doesn't exist, render it as before
                            <>
                              {point.link ? (
                                <>
                                  {point.text.split(' ').slice(0, -1).join(' ')}{' '}
                                  <a href={point.link} data-abc="true" className={getTextClass(element.tag)}>
                                    {point.text.split(' ').slice(-1)[0]}
                                  </a>
                                  {point.textAfterLink && ` ${point.textAfterLink}`}
                                </>
                              ) : (
                                <>{point.text}</>
                              )}
                            </>
                          )}
                        </p>
                      ))}

                      {/* Render date if it exists */}
                      {element.month && (
                        <span className="vertical-timeline-element-date" data-month={element.month} data-year={element.year}></span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='timeline-quote-base'> <p>
              The journey of a thousand miles begins with a single step.
              <br />
              <br />
              ★☆★
            </p>
            </div>
          </div>
        </div>
        <button className="scroll-button" onClick={handleScrollButtonClick}>
          {scrollToTop ? '▼' : '▲'}
          {/* {scrollToTop ? <BiArrowToBottom /> : <BiArrowFromBottom />} */}
        </button>
      </div>
    </div>
  );
};

export default MyTimeline;