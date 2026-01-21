type AssetsValue = { src: string; alt: string; className?: string };
type AssetsConfig = Record<string, AssetsValue[]>;

export const HERO_ASSETS_CONFIG: AssetsConfig = {
  '/': [
    {
      src: '/hero/sharp.svg',
      alt: 'Sharp',
      className: 'absolute left-[13vw] top-[-4vh] hidden sm:block z-20 w-[109px] h-[124px]',
    },
    {
      src: '/hero/stars-group.svg',
      alt: 'Group-star',
      className: 'absolute right-[11vw] top-[-6vh] hidden sm:block z-20 w-[161px] h-[128px] z-10',
    },
    {
      src: '/hero/arrow-zig-zag.svg',
      alt: 'arrow-zig-zag',
      className: 'absolute left-[5%] top-[45%] hidden sm:block z-20 w-[304px] h-[231px]',
    },
    {
      src: '/hero/arrow-left-start.svg',
      alt: 'arrow-left-start',
      className: 'absolute right-[5%] top-[45%] hidden sm:block z-20 w-[141px] h-[211px]',
    },
    {
      src: '/hero/arrow-left-end.svg',
      alt: 'arrow-left-end',
      className: 'absolute right-[5.4%] top-[45%] hidden sm:block z-0 w-[155.1px] h-[225px]',
    },
    {
      src: '/hero/mobile/empty-star.svg',
      alt: 'empty-star',
      className: 'absolute left-[43px] top-[98px] sm:hidden block z-20 w-[38px] h-[38px]',
    },
    {
      src: '/hero/mobile/group-star.svg',
      alt: 'group-star',
      className: 'absolute right-[40px] top-[84px] sm:hidden block z-20 w-[43px] h-[58px]',
    },
  ],

  '/services': [
    {
      src: '/hero/services/two-stars.svg',
      alt: 'two-stars',
      className:
        'absolute left-[clamp(10vw,20vw,28vw)] z-0 top-[clamp(55%,45%,45%)] hidden sm:block z-20 w-[clamp(72px,8vw,125px)] h-[clamp(74px,8.3vw,129px)]',
    },
    {
      src: '/hero/services/two-stars-but-one-empty.svg',
      alt: 'two-stars-but-one-empty',
      className:
        'absolute right-[clamp(10vw,24vw,30vw)] top-[clamp(40%,35%,30%)] hidden sm:block z-20 w-[85px] h-[112px]',
    },
    {
      src: '/hero/mobile/empty-star.svg',
      alt: 'empty-star',
      className:
        'absolute left-[5vw] xxs:left-[10vw] xs:left-[23vw] top-[70%] sm:hidden block z-20 w-[38px] h-[38px]',
    },
    {
      src: '/hero/mobile/group-star.svg',
      alt: 'group-star',
      className:
        'absolute right-[5vw] xxs:right-[15vw] xs:right-[25vw] top-[48%] sm:hidden block z-20 w-[43px] h-[58px]',
    },
  ],

  '/services-1c': [
    {
      src: '/hero/sharp.svg',
      alt: 'Sharp',
      className:
        'absolute left-[0%] md:left-[0.5%] 1xl:left-[1%] 2xl:left-[3.5%] 3xl:left-[4.5%] top-[-36%] lg:top-[-34%] xl:top-[-30%] 2xl:top-[-25%] 3xl:top-[-22%] hidden sm:block z-20 w-[clamp(72px,8vw,109px)] h-[clamp(82px,9vw,124px)]',
    },
    {
      src: '/hero/stars-group.svg',
      alt: 'Group-star',
      className:
        'absolute right-[-5vw] top-[-35%] md:right-[-3vw] md:top-[-30%] 2xl:right-[-1vw] 2xl:top-[-23%] hidden sm:block z-20 w-[clamp(96px,10vw,161px)] h-[clamp(76px,8vw,128px)]',
    },
    {
      src: '/hero/mobile/empty-star.svg',
      alt: 'empty-star',
      className:
        'absolute left-[0vw] xs:left-[2vw] top-[-6vh] xs:top-[-3vh] sm:hidden block z-20 w-[38px] h-[38px]',
    },
    {
      src: '/hero/mobile/group-star.svg',
      alt: 'group-star',
      className:
        'absolute right-[-1vw] xs:right-[1vw]  top-[-4vh] sm:hidden block z-20 w-[43px] h-[58px]',
    },
  ],

  '/blog': [
    {
      src: '/hero/services/two-stars.svg',
      alt: 'two-stars',
      className: 'absolute left-[5%] top-[45%] hidden sm:block z-20 w-[125px] h-[129px]',
    },
    {
      src: '/hero/services/two-stars-but-one-empty.svg',
      alt: 'two-stars-but-one-empty',
      className: 'absolute right-[5%] top-[45%] hidden sm:block z-20 w-[85px] h-[112px]',
    },
    {
      src: '/hero/mobile/empty-star.svg',
      alt: 'empty-star',
      className: 'absolute left-[44px] top-[214px] sm:hidden block z-20 w-[38px] h-[38px]',
    },
    {
      src: '/hero/mobile/group-star.svg',
      alt: 'group-star',
      className: 'absolute right-[45px] top-[118px] sm:hidden block z-20 w-[43px] h-[58px]',
    },
  ],

  '/about': [
    {
      src: '/hero/services/two-stars.svg',
      alt: 'two-stars',
      className: 'absolute left-[5%] top-[45%] hidden sm:block z-20 w-[125px] h-[129px]',
    },
    {
      src: '/hero/services/two-stars-but-one-empty.svg',
      alt: 'two-stars-but-one-empty',
      className: 'absolute right-[5%] top-[45%] hidden sm:block z-20 w-[85px] h-[112px]',
    },
    {
      src: '/hero/mobile/group-star.svg',
      alt: 'group-star',
      className: 'absolute right-[9px] top-[131px] sm:hidden block z-20 w-[43px] h-[58px]',
    },
  ],

  '/cases': [
    {
      src: '/hero/services/two-stars.svg',
      alt: 'two-stars',
      className:
        'absolute left-[-10vw] top-[0] hidden sm:block z-20 w-[clamp(80px,10vw,125px)] h-[clamp(83px,10vw,129px)]',
    },
    {
      src: '/hero/services/two-stars-but-one-empty.svg',
      alt: 'two-stars-but-one-empty',
      className: 'absolute right-[-8vw] top-[-9vh] hidden sm:block z-20 w-[85px] h-[112px]',
    },
    {
      src: '/hero/mobile/empty-star.svg',
      alt: 'empty-star',
      className: 'absolute left-[-8vw] top-[4vw] sm:hidden block z-20 w-[38px] h-[38px]',
    },
    {
      src: '/hero/mobile/group-star.svg',
      alt: 'group-star',
      className: 'absolute right-[-9vw] top-[-6vw] sm:hidden block z-20 w-[43px] h-[58px]',
    },
  ],

  '/contacts': [
    {
      src: '/hero/services/two-stars.svg',
      alt: 'two-stars',
      className:
        'absolute left-[-10vw] top-[0] hidden sm:block z-20 w-[clamp(80px,10vw,125px)] h-[clamp(83px,10vw,129px)]',
    },
    {
      src: '/hero/services/two-stars-but-one-empty.svg',
      alt: 'two-stars-but-one-empty',
      className: 'absolute right-[-8vw] top-[-9vh] hidden sm:block z-20 w-[85px] h-[112px]',
    },
    {
      src: '/hero/mobile/empty-star.svg',
      alt: 'empty-star',
      className: 'absolute left-[-8vw] top-[4vw] sm:hidden block z-20 w-[38px] h-[38px]',
    },
    {
      src: '/hero/mobile/group-star.svg',
      alt: 'group-star',
      className: 'absolute right-[-9vw] top-[-6vw] sm:hidden block z-20 w-[43px] h-[58px]',
    },
  ],
};
