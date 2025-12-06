import { MapInfo } from '@/models/model'
import { Section } from '../Section'
import Link from 'next/link'
import { SiGooglemaps } from 'react-icons/si'

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
    <Section.Container className="flex flex-col gap-y-6">
      <Section.Title kor="Chỉ đường" eng="LOCATION" />
      <div>
        <Section.Typography className="text-[20px] text-black">
          {addressDetail}
        </Section.Typography>
        <Section.Typography>{address}</Section.Typography>
      </div>
      <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
        <iframe
          src={googleMapsEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
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
        <Section.Button className="flex items-center gap-1 border-primary">
          <SiGooglemaps className="inline-block" />
          Xem trên Google Maps
        </Section.Button>
      </Link>
    </Section.Container>
  )
}
