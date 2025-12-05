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
      <div className="text-center flex flex-col gap-6 mx-4 break-keep mt-2">
        <div className="flex flex-col gap-2">
          <p>Đi xe buýt</p>
          <Section.Typography>
            Tuyến số: 119, 201, 202, 311, 314, 513, 608, 613, 618, 200, 612,
            Nhanh 1, 2002, 33
          </Section.Typography>
          <Section.Typography>* Xuống tại ngã tư Seodaejeon</Section.Typography>
        </div>
        <div>
          <p>Đi tàu điện ngầm</p>
          <Section.Typography>
            Từ lối ra số 2 ga Seodaejeon Nageori, đi bộ 10 phút về phía bên trái
          </Section.Typography>
        </div>
        <div>
          <p>Đi taxi & Tự lái xe</p>
          <Section.Typography>
            Nhập &quot;BMK Wedding Hall&quot; vào GPS và sử dụng bãi đỗ xe
          </Section.Typography>
        </div>
        <div>
          <p>Xe buýt riêng phía chú rể (Khởi hành từ Daegu)</p>
          <Section.Typography>
            • (Daegu Buk-gu Chilgok) Trung tâm Nghệ thuật Buk-gu Eoul - 10:00
            <br />• (Daegu) Lối ra số 5 ga Yongsan, Home Plus Seoseo - 10:30
            <br />
            <br />※ Quý khách sử dụng xe buýt riêng vui lòng liên hệ phía chú rể
            để xác nhận số lượng.
            <br />
            <span className="underline underline-offset-2">
              ※ Xe Saecheonnyeon Tourism (màu đỏ), Tài xế Jang Byeong-hwa, Biển
              số: Daegu 70 Ba 3511
            </span>
          </Section.Typography>
        </div>
      </div>
    </Section.Container>
  )
}
