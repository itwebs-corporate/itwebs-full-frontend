import { cva } from 'class-variance-authority';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

import { cn } from '@/lib/utils';

import { SELECT_ITEMS } from '../form/form-config';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../select';

const selectVariants = cva(
  'min-h-[48px] w-full min-w-0 rounded-full border-none py-4 pl-5 text-[16px] ',
  {
    variants: {
      variant: {
        default:
          'bg-white font-normal data-[placeholder]:*:data-[slot=select-value]:text-foreground3/15 *:data-[slot=select-value]:text-black',
        primary: 'bg-[#1734bd] text-white font-bold',
      },
    },

    defaultVariants: {
      variant: 'default',
    },
  }
);

type SelectTaskProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  errorMessage?: string;
  variant?: 'default' | 'primary';
  classNameItem?: string;
  classNameImage?: string;
  classNameWrapperImage?: string;
};

export default function SelectTask<T extends FieldValues>({
  control,
  name,
  errorMessage,
  classNameItem,
  classNameImage,
  classNameWrapperImage,
  variant,
}: SelectTaskProps<T>) {
  return (
    <div className="relative w-full max-w-[275px] min-w-0 lg:max-w-none lg:min-w-0! lg:flex-1">
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger
              className={cn(
                selectVariants({ variant }),
                'w-full max-w-full min-w-0! overflow-hidden'
              )}
              classNameImage={classNameImage}
              classNameWrapperImage={classNameWrapperImage}
            >
              <SelectValue
                className="min-w-0! flex-1 truncate overflow-hidden text-[16px] [&>span]:block [&>span]:min-w-0! [&>span]:truncate"
                placeholder="Тип задачи"
              />
            </SelectTrigger>

            <SelectContent
              align="start"
              className="w-[var(--radix-select-trigger-width)] max-w-[var(--radix-select-trigger-width)]"
              position="popper"
              side="bottom"
            >
              {SELECT_ITEMS?.map((item) => (
                <SelectItem className={classNameItem} key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />

      {errorMessage && (
        <p className="text-destructive absolute bottom-[-16px] left-[15px] text-[12px] sm:bottom-[-18px] sm:text-sm">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
