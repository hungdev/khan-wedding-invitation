'use client'
import { useState, useEffect } from 'react'
import { Section } from '../Section'
import { Gallery } from '@/models/model'
import Picture from '../ui/picture'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Keyboard } from 'swiper/modules'
import { motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function GallerySection({ images }: { images: Gallery[] }) {
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

  return (
    <section className="section-padding bg-[#FEFEFE]">
      <div className="max-w-6xl mx-auto">
        
        {/* Title - Minimal */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="divider-elegant mx-auto mb-6" />
          <h2 className="font-crimson text-3xl text-[#8B2E3D] font-light tracking-wider mb-4">
            GALLERY
          </h2>
          <p className="text-sm text-[#4A4A4A] tracking-wide">
            Album ảnh cưới
          </p>
        </motion.div>

        {/* Gallery Grid - Korean Minimal */}
        <motion.div
          className="grid grid-cols-3 gap-3 sm:gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
        >
          {images.map((image, imageIndex) => (
            <motion.div
              key={image.src}
              className="relative group cursor-pointer"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              onClick={() => handleImageClick(image.src, imageIndex)}
            >
              <Picture
                src={image.src}
                alt={`Ảnh ${imageIndex + 1}`}
                width={400}
                height={400}
                className="w-full aspect-square object-cover shadow-elegant hover:shadow-medium transition-shadow duration-300"
              />
              {/* Minimal border overlay */}
              <div className="absolute inset-0 border border-[#8B2E3D]/0 group-hover:border-[#8B2E3D]/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Lightbox Dialog - Elegant */}
      <Section.Dialog isOpen={Boolean(selectedImg)} onClose={handleClose}>
        <div
          className="w-full h-full z-10"
          onClick={(e) => e.stopPropagation()}
          style={{
            '--swiper-pagination-fraction-color': 'white',
          } as React.CSSProperties}
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
            speed={400}
            onSlideChange={(swiper) => {
              if (swiper.destroyed) return
              setSelectedIndex(swiper.realIndex)
              setSelectedImg(images[swiper.realIndex].src)
            }}
            className="w-full h-full gallery-swiper"
            style={{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
              '--swiper-navigation-size': '28px',
            } as React.CSSProperties}
          >
            {images.map((image, index) => (
              <SwiperSlide
                key={image.src}
                className="flex items-center justify-center"
              >
                <Picture
                  src={image.src}
                  alt={`Ảnh ${index + 1}`}
                  className="h-[100vh] w-full object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          
          <style jsx global>{`
            .gallery-swiper .swiper-pagination-fraction {
              text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8) !important;
              font-weight: 600 !important;
              font-size: 14px !important;
            }
          `}</style>
        </div>
      </Section.Dialog>
    </section>
  )
}
