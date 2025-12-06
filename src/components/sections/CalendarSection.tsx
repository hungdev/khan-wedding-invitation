import dayjs from 'dayjs'
import 'dayjs/locale/vi'

import Calendar from '../ui/calendar'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { WeddingDate } from '@/models/model'
import { Section } from '../Section'

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
    <Section.Container className="text-center flex flex-col gap-y-9">
      <Section.Title kor="Ngày cưới" eng="CALENDAR" />
      <div className="text-secondary flex flex-col gap-4">
        {weddingDates.map((weddingDate, index) => {
          const { year, month, day, time } = weddingDate
          const marryDate = dayjs(
            `${year}/${month}/${day} ${time.hour}:${time.minute}`,
            'YYYY/MM/DD hh:mm'
          )
          return (
            <div key={index}>
              <h2 className="text-2xl">{marryDate.format('DD.MM.YYYY')}</h2>
              <p className="text-medium mt-2">
                {marryDate.locale('vi').format('dddd')} {marryDate.format('hh:mm')}{' '}
                {time.amPm.toUpperCase()}
              </p>
            </div>
          )
        })}
      </div>
      <div className="w-full">
        <Calendar dday={firstDate} />
      </div>
      <div className="flex flex-row justify-center gap-0.5">
        <DateUnit value={diff.toString()} name="DAYS" />
        <DateUnit />
        <DateUnit value={diffHours.toString()} name="HOUR" />
        <DateUnit />
        <DateUnit value={diffMinutes.toString()} name="MIN" />
        <DateUnit />
        <DateUnit value={diffSeconds.toString()} name="SEC" />
      </div>
      <p className="mt-4 font-bold text-[#666666] px-4">
        Còn <strong className="text-highlight">{diff}</strong> ngày nữa đến đám
        cưới của
        <br />
        {groom} và {bride}.
      </p>
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
