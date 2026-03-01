import { ReactNode } from 'react';

import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

import { ServiceWay } from '@/shared/types/service-dto-types';

import ForWeWorkCard from './for-who-we-work-card';
import { FOR_WE_WORK_CONFIG } from './for-who-we-work-config';

export default function ForWhoWeWorkBlock({
  data = FOR_WE_WORK_CONFIG,
  isShowMedia = false,
  heading,
}: {
  data?: ServiceWay[];
  isShowMedia?: boolean;
  heading?: ReactNode;
}) {
  return (
    <Section className="bg-background">
      <Typography variant="h2">
        {heading ? (
          heading
        ) : (
          <>
            <b className="text-primary">Кто</b> чаще всего к нам обращается
          </>
        )}
      </Typography>

      {data.length > 0 ? (
        <div className="mt-[clamp(32px,3vw,46px)] grid grid-cols-1 gap-[clamp(14px,1.5vw,20px)] md:grid-cols-2 2xl:grid-cols-4">
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
