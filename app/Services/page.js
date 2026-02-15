import React from 'react'
import { FaLaptopCode, FaSlideshare, FaCode, FaNetworkWired, FaFingerprint } from 'react-icons/fa6';
import styles from './style.module.css'
import TextPressure from './TextPressure';
import SpotlightCard from './SpotlightCard';
import ParallaxText from "./ParallaxText";
const page = () => {
    return (
        
        <div className={styles.cards}>
            <div className="relative h-full w-fit bg-slate-950"><div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>
            <section className=''>
                <div className="relative md:h-[200px] md:w-[900px] md:pl-[650px] h-[100px] w-[350px] pt-[50px] pl-[150px] ">
                    <TextPressure
                        text="Services! "
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

                <div className={styles.content}>
                    <SpotlightCard className=" w-100 m-5 custom-spotlight-card" spotlightColor="rgba(130, 20, 110, 0.3)">

                        <div className={styles.icon}>

                            <FaSlideshare />
                        </div>
                        <div className={styles.info}>
                            <h3 className={styles.infoH3}>Graphic Design</h3>
                            <p>expert graphic design services that bring your vision to life through creative, impactful, and visually stunning designs.</p>
                        </div>


                    </SpotlightCard>


                    <SpotlightCard className=" w-100 m-5 custom-spotlight-card" spotlightColor="rgba(130, 20, 110, 0.4)">
                        <div className={styles.icon}>
                            <FaCode />

                        </div>
                        <div className={styles.info}>
                            <h3 className={styles.infoH3}>Web development</h3>
                            <p>Full-stack developer offers comprehensive expertise in both front-end and back-end development, enabling the creation of seamless, fully functional applications.</p>
                        </div>

                    </SpotlightCard>



                    <SpotlightCard className=" w-100 m-5 custom-spotlight-card" spotlightColor="rgba(130, 20, 110, 0.5)">
                        <div className={styles.icon}>
                            <FaFingerprint />

                        </div>
                        <div className={styles.info}>
                            <h3 className={styles.infoH3}>Network Security</h3>
                            <p>protect your organization's data by preventing unauthorized access, detecting threats, and ensuring system integrity through encryption, firewalls, and regular assessments.</p>
                        </div>

                    </SpotlightCard>

                </div>
                <ParallaxText baseVelocity={-5}>Framer Motion</ParallaxText>
      <ParallaxText baseVelocity={5}>Scroll velocity</ParallaxText>


            </section>
             
   
        </div>
    )
}

export default page