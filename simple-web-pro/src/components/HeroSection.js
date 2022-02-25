import React from 'react'
import '../App.css';
import { Button } from './Button';
import './Button.css'
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='https://cdn.kapwing.com/final_6214664f755683007659e246_214474.mp4' autoPlay loop muted />
        <h1>DEAR DREAM</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
            <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
            >
            LET'S DREAM
            </Button>
            <Button
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                onClick={console.log('hey')}
            >
                WATCH 7DREAM <i className='far fa-play-circle' />
            </Button>
        </div>

    </div>
  )
}

export default HeroSection;