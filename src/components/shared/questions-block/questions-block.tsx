import { cn } from '@/lib/utils';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

import { ServiceFaq } from '@/shared/types/service-dto-types';
export default function QuestionsBlock({
  faqs,
  className,
  headStyleFirst,
  headStyleSecond,
}: {
  faqs: ServiceFaq[];
  className?: string;
  headStyleFirst?: string;
  headStyleSecond?: string;
}) {
  return (
    <Section
      className={cn(
        'bg-primary gap-[clamp(24px,4vw,48px)] rounded-[24px] pb-[clamp(86px,10vw,148px)]',
        className,
        !className && 'pt-[clamp(86px,7vw,124px)]'
      )}
    >
      <Typography className={cn(headStyleFirst ?? 'text-white')} variant="h2">
        <b className={cn(headStyleSecond ?? 'opacity-80')}>Вопросы</b> которые
        <br className="block sm:hidden" /> часто задают
      </Typography>

      {faqs.length > 0 ? (
        <Accordion className="flex flex-col gap-[clamp(8px,2vw,24px)]" type="multiple">
          {faqs.map((item) => (
            <AccordionItem
              className="w-[clamp(332px,85vw,1194px)] rounded-[clamp(12px,2vw,24px)] bg-white py-[8px]"
              key={item.id}
              value={`item-${item.id}`}
            >
              <AccordionTrigger className="h-[clamp(55px,6vw,85px)] border-none px-[clamp(14px,2vw,24px)]">
                <Typography variant="h3">{item.question}</Typography>
              </AccordionTrigger>

              <AccordionContent className="px-[clamp(14px,2vw,24px)]">
                <Typography variant="p2">{item.answer}</Typography>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <span className="w-[40vw] rounded-full border border-dashed border-white/50 p-4 text-center text-lg text-white/80">
          Здесь пока что нет вопросов
        </span>
      )}
    </Section>
  );
}
