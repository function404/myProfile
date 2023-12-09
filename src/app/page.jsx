'use client';

import React, {useEffect, useState} from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader'

import Header from '../components/Header.jsx';
import Projects from '../components/Projects.jsx';
import Footer from '../components/Footer.jsx';
import Snow from '../components/Snow.jsx';

import './globals.css';

export default function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2222);
  }, []);

  return (
    <main className='main'>
      {loading ? 
        <div className='loading'>
          <PropagateLoader color={'#fff'} loading={loading} size={15} />
        </div>
        :
        <div className='container-index'>
          <Header />
          <Projects />
          <Footer />
          <Snow />
        </div>  
      }
    </main>
  )
}