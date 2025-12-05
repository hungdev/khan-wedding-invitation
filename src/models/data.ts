import type { Data } from '@/models/model';

const mapperBuildPath = (path: string) => {
  return path;
};

export default {
  meta: {
    title: 'Nguyễn Khẩn & Nguyễn Trang kết hôn',
    description:
      'Thứ Bảy, 20 tháng 12 năm 2025, lúc 2 giờ chiều\nBMK Wedding Convention - Astin Hall, Daejeon',
    url: 'https://khan-wedding-invitation.vercel.app',
    thumbnail: mapperBuildPath('/images/thumbnail.png'),
  },
  weddingDate: {
    year: 2025,
    month: 12,
    day: 20,
    time: {
      amPm: 'pm',
      hour: 2,
      minute: 0,
    },
  },
  families: [
    {
      gender: 'groom',
      name: 'Nguyễn Khẩn',
      relation: 'self',
      phone: '01082623777',
      account: {
        bank: '신한',
        accountNumber: '110-414-698540',
        bankIdentity: 'Nguyễn Khẩn',
      },
    },
    {
      gender: 'groom',
      name: '이호상',
      relation: 'father',
      phone: '010-7252-9110',
      account: {
        bank: 'IM뱅크(대구)',
        accountNumber: '173-07-105277-001',
        bankIdentity: '번창기업(이호상)',
      },
    },
    {
      gender: 'groom',
      name: '권정자',
      relation: 'mother',
      phone: '010-9882-9110',
      account: {
        bank: 'IM뱅크(대구)',
        accountNumber: '097-08-004623',
        bankIdentity: '권정자',
      },
    },
    {
      gender: 'bride',
      name: 'Nguyễn Trang',
      relation: 'self',
      phone: '010-6412-3317',
      account: {
        bank: '우리',
        accountNumber: '1002-160-599486',
        bankIdentity: 'Nguyễn Trang',
      },
    },
    {
      gender: 'bride',
      name: '김형준',
      relation: 'father',
      phone: '010-3427-3319',
      account: {
        bank: '국민',
        accountNumber: '451-21-1294-665',
        bankIdentity: '김형준',
      },
    },
    {
      gender: 'bride',
      name: '손유진',
      relation: 'mother',
      phone: '010-3264-3318',
      account: {
        bank: '농협',
        accountNumber: '453026-56-124036',
        bankIdentity: '손유진',
      },
    },
  ],
  images: {
    intro: mapperBuildPath('/images/intro.png'),
    main: mapperBuildPath('/images/main.jpg'),
    invitation: ['/images/single-m.png', '/images/single-w.png'].map(mapperBuildPath),
  },
  gallery: [
    {
      src: '/images/YJH_0056.jpg',
      position: 'object-center',
    },
    {
      src: '/images/YJH_0267.jpg',
      position: 'object-center',
    },
    {
      src: '/images/YJH_0800.jpg',
      position: 'object-bottom',
    },
    {
      src: '/images/YJH_0360.jpg',
      position: 'object-center',
    },
    {
      src: '/images/YJH_0590.jpg',
      position: 'object-bottom',
    },
    {
      src: '/images/YJH_9938.jpg',
      position: 'object-center',
    },
    {
      src: '/images/YJH_0720.jpg',
      position: 'object-center',
    },
    {
      src: '/images/YJH_0788.jpg',
      position: 'object-bottom',
    },
    {
      src: '/images/YJH_0459.jpg',
      position: 'object-center',
    },
  ].map(({ position, src }) => ({
    src: mapperBuildPath(src),
    position: position as Data['gallery'][number]['position'],
  })),
  map: {
    name: 'BMK웨딩홀',
    address: '대전 중구 서문로 133',
    addressDetail: 'BMK 웨딩홀 4층, 아스틴홀',
    tel: '042-334-1000',
    position: {
      latitude: 36.31983198404643,
      longitude: 127.40508053198738,
    },
    link: 'https://maps.google.com/?q=36.31983198404643,127.40508053198738',
  },
  bgm: mapperBuildPath('/music/wedding-bgm.mp3'),
} satisfies Data;
