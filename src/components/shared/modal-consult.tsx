import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { Button } from '../ui/button';
import Form from '../ui/form';

export default function ModalConsult({ triggerTitle = 'Записаться' }: { triggerTitle?: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">{triggerTitle}</Button>
      </DialogTrigger>
      <DialogContent className="bg-primary">
        <DialogHeader>
          <DialogTitle>Запись на консультацию</DialogTitle>
          <DialogDescription className="text-white/70">
            Обсудим ваши задачи и найдём лучшее решение
          </DialogDescription>
        </DialogHeader>
        <Form className="xxs:mt-[-32px] mt-[-24px] flex flex-col!" />
      </DialogContent>
    </Dialog>
  );
}
