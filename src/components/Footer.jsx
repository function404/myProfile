'use client';

import '../style/footer/Footer.css';
import anoAtual from '../components/function/date.jsx';

export default function Footer() {
  return (
    <footer>
      <h5>
        ©2022 - {anoAtual()} •<a target='blank_' href='https://github.com/function404'>Function404</a>
      </h5>
    </footer>
  );
}
