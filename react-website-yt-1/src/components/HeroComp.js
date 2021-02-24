import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroComp.css';

function HeroComp() {
  return (
    <div className='hero-container'>
      <h1>Mahalo</h1>
      <p>Ohana means family, family means nobody gets left behind!</p>
      <div className='hero-btns'>
         <Button
          src='/about'
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Click Me!
        </Button>
        <Button
          src='/content'
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          Projects! 
        </Button> 

      </div>
    </div>
  );
}

export default HeroComp;
