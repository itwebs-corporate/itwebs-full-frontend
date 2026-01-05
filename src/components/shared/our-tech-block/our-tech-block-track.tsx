import { Media } from '@/components/ui/media';

export default function OurTechBlockTrack() {
  return (
    <div className="flex items-center gap-[clamp(14px,2vw,20px)] pr-[clamp(14px,2vw,20px)]">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          className="flex-center h-[clamp(68px,10vw,100px)] w-[clamp(90px,14vw,131px)] shrink-0 rounded-[12px] bg-white"
          key={i}
        >
          <Media
            className="h-[clamp(52px,8vw,74px)] w-[clamp(52px,8vw,74px)]"
            image={{ src: '/tech/html.svg', alt: 'html' }}
          />
        </div>
      ))}
    </div>
  );
}
