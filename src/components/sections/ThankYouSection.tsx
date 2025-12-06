'use client';
import { Section } from '@/components/Section';
import { motion } from 'framer-motion';

export default function ThankYouSection() {
  return (
    <Section.Container className="flex flex-col items-center pb-15 px-4">
      <Section.Title kor="Rất hân hạnh được đón tiếp!" eng="THANK YOU" />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card-strong shadow-medium rounded-3xl p-8 mt-6 text-center max-w-md"
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-ephesis text-6xl text-gradient mb-6"
        >
          Thank you
        </motion.h2>
        <Section.Typography className="text-base leading-8 text-[#666] font-medium">
          Cảm ơn quý khách đã dành thời gian quý báu
          <br />
          để chia sẻ niềm vui cùng chúng tôi.
        </Section.Typography>
      </motion.div>
    </Section.Container>
  );
}
