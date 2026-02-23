'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const FormForModalsLazy = dynamic(() => import('../ui/form/form-for-modal'), {
  ssr: false,
  loading: () => null,
});

type Props = {
  triggerTitle?: string;
};

export default function ModalConsult({ triggerTitle = 'Записаться' }: Props) {
  const [open, setOpen] = useState<boolean>();
  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogTrigger asChild>
        <Button variant="secondary">{triggerTitle}</Button>
      </DialogTrigger>

      <DialogContent
        className="bg-background px-[clamp(14px,6vw,86px)] py-[clamp(64px,5vw,84px)]"
        outsideClose
      >
        <DialogHeader className="flex flex-col gap-[14px] sm:gap-[20px]">
          <DialogTitle className="font-family text-foreground3 text-center text-[clamp(24px,3vw,32px)] leading-[100%] font-bold uppercase">
            <b className="text-primary whitespace-nowrap">Берём IT-задачи на себя</b> понятно и
            надёжно
          </DialogTitle>
          <DialogDescription className="text-foreground3/80 font-second-family text-center text-[16px]">
            Ответим в течение 15 минут
          </DialogDescription>
        </DialogHeader>
        {open ? (
          <FormForModalsLazy
            className="mt-[24px] flex flex-col! sm:mt-[32px]"
            closeModal={() => setOpen(false)}
          />
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
