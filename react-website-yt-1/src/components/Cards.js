import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

import temp from '../images/img-1.jpg';



function Cards() {
  return (
    <div className='cards'>
      <h1>Check this stuff out!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={temp}
              text='The content in this page is information I have gathered throughout the years.'
              label='Educational'
              path='/content'
            />
            <CardItem
              src={temp}
              text='Learn a bit more about me'
              label='About Me'
              path='/about'
            />
          </ul>      
        </div>
      </div>
    </div>
  );
}

export default Cards;
