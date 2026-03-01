type AssetsValue = { src: string; alt: string; className?: string };
type AssetsConfig = Record<string, AssetsValue[]>;

export const HERO_ASSETS_CONFIG: AssetsConfig = {
  '/': [
    {
      src: '/hero/sharp.svg',
      alt: 'Sharp',
      className:
        'absolute left-[5.5vw] top-[-15px] hidden sm:block w-[clamp(52px,4vw,109px)] h-[clamp(60px,4.8vw,124px)]',
    },
    {
      src: '/hero/stars-group.svg',
      alt: 'Group-star',
      className:
        'absolute right-[5vw] top-[-40px] hidden sm:block  w-[clamp(82px,6vw,161px)] h-[clamp(66px,4.8vw,128px)]',
    },
    {
      src: '/hero/arrow-zig-zag.svg',
      alt: 'arrow-zig-zag',
      className:
        'absolute left-[6vw] 3xl:left-[4vw] top-[10vw] lg:top-[10.3vw] hidden sm:block w-[clamp(86px,10vw,304px)] h-[clamp(116px,7.5vw,231px)]',
    },
    {
      src: '/hero/arrow-left-start.svg',
      alt: 'arrow-left-start',
      className:
        'absolute  top-[10vw] 3xl:top-[8.5vw] right-[3.5vw] hidden sm:block w-[clamp(58px,4.8vw,141px)] h-[clamp(86px,6.8vw,211px)]',
    },
    {
      src: '/hero/arrow-left-end.svg',
      alt: 'arrow-left-end',
      className:
        'absolute  top-[10vw] 3xl:top-[8.4vw] right-[3.7vw] hidden sm:block z-[-1] w-[clamp(64px,5vw,155.1px)] h-[clamp(92px,7.4vw,225px)]',
    },

    {
      src: '/hero/mobile/empty-star.svg',
      alt: 'empty-star',
      className:
        'absolute left-[-2vw] top-[-5vw] sm:hidden block w-[clamp(28px,9vw,38px)] h-[clamp(28px,9vw,38px)]',
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
  '/default': [
    {
      src: '/hero/sharp.svg',
      alt: 'Sharp',
      className:
        'absolute left-[-40px] top-[-40px] hidden sm:block w-[clamp(70px,5vw,109px)] h-[clamp(81px,6vw,124px)]',
    },
    {
      src: '/hero/stars-group.svg',
      alt: 'Group-star',
      className:
        'absolute right-[-80px] top-[-50px] hidden sm:block  w-[clamp(113px,8vw,161px)] h-[clamp(90px,6.5vw,128px)]',
    },
    {
      src: '/hero/mobile/empty-star.svg',
      alt: 'empty-star',
      className: 'absolute left-[-8vw] top-[-90px] sm:hidden block size-[38px]',
    },
    {
      src: '/hero/mobile/group-star.svg',
      alt: 'group-star',
      className: 'absolute right-[-5vw] top-[-50px] sm:hidden block w-[43px] h-[58px]',
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
