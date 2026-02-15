'use client'

import React from 'react'
import { FaHtml5, FaCss3, FaNodeJs, FaJava, FaReact, FaBootstrap, FaPython, FaGithub, FaDiagramProject, FaDartLang, FaFlutter } from 'react-icons/fa6';
import Styles from './style.module.css'
import TextPressure from './TextPressure';
import Magnet from './Magnet'
import { SiMongodb } from "react-icons/si";
import SpotlightCard from './SpotlightCard';
import BlurText from "./BlurText";

<meta name="viewport" content="width=device-width, initial-scale=1.0" />



const page = () => {
    return (
        <div className={Styles.Skill}>
            <div className="relative md:h-[200px] md:w-[900px] md:pl-[650px] h-[100px] w-[350px] pt-[40px] pl-[120px] ">
                <TextPressure
                    text="Skills! "
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

            <div className={Styles.H1Container}>
                <div className={Styles.Content}>
                    <BlurText
      text="I'm a senior-year student at SEU in Jeddah with a strong passion for learning and exploring technologies. 
      My expertise includes Software Development, Data Analysis, And Information Security. 
      I'm always open to learn new tools and technologies."
      delay={150}
      animateBy="words"
      direction="top"
      className="mb-4"
    />
                
            </div>


            <div className={Styles.Card}>
                <div className={Styles.Icon}>
                    <div className={Styles.Container}>
                        <div className={Styles.Icon1}>
                            <FaHtml5 />
                        </div>
                        <div><h2 className={Styles.H2}>HTML</h2></div>
                    </div>


                    <div className={Styles.Container}>
                        <div className={Styles.Icon1}>
                            <FaCss3 />
                        </div>
                        <div><h2 className={Styles.H2}>CSS5</h2></div>
                    </div>

                    <div className={Styles.Container}>
                        <div className={Styles.Icon1}>
                            <FaJava />
                        </div>
                        <div><h2 className={Styles.H2}>JAVA</h2></div>
                    </div>


                    <div className={Styles.Container}>
                        <div className={Styles.Icon1}>
                            <FaBootstrap />
                        </div>
                        <div><h2 className={Styles.H2}>BootStrap</h2></div>
                    </div>


                    <div className={Styles.Container}>
                        <div className={Styles.Icon1}>
                            <FaPython />
                        </div>
                        <div><h2 className={Styles.H2}>Python</h2></div>
                    </div>


                    <div className={Styles.Container}>
                        <div className={Styles.Icon1}>
                            <FaReact />
                        </div>
                        <div><h2 className={Styles.H2}>React</h2></div>
                    </div>


                    <div className={Styles.Container}>
                        <div className={Styles.Icon1}>
                            <FaNodeJs />
                        </div>
                        <div><h2 className={Styles.H2}>NoodJS</h2></div>
                    </div>


                    <div className={Styles.Container}>
                        <div className={Styles.Icon1}>
                            <FaGithub />
                        </div>
                        <div><h2 className={Styles.H2}>GitHub</h2></div>
                    </div>




                </div>



            </div>

            <SpotlightCard className="w-full max-w-3xl mx-auto mt-10 box-content content-center text-center
             h-auto text-white transition-all duration-500 rounded-3xl p-6 
    px-6         /* mobile padding (larger edge padding) */
    py-6
    sm:px-8      /* tablet padding */
    sm:py-8
    md:px-10     /* desktop padding */
    md:py-10
             custom-spotlight-card"
                 style={{
    padding: 'clamp(2rem, 8vw, 2.5rem) clamp(1.5rem, 10vw, 3rem)'
  }}
                 >

  {/* Text Above */}
  <h1 className="text-white text-lg sm:text-xl md:text-2xl mb-2">
  Resume / CV
  </h1>
  <p className="text-white/40 text-sm sm:text-base md:text-lg mb-4">
    Download my professional resume
  </p>

  {/* Button */}
  <div className="flex justify-center overflow-hidden">
    <Magnet padding={20} disabled={false} magnetStrength={20}>
      <div className={Styles.ButtonWrapper}>
        <a href="/resume.pdf" download className={Styles.MoreButton}>
          Download
        </a>
      </div>
    </Magnet>
  </div>

</SpotlightCard>




            </div>
           
            
        </div>
    )
}

export default page
