'use client'
import { Data } from '@/models/model';
import dayjs from 'dayjs';
import 'dayjs/locale/vi';
import Picture from '../ui/picture';
import { motion } from 'framer-motion';

export default function MainSection({ meta, weddingDates, families, images }: Data) {
  const groom = families.find((p) => p.gender === 'groom' && p.relation === 'self');
  const bride = families.find((p) => p.gender === 'bride' && p.relation === 'self');

  return (
    <section className="section-padding bg-[#FEFEFE]">
      <div className="max-w-5xl mx-auto">
        
        {/* Dates - Elegant Typography */}
        <motion.div 
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Divider top */}
          <div className="divider-elegant mb-8" />
          
          <h1 className="font-crimson text-3xl sm:text-4xl text-[#2C2C2C] font-light tracking-wider mb-4">
            {weddingDates.map((weddingDate, index) => {
              const { year, month, day } = weddingDate;
              const marryDate = dayjs(`${year}/${month}/${day}`, 'YYYY/MM/DD');
              return (
                <span key={index}>
                  {marryDate.format('DD.MM.YYYY')}
                  {index < weddingDates.length - 1 && (
                    <span className="mx-4 text-[#8B2E3D]">|</span>
                  )}
                </span>
              );
            })}
          </h1>
          
          {/* Times */}
          <div className="flex flex-col gap-2 text-center">
            {weddingDates.map((weddingDate, index) => {
              const { year, month, day, time } = weddingDate;
              const marryDate = dayjs(
                `${year}/${month}/${day} ${time.hour}:${time.minute}`,
                'YYYY/MM/DD hh:mm'
              );
              return (
                <p key={index} className="text-sm uppercase tracking-[3px] text-[#6B6B6B] font-light">
                  {marryDate.locale('vi').format('dddd')} {marryDate.format('hh:mm')}{' '}
                  {time.amPm.toUpperCase()}
                </p>
              );
            })}
          </div>
          
          <p className="text-xs text-[#8B8B8B] mt-4 tracking-wide">
            Tức ngày mùng 1, mùng 2 tháng 11 năm Ất Tỵ
          </p>
        </motion.div>

        {/* Main Photo - Korean Style */}
        <motion.div 
          className="mb-16 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative group">
            <Picture
              src={images.main}
              alt="Ảnh chính"
              className="w-full max-w-[500px] h-auto object-cover shadow-elegant"
              width={500}
              height={690}
              style={{ aspectRatio: '500/690' }}
            />
            {/* Subtle border overlay */}
            <div className="absolute inset-0 border border-[#8B2E3D]/10 pointer-events-none" />
          </div>
        </motion.div>

        {/* Names & Description - Minimal */}
        <motion.div 
          className="flex flex-col items-center gap-8 px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Names with elegant separator */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-6 text-center">
              <span className="font-ephesis text-4xl text-[#8B2E3D]">{groom?.name}</span>
              <span className="text-[#D4AF37] text-2xl">♡</span>
              <span className="font-ephesis text-4xl text-[#8B2E3D]">{bride?.name}</span>
            </div>
          </div>

          {/* Divider */}
          <div className="divider-elegant" />

          {/* Description */}
          <p className="whitespace-pre-line text-center text-sm text-[#4A4A4A] leading-relaxed max-w-md tracking-wide">
            {meta.description}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
