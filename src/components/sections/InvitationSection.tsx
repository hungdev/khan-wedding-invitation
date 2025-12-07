'use client'
import { useState } from 'react'
import { IoCall } from 'react-icons/io5'
import { IoIosCall, IoIosMail } from 'react-icons/io'
import { Section } from '@/components/Section'
import { OtherSectionImage, Person } from '@/models/model'
import { motion } from 'framer-motion'

export default function InvitationSection({
  brideFamily,
  groomFamily,
  images,
}: {
  groomFamily: Person[]
  brideFamily: Person[]
  images: OtherSectionImage
}) {
  const [open, setOpen] = useState(false)
  
  const groomSelf = groomFamily.find(({ relation }) => relation === 'self')
  const groomFather = groomFamily.find(({ relation }) => relation === 'father')
  const groomMother = groomFamily.find(({ relation }) => relation === 'mother')
  const brideSelf = brideFamily.find(({ relation }) => relation === 'self')
  const brideFather = brideFamily.find(({ relation }) => relation === 'father')
  const brideMother = brideFamily.find(({ relation }) => relation === 'mother')

  return (
    <section className="section-padding bg-[#F5F3F0]">
      <div className="max-w-5xl mx-auto">
        
        {/* Title - Minimalist */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="divider-elegant mx-auto mb-6" />
          <h2 className="font-crimson text-3xl text-[#8B2E3D] font-light tracking-wider mb-4">
            INVITATION
          </h2>
          <p className="text-sm text-[#4A4A4A] tracking-wide max-w-2xl mx-auto leading-relaxed">
            Trân trọng kính mời quý khách
          </p>
        </motion.div>

        {/* Quote - Elegant */}
        <motion.div
          className="text-center mb-16 px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="font-ephesis text-2xl text-[#8B2E3D] italic leading-relaxed">
            &ldquo;Hôn nhân là chuyện cả đời,<br />
            Yêu người vừa ý, cưới người mình thương...&rdquo;
          </p>
        </motion.div>

        {/* Photos - Korean Minimal Grid - Side by Side */}
        <motion.div 
          className="flex gap-6 justify-center items-start mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {images.invitation.map((img, idx) => (
            <div key={idx} className="relative group">
              <Section.Image
                src={img}
                alt={`Portrait ${idx + 1}`}
                className="w-[180px] h-[250px] sm:w-[220px] sm:h-[300px] object-cover shadow-elegant"
                width={220}
                height={300}
              />
              <div className="absolute inset-0 border border-[#8B2E3D]/10" />
            </div>
          ))}
        </motion.div>

        {/* Family Info - Elegant Korean Card */}
        <motion.div
          className="korean-card shadow-elegant p-8 sm:p-12 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center">
            
            {/* Groom Side */}
            <div className="text-center space-y-4">
              <p className="text-xs tracking-[3px] text-[#8B2E3D] uppercase font-light mb-4">
                Nhà Trai
              </p>
              <div className="space-y-2 text-xs text-[#6B6B6B]">
                <p>Ông {groomFather?.name}</p>
                <p>Bà {groomMother?.name}</p>
              </div>
              <div className="divider-gold mx-auto my-4" />
              <div>
                <p className="text-xs text-[#8B8B8B] mb-2">Chú Rể</p>
                <p className="font-ephesis text-3xl text-[#8B2E3D]">{groomSelf?.name}</p>
              </div>
            </div>

            {/* Heart Divider */}
            <div className="flex justify-center">
              <span className="text-4xl text-[#D4AF37]">♡</span>
            </div>

            {/* Bride Side */}
            <div className="text-center space-y-4">
              <p className="text-xs tracking-[3px] text-[#8B2E3D] uppercase font-light mb-4">
                Nhà Gái
              </p>
              <div className="space-y-2 text-xs text-[#6B6B6B]">
                <p>Ông {brideFather?.name}</p>
                <p>Bà {brideMother?.name}</p>
              </div>
              <div className="divider-gold mx-auto my-4" />
              <div>
                <p className="text-xs text-[#8B8B8B] mb-2">Cô Dâu</p>
                <p className="font-ephesis text-3xl text-[#8B2E3D]">{brideSelf?.name}</p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Contact Button - Minimal */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <button
            onClick={() => setOpen(true)}
            className="korean-card-hover px-8 py-3 text-sm tracking-[2px] text-[#8B2E3D] hover:text-[#6B1F2A] transition-colors flex items-center gap-2 mx-auto"
          >
            <IoCall size={16} />
            LIÊN HỆ
          </button>
        </motion.div>

      </div>

      {/* Contact Dialog - Minimal */}
      <Section.Dialog isOpen={open} onClose={() => setOpen(false)}>
        <div className="flex flex-col items-center text-white text-center overflow-auto h-full p-8">
          <div className="mt-20">
            <div className="divider-gold mx-auto mb-6" />
            <h2 className="font-crimson text-2xl tracking-wider mb-2">CONTACT</h2>
            <p className="text-sm tracking-wide opacity-80">Liên hệ</p>
          </div>
          
          <div className="mt-12 w-full max-w-sm">
            <div className="border-b border-white/20 pb-4 mb-6">
              <p className="text-xs tracking-[3px] opacity-60">GROOM · CHÚ RỂ</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-left">
                <p className="text-sm opacity-60 mb-1">Chú rể</p>
                <p className="text-lg">{groomSelf?.name}</p>
              </div>
              <div className="flex gap-4">
                <a href={`tel:${groomSelf?.phone}`} 
                   className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition">
                  <IoIosCall size={20} />
                </a>
                <a href={`sms:${groomSelf?.phone}`}
                   className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition">
                  <IoIosMail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section.Dialog>
    </section>
  )
}
