import Link from 'next/link';
import SplashCursor from './SplashCursor';
import styles from './style.module.css';
import React from 'react';
import { FaTwitter, FaLinkedinIn, FaBehance } from "react-icons/fa6";
import SpotlightCard from './SpotlightCard';
import TidioLoader from './TidioLoader';
import TextType from './TextType';

const Page = () => {
  return (
    <>
      <TidioLoader /> {/* Chatbot loads here */}

      <div className={styles.all}>
        <div className="p-10 md:p-30 pb-95">
          <div className="mb-10">
            <h2  className=' relative z-10 xl:pl-30 pt-35 text-white/50 text-4xl text-shadow-lg'>Hi, I’M SHAIMA {" "}</h2>
                      <TextType className=' relative z-10 xl:pl-30 pt-5 text-white text-2xl text-shadow-lg'
              text={["Graphic Designer", "Full Stack Developer", "Self-Learner"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
                    <h3 className=' relative z-10 xl:pl-30 mt-3 text-white/70 xl:text-2xl text-base '> A passionate Graphic Designer, Full-Stack Developer, and lifelong self-learner. I love bringing ideas to life through clean design, intuitive interfaces, and thoughtful user experiences.</h3>
                    <h5 className=' relative z-10 xl:pl-30 mt-3 text-white/70 xl:text-2xl text-base'>I craft intutive, beautiful, and accessible mobile experiences. Passionate about turning ideas into apps that peaple love.</h5>
                </div>

          <div className="text-1xl text-white xl:ml-30 flex items-center space-x-9 absolute">
            <a href="https://www.linkedin.com/in/shaima-alharbi-7201b822a/">
              <FaLinkedinIn />
            </a>
            <a href="/">
              <FaTwitter />
            </a>
            <a href="https://www.behance.net/shaimas4">
              <FaBehance />
            </a>
            <div className={styles.logo}>
              <div className={styles.name}>
                <p className={styles.codeBy}>Code by</p>
                <p className={styles.shaima}>Shaima</p>
                <p className={styles.alharbi}>Alharbi</p>
              </div>
            </div>
          </div>

          <SpotlightCard className="w-50 xl:ml-30 mt-25 box-content size-30 content-center cursor-pointer text-center h-6 text-white [transition:0.5s] rounded-3xl p-1 absolute custom-spotlight-card">
            <Link href="/Project">View My Work</Link>
          </SpotlightCard>
        </div>
      </div>
    </>
  );
};

export default Page;