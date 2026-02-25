import { Media } from '@/components/ui/media';

import { TECH_STACK } from './our-tech-config';
import OurTechIcon from './our-tech-icon';

export default function OurTechTrack() {
  return (
    <div className="flex items-center gap-[clamp(14px,2vw,20px)] pr-[clamp(14px,2vw,20px)]">
      {TECH_STACK.map((item) => (
        <div
          className="flex-center h-[clamp(68px,10vw,100px)] w-[clamp(90px,14vw,131px)] shrink-0 rounded-[12px] bg-white text-black"
          key={item.title}
        >
          {item.title === '1C' ? (
            <Media
              className="h-[clamp(52px,8vw,74px)] w-[clamp(52px,8vw,74px)]"
              image={{ src: item.icon, alt: item.title }}
            />
          ) : (
            <OurTechIcon icon={item.icon} />
          )}
        </div>
      ))}
    </div>
  );
}
