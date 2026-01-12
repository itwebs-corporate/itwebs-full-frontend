type AssetsValue = { src: string; alt: string; className?: string };
type AssetsConfig = Record<string, AssetsValue[]>;

export const HERO_ASSETS_CONFIG: AssetsConfig = {
  '/': [
    {
      src: '/hero/sharp.svg',
      alt: 'Sharp',
      className: 'absolute left-[4%] top-[22%] hidden sm:block z-20 w-[109px] h-[124px]',
    },
    {
      src: '/hero/stars-group.svg',
      alt: 'Group-star',
      className: 'absolute right-[5%] top-[15%] hidden sm:block z-20 w-[161px] h-[128px]',
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
        'absolute left-[clamp(24px,8vw,408px)] top-[50%] hidden sm:block z-20 w-[125px] h-[129px]',
    },
    {
      src: '/hero/services/two-stars-but-one-empty.svg',
      alt: 'two-stars-but-one-empty',
      className:
        'absolute right-[clamp(24px,9vw,461px)] top-[35%] hidden sm:block z-20 w-[85px] h-[112px]',
    },
    {
      src: '/hero/mobile/empty-star.svg',
      alt: 'empty-star',
      className: 'absolute left-[20px] top-[173px] sm:hidden block z-20 w-[38px] h-[38px]',
    },
    {
      src: '/hero/mobile/group-star.svg',
      alt: 'group-star',
      className: 'absolute right-[18px] top-[103px] sm:hidden block z-20 w-[43px] h-[58px]',
    },
  ],

  '/services-1c': [
    {
      src: '/hero/sharp.svg',
      alt: 'Sharp',
      className: 'absolute left-[4%] top-[22%] hidden sm:block z-20 w-[109px] h-[124px]',
    },
    {
      src: '/hero/stars-group.svg',
      alt: 'Group-star',
      className: 'absolute right-[5%] top-[15%] hidden sm:block z-20 w-[161px] h-[128px]',
    },
    {
      src: '/hero/mobile/empty-star.svg',
      alt: 'empty-star',
      className: 'absolute left-[20px] top-[83px] sm:hidden block z-20 w-[38px] h-[38px]',
    },
    {
      src: '/hero/mobile/group-star.svg',
      alt: 'group-star',
      className: 'absolute right-[18px] top-[103px] sm:hidden block z-20 w-[43px] h-[58px]',
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
      className: 'absolute left-[40px] top-[200px] sm:hidden block z-20 w-[38px] h-[38px]',
    },
    {
      src: '/hero/mobile/group-star.svg',
      alt: 'group-star',
      className: 'absolute right-[45px] top-[118px] sm:hidden block z-20 w-[43px] h-[58px]',
    },
  ],

  '/contacts': [
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
      className: 'absolute left-[12px] top-[195px] sm:hidden block z-20 w-[38px] h-[38px]',
    },
    {
      src: '/hero/mobile/group-star.svg',
      alt: 'group-star',
      className: 'absolute right-[9px] top-[131px] sm:hidden block z-20 w-[43px] h-[58px]',
    },
  ],
};
