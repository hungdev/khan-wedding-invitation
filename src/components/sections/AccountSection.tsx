'use client'
import classNames from 'classnames';
import { IoIosArrowDown } from 'react-icons/io';
import { FiCopy, FiCheck } from 'react-icons/fi';
import { Section } from '@/components/Section';
import { Person } from '@/models/model';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function AccountSection({ families }: { families: Person[] }) {
  const title = 'Gửi tặng đến chúng tôi';
  const content = `
    Dành cho quý khách không thể tham dự, 
    chúng tôi xin được gửi thông tin tài khoản để thuận tiện cho việc chúc phúc. Rất mong nhận được sự thông cảm và lời chúc yêu thương từ quý vị.
  `;
  const { groomFamily, brideFamily } = {
    groomFamily: families.filter((person) => person.gender === 'groom'),
    brideFamily: families.filter((person) => person.gender === 'bride'),
  };

  const [copied, setCopied] = useState(false);

  const handleCopy = (account: { bank: string; accountNumber: string; bankIdentity: string }) => {
    const copyContent = `${account.bank} ${account.accountNumber}`;
    navigator.clipboard.writeText(copyContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section.Container>
      <Section.Title kor={title} eng="ACCOUNT" />

      <div className="flex flex-col gap-y-10 font-gowun text-[#585858] text-[15px] text-center leading-[30px] px-4 max-w-full whitespace-pre-line mb-10 mt-6">
        {content}
      </div>

      <div className="flex flex-col gap-8 px-4">
        <motion.details 
          open 
          className="glass-card-strong shadow-medium rounded-2xl w-full max-w-[350px] mx-auto group text-base overflow-hidden hover-lift"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <summary className="font-kor rounded-t-2xl font-semibold tracking-[2px] text-center list-none gradient-romantic px-6 py-4 flex items-center justify-center cursor-pointer transition-all duration-300">
            <p className="flex-1 text-white drop-shadow-md">Tài khoản chú rể</p>
            <IoIosArrowDown
              className={classNames('w-5 h-5 transition-transform duration-300', 'group-open:rotate-180')}
              color="white"
            />
          </summary>
          <div className="font-noto text-sm text-[#333333] font-light bg-white/90">
            {groomFamily
              .filter((person) => person.relation === 'self')
              .map(({ account, name }, idx) => (
                <motion.button
                  key={name + idx}
                  className="flex flex-row w-full gap-x-3 cursor-pointer flex-1 p-5 hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 transition-all duration-300 group/button"
                  onClick={() => handleCopy(account)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex flex-col gap-y-2 cursor-pointer flex-1 text-left">
                    <div className="flex gap-x-2 items-center">
                      <p className="font-semibold text-base text-[#333] group-hover/button:text-gradient transition-all">
                        {name}
                      </p>
                    </div>
                    <div className="flex flex-col gap-y-1 text-[#666]">
                      <p className="font-medium">{account.bank}</p>
                      <p className="font-mono tracking-wider text-[#888]">{account.accountNumber}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <motion.div
                      className={classNames(
                        'p-2 rounded-full transition-all duration-300',
                        copied 
                          ? 'bg-green-100 text-green-600' 
                          : 'bg-pink-100 text-pink-600 group-hover/button:bg-pink-200'
                      )}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {copied ? <FiCheck className="w-5 h-5" /> : <FiCopy className="w-5 h-5" />}
                    </motion.div>
                  </div>
                </motion.button>
              ))}
            <motion.div 
              className="p-5 bg-gradient-to-br from-pink-50 to-purple-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="glass-card p-3 rounded-xl shadow-soft">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/images/bank.png" 
                  alt="Bank QR Code" 
                  className="w-full h-auto rounded-lg" 
                />
              </div>
              <p className="text-center text-xs text-[#888] mt-3 font-medium">
                Quét mã QR để chuyển khoản
              </p>
            </motion.div>
          </div>
        </motion.details>
      </div>

      {copied && (
        <motion.div
          className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="glass-card-strong px-6 py-3 rounded-full shadow-medium flex items-center gap-2">
            <FiCheck className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium text-[#333]">Đã sao chép!</span>
          </div>
        </motion.div>
      )}
    </Section.Container>
  );
}
