'use client'
import { FiCopy, FiCheck } from 'react-icons/fi'
import { Person } from '@/models/model'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AccountSection({ families }: { families: Person[] }) {
  const groomFamily = families.filter((person) => person.gender === 'groom')
  const [copied, setCopied] = useState(false)

  const handleCopy = (account: { bank: string; accountNumber: string }) => {
    const copyContent = `${account.bank} ${account.accountNumber}`
    navigator.clipboard.writeText(copyContent)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="section-padding bg-[#F5F3F0]">
      <div className="max-w-4xl mx-auto">
        
        {/* Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="divider-elegant mx-auto mb-6" />
          <h2 className="font-crimson text-3xl text-[#8B2E3D] font-light tracking-wider mb-4">
            ACCOUNT
          </h2>
          <p className="text-sm text-[#4A4A4A] tracking-wide mb-8">
            Gửi tặng đến chúng tôi
          </p>
          <p className="text-xs text-[#6B6B6B] leading-relaxed max-w-2xl mx-auto">
            Dành cho quý khách không thể tham dự, chúng tôi xin được gửi thông tin tài khoản 
            để thuận tiện cho việc chúc phúc. Rất mong nhận được sự thông cảm 
            và lời chúc yêu thương từ quý vị.
          </p>
        </motion.div>

        {/* Account Card - Minimal Elegant */}
        <motion.div
          className="max-w-lg mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="korean-card shadow-elegant overflow-hidden">
            {/* Header */}
            <div className="gradient-burgundy p-4 text-center">
              <p className="text-white text-sm tracking-[3px] uppercase font-light">
                Tài khoản chú rể
              </p>
            </div>

            {/* Account Info */}
            {groomFamily
              .filter((person) => person.relation === 'self')
              .map(({ account, name }, idx) => (
                <div key={idx}>
                  <button
                    className="w-full p-6 hover:bg-[#F5F3F0] transition-colors text-left group"
                    onClick={() => handleCopy(account)}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex-1">
                        <p className="text-base text-[#2C2C2C] font-medium mb-3">
                          {name}
                        </p>
                        <div className="space-y-1 text-sm text-[#6B6B6B]">
                          <p className="font-medium">{account.bank}</p>
                          <p className="font-mono tracking-wider">{account.accountNumber}</p>
                        </div>
                      </div>
                      <div className={`
                        w-10 h-10 rounded-full flex items-center justify-center transition-colors
                        ${copied 
                          ? 'bg-green-100 text-green-600' 
                          : 'bg-[#8B2E3D]/10 text-[#8B2E3D] group-hover:bg-[#8B2E3D]/20'}
                      `}>
                        {copied ? <FiCheck size={18} /> : <FiCopy size={18} />}
                      </div>
                    </div>
                  </button>

                  {/* QR Code */}
                  <div className="p-6 bg-[#F5F3F0]/50 border-t border-[#8B2E3D]/10">
                    <div className="korean-card p-4 bg-white">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src="/images/bank.png" 
                        alt="Bank QR Code" 
                        className="w-full h-auto" 
                      />
                    </div>
                    <p className="text-center text-xs text-[#8B8B8B] mt-4 tracking-wide">
                      Quét mã QR để chuyển khoản
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </motion.div>

      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {copied && (
          <motion.div
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="korean-card px-6 py-3 shadow-strong flex items-center gap-2 bg-white">
              <FiCheck className="text-green-600" size={18} />
              <span className="text-sm text-[#2C2C2C]">Đã sao chép thành công!</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
