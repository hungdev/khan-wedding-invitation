import { useState } from 'react'
import { IoIosCall } from 'react-icons/io'
import { IoIosMail } from 'react-icons/io'
import { Section } from '@/components/Section'
import { IoCall } from 'react-icons/io5'
import { OtherSectionImage, Person } from '@/models/model'

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
    <Section.Container className="flex flex-col items-center">
      <Section.Title kor="Trân trọng kính mời quý khách" eng="INVITATION" />
      <div className="flex flex-col gap-y-10 whitespace-pre my-9 font-gowun text-[#585858] text-[15px] text-center leading-[30px]">
        {contents.map((content) => (
          <Section.Typography key={content}>{content}</Section.Typography>
        ))}
      </div>

      <div className="flex gap-2 mx-2">
        <div className="flex flex-col gap-4">
          <Section.Image
            src={images.invitation[0]}
            alt=""
            className="rounded-2xl w-[200px] h-[280px] object-cover object-bottom"
            width={200}
            height={280}
          />
        </div>
        <div className="flex flex-col gap-4">
          <Section.Image
            src={images.invitation[1]}
            alt=""
            className="rounded-2xl w-[200px] h-[280px] object-cover object-bottom"
            width={200}
            height={280}
          />
        </div>
      </div>
      <div className="w-full py-10 mt-6 mb-4 rounded-xl">
        <div className="flex justify-center items-start gap-4 px-6">
          {/* Nhà Trai */}
          <div className="flex-1 flex flex-col items-center text-center space-y-2">
            <h3 className="text-sm font-bold tracking-[3px] mb-2 text-[#333]">
              NHÀ TRAI
            </h3>
            <p className="text-[13px] font-bold tracking-wider text-[#444]">
              ÔNG {groomFather?.name?.toUpperCase()}
            </p>
            <p className="text-[13px] font-bold tracking-wider text-[#444]">
              BÀ {groomMother?.name?.toUpperCase()}
            </p>
            <div className="pt-4">
              <p className="text-sm text-[#666]">Chú Rể</p>
              <p className="text-2xl font-ephesis mt-1 text-[#333]">
                {groomSelf?.name}
              </p>
            </div>
          </div>

          {/* Heart Icon */}
          <div className="flex items-center justify-center px-2 pt-8">
            <Section.Image
              src="/images/heart.webp"
              alt="Heart"
              width={60}
              height={60}
              className="w-[50px] h-[50px] animate-breathing"
            />
          </div>

          {/* Nhà Gái */}
          <div className="flex-1 flex flex-col items-center text-center space-y-2">
            <h3 className="text-sm font-bold tracking-[3px] mb-2 text-[#333]">
              NHÀ GÁI
            </h3>
            <p className="text-[13px] font-bold tracking-wider text-[#444]">
              ÔNG {brideFather?.name?.toUpperCase()}
            </p>
            <p className="text-[13px] font-bold tracking-wider text-[#444]">
              BÀ {brideMother?.name?.toUpperCase()}
            </p>
            <div className="pt-4">
              <p className="text-sm text-[#666]">Cô Dâu</p>
              <p className="text-2xl font-ephesis mt-1 text-[#333]">
                {brideSelf?.name}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Section.Button
        onClick={() => setOpen(true)}
        className="flex items-center gap-x-2"
      >
        <IoCall size={16} />
        Liên hệ
      </Section.Button>

      <Section.Dialog isOpen={open} onClose={() => setOpen(false)}>
        <div className="flex flex-col items-center text-[#ccc] text-center overflow-auto h-full">
          <h2 className="mt-[50px]">
            <p className="font-crimson text-xs font-medium text-[#999] tracking-[3px]">
              CONTACT
            </p>
            <p className="font-gowun text-lg font-medium tracking-[2px]">
              Liên hệ
            </p>
          </h2>
          <div className="mt-15 font-gowun text-sm">
            <p className="border-b-1 border-dotted border-gray-400 pb-2.5 w-[300px] text-start">
              Phía chú rể
              <span className="text-[#999] text-xs align-bottom ml-1 tracking-[3px]">
                GROOM
              </span>
            </p>
            <ul>
              <li className="my-5 flex">
                <p className="flex-1/3 text-start ">Chú rể</p>
                <p className="flex-1/3 text-[15px] text-white">
                  {groomSelf?.name}
                </p>
                <div className="flex-1/3 flex justify-end gap-x-5">
                  <a href={`tel:${groomSelf?.phone}`}>
                    <IoIosCall size={20} />
                  </a>
                  <a href={`sms:${groomSelf?.phone}`}>
                    <IoIosMail size={20} />
                  </a>
                </div>
              </li>
              <li className="my-5 flex">
                <p className="flex-1/3 text-start ">Cha chú rể</p>
                <p className="flex-1/3 text-[15px] text-white">
                  {groomFather?.name}
                </p>
                <div className="flex-1/3 flex justify-end gap-x-5">
                  <a href={`tel:${groomFather?.phone}`}>
                    <IoIosCall size={20} />
                  </a>
                  <a href={`sms:${groomFather?.phone}`}>
                    <IoIosMail size={20} />
                  </a>
                </div>
              </li>
              <li className="my-5 flex">
                <p className="flex-1/3 text-start ">Mẹ chú rể</p>
                <p className="flex-1/3 text-[15px] text-white">
                  {groomMother?.name}
                </p>
                <div className="flex-1/3 flex justify-end gap-x-5">
                  <a href={`tel:${groomMother?.phone}`}>
                    <IoIosCall size={20} />
                  </a>
                  <a href={`sms:${groomMother?.phone}`}>
                    <IoIosMail size={20} />
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="mt-15 font-gowun text-sm">
            <p className="border-b-1 border-dotted border-gray-400 pb-2.5 w-[300px] text-start">
              Phía cô dâu
              <span className="text-[#999] text-xs align-bottom ml-1 tracking-[3px]">
                BRIDE
              </span>
            </p>
            <ul>
              <li className="my-5 flex">
                <p className="flex-1/3 text-start ">Cô dâu</p>
                <p className="flex-1/3 text-[15px] text-white">
                  {brideSelf?.name}
                </p>
                <div className="flex-1/3 flex justify-end gap-x-5">
                  <a href={`tel:${brideSelf?.phone}`}>
                    <IoIosCall size={20} />
                  </a>
                  <a href={`sms:${brideSelf?.phone}`}>
                    <IoIosMail size={20} />
                  </a>
                </div>
              </li>
              <li className="my-5 flex">
                <p className="flex-1/3 text-start ">Cha cô dâu</p>
                <p className="flex-1/3 text-[15px] text-white">
                  {brideFather?.name}
                </p>
                <div className="flex-1/3 flex justify-end gap-x-5">
                  <a href={`tel:${brideFather?.phone}`}>
                    <IoIosCall size={20} />
                  </a>
                  <a href={`sms:${brideFather?.phone}`}>
                    <IoIosMail size={20} />
                  </a>
                </div>
              </li>
              <li className="my-5 flex">
                <p className="flex-1/3 text-start ">Mẹ cô dâu</p>
                <p className="flex-1/3 text-[15px] text-white">
                  {brideMother?.name}
                </p>
                <div className="flex-1/3 flex justify-end gap-x-5">
                  <a href={`tel:${brideMother?.phone}`}>
                    <IoIosCall size={20} />
                  </a>
                  <a href={`sms:${brideMother?.phone}`}>
                    <IoIosMail size={20} />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Section.Dialog>
    </Section.Container>
  )
}
