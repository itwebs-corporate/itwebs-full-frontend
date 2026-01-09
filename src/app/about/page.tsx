import HeroBlock from '@/components/shared/hero-block/hero-block';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <HeroBlock fullScreen={false} heading="Немного о ITWEBS">
      <Button variant="secondary">Обсудить задачу</Button>
    </HeroBlock>
  );
}
