import { Section } from '@/components/Section'
import VintageDecorations from '../ui/VintageDecorations'

export default function ThankYouSection() {
  return (
    <Section.Container className="flex flex-col items-center pb-20 px-4 relative">
      <VintageDecorations type="corner" className="top-0 left-0" />
      <VintageDecorations type="corner" className="top-0 right-0 rotate-90" />
      
      <VintageDecorations type="floral" className="mb-6" />
      
      <div className="text-center mb-6 vintage-fade-in">
        <h2 className="font-dancing text-4xl sm:text-5xl text-[#8B7355] mb-3 handwritten-shadow">
          Thank You
        </h2>
        <p className="font-ephesis text-xl sm:text-2xl text-[#C19A6B] tracking-wide">
          Rất hân hạnh được đón tiếp!
        </p>
      </div>

      <VintageDecorations type="heart" className="my-6" />
      
      <Section.Typography className="mt-4 text-center px-6 text-base font-crimson italic text-[#6B5344] leading-relaxed">
        Cảm ơn quý khách đã dành thời gian quý báu
        <br />
        để chia sẻ niềm vui cùng chúng tôi.
      </Section.Typography>

      <VintageDecorations type="divider" className="my-8 w-64" />

      <p className="font-ephesis text-2xl sm:text-3xl text-[#8B7355] handwritten-shadow mt-4">
        With Love
      </p>

      <VintageDecorations type="seal" className="mt-8" />
      
      <VintageDecorations type="floral" className="mt-6 mb-4" />
      
      <VintageDecorations type="corner" className="bottom-0 left-0 rotate-[-90deg]" />
      <VintageDecorations type="corner" className="bottom-0 right-0 rotate-180" />
    </Section.Container>
  )
}
