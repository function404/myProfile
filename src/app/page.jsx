'use client';
6
import Image from 'next/image'

import './globals.css';

import PropagateLoader from "react-spinners/PropagateLoader";
import { useEffect, useState } from 'react';

export default function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <main>
      {loading ? 
        <div className="loading">
          <PropagateLoader color={"#fff"} loading={loading} size={10} />
        </div>
        :
        <div className="container">
          <h1>Hello</h1>
        </div>
      }
    </main>
  )
}
