import Link from 'next/link';

import { BackButton } from '@/components/shared/back-button';
import HeroBlock from '@/components/shared/hero-block/hero-block';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <HeroBlock
      description="Страница не найдена. Возможно, вы ошиблись в адресе или страница была удалена."
      disabledAssets
      heading="404"
      isNotFound
    >
      <Button asChild variant="secondary">
        <Link href="/">Вернуться домой</Link>
      </Button>
      <BackButton />
    </HeroBlock>
  );
}
