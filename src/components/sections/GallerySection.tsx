import { useState, useEffect } from 'react'
import { Section } from '../Section'
import classNames from 'classnames'
import { Gallery } from '@/models/model'
import Picture from '../ui/picture'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Keyboard } from 'swiper/modules'
import { motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function GalleryMasonry({ images }: { images: Gallery[] }) {
  const [selectedImg, setSelectedImg] = useState<string | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  const handleImageClick = (src: string, index: number) => {
    setSelectedImg(src)
    setSelectedIndex(index)
  }

  const handleClose = () => {
    setSelectedImg(null)
    setSelectedIndex(-1)
  }

  useEffect(() => {
    if (!selectedImg) {
      setSelectedIndex(-1)
    }
  }, [selectedImg])

  // Animation variants cho container
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  // Animation variants cho mỗi ảnh
  const itemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.85,
      y: 15,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
    },
  }

  return (
    <Section.Container fadeUp className="px-4">
      <motion.h1 
        className="text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="font-crimson text-sm tracking-[3px] text-pink-400 opacity-70 uppercase">
          Gallery
        </p>
        <p className="text-gradient text-2xl mt-2 font-gowun font-bold">Album ảnh cưới</p>
      </motion.h1>

      <motion.div
        className="grid grid-cols-3 gap-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {images.map((image, imageIndex) => (
          <motion.div
            key={image.src}
            variants={itemVariants}
            whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-romantic rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-10 pointer-events-none" />
            <div className="absolute inset-0 shadow-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-5" />
            <Picture
              onImageClick={() => handleImageClick(image.src, imageIndex)}
              src={image.src}
              alt={`Ảnh cưới thứ ${imageIndex + 1} trong bộ sưu tập`}
              width={125}
              height={125}
              className={classNames(
                'w-[125px] h-[125px] object-cover rounded-lg cursor-pointer shadow-soft relative z-10',
                image.position
              )}
            />
          </motion.div>
        ))}
      </motion.div>

      <Section.Dialog isOpen={Boolean(selectedImg)} onClose={handleClose}>
        <div
          className="w-full h-full z-10"
          onClick={(e) => e.stopPropagation()}
          style={
            {
              '--swiper-pagination-fraction-color': 'white',
            } as React.CSSProperties
          }
        >
          <Swiper
            modules={[Navigation, Pagination, Keyboard]}
            navigation={true}
            pagination={{
              type: 'fraction',
            }}
            keyboard={{
              enabled: true,
            }}
            loop={true}
            initialSlide={selectedIndex}
            slidesPerView={1}
            slidesPerGroup={1}
            speed={300}
            resistance={false}
            resistanceRatio={0}
            onDestroy={handleClose}
            onSlideChange={(swiper) => {
              if (swiper.destroyed) return
              setSelectedIndex(swiper.realIndex)
              setSelectedImg(images[swiper.realIndex].src)
            }}
            allowTouchMove={true}
            touchStartPreventDefault={false}
            touchMoveStopPropagation={true}
            simulateTouch={true}
            touchRatio={1}
            touchAngle={45}
            threshold={10}
            longSwipes={false}
            shortSwipes={true}
            longSwipesMs={300}
            className="w-full h-full gallery-swiper"
            style={
              {
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
                '--swiper-navigation-size': '28px',
                '--swiper-pagination-fraction-color': '#fff',
              } as React.CSSProperties
            }
          >
            {images.map((image, index) => (
              <SwiperSlide
                key={image.src}
                className="flex items-center justify-center"
              >
                <Picture
                  src={image.src}
                  alt={`Ảnh thứ ${index + 1} trong bộ sưu tập`}
                  className="h-[100vh] w-full object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <style jsx global>{`
            .gallery-swiper .swiper-pagination-fraction {
              text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8) !important;
              font-weight: 600 !important;
            }
          `}</style>
        </div>
      </Section.Dialog>
    </Section.Container>
  )
}
