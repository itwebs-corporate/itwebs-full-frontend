import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { Button } from '../ui/button';
import FormForModals from '../ui/form/form-for-modal';

export default function ModalConsult({ triggerTitle = 'Записаться' }: { triggerTitle?: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">{triggerTitle}</Button>
      </DialogTrigger>
      <DialogContent className="bg-background py-[64px] sm:py-[84px]">
        <DialogHeader className="flex flex-col gap-[14px] sm:gap-[20px]">
          <DialogTitle className="font-family text-foreground3 text-center text-[24px] leading-[100%] font-bold uppercase sm:text-[32px]">
            <b className="text-primary">Берём IT-задачи на себя</b> понятно и надёжно
          </DialogTitle>
          <DialogDescription className="text-foreground3/80 font-second-family text-center text-[16px]">
            Ответим в течение 15 минут
          </DialogDescription>
        </DialogHeader>
        <FormForModals className="mt-[24px] flex flex-col! sm:mt-[32px]" />
      </DialogContent>
    </Dialog>
  );
}
