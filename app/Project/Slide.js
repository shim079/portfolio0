'use client'
import Styles from './slide.module.css'
import { useIsPresent } from 'framer-motion'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

import { useState } from 'react'


const images = [
  '/imgg.png',
  '/imgg1.png',
  '/imgg2.png',
  '/imgg3.png'

]


export default function Slide() {
  const [index, setIndex] = useState(0)

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
              alt={`Slide ${index}`}
              width={400}
              height={200}
              priority
            />
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