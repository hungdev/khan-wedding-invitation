'use client'
import { motion } from 'framer-motion'

export default function ThankYouSection() {
  return (
    <section className="section-padding-sm bg-[#FEFEFE]">
      <div className="max-w-3xl mx-auto">
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Elegant Divider */}
          <div className="divider-gold mx-auto mb-8" />
          
          {/* Thank You - Elegant Typography */}
          <h2 className="font-ephesis text-6xl sm:text-7xl text-[#8B2E3D] mb-8">
            Thank you
          </h2>

          {/* Korean Text */}
          <p className="text-sm text-[#4A4A4A] tracking-wide mb-4">
            Rất hân hạnh được đón tiếp!
          </p>

          {/* Message */}
          <p className="text-sm text-[#6B6B6B] leading-relaxed max-w-md mx-auto">
            Cảm ơn quý khách đã dành thời gian quý báu
            <br />
            để chia sẻ niềm vui cùng chúng tôi.
          </p>

          {/* Bottom Divider */}
          <div className="divider-gold mx-auto mt-12" />
        </motion.div>

      </div>
    </section>
  )
}
