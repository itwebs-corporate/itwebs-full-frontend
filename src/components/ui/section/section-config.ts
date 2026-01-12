import { cva } from 'class-variance-authority';

export const SectionVariants = cva('w-full', {
  variants: {
    fullScreen: { true: 'sm:min-h-screen sm:max-h-screen sm:min-h-dvh h-auto' },
    direction: { row: 'flex-row', col: 'flex-col' },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
      baseline: 'items-baseline',
    },
    padding: { true: 'p-container' },
    display: { flex: 'flex', block: 'block' },
  },

  defaultVariants: {
    fullScreen: true,
    display: 'flex',
    direction: 'col',
    justify: 'center',
    align: 'center',
    padding: true,
  },
});
