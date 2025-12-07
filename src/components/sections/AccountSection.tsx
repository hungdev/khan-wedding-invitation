import classNames from 'classnames';
import { IoIosArrowDown } from 'react-icons/io';
import { FiCopy } from 'react-icons/fi';
import { Section } from '@/components/Section';
import { Person } from '@/models/model';
import VintageDecorations from '../ui/VintageDecorations';

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

  return (
    <Section.Container className="px-4 relative">
      <VintageDecorations type="corner" className="top-0 left-0" />
      <VintageDecorations type="corner" className="top-0 right-0 rotate-90" />

      <div className="text-center mb-6 vintage-fade-in">
        <h2 className="font-dancing text-5xl text-[#8B7355] mb-2 handwritten-shadow">
          Wishes
        </h2>
        <p className="font-gowun text-sm text-[#6B5344] tracking-[4px] opacity-70">
          GỬI TẶNG ĐẾN CHÚNG TÔI
        </p>
      </div>

      <VintageDecorations type="floral" className="mb-6" />

      <div className="flex flex-col gap-y-8 font-crimson italic text-[#6B5344] text-sm text-center leading-7 px-4 max-w-full whitespace-pre-line mb-10">
        {content}
      </div>

      <VintageDecorations type="divider" />

      <div className="flex flex-col gap-10 mt-8">
        <details className="shadow-xl rounded-xl w-[320px] mx-auto group text-base lace-border vintage-vignette">
          <summary className="font-ephesis text-2xl rounded-t-xl font-medium tracking-wide text-center list-none bg-[#FFF8E7] px-5 h-[60px] flex items-center justify-center text-[#8B7355] handwritten-shadow cursor-pointer hover:bg-[#F5E6D3] transition-all">
            <p className="flex-1">Tài khoản chú rể</p>
            <IoIosArrowDown
              className={classNames('w-5 h-5 transition-transform', 'group-open:rotate-180')}
              color="#C19A6B"
            />
          </summary>
          <div className="font-gowun text-sm text-[#6B5344] bg-[#FFF8E7] bg-opacity-50">
            {groomFamily
              .filter((person) => person.relation === 'self')
              .map(({ account, name }, idx) => (
                <button
                  key={name + idx}
                  className="flex flex-row w-full gap-x-3 cursor-pointer flex-1 p-5 hover:bg-[#F5E6D3] hover:bg-opacity-50 transition-all border-b border-[#C19A6B] border-opacity-20"
                  onClick={() => {
                    const copyContent = `${account.bank} ${account.accountNumber}`;
                    navigator.clipboard.writeText(copyContent);
                    alert(
                      `Đã sao chép: ${account.bank} ${account.accountNumber} (${account.bankIdentity})`
                    );
                  }}
                >
                  <div className="flex flex-col gap-y-2 cursor-pointer flex-1 text-left">
                    <p className="font-ephesis text-lg sm:text-xl text-[#8B7355]">Nguyễn Văn Khẩn</p>
                    <div className="flex flex-col gap-y-1">
                      <p className="text-xs text-[#C19A6B]">{account.bank}</p>
                      <p className="text-xs sm:text-sm font-medium text-[#6B5344]">{account.accountNumber}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FiCopy className="w-5 h-5 text-[#C19A6B]" />
                  </div>
                </button>
              ))}
            <div className="p-6">
              <img src="/images/bank.png" alt="Bank QR Code" className="w-full h-auto rounded-lg vintage-vignette" />
            </div>
          </div>
        </details>
      </div>

      <VintageDecorations type="seal" className="mt-8" />
      
      <VintageDecorations type="corner" className="bottom-0 left-0 rotate-[-90deg]" />
      <VintageDecorations type="corner" className="bottom-0 right-0 rotate-180" />
    </Section.Container>
  );
}
