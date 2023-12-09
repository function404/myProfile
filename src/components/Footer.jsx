'use client';

import '../style/footer/Footer.css';
import anoAtual from '../components/function/date.jsx';

export default function Footer() {
  return (
    <footer>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
       <div className="main-btn">
        <div className='content-btn'>
          <div className="btn">
            <a href="https://www.instagram.com/lincoln.xit__/" target='blank_'>
              <i class="fa-brands fa-instagram"></i>
            </a>
          </div>
          <div className="btn">
            <a href="https://github.com/function404" target='blank_'>
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
          <div className="btn">
            <a href="https://www.linkedin.com/in/lincoln-novais-mezzalira-361962236/" target='blank_'>
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        <h5>
          ©2022 - {anoAtual()} &copy; Reserved rights
        </h5>
      </div>
    </footer>
  );
}
