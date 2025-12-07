import { ReactNode } from 'react'
import classNames from 'classnames'

interface VintageFrameProps {
  children: ReactNode
  variant?: 'polaroid' | 'torn' | 'tape' | 'lace' | 'simple'
  tilt?: 'left' | 'right' | 'none'
  className?: string
  caption?: string
}

export default function VintageFrame({
  children,
  variant = 'polaroid',
  tilt = 'none',
  className,
  caption,
}: VintageFrameProps) {
  const tiltClass =
    tilt === 'left'
      ? 'vintage-tilt-left'
      : tilt === 'right'
        ? 'vintage-tilt-right'
        : ''

  const variantClasses = {
    polaroid: 'polaroid-frame',
    torn: 'torn-edge bg-white p-2',
    tape: 'tape-effect bg-white p-2 shadow-lg',
    lace: 'lace-border',
    simple: 'bg-white p-1.5 shadow-md border-2 border-[#D4A574]',
  }

  return (
    <div
      className={classNames(
        'vintage-vignette inline-block',
        variantClasses[variant],
        tiltClass,
        className
      )}
    >
      <div className="vintage-sepia relative">{children}</div>
      {caption && variant === 'polaroid' && (
        <div className="absolute bottom-2 left-0 right-0 text-center z-10">
          <p className="font-parisienne text-[#6B5344] text-lg handwritten-shadow">
            {caption}
          </p>
        </div>
      )}
    </div>
  )
}
