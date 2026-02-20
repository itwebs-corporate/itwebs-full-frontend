import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

import { ServiceWay } from '@/shared/types/service-dto-types';

import ForWeWorkCard from './for-who-we-work-card';
import { FOR_WE_WORK_CONFIG } from './for-who-we-work-config';

export default function ForWhoWeWorkBlock({
  data = FOR_WE_WORK_CONFIG,
  isShowMedia = false,
}: {
  data?: ServiceWay[];
  isShowMedia?: boolean;
}) {
  return (
    <Section className="bg-background">
      <Typography variant="h2">
        <b className="text-primary">Для кого</b> мы работаем
      </Typography>

      {data.length > 0 ? (
        <div className="mt-[clamp(32px,3vw,46px)] flex flex-col flex-wrap items-center justify-center gap-[clamp(14px,1.5vw,20px)] sm:flex-row">
          {data.map((item) => (
            <ForWeWorkCard isShowMedia={isShowMedia} item={item} key={item.id} />
          ))}
        </div>
      ) : (
        <span className="text-foreground3/50 w-[40vw] rounded-full border border-dashed border-gray-400 p-4 text-center text-lg">
          Здесь пока что пусто
        </span>
      )}
    </Section>
  );
}
