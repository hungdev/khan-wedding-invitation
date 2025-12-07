'use client'
import dayjs from 'dayjs'
import 'dayjs/locale/vi'
import Calendar from '../ui/calendar'
import { useEffect, useState } from 'react'
import { WeddingDate } from '@/models/model'
import { motion } from 'framer-motion'

export default function CalendarSection({
  weddingDates,
  groom = 'Chú rể',
  bride = 'Cô dâu',
}: {
  weddingDates: WeddingDate[]
  groom?: string
  bride?: string
}) {
  const [now, setNow] = useState(dayjs())
  
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(dayjs())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const firstWedding = weddingDates[1]
  const { year, month, day, time } = firstWedding
  const firstDate = dayjs(
    `${year}/${month}/${day} ${time.hour}:${time.minute}`,
    'YYYY/MM/DD hh:mm'
  )

  const diff = firstDate.diff(now, 'day')
  const diffHours = firstDate.diff(now, 'hour') % 24
  const diffMinutes = firstDate.diff(now, 'minute') % 60
  const diffSeconds = firstDate.diff(now, 'second') % 60

  return (
    <section className="section-padding bg-[#F5F3F0]">
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
            CALENDAR
          </h2>
          <p className="text-sm text-[#4A4A4A] tracking-wide">
            Ngày cưới
          </p>
        </motion.div>

        {/* Wedding Dates - Elegant Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {weddingDates.map((weddingDate, index) => {
            const { year, month, day, time } = weddingDate
            const marryDate = dayjs(
              `${year}/${month}/${day} ${time.hour}:${time.minute}`,
              'YYYY/MM/DD hh:mm'
            )
            return (
              <motion.div
                key={index}
                className="korean-card p-8 text-center shadow-elegant"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="font-crimson text-2xl text-[#8B2E3D] mb-2">
                  {marryDate.format('DD.MM.YYYY')}
                </h3>
                <p className="text-xs tracking-[3px] text-[#6B6B6B] uppercase">
                  {marryDate.locale('vi').format('dddd')} {marryDate.format('hh:mm')}{' '}
                  {time.amPm.toUpperCase()}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Calendar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Calendar dday={firstDate} />
        </motion.div>

        {/* Countdown - Elegant */}
        <motion.div
          className="korean-card p-8 text-center shadow-elegant mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center gap-8 mb-6">
            <DateUnit value={diff.toString()} name="DAYS" />
            <DateUnit value=":" />
            <DateUnit value={diffHours.toString()} name="HOURS" />
            <DateUnit value=":" />
            <DateUnit value={diffMinutes.toString()} name="MIN" />
            <DateUnit value=":" />
            <DateUnit value={diffSeconds.toString()} name="SEC" />
          </div>
          <div className="divider-gold mx-auto my-6" />
          <p className="text-sm text-[#4A4A4A] leading-relaxed">
            Còn <span className="text-[#8B2E3D] font-medium text-lg">{diff}</span> ngày nữa
            <br />đến đám cưới của {groom} và {bride}
          </p>
        </motion.div>

      </div>
    </section>
  )
}

const DateUnit = ({
  name = '',
  value = '',
}: {
  name?: string
  value?: string
}) => {
  const isColon = value === ':'
  
  return (
    <div className={`flex flex-col font-crimson ${isColon ? 'justify-center' : ''}`}>
      {!isColon && (
        <p className="text-[10px] tracking-[2px] text-[#8B8B8B] uppercase mb-1">{name}</p>
      )}
      <p className={`${isColon ? 'text-xl opacity-40' : 'text-3xl text-[#8B2E3D] font-light'}`}>
        {value}
      </p>
    </div>
  )
}
