import { MapInfo } from '@/models/model'
import { Section } from '../Section'
import Link from 'next/link'
import { SiGooglemaps } from 'react-icons/si'
import VintageDecorations from '../ui/VintageDecorations'

export default function MapSection({
  position,
  link,
  address,
  addressDetail,
}: MapInfo) {
  const { latitude, longitude } = position

  // Google Maps embed URL - không cần API key
  const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&t=&z=16&ie=UTF8&iwloc=&output=embed`

  return (
    <Section.Container className="flex flex-col gap-y-6 px-4 relative">
      <VintageDecorations type="corner" className="top-0 left-0" />
      <VintageDecorations type="corner" className="top-0 right-0 rotate-90" />

      <div className="text-center mb-4 vintage-fade-in">
        <h2 className="font-dancing text-5xl text-[#8B7355] mb-2 handwritten-shadow">
          Location
        </h2>
        <p className="font-gowun text-sm text-[#6B5344] tracking-[4px] opacity-70">
          CHỈ ĐƯỜNG
        </p>
      </div>

      <VintageDecorations type="floral" />

      <div className="lace-border p-4 sm:p-6 scrapbook-sticker">
        <Section.Typography className="text-base sm:text-lg font-ephesis text-[#8B7355] mb-2 handwritten-shadow">
          {addressDetail}
        </Section.Typography>
        <Section.Typography className="text-xs sm:text-sm font-crimson italic text-[#6B5344]">
          {address}
        </Section.Typography>
      </div>

      <div className="relative w-full h-[400px] rounded-lg overflow-hidden vintage-vignette border-4 border-[#C19A6B]">
        <iframe
          src={googleMapsEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'sepia(0.2) contrast(1.1)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        />
      </div>

      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-fit mx-auto inline-block"
      >
        <Section.Button className="flex items-center gap-2 bg-[#FFF8E7] border-2 border-[#C19A6B] text-[#6B5344] hover:bg-[#F5E6D3] transition-all shadow-md hover:shadow-lg">
          <SiGooglemaps className="inline-block" />
          <span className="font-gowun">Xem trên Google Maps</span>
        </Section.Button>
      </Link>

      <VintageDecorations type="divider" className="mt-4" />

      <VintageDecorations type="corner" className="bottom-0 left-0 rotate-[-90deg]" />
      <VintageDecorations type="corner" className="bottom-0 right-0 rotate-180" />
    </Section.Container>
  )
}
