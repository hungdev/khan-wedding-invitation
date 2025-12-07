import { useState, useEffect } from 'react'
import { Section } from '../Section'
import classNames from 'classnames'
import { Gallery } from '@/models/model'
import Picture from '../ui/picture'
import VintageFrame from '../ui/VintageFrame'
import VintageDecorations from '../ui/VintageDecorations'
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
    <Section.Container fadeUp className="px-4 relative">
      <VintageDecorations type="corner" className="top-0 left-0" />
      <VintageDecorations type="corner" className="top-0 right-0 rotate-90" />
      
      <div className="text-center mb-8 vintage-fade-in">
        <h2 className="font-dancing text-5xl text-[#8B7355] mb-2 handwritten-shadow">
          Gallery
        </h2>
        <p className="font-gowun text-sm text-[#6B5344] tracking-[4px] opacity-70">
          ALBUM ẢNH CƯỚI
        </p>
      </div>

      <VintageDecorations type="floral" className="mb-6" />

      <motion.div
        className="grid grid-cols-3 gap-2 sm:gap-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {images.map((image, imageIndex) => {
          const tiltOptions = ['left', 'right', 'none'] as const
          const randomTilt = tiltOptions[imageIndex % 3]
          const variantOptions = ['simple', 'tape', 'simple'] as const
          const randomVariant = variantOptions[imageIndex % 3]

          return (
            <motion.div
              key={image.src}
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              <VintageFrame 
                variant={randomVariant} 
                tilt={randomTilt}
                className="cursor-pointer"
              >
                <Picture
                  onImageClick={() => handleImageClick(image.src, imageIndex)}
                  src={image.src}
                  alt={`Ảnh cưới thứ ${imageIndex + 1} trong bộ sưu tập`}
                  width={105}
                  height={105}
                  className={classNames(
                    'w-[105px] h-[105px] object-cover',
                    image.position
                  )}
                />
              </VintageFrame>
            </motion.div>
          )
        })}
      </motion.div>

      <VintageDecorations type="divider" className="mt-8" />
      
      <VintageDecorations type="corner" className="bottom-0 left-0 rotate-[-90deg]" />
      <VintageDecorations type="corner" className="bottom-0 right-0 rotate-180" />

      <Section.Dialog isOpen={Boolean(selectedImg)} onClose={handleClose}>
        <div
          className="w-full h-full z-10 vintage-paper"
          onClick={(e) => e.stopPropagation()}
          style={
            {
              '--swiper-pagination-fraction-color': '#8B7355',
              '--swiper-navigation-color': '#8B7355',
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
