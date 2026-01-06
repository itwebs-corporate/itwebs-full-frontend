import styles from './footer.module.css';

import { cn } from '@/lib/utils';

import Form from '@/components/ui/form';
import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

import FooterTrack from './footer-track';

export default function Footer() {
  return (
    <Section
      className="bg-foreground3 mt-[clamp(86px,6vw,124px)] flex flex-col rounded-t-[24px]"
      fullScreen={false}
    >
      <Typography className="mt-[86px] text-[clamp(24px,2vw,48px)]" variant="h1">
        Берём IT-задачи на себя — понятно и надёжно
      </Typography>
      {/* form */}
      <Form />
      <div className="xxs:flex-row xxs:my-[48px] font-second-family xxs:text-[16px] xxs:gap-[675px] my-[32px] flex flex-col items-center justify-between gap-[12px] text-[14px] leading-[140%] font-bold">
        <span>Политика обработки персональных данных</span>
        <span className="opacity-50">Copyright ©2025 ITEWBS</span>
      </div>
      {/* track */}
      <div className="xxs:flex mt-auto hidden h-[124px] w-dvw items-center overflow-hidden whitespace-nowrap opacity-10">
        <div className={cn(styles.marqueeTrack, 'flex w-max')}>
          <FooterTrack />
          <FooterTrack />
        </div>
      </div>
    </Section>
  );
}
