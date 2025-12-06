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
    <section>
      <motion.div 
        className="flex flex-col items-center font-crimson gap-2 text-[#49413a] px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-2xl sm:text-3xl font-bold tracking-wide text-gradient whitespace-nowrap"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {weddingDates.map((weddingDate, index) => {
            const { year, month, day } = weddingDate;
            const marryDate = dayjs(`${year}/${month}/${day}`, 'YYYY/MM/DD');
            return (
              <span key={index}>
                {marryDate.format('DD / MM / YYYY')}
                {index < weddingDates.length - 1 && (
                  <span className="mx-1 text-pink-400">•</span>
                )}
              </span>
            );
          })}
        </motion.h1>
        
        <motion.div
          className="flex flex-col gap-1 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {weddingDates.map((weddingDate, index) => {
            const { year, month, day, time } = weddingDate;
            const marryDate = dayjs(
              `${year}/${month}/${day} ${time.hour}:${time.minute}`,
              'YYYY/MM/DD hh:mm'
            );
            return (
              <p key={index} className="text-base uppercase tracking-[2px] font-medium text-[#666]">
                {marryDate.locale('vi').format('dddd')} {marryDate.format('hh:mm')}{' '}
                {time.amPm.toUpperCase()}
              </p>
            );
          })}
        </motion.div>
        
        <motion.p 
          className="text-sm text-[#888] mt-1 normal-case tracking-[0px] italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          (Tức ngày mùng 1, mùng 2 tháng 11 năm Ất Tỵ)
        </motion.p>
      </motion.div>

      <motion.div 
        className="my-12 px-4"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="relative group"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Decorative corners */}
          <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-pink-300 rounded-tl-2xl opacity-50" />
          <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-pink-300 rounded-tr-2xl opacity-50" />
          <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2 border-pink-300 rounded-bl-2xl opacity-50" />
          <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-pink-300 rounded-br-2xl opacity-50" />
          
          {/* Shadow effect */}
          <div className="absolute inset-0 rounded-2xl shadow-strong opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <Picture
            src={images.main}
            alt="Ảnh chính"
            className="rounded-2xl w-full max-w-[425px] h-[585px] object-cover object-bottom mx-auto shadow-medium relative z-10"
            width={425}
            height={585}
          />
          
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-pink-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none" />
        </motion.div>
      </motion.div>

      <motion.div 
        className="flex flex-col items-center gap-y-6 font-gowun px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="glass-card px-8 py-4 rounded-full shadow-soft"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-row gap-3 items-center text-xl font-medium">
            <motion.span
              className="text-gradient font-bold"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {groom?.name}
            </motion.span>
            <motion.span 
              className="text-2xl"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ❤️
            </motion.span>
            <motion.span
              className="text-gradient font-bold"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              {bride?.name}
            </motion.span>
          </div>
        </motion.div>

        <motion.p 
          className="whitespace-pre text-center text-base text-[#666] leading-8 max-w-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {meta.description}
        </motion.p>
      </motion.div>
    </section>
  );
}
