import { Data } from '@/models/model';
import dayjs from 'dayjs';
import 'dayjs/locale/vi';
import Picture from '../ui/picture';
import VintageFrame from '../ui/VintageFrame';
import VintageDecorations from '../ui/VintageDecorations';

export default function MainSection({ meta, weddingDates, families, images }: Data) {
  const groom = families.find((p) => p.gender === 'groom' && p.relation === 'self');
  const bride = families.find((p) => p.gender === 'bride' && p.relation === 'self');

  return (
    <section className="px-4 pt-8">
      <VintageDecorations type="floral" className="mb-8" />
      
      <div className="flex flex-col items-center gap-3 text-[#6B5344] mb-8">
        <h1 className="font-crimson text-xl sm:text-2xl tracking-wide text-[#8B7355] text-center">
          {weddingDates.map((weddingDate, index) => {
            const { year, month, day } = weddingDate;
            const marryDate = dayjs(`${year}/${month}/${day}`, 'YYYY/MM/DD');
            return (
              <span key={index}>
                {marryDate.format('DD / MM / YYYY')}
                {index < weddingDates.length - 1 && ' - '}
              </span>
            );
          })}
        </h1>
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-1 font-gowun text-xs sm:text-sm uppercase text-[#C19A6B] opacity-80">
          {weddingDates.map((weddingDate, index) => {
            const { year, month, day, time } = weddingDate;
            const marryDate = dayjs(
              `${year}/${month}/${day} ${time.hour}:${time.minute}`,
              'YYYY/MM/DD hh:mm'
            );
            return (
              <span key={index} className="whitespace-nowrap tracking-[1px] sm:tracking-[2px]">
                {marryDate.locale('vi').format('dddd')} {marryDate.format('hh:mm')}{' '}
                {time.amPm.toUpperCase()}
                {index < weddingDates.length - 1 && <span className="hidden sm:inline"> - </span>}
              </span>
            );
          })}
        </div>
        <p className="font-crimson text-xs text-[#9BA77F] italic mt-1 text-center">
          (Tức ngày mùng 1, mùng 2 tháng 11 năm Ất Tỵ)
        </p>
      </div>

      <VintageDecorations type="divider" />

      <div className="my-10 flex justify-center vintage-fade-in">
        <VintageFrame variant="polaroid" className="max-w-full">
          <Picture
            src={images.main}
            alt="Ảnh cưới chính"
            className="w-full max-w-[380px] h-[520px] object-cover object-bottom"
            width={380}
            height={520}
          />
        </VintageFrame>
      </div>

      <VintageDecorations type="divider" />

      <div className="flex flex-col items-center gap-y-6 mt-8 mb-4">
        <div className="flex flex-row gap-3 items-center flex-wrap justify-center px-4">
          <span className="font-ephesis text-3xl sm:text-4xl text-[#8B7355] handwritten-shadow">
            {groom?.name}
          </span>
          <span className="text-[#D4A5A5] text-2xl sm:text-3xl">❦</span>
          <span className="font-ephesis text-3xl sm:text-4xl text-[#8B7355] handwritten-shadow">
            {bride?.name}
          </span>
        </div>
        
        <VintageDecorations type="heart" className="my-4" />
        
        <p className="whitespace-pre text-center text-sm font-crimson text-[#6B5344] leading-7 max-w-md px-4 italic">
          {meta.description}
        </p>
      </div>

      <VintageDecorations type="floral" className="mt-8 mb-4" />
    </section>
  );
}
