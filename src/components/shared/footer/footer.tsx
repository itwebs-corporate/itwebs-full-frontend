import dynamic from 'next/dynamic';
import Link from 'next/link';

import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

import { PAGES_CONFIG } from '@/config/pages-config';

import FooterTrack from './footer-track';

const DynamicForm = dynamic(() => import('@/components/ui/form/form-for-footer'), {
  loading: () => null,
});

export default async function Footer() {
  return (
    <Section className="bg-foreground3 xxs:pb-[124px] relative flex flex-col rounded-t-[24px] pb-0">
      <Typography className="mt-[86px] text-[clamp(24px,2vw,48px)] whitespace-nowrap!" variant="h1">
        Готовы поболтать про it?
      </Typography>
      {/* form */}
      <div className="bg-primary xxs:p-8 xxs:mt-[32px] mt-[24px] rounded-[24px] px-[14px] pt-8 pb-6">
        <DynamicForm />
      </div>
      <div className="font-second-family my-[clamp(32px,3vw,48px)] flex max-w-[1194px] flex-col items-center gap-[12px] text-[clamp(14px,1.2vw,16px)] leading-[140%] font-bold lg:w-full lg:flex-row lg:justify-between">
        <Link
          className="hover:text-foreground/70 text-center transition-colors"
          href={PAGES_CONFIG.POLICY}
        >
          Политика обработки персональных данных
        </Link>
        <span className="opacity-50">Copyright ©2026 ITEWBS</span>
      </div>
      {/* track */}
      <div className="xxs:flex absolute bottom-0 hidden h-[124px] w-full items-center overflow-hidden whitespace-nowrap opacity-10">
        <div className="marquee-track-30 flex w-max">
          <FooterTrack />
          <FooterTrack />
        </div>
      </div>
    </Section>
  );
}
