import { useState } from 'react'
import { IoIosCall } from 'react-icons/io'
import { IoIosMail } from 'react-icons/io'
import { Section } from '@/components/Section'
import { IoCall } from 'react-icons/io5'
import { OtherSectionImage, Person } from '@/models/model'
import VintageFrame from '@/components/ui/VintageFrame'
import VintageDecorations from '@/components/ui/VintageDecorations'

export default function IntroSection({
  brideFamily,
  groomFamily,
  images,
}: {
  groomFamily: Person[]
  brideFamily: Person[]
  images: OtherSectionImage
}) {
  const [open, setOpen] = useState(false)
  const contents = [
    '“Hôn nhân là chuyện cả đời,\nYêu người vừa ý, cưới người mình thương..."',
    'Trong ngày tràn đầy hạnh phúc và yêu thương,\nchúng tôi thật hạnh phúc khi được đón tiếp \nvà nhận những lời chúc phúc chân thành từ quý vị.',
  ]
  const groomSelf = groomFamily.find(({ relation }) => relation === 'self')
  const groomFather = groomFamily.find(({ relation }) => relation === 'father')
  const groomMother = groomFamily.find(({ relation }) => relation === 'mother')
  const brideSelf = brideFamily.find(({ relation }) => relation === 'self')
  const brideFather = brideFamily.find(({ relation }) => relation === 'father')
  const brideMother = brideFamily.find(({ relation }) => relation === 'mother')

  return (
    <Section.Container className="flex flex-col items-center px-4 relative">
      <VintageDecorations type="corner" className="top-0 left-0" />
      <VintageDecorations type="corner" className="top-0 right-0 rotate-90" />
      
      <div className="text-center mb-6 vintage-fade-in">
        <h2 className="font-dancing text-5xl text-[#8B7355] mb-2 handwritten-shadow">
          Invitation
        </h2>
        <p className="font-gowun text-sm text-[#6B5344] tracking-[4px] opacity-70">
          TRÂN TRỌNG KÍNH MỜI QUÝ KHÁCH
        </p>
      </div>

      <VintageDecorations type="floral" className="my-4" />

      <div className="flex flex-col gap-y-8 whitespace-pre my-6 text-[#6B5344] text-[15px] text-center leading-[28px] max-w-sm">
        {contents.map((content, idx) => (
          <Section.Typography 
            key={content}
            className={`font-crimson text-[#6B5344] italic ${idx === 0 ? 'font-great-vibes text-2xl leading-relaxed' : ''}`}
          >
            {content}
          </Section.Typography>
        ))}
      </div>

      <VintageDecorations type="divider" />

      <div className="flex gap-4 sm:gap-6 mx-2 my-8 relative justify-center">
        <VintageFrame variant="polaroid" tilt="left" className="z-10">
          <Section.Image
            src={images.invitation[0]}
            alt="Chú rể"
            className="w-[150px] sm:w-[160px] h-[240px] sm:h-[260px] object-cover"
            style={{ objectPosition: 'center 25%' }}
            width={160}
            height={260}
          />
        </VintageFrame>
        
        <VintageDecorations type="heart" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20" />
        
        <VintageFrame variant="polaroid" tilt="right" className="z-10">
          <Section.Image
            src={images.invitation[1]}
            alt="Cô dâu"
            className="w-[150px] sm:w-[160px] h-[240px] sm:h-[260px] object-cover"
            style={{ objectPosition: 'center 20%' }}
            width={160}
            height={260}
          />
        </VintageFrame>
      </div>
      <div className="w-full max-w-md mx-auto py-6 mt-6 mb-4 lace-border scrapbook-sticker">
        <VintageDecorations type="floral" className="mb-4" />
        
        <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-4 sm:gap-6 px-3">
          {/* Nhà Trai */}
          <div className="flex-1 w-full flex flex-col items-center text-center space-y-2">
            <h3 className="font-ephesis text-3xl tracking-wide mb-2 text-[#8B7355] handwritten-shadow">
              Nhà Trai
            </h3>
            <div className="space-y-1">
              <p className="text-[11px] font-gowun tracking-wider text-[#6B5344] opacity-80">
                Ông {groomFather?.name}
              </p>
              <p className="text-[11px] font-gowun tracking-wider text-[#6B5344] opacity-80">
                Bà {groomMother?.name}
              </p>
            </div>
            <VintageDecorations type="divider" className="w-20 my-2" />
            <div className="pt-1">
              <p className="text-[10px] font-crimson text-[#C19A6B] tracking-[2px] uppercase">
                Chú Rể
              </p>
              <p className="text-2xl sm:text-3xl font-ephesis mt-1 text-[#8B7355] handwritten-shadow">
                {groomSelf?.name}
              </p>
            </div>
          </div>

          {/* Heart Icon với vintage style */}
          <div className="flex items-center justify-center px-2 py-4 sm:pt-12">
            <div className="relative scale-75 sm:scale-100">
              <VintageDecorations type="seal" />
            </div>
          </div>

          {/* Nhà Gái */}
          <div className="flex-1 w-full flex flex-col items-center text-center space-y-2">
            <h3 className="font-ephesis text-3xl tracking-wide mb-2 text-[#8B7355] handwritten-shadow">
              Nhà Gái
            </h3>
            <div className="space-y-1">
              <p className="text-[11px] font-gowun tracking-wider text-[#6B5344] opacity-80">
                Ông {brideFather?.name}
              </p>
              <p className="text-[11px] font-gowun tracking-wider text-[#6B5344] opacity-80">
                Bà {brideMother?.name}
              </p>
            </div>
            <VintageDecorations type="divider" className="w-20 my-2" />
            <div className="pt-1">
              <p className="text-[10px] font-crimson text-[#C19A6B] tracking-[2px] uppercase">
                Cô Dâu
              </p>
              <p className="text-2xl sm:text-3xl font-ephesis mt-1 text-[#8B7355] handwritten-shadow">
                {brideSelf?.name}
              </p>
            </div>
          </div>
        </div>
        
        <VintageDecorations type="floral" className="mt-4" />
      </div>
      <Section.Button
        onClick={() => setOpen(true)}
        className="flex items-center gap-x-2 mt-6 bg-[#FFF8E7] border-2 border-[#C19A6B] text-[#6B5344] hover:bg-[#F5E6D3] transition-all shadow-md hover:shadow-lg"
      >
        <IoCall size={16} />
        <span className="font-gowun">Liên hệ</span>
      </Section.Button>

      <VintageDecorations type="corner" className="bottom-0 left-0 rotate-[-90deg]" />
      <VintageDecorations type="corner" className="bottom-0 right-0 rotate-180" />

      <Section.Dialog isOpen={open} onClose={() => setOpen(false)}>
        <div className="flex flex-col items-center text-[#6B5344] text-center overflow-auto h-full vintage-paper py-8">
          <VintageDecorations type="floral" className="mt-8" />
          
          <h2 className="mt-8 mb-8">
            <p className="font-dancing text-4xl text-[#8B7355] handwritten-shadow mb-2">
              Contact
            </p>
            <p className="font-gowun text-xs sm:text-sm tracking-[3px] sm:tracking-[4px] text-[#C19A6B] opacity-80">
              LIÊN HỆ
            </p>
          </h2>
          
          <VintageDecorations type="divider" className="w-80 max-w-full" />
          
          <div className="mt-8 font-gowun text-sm w-full max-w-sm px-4 sm:px-6">
            <div className="lace-border p-4 sm:p-6 mb-6">
              <p className="font-ephesis text-2xl sm:text-3xl text-[#8B7355] mb-4 handwritten-shadow">
                Phía chú rể
              </p>
              <ul>
                <li className="my-4 sm:my-6 flex items-center gap-3 sm:gap-4">
                  <div className="flex-1 text-start">
                    <p className="text-[10px] sm:text-xs text-[#C19A6B] uppercase tracking-wider mb-1">Chú rể</p>
                    <p className="text-base sm:text-lg font-ephesis text-[#6B5344]">
                      {groomSelf?.name}
                    </p>
                  </div>
                  <div className="flex gap-x-4">
                    <a 
                      href={`tel:${groomSelf?.phone}`}
                      className="w-10 h-10 rounded-full bg-[#E8B4B8] bg-opacity-30 flex items-center justify-center hover:bg-opacity-50 transition-all"
                    >
                      <IoIosCall size={20} className="text-[#8B7355]" />
                    </a>
                    <a 
                      href={`sms:${groomSelf?.phone}`}
                      className="w-10 h-10 rounded-full bg-[#E8B4B8] bg-opacity-30 flex items-center justify-center hover:bg-opacity-50 transition-all"
                    >
                      <IoIosMail size={20} className="text-[#8B7355]" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <VintageDecorations type="seal" className="mb-8" />
        </div>
      </Section.Dialog>
    </Section.Container>
  )
}
