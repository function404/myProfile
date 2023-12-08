'use client';

import '../style/header/Header.css';

export default function Header() {

  if (typeof document !== 'undefined') {
    const rains = document.querySelectorAll('.rain');
    const getRandomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    rains.forEach(rain => {
     rain.style = `--rain-delay: ${getRandomNumber(0, 1000)}ms;`;
    });
  }



  return (
    <header id='header'>
      <div className="rain-container">
        <span className="rain"></span>
        <span className="rain"></span>
        <span className="rain"></span>
        <span className="rain"></span>
        <span className="rain"></span>
        <span className="rain"></span>
        <span className="rain"></span>
        <span className="rain"></span>
        <span className="rain"></span>
        <span className="rain"></span>
        <span className="rain"></span>
        <span className="rain"></span>
        <span className="rain"></span>
        <span className="rain"></span>
        <span className="rain"></span>
        <span className="rain"></span>
        <span className="rain"></span>
        <span className="rain"></span>
        <span className="rain"></span>
        <span className="rain"></span>
      </div>
      <div className='main-img'>
        <div className='text-overlay b'>
          <div className='swipe'>
            <h1>I am</h1>
          </div>
        </div>
        <div className='text-overlay'>
          <div className='swipe'>
            <h3>Function404</h3>
          </div>
        </div>
        <div className='text-overlay c'>
          <div className='swipe'>
            <h4>Dedicated to Programming Studies and Front-end Development</h4>
          </div>
        </div>
      </div>
      <div className='main-responsive'>
      <div className='text-overlay-responsive b'>
          <div className='swipe-responsive'>
            <h1>I am</h1>
          </div>
        </div>
        <div className='text-overlay-responsive'>
          <div className='swipe-responsive'>
            <h3>Function404</h3>
          </div>
        </div>
        <div className='text-overlay-responsive c'>
          <div className='swipe-responsive'>
            <h4>Dedicated to Programming Studies and Front-end Development</h4>
          </div>
        </div>
      </div>
    </header>
  );
}
