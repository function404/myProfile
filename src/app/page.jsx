"use client";

import Header from '../components/Header.jsx';

import './globals.css';

import React, {useEffect, useState} from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader'


export default function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <main className='main'>
      {loading ? 
        <div className='loading'>
          <PropagateLoader color={'#ffffff'} loading={loading} size={15} />
        </div>
        :
         <div className='container-index'>
          <h1>Olá</h1>
          <Header />
         </div>  
      }
    </main>
  )
}
