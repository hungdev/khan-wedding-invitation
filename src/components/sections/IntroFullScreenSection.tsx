'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import data from '@/models/data'
import Picture from '../ui/picture'
import classNames from 'classnames'

export default function IntroFullScreenSection({
  onClick,
}: {
  onClick: () => void
}) {
  const fullText = 'Wedding day'
  const nextText = 'Nguyễn Khẩn ♡ Nguyễn Trang'
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayRightIcon, setDisplayRightIcon] = useState(false)

  useEffect(() => {
    if (currentIndex >= fullText.length) {
      setDisplayRightIcon(true)
      return
    }

    const timeout = setTimeout(() => {
      setCurrentIndex((prev) => prev + 1)
    }, 180)

    return () => clearTimeout(timeout)
  }, [currentIndex, fullText])

  useEffect(() => {
    if (displayRightIcon) {
      setTimeout(() => {
        onClick()
      }, 2_500)
    }
  }, [displayRightIcon, onClick])

  return (
    <div
      className="absolute h-dvh w-full z-50 cursor-pointer"
      onClick={onClick}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50 z-10" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: -20,
              opacity: 0 
            }}
            animate={{ 
              y: window.innerHeight + 20,
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'linear'
            }}
          />
        ))}
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white z-20 flex flex-col items-center max-w-[90%]">
        {/* Main Title with Gradient Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <motion.span
            className="font-crimson text-5xl sm:text-6xl font-bold tracking-wider"
            style={{
              textShadow: '0 4px 20px rgba(0,0,0,0.5), 0 0 40px rgba(255,255,255,0.3)'
            }}
            animate={{
              textShadow: [
                '0 4px 20px rgba(0,0,0,0.5), 0 0 40px rgba(255,255,255,0.3)',
                '0 4px 25px rgba(0,0,0,0.6), 0 0 50px rgba(255,255,255,0.4)',
                '0 4px 20px rgba(0,0,0,0.5), 0 0 40px rgba(255,255,255,0.3)',
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {fullText.slice(0, currentIndex)}
            {currentIndex < fullText.length && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                |
              </motion.span>
            )}
          </motion.span>
        </motion.div>

        {/* Names */}
        <AnimatePresence>
          {displayRightIcon && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mt-8 flex flex-col items-center gap-4"
            >
              <motion.span
                className={classNames('font-gowun text-2xl sm:text-3xl font-medium whitespace-nowrap')}
                style={{
                  textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                }}
              >
                {nextText}
              </motion.span>

              {/* Tap hint */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="mt-6"
              >
                <motion.p
                  className="text-sm text-white/80 font-gowun"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  Chạm để tiếp tục ✨
                </motion.p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Picture
        src={data.images.intro}
        alt="intro"
        style={{ objectFit: 'cover' }}
        className="h-full w-full"
      />
    </div>
  )
}
