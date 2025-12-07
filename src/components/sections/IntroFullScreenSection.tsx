'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
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
      className="absolute h-dvh w-full z-50 cursor-pointer vintage-paper"
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#F4ECD8]/20 via-transparent to-[#F4ECD8]/40 z-10"></div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20 flex flex-col items-center w-full px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-6"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 wax-seal mx-auto mb-4"></div>
        </motion.div>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="font-dancing text-4xl sm:text-5xl md:text-6xl text-[#8B7355] handwritten-shadow leading-tight whitespace-nowrap"
        >
          {fullText.slice(0, currentIndex)}
        </motion.span>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: displayRightIcon ? 1 : 0 }}
          transition={{ duration: 3 }}
          className={classNames('mt-6 sm:mt-8 text-xl sm:text-2xl md:text-3xl font-ephesis text-[#6B5344] handwritten-shadow whitespace-nowrap')}
        >
          {nextText}
        </motion.span>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: displayRightIcon ? 1 : 0 }}
          transition={{ duration: 2, delay: 1 }}
          className="mt-12"
        >
          <div className="text-[#C19A6B] opacity-60">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto"
            >
              <path
                d="M20 35C20 35 5 27 5 15C5 8 10 5 15 8C17 9 18 11 20 13C22 11 23 9 25 8C30 5 35 8 35 15C35 27 20 35 20 35Z"
                fill="currentColor"
                opacity="0.3"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </div>
        </motion.div>
      </div>
      
      <Picture
        src={data.images.intro}
        alt="intro"
        style={{ objectFit: 'cover', filter: 'sepia(0.4) contrast(1.1) brightness(0.9)' }}
        className="h-full w-full vintage-vignette"
      />
    </div>
  )
}
