'use client'
import { useState } from 'react'
import { IoIosCall } from 'react-icons/io'
import { IoIosMail } from 'react-icons/io'
import { Section } from '@/components/Section'
import { IoCall } from 'react-icons/io5'
import { OtherSectionImage, Person } from '@/models/model'
import { motion } from 'framer-motion'

export default function IntroSection({
  brideFamily,
  groomFamily,
  images,
}: {
  groomFamily: Person[]
  brideFamily: Person[]
  images: OtherSectionImage
}) {
  const [open, setOpen] = useState(false)
  const contents = [
    '“Hôn nhân là chuyện cả đời,\nYêu người vừa ý, cưới người mình thương..."',
    'Trong ngày tràn đầy hạnh phúc và yêu thương,\nchúng tôi thật hạnh phúc khi được đón tiếp \nvà nhận những lời chúc phúc chân thành từ quý vị.',
  ]
  const groomSelf = groomFamily.find(({ relation }) => relation === 'self')
  const groomFather = groomFamily.find(({ relation }) => relation === 'father')
  const groomMother = groomFamily.find(({ relation }) => relation === 'mother')
  const brideSelf = brideFamily.find(({ relation }) => relation === 'self')
  const brideFather = brideFamily.find(({ relation }) => relation === 'father')
  const brideMother = brideFamily.find(({ relation }) => relation === 'mother')

  return (
    <Section.Container className="flex flex-col items-center px-4">
      <Section.Title kor="Trân trọng kính mời quý khách" eng="INVITATION" />
      <div className="flex flex-col gap-y-8 whitespace-pre my-9 font-gowun text-[#666] text-base text-center leading-8 max-w-md">
        {contents.map((content, idx) => (
          <motion.div
            key={content}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
          >
            <Section.Typography className={idx === 0 ? 'italic text-gradient font-medium text-lg' : ''}>
              {content}
            </Section.Typography>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="flex gap-3 mx-2 mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {images.invitation.map((img, idx) => (
          <motion.div
            key={img}
            className="relative group"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-romantic rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10" />
            <Section.Image
              src={img}
              alt={`Portrait ${idx + 1}`}
              className="rounded-2xl w-[200px] h-[280px] object-cover object-bottom shadow-medium hover-lift"
              width={200}
              height={280}
            />
          </motion.div>
        ))}
      </motion.div>
      <motion.div 
        className="w-full py-8 mt-6 mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="glass-card-strong shadow-medium rounded-3xl p-6 mx-4 max-w-md mx-auto">
          <div className="flex justify-center items-start gap-6">
            {/* Nhà Trai */}
            <motion.div 
              className="flex-1 flex flex-col items-center text-center space-y-3"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full pb-3 border-b-2 border-pink-200">
                <h3 className="text-xs font-bold tracking-[3px] text-pink-500 uppercase">
                  Nhà Trai
                </h3>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-semibold tracking-wide text-[#666]">
                  Ông {groomFather?.name}
                </p>
                <p className="text-xs font-semibold tracking-wide text-[#666]">
                  Bà {groomMother?.name}
                </p>
              </div>
              <div className="pt-3">
                <p className="text-xs text-[#888] uppercase tracking-wider">Chú Rể</p>
                <p className="text-2xl font-ephesis mt-2 text-gradient font-bold whitespace-nowrap">
                  {groomSelf?.name}
                </p>
              </div>
            </motion.div>

            {/* Heart Icon */}
            <div className="flex items-center justify-center px-1 pt-12">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Section.Image
                  src="/images/heart.webp"
                  alt="Heart"
                  width={60}
                  height={60}
                  className="w-[45px] h-[45px] drop-shadow-lg"
                />
              </motion.div>
            </div>

            {/* Nhà Gái */}
            <motion.div 
              className="flex-1 flex flex-col items-center text-center space-y-3"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full pb-3 border-b-2 border-pink-200">
                <h3 className="text-xs font-bold tracking-[3px] text-pink-500 uppercase">
                  Nhà Gái
                </h3>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-semibold tracking-wide text-[#666]">
                  Ông {brideFather?.name}
                </p>
                <p className="text-xs font-semibold tracking-wide text-[#666]">
                  Bà {brideMother?.name}
                </p>
              </div>
              <div className="pt-3">
                <p className="text-xs text-[#888] uppercase tracking-wider">Cô Dâu</p>
                <p className="text-2xl font-ephesis mt-2 text-gradient font-bold whitespace-nowrap">
                  {brideSelf?.name}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Section.Button
          onClick={() => setOpen(true)}
          className="flex items-center gap-x-2 gradient-romantic text-white font-semibold shadow-medium border-none hover:shadow-strong transition-all duration-300"
        >
          <IoCall size={18} />
          Liên hệ
        </Section.Button>
      </motion.div>

      <Section.Dialog isOpen={open} onClose={() => setOpen(false)}>
        <div className="flex flex-col items-center text-[#ccc] text-center overflow-auto h-full">
          <h2 className="mt-[50px]">
            <p className="font-crimson text-xs font-medium text-[#999] tracking-[3px]">
              CONTACT
            </p>
            <p className="font-gowun text-lg font-medium tracking-[2px]">
              Liên hệ
            </p>
          </h2>
          <div className="mt-15 font-gowun text-sm">
            <p className="border-b-1 border-dotted border-gray-400 pb-2.5 w-[300px] text-start">
              Phía chú rể
              <span className="text-[#999] text-xs align-bottom ml-1 tracking-[3px]">
                GROOM
              </span>
            </p>
            <ul>
              <li className="my-5 flex">
                <p className="flex-1/3 text-start ">Chú rể</p>
                <p className="flex-1/3 text-[15px] text-white">
                  {groomSelf?.name}
                </p>
                <div className="flex-1/3 flex justify-end gap-x-5">
                  <a href={`tel:${groomSelf?.phone}`}>
                    <IoIosCall size={20} />
                  </a>
                  <a href={`sms:${groomSelf?.phone}`}>
                    <IoIosMail size={20} />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Section.Dialog>
    </Section.Container>
  )
}
