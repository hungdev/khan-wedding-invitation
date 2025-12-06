'use client'
import { MapInfo } from '@/models/model'
import { Section } from '../Section'
import Link from 'next/link'
import { SiGooglemaps } from 'react-icons/si'
import { motion } from 'framer-motion'

export default function MapSection({
  position,
  link,
  address,
  addressDetail,
}: MapInfo) {
  const { latitude, longitude } = position

  // Google Maps embed URL - không cần API key
  const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&t=&z=16&ie=UTF8&iwloc=&output=embed`

  return (
    <Section.Container className="flex flex-col gap-y-6 px-4">
      <Section.Title kor="Chỉ đường" eng="LOCATION" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card-strong shadow-medium rounded-2xl p-6 text-center max-w-md mx-auto"
      >
        <Section.Typography className="text-xl font-bold text-gradient mb-2">
          {addressDetail}
        </Section.Typography>
        <Section.Typography className="text-sm text-[#888]">{address}</Section.Typography>
      </motion.div>
      <motion.div 
        className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-medium"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.01 }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-pink-100/30 to-transparent z-10 pointer-events-none" />
        <iframe
          src={googleMapsEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        />
      </motion.div>
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-fit mx-auto inline-block"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Section.Button className="flex items-center gap-2 gradient-romantic text-white font-semibold shadow-medium border-none hover:shadow-strong transition-all duration-300">
            <SiGooglemaps className="inline-block" size={18} />
            Xem trên Google Maps
          </Section.Button>
        </motion.div>
      </Link>
    </Section.Container>
  )
}
