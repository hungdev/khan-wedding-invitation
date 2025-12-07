'use client'
import MainSection from '@/components/sections/MainSection'
import InvitationSection from '@/components/sections/InvitationSection'
import GallerySection from '@/components/sections/GallerySection'
import CalendarSection from '@/components/sections/CalendarSection'
import MapSection from '@/components/sections/MapSection'
import AccountSection from '@/components/sections/AccountSection'
import ThankYouSection from '@/components/sections/ThankYouSection'
import { data } from '@/models'
import { useBGMPlayer } from '@/utils/useBGMPlayer'
import IntroFullScreenSection from '@/components/sections/IntroFullScreenSection'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Home() {
  const { weddingDates, families, gallery, map, images, bgm } = data
  const [showIntro, setShowIntro] = useState(true)
  const [mounted, setMounted] = useState(false)
  const { toggle, isPlaying, start } = useBGMPlayer(bgm, false)

  const groom = families.find(
    (person) => person.gender === 'groom' && person.relation === 'self'
  )
  const bride = families.find(
    (person) => person.gender === 'bride' && person.relation === 'self'
  )
  const groomFamily = families.filter((person) => person.gender === 'groom')
  const brideFamily = families.filter((person) => person.gender === 'bride')

  const handleClick = () => {
    setShowIntro(false)
  }

  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
      document.body.style.height = '100%'

      const preventScroll = (e: TouchEvent) => {
        e.preventDefault()
      }

      document.addEventListener('touchmove', preventScroll, { passive: false })

      return () => {
        document.removeEventListener('touchmove', preventScroll)
      }
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
      document.body.style.height = ''

      setTimeout(() => {
        start()
      }, 500)
    }
  }, [showIntro, start])

  useEffect(() => {
    setMounted(true)
    window.scrollTo(0, 0)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="intro"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <IntroFullScreenSection onClick={handleClick} />
          </motion.div>
        )}
      </AnimatePresence>
{!showIntro && (
        <button
          onClick={() => toggle()}
          className="fixed left-4 bottom-4 z-50 w-16 h-16 cursor-pointer transition-all hover:scale-110 rounded-full shadow-lg flex items-center justify-center p-3"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
          aria-label={isPlaying ? 'Tắt nhạc' : 'Bật nhạc'}
        >
          <img
            src={isPlaying ? '/images/music-on.gif' : '/images/music-off.png'}
            alt={isPlaying ? 'Tắt nhạc' : 'Bật nhạc'}
            className="w-full h-full object-contain"
          />
        </button>
      )}
      <div className="flex flex-col">
        <MainSection {...data} />
        <InvitationSection
          images={images}
          groomFamily={groomFamily}
          brideFamily={brideFamily}
        />
        <GallerySection images={gallery} />
        <CalendarSection
          weddingDates={weddingDates}
          groom={groom?.name}
          bride={bride?.name}
        />
        <MapSection {...map} />
        <AccountSection families={families} />
        <ThankYouSection />
      </div>
    </>
  )
}
