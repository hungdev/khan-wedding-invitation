import type { Dayjs } from 'dayjs'
import classNames from 'classnames'
import { memo } from 'react'

const weekdays = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7']

export default memo(function Calendar({ dday }: { dday: Dayjs }) {
  const startOfMonth = dday.startOf('month')
  const startDay = startOfMonth.day() // 시작 요일 (0:일~6:토)
  const daysInMonth = startOfMonth.daysInMonth()

  const dates = []

  for (let i = 0; i < startDay; i++) {
    dates.push(null) // 앞 공백
  }

  for (let i = 1; i <= daysInMonth; i++) {
    dates.push(startOfMonth.date(i))
  }
  return (
    <div className="w-[300px] border-y-2 border-[#C19A6B] border-opacity-30 py-6 mx-auto bg-[#FFF8E7] bg-opacity-30 rounded-lg">
      {/* Weekdays */}
      <div className="grid grid-cols-7 text-center text-sm text-[#6B5344] font-gowun mb-3 font-medium">
        {weekdays.map((d) => {
          const isSunday = d === weekdays[0]
          return (
            <div key={d} className={classNames({ 'text-[#D4A5A5]': isSunday })}>
              {d}
            </div>
          )
        })}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 text-center text-[#6B5344] font-crimson">
        {dates.map((date, idx) => {
          const dDay = date?.isSame(dday, 'day')
          const isSunday = date?.day() === 0
          return (
            <div
              key={idx}
              className={classNames(
                'h-10 flex items-center justify-center rounded-full text-sm',
                !date && 'opacity-0',
                dDay && 'bg-[#D4A5A5] text-white font-bold shadow-md scale-110',
                isSunday && !dDay && 'text-[#D4A5A5]'
              )}
            >
              {date?.date()}
            </div>
          )
        })}
      </div>
    </div>
  )
})
