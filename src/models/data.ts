import type { Data } from '@/models/model';

const mapperBuildPath = (path: string) => {
  return path;
};

export default {
  meta: {
    title: 'Nguyễn Khẩn & Nguyễn Trang wedding invitation',
    description:
      'Thứ Bảy, 20/12/2025, lúc 5 giờ chiều\nChủ nhật, 21/12/2025, lúc 8 giờ 30 phút sáng\nTại Thôn An Điền Xuân, Nam Sách, Hải Phòng',
    url: 'https://khan-wedding-invitation.vercel.app',
    thumbnail: mapperBuildPath('/images/thumbnail.png'),
  },
  weddingDates: [
    {
      year: 2025,
      month: 12,
      day: 20,
      time: {
        amPm: 'pm',
        hour: 5,
        minute: 0,
      },
    },
    {
      year: 2025,
      month: 12,
      day: 21,
      time: {
        amPm: 'am',
        hour: 8,
        minute: 30,
      },
    },
  ],
  families: [
    {
      gender: 'groom',
      name: 'Nguyễn Khẩn',
      relation: 'self',
      phone: '0398128389',
      account: {
        bank: 'Vietcombank',
        accountNumber: '3398128389',
        bankIdentity: 'Nguyễn Văn Khẩn',
      },
    },
    {
      gender: 'groom',
      name: 'Nguyễn Văn Thượng',
      relation: 'father',
      phone: '',
      account: {
        bank: 'Vietcombank',
        accountNumber: '',
        bankIdentity: 'Nguyễn Văn Thượng',
      },
    },
    {
      gender: 'groom',
      name: 'Mẹ Hoàng Thị Vĩ',
      relation: 'mother',
      phone: '',
      account: {
        bank: 'Vietcombank',
        accountNumber: '',
        bankIdentity: 'Mẹ Hoàng Thị Vĩ',
      },
    },
    {
      gender: 'bride',
      name: 'Nguyễn Trang',
      relation: 'self',
      phone: '0974139417',
      account: {
        bank: 'Vietcombank',
        accountNumber: '0231000600440',
        bankIdentity: 'Nguyễn Trang',
      },
    },
    {
      gender: 'bride',
      name: 'Nguyễn Văn Tươi',
      relation: 'father',
      phone: '',
      account: {
        bank: '',
        accountNumber: '',
        bankIdentity: 'Nguyễn Văn Tươi',
      },
    },
    {
      gender: 'bride',
      name: 'Nguyễn Thị Hoà',
      relation: 'mother',
      phone: '',
      account: {
        bank: '',
        accountNumber: '',
        bankIdentity: 'Nguyễn Thị Hoà',
      },
    },
  ],
  images: {
    intro: mapperBuildPath('/images/intro.png'),
    main: mapperBuildPath('/images/main.png'),
    invitation: ['/images/single-m.png', '/images/single-w.png'].map(mapperBuildPath),
  },
  gallery: [
    {
      src: '/images/ZAUK0658 Medium.png',
      position: 'object-center',
    },
    {
      src: '/images/ZAUK1420 Medium.png',
      position: 'object-center',
    },
    {
      src: '/images/ZAUK1579 Medium.png',
      position: 'object-bottom',
    },
    {
      src: '/images/ZAUK1081 Medium.png',
      position: 'object-center',
    },
    {
      src: '/images/ZAUK1228 Medium.png',
      position: 'object-bottom',
    },
    {
      src: '/images/ZAUK1275 Medium.png',
      position: 'object-center',
    },
    {
      src: '/images/ZAUK0993 Medium.png',
      position: 'object-center',
    },
    {
      src: '/images/ZAUK1291 Medium.png',
      position: 'object-bottom',
    },
    {
      src: '/images/ZAUK1280 Medium.png',
      position: 'object-center',
    },
  ].map(({ position, src }) => ({
    src: mapperBuildPath(src),
    position: position as Data['gallery'][number]['position'],
  })),
  map: {
    name: 'Tại nhà',
    address: 'Thôn An Điền Xuân, Nam Sách, Hải Phòng',
    addressDetail: 'Thôn An Điền Xuân, Nam Sách, Hải Phòng',
    tel: '0974139417',
    position: {
      latitude: 21.009258270263672,
      longitude: 106.39095306396484,
    },
    link: 'https://www.google.com/maps?q=21.009258270263672,106.39095306396484&z=14&t=m&mapclient=embed',
  },
  bgm: mapperBuildPath('/music/wedding-bgm.mp3'),
} satisfies Data;
