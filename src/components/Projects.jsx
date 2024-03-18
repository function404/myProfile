/* eslint-disable @next/next/no-img-element */
'use client';

import '../style/projects/projects.css';
import React,  { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from 'framer-motion';
import { Button, UncontrolledTooltip } from "reactstrap";

export default function Projects({children}){
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  const mainControls = useAnimation(); 

  useEffect(() => {
    if(isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} style={{position: "relative", alignItems:'center',}}>
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
            {/* <div className='cards'>
              <div className='titleProjects'>
                <span>Museum of Informatics</span>
              </div>
              <div className='info-cards'>
                Website developed for work purposes (course).
              </div>
              <button id='btn-1' className='button-cards'>
                <a
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
              <div className='info-buttom-cards'><i className='fa-solid fa-circle-info'></i>  Clique na imagem para vizualizar o projeto</div>
              <div className='borderBottom'></div>
            </div> */}
            <div className='cards'>
              <div className='titleProjects'>
                <span>{'Sr. & Sra. Bem Estar'}</span>
              </div>
              <div className='info-cards'>
                Website developed for work purposes (course).
              </div>
                <Button id='btn-1' className='button-cards' data-placement="bottom" >
                  <a
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
                </Button>
                <UncontrolledTooltip
                  delay={0}
                  placement="bottom"
                  target="btn-1"
                >
                  <i className='fa-solid fa-circle-info'></i> Clique na imagem para vizualizar o projeto
                </UncontrolledTooltip>
              <div className='info-buttom-cards'><i className='fa-solid fa-circle-info'></i>  Clique na imagem para vizualizar o projeto</div>
              <div className='borderBottom'></div>
            </div>
            <div className='cards'>
              <div className='titleProjects'>
                <span>Nova Lira Festas e Eventos</span>
              </div>
              <div className='info-cards'>
                Website developed for the salon Nova Lira Festas e Eventos
              </div>
              <Button id='btn-2' className='button-cards' data-placement="bottom">
                <a
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
              </Button>
              <UncontrolledTooltip
                  delay={0}
                  placement="bottom"
                  target="btn-2"
                >
                  <i className='fa-solid fa-circle-info'></i> Clique na imagem para vizualizar o projeto
                </UncontrolledTooltip>
              <div className='info-buttom-cards'><i className='fa-solid fa-circle-info'></i>  Clique na imagem para vizualizar o projeto</div>
              <div className='borderBottom'></div>
            </div>
            <div className='cards'>
              <div className='titleProjects'>
                <span>Personal Website</span>
              </div>
              <div className='info-cards'>
                My portfolio.
              </div>
              <Button id='btn-3' className='button-cards' data-placement="bottom">
                <a
                  href='#header'
                >
                  <img
                    className='img-cards'
                    draggable='false'
                    dragstart='false;'
                    src='/img/myportfolio.png'
                    alt='err'
                  />
                </a>
              </Button>
              <UncontrolledTooltip
                  delay={1}
                  placement="bottom"
                  target="btn-3"
                >
                  <i className='fa-solid fa-circle-info'></i> Clique na imagem para vizualizar o projeto
                </UncontrolledTooltip>
              <div className='info-buttom-cards'><i className='fa-solid fa-circle-info'></i>  Clique na imagem para vizualizar o projeto</div>
              <div className='borderBottom'></div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
