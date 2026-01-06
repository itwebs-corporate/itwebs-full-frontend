import { cva } from 'class-variance-authority';

export const typographyVariants = cva('antialiased tracking-normal', {
  variants: {
    variant: {
      h1: 'font-family font-extrabold leading-[100%] text-[clamp(36px,8vw,201px)] uppercase text-center',
      h2: 'font-family font-bold leading-[100%] text-[clamp(24px,4.5vw,72px)] text-[#383838] text-center',
      h3: 'font-family font-bold leading-[100%] text-[clamp(20px,2.6vw,32px)] text-[#151515]',
      p1: 'font-second-family leading-[140%] text-[clamp(14px,1.6vw,24px)] text-center',
      p2: 'font-second-family leading-[140%] text-[#383838]/80 text-[clamp(14px,1.1vw,16px)]',
    },
  },
  defaultVariants: {
    variant: 'p2',
  },
});
