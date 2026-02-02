type AssetsValue = { src: string; alt: string; className?: string };
type AssetsConfig = Record<string, AssetsValue[]>;

export const HERO_ASSETS_CONFIG: AssetsConfig = {
  '/': [
    {
      src: '/hero/sharp.svg',
      alt: 'Sharp',
      className:
        'absolute left-[3.5vw] top-[-3vw] md:left-[5vw] md:top-[-2.5vw] lg:left-[5.5vw] lg:top-[-2vw] 3xl:left-[6.5vw] 3xl:top-[-1vw] hidden sm:block w-[clamp(70px,5vw,109px)] h-[clamp(81px,6vw,124px)]',
    },
    {
      src: '/hero/stars-group.svg',
      alt: 'Group-star',
      className:
        'absolute  right-[9vw] top-[-5.5vw] md:right-[10vw] md:top-[-3.5vw] lg:right-[11.5vw] lg:top-[-2vw] hidden sm:block  w-[clamp(113px,8vw,161px)] h-[clamp(90px,6.5vw,128px)]',
    },
    {
      src: '/hero/arrow-zig-zag.svg',
      alt: 'arrow-zig-zag',
      className:
        'absolute left-[2.5vw] md:left-[3vw] top-[8vw] md:top-[9vw] lg:left-[3vw] lg:top-[11vw] hidden sm:block w-[clamp(120px,14vw,304px)] h-[clamp(162px,10vw,231px)]',
    },
    {
      src: '/hero/arrow-left-start.svg',
      alt: 'arrow-left-start',
      className:
        'absolute right-[5%] top-[8vw] hidden sm:block w-[clamp(79px,6vw,141px)] h-[clamp(118px,8.8vw,211px)]',
    },
    {
      src: '/hero/arrow-left-end.svg',
      alt: 'arrow-left-end',
      className:
        'absolute right-[5.35%] top-[7.9vw] hidden sm:block z-[-1] w-[clamp(87px,6.4vw,155.1px)] h-[clamp(126px,9.6vw,225px)]',
    },

    {
      src: '/hero/mobile/empty-star.svg',
      alt: 'empty-star',
      className:
        'absolute left-[-vw] top-[-5vw] sm:hidden block w-[clamp(28px,9vw,38px)] h-[clamp(28px,9vw,38px)]',
    },
    {
      src: '/hero/mobile/group-star.svg',
      alt: 'group-star',
      className:
        'absolute right-[-2vw] top-[-5vw] sm:hidden block w-[clamp(32px,10vw,43px)] h-[clamp(40px,13vw,58px)]',
    },
  ],

  '/services': [
    {
      src: '/hero/services/two-stars.svg',
      alt: 'two-stars',
      className:
        'absolute left-[-9vw] top-[1vw] 2xl:left-[-6vw] 2xl:top-[2.5vw] 3xl:left-[-5vw] 3xl:top-[2.2vw] hidden sm:block w-[clamp(80px,10vw,125px)] h-[clamp(83px,10vw,129px)]',
    },
    {
      src: '/hero/services/two-stars-but-one-empty.svg',
      alt: 'two-stars-but-one-empty',
      className:
        'absolute right-[-8vw] top-[-8vw] md:right-[-7vw] md:top-[-6vw] xl:right-[-6vw] xl:top-[-5vw] 2xl:right-[-4vw] 2xl:top-[-3vw] 3xl:right-[-3.5vw] 3xl:top-[-2.5vw] hidden sm:block w-[85px] h-[112px]',
    },
    {
      src: '/hero/mobile/empty-star.svg',
      alt: 'empty-star',
      className:
        'absolute left-[-19] top-[11vw] xxs:left-[-6vw] xxs:top-[9vw] xs:left-[-4vw] xs:top-[7vw] sm:hidden block w-[38px] h-[38px]',
    },
    {
      src: '/hero/mobile/group-star.svg',
      alt: 'group-star',
      className:
        'absolute right-[-8vw] top-[-13vw] xxs:right-[-8vw] xxs:top-[-9vw] xs:right-[-6vw] xs:top-[-5.5vw] sm:hidden block w-[43px] h-[58px]',
    },
  ],

  '/services-1c': [
    {
      src: '/hero/sharp.svg',
      alt: 'Sharp',
      className:
        'absolute left-[0%] md:left-[0.5%] 1xl:left-[1%] 2xl:left-[3.5%] 3xl:left-[4.5%] top-[-36%] lg:top-[-34%] xl:top-[-30%] 2xl:top-[-25%] 3xl:top-[-22%] hidden sm:block w-[clamp(72px,8vw,109px)] h-[clamp(82px,9vw,124px)]',
    },
    {
      src: '/hero/stars-group.svg',
      alt: 'Group-star',
      className:
        'absolute right-[-5vw] top-[-35%] md:right-[-3vw] md:top-[-30%] 2xl:right-[-1vw] 2xl:top-[-23%] hidden sm:block w-[clamp(96px,10vw,161px)] h-[clamp(76px,8vw,128px)]',
    },
    {
      src: '/hero/mobile/empty-star.svg',
      alt: 'empty-star',
      className:
        'absolute left-[0vw] xs:left-[2vw] top-[-6vh] xs:top-[-3vh] sm:hidden block w-[38px] h-[38px]',
    },
    {
      src: '/hero/mobile/group-star.svg',
      alt: 'group-star',
      className:
        'absolute right-[-1vw] xs:right-[1vw]  top-[-4vh] sm:hidden block w-[43px] h-[58px]',
    },
  ],

  '/blog': [
    {
      src: '/hero/services/two-stars.svg',
      alt: 'two-stars',
      className:
        'absolute left-[-9vw] top-[1vw] 2xl:left-[-6vw] 2xl:top-[2.5vw] 3xl:left-[-5vw] 3xl:top-[2.2vw] hidden sm:block w-[clamp(80px,10vw,125px)] h-[clamp(83px,10vw,129px)]',
    },
    {
      src: '/hero/services/two-stars-but-one-empty.svg',
      alt: 'two-stars-but-one-empty',
      className:
        'absolute right-[-8vw] top-[-8vw] md:right-[-7vw] md:top-[-6vw] xl:right-[-6vw] xl:top-[-5vw] 2xl:right-[-4vw] 2xl:top-[-3vw] 3xl:right-[-3.5vw] 3xl:top-[-2.5vw] hidden sm:block w-[85px] h-[112px]',
    },
    {
      src: '/hero/mobile/empty-star.svg',
      alt: 'empty-star',
      className:
        'absolute left-[-19] top-[11vw] xxs:left-[-6vw] xxs:top-[9vw] xs:left-[-4vw] xs:top-[7vw] sm:hidden block w-[38px] h-[38px]',
    },
    {
      src: '/hero/mobile/group-star.svg',
      alt: 'group-star',
      className:
        'absolute right-[-8vw] top-[-13vw] xxs:right-[-8vw] xxs:top-[-9vw] xs:right-[-6vw] xs:top-[-5.5vw] sm:hidden block w-[43px] h-[58px]',
    },
  ],

  '/about': [
    {
      src: '/hero/services/two-stars.svg',
      alt: 'two-stars',
      className:
        'absolute left-[-9vw] top-[1vw] 2xl:left-[-6vw] 2xl:top-[2.5vw] 3xl:left-[-5vw] 3xl:top-[2.2vw] hidden sm:block w-[clamp(80px,10vw,125px)] h-[clamp(83px,10vw,129px)]',
    },
    {
      src: '/hero/services/two-stars-but-one-empty.svg',
      alt: 'two-stars-but-one-empty',
      className:
        'absolute right-[-8vw] top-[-8vw] md:right-[-7vw] md:top-[-6vw] xl:right-[-6vw] xl:top-[-5vw] 2xl:right-[-4vw] 2xl:top-[-3vw] 3xl:right-[-3.5vw] 3xl:top-[-2.5vw] hidden sm:block w-[85px] h-[112px]',
    },
    {
      src: '/hero/mobile/group-star.svg',
      alt: 'group-star',
      className:
        'absolute right-[-8vw] top-[-13vw] xxs:right-[-8vw] xxs:top-[-9vw] xs:right-[-6vw] xs:top-[-5.5vw] sm:hidden block w-[43px] h-[58px]',
    },
  ],

  '/cases': [
    {
      src: '/hero/services/two-stars.svg',
      alt: 'two-stars',
      className:
        'absolute left-[-9vw] top-[1vw] 2xl:left-[-6vw] 2xl:top-[2.5vw] 3xl:left-[-5vw] 3xl:top-[2.2vw] hidden sm:block w-[clamp(80px,10vw,125px)] h-[clamp(83px,10vw,129px)]',
    },
    {
      src: '/hero/services/two-stars-but-one-empty.svg',
      alt: 'two-stars-but-one-empty',
      className:
        'absolute right-[-8vw] top-[-8vw] md:right-[-7vw] md:top-[-6vw] xl:right-[-6vw] xl:top-[-5vw] 2xl:right-[-4vw] 2xl:top-[-3vw] 3xl:right-[-3.5vw] 3xl:top-[-2.5vw] hidden sm:block w-[85px] h-[112px]',
    },
    {
      src: '/hero/mobile/empty-star.svg',
      alt: 'empty-star',
      className:
        'absolute left-[-19] top-[11vw] xxs:left-[-6vw] xxs:top-[9vw] xs:left-[-4vw] xs:top-[7vw] sm:hidden block w-[38px] h-[38px]',
    },
    {
      src: '/hero/mobile/group-star.svg',
      alt: 'group-star',
      className:
        'absolute right-[-8vw] top-[-13vw] xxs:right-[-8vw] xxs:top-[-9vw] xs:right-[-6vw] xs:top-[-5.5vw] sm:hidden block w-[43px] h-[58px]',
    },
  ],

  '/contacts': [
    {
      src: '/hero/services/two-stars.svg',
      alt: 'two-stars',
      className:
        'absolute left-[-9vw] top-[1vw] 2xl:left-[-6vw] 2xl:top-[2.5vw] 3xl:left-[-5vw] 3xl:top-[2.2vw] hidden sm:block w-[clamp(80px,10vw,125px)] h-[clamp(83px,10vw,129px)]',
    },
    {
      src: '/hero/services/two-stars-but-one-empty.svg',
      alt: 'two-stars-but-one-empty',
      className:
        'absolute right-[-8vw] top-[-8vw] md:right-[-7vw] md:top-[-6vw] xl:right-[-6vw] xl:top-[-5vw] 2xl:right-[-4vw] 2xl:top-[-3vw] 3xl:right-[-3.5vw] 3xl:top-[-2.5vw] hidden sm:block w-[85px] h-[112px]',
    },
    {
      src: '/hero/mobile/empty-star.svg',
      alt: 'empty-star',
      className:
        'absolute left-[-19] top-[11vw] xxs:left-[-6vw] xxs:top-[9vw] xs:left-[-4vw] xs:top-[7vw] sm:hidden block w-[38px] h-[38px]',
    },
    {
      src: '/hero/mobile/group-star.svg',
      alt: 'group-star',
      className:
        'absolute right-[-8vw] top-[-13vw] xxs:right-[-8vw] xxs:top-[-9vw] xs:right-[-6vw] xs:top-[-5.5vw] sm:hidden block w-[43px] h-[58px]',
    },
  ],
};
