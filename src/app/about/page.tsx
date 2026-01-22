import AboutTextBlock from '@/components/shared/about-text-block/about-text-block';
import HeroBlock from '@/components/shared/hero-block/hero-block';
import OurTechBlock from '@/components/shared/our-tech-block/our-tech-block';
import ProcessWithoutStress from '@/components/shared/process-without-stress/process-without-stress';
import WeInNumbers from '@/components/shared/we-in-numbers/we-in-numbers';
import WeSolveClientTaskBlock from '@/components/shared/we-solve-client-task-block/we-solve-client-task-block';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <>
      <HeroBlock heading="Немного о ITWEBS">
        <Button variant="secondary">Обсудить задачу</Button>
      </HeroBlock>
      <AboutTextBlock />
      <WeInNumbers />
      <WeSolveClientTaskBlock />
      <OurTechBlock />
      <ProcessWithoutStress />
    </>
  );
}
