import { cva } from 'class-variance-authority';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

import { cn } from '@/lib/utils';

import { SELECT_ITEMS } from '../form/form-config';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../select';

const selectVariants = cva(
  'min-h-[48px] w-full min-w-[275px] rounded-full border-none py-4 pl-5 text-[16px] ',
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
    <div className="relative w-full min-w-[275px]">
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger
              className={cn(selectVariants({ variant }))}
              classNameImage={classNameImage}
              classNameWrapperImage={classNameWrapperImage}
            >
              <SelectValue className="text-base text-[16px]" placeholder="Тип задачи" />
            </SelectTrigger>
            <SelectContent align="start" position="popper" side="bottom">
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
