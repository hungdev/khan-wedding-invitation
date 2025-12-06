'use client'
import dayjs from 'dayjs'
import 'dayjs/locale/vi'

import Calendar from '../ui/calendar'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { WeddingDate } from '@/models/model'
import { Section } from '../Section'
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

  // Lấy buổi tiệc thứ hai (ngày 21) để đếm ngược chính
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
    <Section.Container className="text-center flex flex-col gap-y-9 px-4">
      <Section.Title kor="Ngày cưới" eng="CALENDAR" />
      <div className="text-secondary flex flex-col gap-6">
        {weddingDates.map((weddingDate, index) => {
          const { year, month, day, time } = weddingDate
          const marryDate = dayjs(
            `${year}/${month}/${day} ${time.hour}:${time.minute}`,
            'YYYY/MM/DD hh:mm'
          )
          return (
            <motion.div 
              key={index}
              className="glass-card-strong shadow-soft rounded-2xl p-6 max-w-sm mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02, boxShadow: '0 12px 40px rgba(247, 158, 158, 0.25)' }}
            >
              <h2 className="text-3xl font-bold text-gradient mb-2">{marryDate.format('DD.MM.YYYY')}</h2>
              <p className="text-base font-medium text-[#666]">
                {marryDate.locale('vi').format('dddd')} {marryDate.format('hh:mm')}{' '}
                {time.amPm.toUpperCase()}
              </p>
            </motion.div>
          )
        })}
      </div>
      <motion.div 
        className="w-full"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Calendar dday={firstDate} />
      </motion.div>
      <motion.div 
        className="glass-card px-6 py-4 rounded-2xl shadow-medium max-w-md mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-row justify-center gap-1">
          <DateUnit value={diff.toString()} name="DAYS" />
          <DateUnit />
          <DateUnit value={diffHours.toString()} name="HOUR" />
          <DateUnit />
          <DateUnit value={diffMinutes.toString()} name="MIN" />
          <DateUnit />
          <DateUnit value={diffSeconds.toString()} name="SEC" />
        </div>
      </motion.div>
      <motion.p 
        className="mt-2 font-semibold text-base text-[#666] px-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Còn <strong className="text-gradient text-xl">{diff}</strong> ngày nữa đến đám
        cưới của
        <br />
        <span className="text-gradient font-bold">{groom}</span> và <span className="text-gradient font-bold">{bride}</span>.
      </motion.p>
    </Section.Container>
  )
}

const DateUnit = ({
  name = '\u00A0',
  value = ':',
}: {
  name?: string
  value?: string
}) => {
  return (
    <div
      className={classNames(
        'flex flex-col font-crimson text-[#2b2222]',
        value === ':' ? 'min-w-2 text-base' : 'min-w-8 text-2xl'
      )}
    >
      <p className="opacity-40 text-[10px] uppercase">{name}</p>
      <p className="opacity-80">{value}</p>
    </div>
  )
}
