import { Data } from '@/models/model';
import dayjs from 'dayjs';
import 'dayjs/locale/vi';
import Picture from '../ui/picture';

export default function MainSection({ meta, weddingDates, families, images }: Data) {
  const groom = families.find((p) => p.gender === 'groom' && p.relation === 'self');
  const bride = families.find((p) => p.gender === 'bride' && p.relation === 'self');

  return (
    <section>
      <div className="flex flex-col items-center font-crimson gap-1 text-[#49413a]">
        <h1 className="text-[30px] tracking-[-0.2]">
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
        <p className="text-base uppercase tracking-[2px]">
          {weddingDates.map((weddingDate, index) => {
            const { year, month, day, time } = weddingDate;
            const marryDate = dayjs(
              `${year}/${month}/${day} ${time.hour}:${time.minute}`,
              'YYYY/MM/DD hh:mm'
            );
            return (
              <span key={index}>
                {marryDate.locale('vi').format('dddd')} {marryDate.format('hh:mm')}{' '}
                {time.amPm.toUpperCase()}
                {index < weddingDates.length - 1 && ' - '}
              </span>
            );
          })}
        </p>
        <p className="text-sm text-[#666] mt-2 normal-case tracking-[0px]">
          (Tức ngày mùng 1, mùng 2 tháng 11 năm Ất Tỵ)
        </p>
      </div>
      <div className="my-15">
        <Picture
          src={images.main}
          alt="Ảnh chính"
          className="rounded-2xl w-[425px] h-[585px] object-cover object-bottom"
          width={425}
          height={585}
        />
      </div>
      <div className="flex flex-col items-center gap-y-5 font-gowun">
        <div className="flex flex-row gap-2.5 text-lg tracking-[1]">
          <span>{groom?.name}</span>
          <span>·</span>
          <span>{bride?.name}</span>
        </div>
        <p className="whitespace-pre text-center text-base text-[#544f4f] leading-7">
          {meta.description}
        </p>
      </div>
    </section>
  );
}
