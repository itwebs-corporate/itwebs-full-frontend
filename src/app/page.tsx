import HeroBlock from '@/components/shared/hero-block/hero-block';
import HowWeWorkBlock from '@/components/shared/how-we-work/how-we-work-block';
import OurClientsBlock from '@/components/shared/our-clients-block/our-clients-block';
import OurTechBlock from '@/components/shared/our-tech-block/our-tech-block';
import SeoTextBlock from '@/components/shared/seo-text-block/seo-text-block';
import WeSolveClientTaskBlock from '@/components/shared/we-solve-client-task-block/we-solve-client-task-block';
import WhyChooseBlock from '@/components/shared/why-choose-block/why-choose-block';

export default function HomePage() {
  return (
    <>
      <HeroBlock
        description="Помогаем вашему бизнесу расти и развиваться быстрее: сайты, CRM-системы, веб-приложения, SEO, telegram-apps"
        heading="Студия веб-разработки ITWEBS."
      />
      <OurClientsBlock />
      <OurTechBlock />
      <WeSolveClientTaskBlock />
      <HowWeWorkBlock />
      <WhyChooseBlock />
      <SeoTextBlock />
    </>
  );
}
