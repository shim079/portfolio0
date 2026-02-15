'use client';

import React from 'react'
import Styles from './style.module.css'
import Image from "next/image"
import TextPressure from './TextPressure';
import { style } from 'framer-motion/client';
import App from './App';
import { base } from 'framer-motion/client';
import SpotlightCard from './SpotlightCard';
import Slide from './Slide';
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>




const page = () => {

  return (
    <div className={Styles.Projects}>
      <div className="relative md:h-[200px] md:w-[900px] md:pl-[650px] h-[100px] w-[350px] pt-[50px] pl-[150px]">
        <TextPressure
          text="Projects! "
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#ff0000"
          minFontSize={36}
        />
      </div>

      <div className={Styles.Content}>

        <div className={Styles.projectCard}>
          <div className="projectImage">
            <Image src={`/img1.png`} alt={"img"} width={"250"} height={"200"} />
          </div>

          <div className={Styles.projectInfo}>
            <p className='m-2.5'>Login Page</p>
            <strong className={Styles.projectTitle}>
              <span>Web development</span>
              <a href="#" className={Styles.moreDetails}>More Details</a>
            </strong>
            <p className='ml-3 text-[0.75rem] md:text-[1.05rem]'>This project showcases a responsive Login Page built using modern web development technologies. Designed with a user-friendly interface.
            </p>
          </div>
        </div>
        <div className={Styles.projectCard}>
          <div className="projectImage">
            <Image src={`/phishingpic.png`} alt={"img"} width={"250"} height={"200"} />
          </div>

          <div className={Styles.projectInfo}>
            <p className='m-2.5'>Phishing Detection</p>
            <strong className={Styles.projectTitle}>
              <span>Web development</span>
              <a href="#" className={Styles.moreDetails}>More Details</a>
            </strong>
            <p className='ml-3 text-[0.75rem] md:text-[1.05rem]'>The Phishing Detection project is a responsive web application developed using Python. It aims to identify potentially malicious websites or login pages that mimic legitimate ones to steal user credentials. Built with a clean, user-friendly interface.
            </p>
          </div>
        </div>

        <div className={Styles.projectCard}>
          <div className="projectImage">
            <Image src={`/img2.png`} alt={"img"} width={"250"} height={"200"} />
          </div>

          <div className={Styles.projectInfo}>
            <p className='m-2.5'>Planet</p>
            <strong className={Styles.projectTitle}>
              <span>Web development</span>
              <a href="file:///C:/Users/shsal/OneDrive/%D8%B3%D8%B7%D8%AD%20%D8%A7%D9%84%D9%85%D9%83%D8%AA%D8%A8/plant/index.html#gallery" className={Styles.moreDetails}>More Details</a>
            </strong>
            <p className='ml-3 text-[0.75rem] md:text-[1.05rem]'>The Plant Website is a visually appealing and informative web project designed to promote awareness and appreciation for plants. Developed using HTML, CSS, and JavaScript.
            </p>
          </div>
        </div>

        <div className={Styles.projectCard}>
          <div className="projectImage">
            <Image src={`/img4.png`} alt={"img"} width={"250"} height={"200"} />
          </div>

          <div className={Styles.projectInfo}>
            <p className='m-2.5'>Responsive Navigation Bar</p>
            <strong className={Styles.projectTitle}>
              <span>Web development</span>
              <a href="file:///C:/Users/shsal/OneDrive/%D8%B3%D8%B7%D8%AD%20%D8%A7%D9%84%D9%85%D9%83%D8%AA%D8%A8/Responsive%20Navigation%20Bar/index.html" className={Styles.moreDetails}>More Details</a>
            </strong>
            <p className='ml-3 text-[0.75rem] md:text-[1.05rem]'>This Responsive Navigation Bar project highlights the implementation of a dynamic and mobile-friendly navigation system using HTML, CSS, and JavaScript. The navigation bar adjusts seamlessly to various screen sizes, providing an intuitive user experience on desktops, tablets, and mobile devices.
            </p>
          </div>
        </div>

          <div className={Styles.projectCard}>
          <div className="projectImage">
            <Image src={`/img3.png`} alt={"img"} width={"250"} height={"200"} />
          </div>

          <div className={Styles.projectInfo}>
            <p className='m-2.5'>FamFlix</p>
            <strong className={Styles.projectTitle}>
              <span>Web development</span>
              <a href="#" className={Styles.moreDetails}>More Details</a>
            </strong>
            <p className='ml-3 text-[0.75rem] md:text-[1.05rem]'>FamFlix is a web-based entertainment platform designed to mimic a family-friendly streaming service. Built using modern web development tools, it features a clean user interface, category-based browsing, and responsive design optimized for all devices.
            </p>
          </div>
        </div>
      </div>
      <SpotlightCard className=" w-100 mt-5 custom-spotlight-card">
        <div className="relative md:h-[200px] md:w-[900px] md:pl-[650px] h-[100px] w-[350px] pt-[50px] pl-[110px] ">
          <TextPressure
            text="The Gallery! "
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={36}
          />
        </div>
       
       <Slide />


      </SpotlightCard>
    </div>

  )
}

export default page