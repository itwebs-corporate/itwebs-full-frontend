import { Media } from '@/components/ui/media';
export const SERVICES: string[] = [
  'ПРОДАЮЩИЕ САЙТЫ',
  'КОРПОРАТИВНЫЕ САЙТЫ',
  'ЛЕНДИНГИ',
  'ИНТЕГРАЦИЯ CRM',
  'ВЕБ-ПОРТАЛЫ',
  'АВТОМАТИЗАЦИЯ НА БАЗЕ ERP',
  'МОБИЛЬНЫЕ ПРИЛОЖЕНИЯ',
  'SEO ОПТИМИЗАЦИЯ',
  'ПОСТРОЕНИЕ ЦИРФОВЫХ ЭКОСИСТЕМ',
  '1С ИНТЕГРАЦИИ',
];
export default function HeroBlockTrack() {
  return (
    <div className="flex items-center gap-6 pr-6">
      {SERVICES.map((item) => (
        <div className="flex shrink-0 items-center gap-4" key={item}>
          <Media
            className="xxs:h-4 xxs:w-4 relative h-3 w-3"
            image={{ src: '/hero/black-star.svg', alt: 'star' }}
          />
          {item}
        </div>
      ))}
    </div>
  );
}
