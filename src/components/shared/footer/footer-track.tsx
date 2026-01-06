import { Media } from '@/components/ui/media';
import Typography from '@/components/ui/typography/typography';

export default function FooterTrack() {
  return (
    <div className="xxs:flex hidden items-center gap-8 pr-6">
      {Array.from({ length: 9 }).map((_, i) => (
        <div className="flex shrink-0 items-center gap-8" key={i}>
          <Media className="h-8 w-8" image={{ src: '/star.svg', alt: 'star' }} />
          <Typography className="text-[124px]" variant="h1">
            ITWEBS
          </Typography>
        </div>
      ))}
    </div>
  );
}
