'use client';
import { cn } from '@/lib/utils';

import { Media } from '@/components/ui/media';

type Props = {
  page: number;
  goToPage: (arg: number) => void;
  disabled: boolean;
  isLeft: boolean;
};
export default function BlogPaginationArrow({ page, goToPage, disabled, isLeft }: Props) {
  const direction = isLeft ? page - 1 : page + 1;
  return (
    <button
      className={cn(
        'flex-center h-[42px] w-[42px] rounded-full border border-[#dce2fe] bg-white transition-all',
        disabled ? 'cursor-not-allowed opacity-40' : 'hover:opacity-80'
      )}
      disabled={disabled}
      onClick={() => goToPage(direction)}
      type="button"
    >
      <Media
        className="flex-center h-[24px] w-[12px]"
        image={{
          src: isLeft
            ? '/arrow/arrow-left-without-stick.svg'
            : '/arrow/arrow-right-without-stick.svg',
          alt: isLeft ? 'arrow-left' : 'arrow-right',
        }}
      />
    </button>
  );
}
