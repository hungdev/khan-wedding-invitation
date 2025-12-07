'use client'
import { MapInfo } from '@/models/model'
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
  const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&t=&z=16&ie=UTF8&iwloc=&output=embed`

  return (
    <section className="section-padding bg-[#FEFEFE]">
      <div className="max-w-4xl mx-auto">
        
        {/* Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="divider-elegant mx-auto mb-6" />
          <h2 className="font-crimson text-3xl text-[#8B2E3D] font-light tracking-wider mb-4">
            LOCATION
          </h2>
          <p className="text-sm text-[#4A4A4A] tracking-wide">
            Chỉ đường
          </p>
        </motion.div>

        {/* Address - Korean Card */}
        <motion.div
          className="korean-card p-8 text-center shadow-elegant mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg text-[#2C2C2C] font-medium mb-2">
            {addressDetail}
          </h3>
          <p className="text-sm text-[#6B6B6B]">{address}</p>
        </motion.div>

        {/* Map */}
        <motion.div
          className="relative h-[400px] mb-12 overflow-hidden shadow-elegant"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
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
          <div className="absolute inset-0 border border-[#8B2E3D]/10 pointer-events-none" />
        </motion.div>

        {/* Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="korean-card-hover px-8 py-3 text-sm tracking-[2px] text-[#8B2E3D] hover:text-[#6B1F2A] transition-colors flex items-center gap-2 mx-auto">
              <SiGooglemaps size={18} />
              XEM TRÊN GOOGLE MAPS
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
