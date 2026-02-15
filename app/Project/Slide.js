'use client'
import Styles from './slide.module.css'
import { useIsPresent } from 'framer-motion'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

import { useState, useEffect } from 'react'


const images = [
  '/imgg.png',
  '/imgg1.png',
  '/imgg2.png',
  '/imgg3.png'

]
const slides = [
  {
    
    caption: "FamFlix",
    description: "web-based entertainment platform designed to mimic a family-friendly streaming service. Built using modern web development tools, it features a clean user interface, category-based browsing, and responsive design optimized for all devices."
  },
  {
    
    caption: "Login Landing Page",
    description: "This project showcases a responsive Login Page built using modern web development technologies. Designed with a user-friendly interface."
  },
  {
    
    caption: "Virtual Lightsaber Customization System",
    description: "This project is a 3D interactive virtual lightsaber customization application that allows users to design and personalize their own futuristic energy sword in a digital environment."
  },
  {
    caption: "Neon Fury: Enter the Arena",
    description: "This webpage presents a modern, high-impact landing page for an action-packed combat game. Designed with a sleek dark theme and neon gradient accents, it immediately captures attention and creates an immersive gaming atmosphere."
  }
];

export default function Slide() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % slides.length);
  }, 3000); // 3 seconds

  return () => clearInterval(interval);
}, []);



  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length)
  }

  return (
    <div className={Styles.Slider}>
      <div className={Styles.ImageWrapper}>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={Styles.MotionImage}
          >
            <Image
              src={images[index]}
              alt={slides[index].caption}
              width={600}
              height={200}
              priority
            />
            <p className={Styles.Caption}>
      {slides[index].caption}
    </p>

    <p className={Styles.Description}>
      {slides[index].description}
    </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className={Styles.Controls}>
        <button className={Styles.Button} onClick={handlePrev}>←</button>
        <button className={Styles.Button} onClick={handleNext}>→</button>
      </div>
    </div>
  )
}
