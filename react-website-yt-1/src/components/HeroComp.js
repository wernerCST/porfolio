import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroComp.css';

function HeroComp() {
  return (
    <div className='hero-container'>
      {/* <video src='../videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>Mahalo</h1>
      <p>Ohana means family, family means nobody gets left behind!</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Click Me!
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Projects! 
          {/* <i className='far fa-play-circle' /> */}
        </Button>
      </div>
    </div>
  );
}

export default HeroComp;
