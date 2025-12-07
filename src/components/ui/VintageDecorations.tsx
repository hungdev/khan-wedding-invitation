import classNames from 'classnames'

interface VintageDecorationsProps {
  type: 'floral' | 'divider' | 'corner' | 'heart' | 'seal'
  position?: 'top' | 'bottom' | 'left' | 'right' | 'center' | 'top-left' | 'top-right'
  className?: string
}

export default function VintageDecorations({
  type,
  position = 'center',
  className,
}: VintageDecorationsProps) {
  if (type === 'floral') {
    return (
      <div className={classNames('text-[#C19A6B] opacity-60', className)}>
        <svg
          width="120"
          height="40"
          viewBox="0 0 120 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto"
        >
          <path
            d="M60 20C60 15 65 10 70 15C75 20 70 25 65 25C70 25 75 30 70 35C65 40 60 35 60 30C60 35 55 40 50 35C45 30 50 25 55 25C50 25 45 20 50 15C55 10 60 15 60 20Z"
            fill="currentColor"
            opacity="0.3"
          />
          <path
            d="M30 25C35 22 40 20 45 22C40 20 38 15 40 10C42 15 40 20 35 22C40 24 42 29 40 34C38 29 40 24 45 22C40 24 35 26 30 25Z"
            fill="currentColor"
            opacity="0.2"
          />
          <path
            d="M90 25C85 22 80 20 75 22C80 20 82 15 80 10C78 15 80 20 85 22C80 24 78 29 80 34C82 29 80 24 75 22C80 24 85 26 90 25Z"
            fill="currentColor"
            opacity="0.2"
          />
        </svg>
      </div>
    )
  }

  if (type === 'divider') {
    return (
      <div className={classNames('flex items-center justify-center my-6', className)}>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#C19A6B] to-transparent opacity-30"></div>
        <div className="mx-4 text-[#C19A6B] text-2xl opacity-50">❦</div>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#C19A6B] to-transparent opacity-30"></div>
      </div>
    )
  }

  if (type === 'corner') {
    return (
      <div className={classNames('absolute w-16 h-16 pointer-events-none', className)}>
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0 L20 0 C20 10 15 15 10 20 C15 25 20 30 20 40 L0 40 L0 30 C10 30 10 20 0 20 L0 0Z"
            fill="#C19A6B"
            opacity="0.15"
          />
        </svg>
      </div>
    )
  }

  if (type === 'heart') {
    return (
      <div className={classNames('text-[#D4A5A5]', className)}>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto"
        >
          <path
            d="M20 35C20 35 5 27 5 15C5 8 10 5 15 8C17 9 18 11 20 13C22 11 23 9 25 8C30 5 35 8 35 15C35 27 20 35 20 35Z"
            fill="currentColor"
            opacity="0.3"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>
    )
  }

  if (type === 'seal') {
    return (
      <div className={classNames('wax-seal mx-auto', className)} />
    )
  }

  return null
}
