import Link from 'next/link';

import HeroBlock from '@/components/shared/hero-block/hero-block';
import { Button } from '@/components/ui/button';

import { PAGES_CONFIG } from '@/config/pages-config';

export default function Services1CPage() {
  return (
    <HeroBlock
      description="Помогаем вашему бизнесу расти и развиваться быстрее: сайты, CRM-системы, веб-приложения, SEO, telegram-apps."
      heading="Программирование системы 1С Бухгалтерия"
    >
      <Button variant="secondary">Записаться</Button>
      <Button asChild variant="gray">
        <Link href={PAGES_CONFIG.ABOUT}>О компании</Link>
      </Button>
    </HeroBlock>
  );
}
