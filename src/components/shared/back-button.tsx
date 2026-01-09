'use client';
import { useRouter } from 'next/navigation';

import { Button } from '../ui/button';

export const BackButton = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        router.back();
      }}
      variant="gray"
    >
      Вернуться обратно
    </Button>
  );
};
