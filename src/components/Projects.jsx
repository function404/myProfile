'use client';

import { motion, useInView, useAnimation } from 'framer-motion';

import '../style/projects/projects.css';
import { useEffect, useRef } from 'react';


export default function Projects({children, width = "fit-content"}){
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  const mainControls = useAnimation();

  useEffect(() => {
    if(isInView) {
      mainControls.start('visible');
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{position: "relative", width}}>
      <motion.div 
        className='main'
        variants={{
          hidden:{ opacity: 0, y: 100 },
          visible:{ opacity: 1, y: 0},
        }}
        initial='hidden'
        animate={mainControls}
        transition={{duration: 2, delay: 0.5}}
      >
        {children}
          <div className="titulo">
              <h2 data-text='Projects'>Projects</h2>
          </div>
        <div className='container'>
          <div className='content'>
            <div className='cards'>
              <div className='titleProjects'>
                <span>Museum of Informatics</span>
              </div>
              <div className='info-cards'>
                Website developed for work purposes (course).
              </div>
              <button id='btn-1' className='button-cards'>
                <a
                  data-tooltip='Clique na Imagem'
                  href='https://museuinfo.netlify.app/'
                  target='_blank'
                >
                  <img
                    className='img-cards'
                    draggable='false'
                    dragstart='false'
                    src='/img/m-info.png'
                    alt='erro'
                  />
                </a>
              </button>
              {/*<div className='info-buttom-cards'><i className='fa-solid fa-circle-info'></i>  Clique na imagem para vizualizar o projeto</div>*/}
              <div className='borderBottom'></div>
            </div>
            <div className='cards'>
              <div className='titleProjects'>
                <span>{'Sr. & Sra. Bem Estar'}</span>
              </div>
              <div className='info-cards'>
                Website developed for work purposes (course).
              </div>
              <button id='btn-1' className='button-cards'>
                <a
                  data-tooltip='Clique na Imagem'
                  href='https://sresrabemestar.000webhostapp.com/'
                  target='_blank'
                >
                  <img
                    className='img-cards'
                    draggable='false'
                    dragstart='false;'
                    src='/img/sresra.png'
                    alt='erro'
                  />
                </a>
              </button>
              {/*<div className='info-buttom-cards'><i className='fa-solid fa-circle-info'></i>  Clique na imagem para vizualizar o projeto</div> */}
              <div className='borderBottom'></div>
            </div>
            <div className='cards'>
              <div className='titleProjects'>
                <span>Nova Lira Festas e Eventos</span>
              </div>
              <div className='info-cards'>
                Website developed for the salon Nova Lira Festas e Eventos
              </div>
              <button id='btn-1' className='button-cards'>
                <a
                  data-tooltip='Clique na Imagem'
                  href='https://novalira.netlify.app/'
                  target='_blank'
                >
                  <img
                    className='img-cards'
                    draggable='false'
                    dragstart='false;'
                    src='/img/novalira.png'
                    alt='err'
                  />
                </a>
              </button>
              {/* <div className='info-buttom-cards'><i className='fa-solid fa-circle-info'></i>  Clique na imagem para vizualizar o projeto</div> */}
              <div className='borderBottom'></div>
            </div>
            <div className='cards'>
              <div className='titleProjects'>
                <span>Personal Website</span>
              </div>
              <div className='info-cards'>
                My portfolio.
              </div>
              <button id='btn-1' className='button-cards'>
                <a
                  data-tooltip='Clique na Imagem'
                  href='https://function404.netlify.app'
                  target='_blank'
                >
                  <img
                    className='img-cards'
                    draggable='false'
                    dragstart='false;'
                    src='/img/myportfolio.png'
                    alt='err'
                  />
                </a>
              </button>
              {/*<div className='info-buttom-cards'><i className='fa-solid fa-circle-info'></i>  Clique na imagem para vizualizar o projeto</div> */}
              <div className='borderBottom'></div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
