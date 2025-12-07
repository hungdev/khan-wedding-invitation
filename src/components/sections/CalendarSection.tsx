import dayjs from 'dayjs'
import 'dayjs/locale/vi'

import Calendar from '../ui/calendar'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { WeddingDate } from '@/models/model'
import { Section } from '../Section'
import VintageDecorations from '../ui/VintageDecorations'

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
    <Section.Container className="text-center flex flex-col gap-y-8 px-4 relative">
      <VintageDecorations type="corner" className="top-0 left-0" />
      <VintageDecorations type="corner" className="top-0 right-0 rotate-90" />
      
      <div className="text-center mb-4 vintage-fade-in">
        <h2 className="font-dancing text-5xl text-[#8B7355] mb-2 handwritten-shadow">
          Calendar
        </h2>
        <p className="font-gowun text-sm text-[#6B5344] tracking-[4px] opacity-70">
          NGÀY CƯỚI
        </p>
      </div>

      <VintageDecorations type="floral" />

      <div className="text-[#6B5344] flex flex-col gap-6 lace-border p-6 scrapbook-sticker">
        {weddingDates.map((weddingDate, index) => {
          const { year, month, day, time } = weddingDate
          const marryDate = dayjs(
            `${year}/${month}/${day} ${time.hour}:${time.minute}`,
            'YYYY/MM/DD hh:mm'
          )
          return (
            <div key={index} className="vintage-fade-in">
              <h2 className="font-crimson text-3xl text-[#8B7355] tracking-wider">
                {marryDate.format('DD.MM.YYYY')}
              </h2>
              <p className="font-gowun text-sm mt-2 text-[#C19A6B] tracking-widest">
                {marryDate.locale('vi').format('dddd')} {marryDate.format('hh:mm')}{' '}
                {time.amPm.toUpperCase()}
              </p>
            </div>
          )
        })}
      </div>

      <VintageDecorations type="divider" />

      <div className="w-full">
        <Calendar dday={firstDate} />
      </div>

      <div className="flex flex-row justify-center gap-1 py-6 bg-[#FFF8E7] bg-opacity-50 rounded-xl">
        <DateUnit value={diff.toString()} name="DAYS" />
        <DateUnit />
        <DateUnit value={diffHours.toString()} name="HOUR" />
        <DateUnit />
        <DateUnit value={diffMinutes.toString()} name="MIN" />
        <DateUnit />
        <DateUnit value={diffSeconds.toString()} name="SEC" />
      </div>

      <p className="mt-2 font-crimson italic text-[#6B5344] px-4 text-sm sm:text-base leading-relaxed">
        Còn <strong className="text-[#D4A5A5] font-ephesis text-xl sm:text-2xl">{diff}</strong> ngày nữa
        <br />
        đến đám cưới của
        <br />
        <span className="font-ephesis text-lg sm:text-xl text-[#8B7355]">{groom}</span>
        {' '}và{' '}
        <span className="font-ephesis text-lg sm:text-xl text-[#8B7355]">{bride}</span>
      </p>

      <VintageDecorations type="seal" className="mt-4" />
      
      <VintageDecorations type="corner" className="bottom-0 left-0 rotate-[-90deg]" />
      <VintageDecorations type="corner" className="bottom-0 right-0 rotate-180" />
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
        'flex flex-col font-crimson text-[#6B5344]',
        value === ':' ? 'min-w-2 text-lg text-[#D4A5A5]' : 'min-w-10 text-3xl'
      )}
    >
      <p className="text-[#C19A6B] opacity-60 text-[9px] uppercase tracking-wider font-gowun">{name}</p>
      <p className="font-semibold handwritten-shadow">{value}</p>
    </div>
  )
}
