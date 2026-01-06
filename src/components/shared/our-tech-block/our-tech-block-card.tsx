import Link from 'next/link';

import { Media } from '@/components/ui/media';
import Typography from '@/components/ui/typography/typography';

import { OurServicesCard } from './our-tech-config';
// TODO: подправить clamp и стрелки
export default function OurTechBlockCard({ item }: { item: OurServicesCard }) {
  return (
    <Link
      className="shadow-default z-10 flex h-[clamp(293px,20vw,380px)] w-[clamp(332px,90vw,435px)] flex-col rounded-[clamp(12px,2vw,24px)] bg-white p-5"
      href={item.link}
    >
      <div className="flex-center bg-secondary shadow-default mb-5 h-[clamp(42px,6vw,86px)] w-[clamp(42px,6vw,86px)] rounded-full">
        <Media
          className="h-[clamp(26px,3.5vw,20px)] w-[clamp(26px,3.5vw,15px)]"
          image={{ src: '/tech/arrow.svg', alt: 'arrow' }}
        />
      </div>
      <div className="flex-center bg-secondary shadow-default mb-5 h-[clamp(42px,6vw,86px)] w-[clamp(42px,6vw,86px)] rounded-full">
        <Media
          className="h-[clamp(26px,3.5vw,20px)] w-[clamp(26px,3.5vw,15px)]"
          image={{ src: '/tech/arrow-mobile.svg', alt: 'arrow' }}
        />
      </div>
      <Typography variant="h3">{item.title}</Typography>

      <Typography className="mt-[clamp(12px,1vw,16px)]" variant="p2">
        {item.description}
      </Typography>
    </Link>
  );
}
