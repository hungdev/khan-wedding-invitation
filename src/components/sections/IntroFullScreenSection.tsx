'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import data from '@/models/data'
import Picture from '../ui/picture'

export default function IntroFullScreenSection({
  onClick,
}: {
  onClick: () => void
}) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
    const timer = setTimeout(() => {
      onClick()
    }, 3500)
    return () => clearTimeout(timer)
  }, [onClick])

  return (
    <div
      className="absolute h-dvh w-full z-50 cursor-pointer"
      onClick={onClick}
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/30 z-10" />
      
      {/* Content - Korean Minimal */}
      <AnimatePresence>
        {show && (
          <motion.div 
            className="absolute inset-0 z-20 flex flex-col items-center justify-center px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {/* Elegant line top */}
            <motion.div
              className="divider-gold mb-12"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 60, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />

            {/* Wedding text - Elegant Serif */}
            <motion.h1
              className="font-crimson text-white text-5xl sm:text-6xl font-light tracking-widest mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              style={{
                textShadow: '0 2px 20px rgba(0,0,0,0.3)',
                letterSpacing: '0.15em'
              }}
            >
              WEDDING
            </motion.h1>

            {/* Names - Korean Style */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <p className="font-noto text-white text-xl sm:text-2xl font-light tracking-wide whitespace-nowrap"
                 style={{ textShadow: '0 2px 15px rgba(0,0,0,0.3)' }}>
                Nguyễn Khẩn <span className="mx-2 text-lg">♡</span> Nguyễn Trang
              </p>
            </motion.div>

            {/* Elegant line bottom */}
            <motion.div
              className="divider-gold mt-12"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 60, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            />

            {/* Tap hint */}
            <motion.p
              className="absolute bottom-12 text-white/70 text-sm font-light tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ delay: 2, duration: 2, repeat: Infinity }}
            >
              TAP TO CONTINUE
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background image */}
      <Picture
        src={data.images.intro}
        alt="intro"
        style={{ objectFit: 'cover' }}
        className="h-full w-full"
      />
    </div>
  )
}
