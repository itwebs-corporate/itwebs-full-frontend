import { Media } from '@/components/ui/media';

export default function HeroBlockTrack() {
  return (
    <div className="flex items-center gap-6 pr-6">
      {Array.from({ length: 9 }).map((_, i) => (
        <div className="flex shrink-0 items-center gap-4" key={i}>
          <Media
            className="xxs:w-4 xxs:h-4 relative h-3 w-3"
            image={{ src: '/hero/black-star.svg', alt: 'star' }}
          />
          1С Настройка
        </div>
      ))}
    </div>
  );
}
