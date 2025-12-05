import { Section } from '@/components/Section'

export default function ThankYouSection() {
  return (
    <Section.Container className="flex flex-col items-center pb-15">
      <Section.Title kor="Rất hân hạnh được đón tiếp!" eng="THANK YOU" />
      <Section.Typography className="mt-6 text-center px-6 text-base">
        Cảm ơn quý khách đã dành thời gian quý báu
        <br />
        để chia sẻ niềm vui cùng chúng tôi.
      </Section.Typography>
    </Section.Container>
  )
}
