import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

import { POLICY_CONFIG } from './policy-config';
export default function PolicyBlock() {
  return (
    <Section className="text-foreground3 mt-[clamp(120px,8vw,182px)] mb-[68px] gap-[32px]">
      <Typography variant="h2">
        <b className="text-primary">Политика</b> конфиденциальности и обработки персональных данных
      </Typography>
      <Typography className="text-left" variant="p1">
        Настоящая Политика конфиденциальности и обработки персональных данных (далее – Политика
        конфиденциальности) является официальным документом Администрации, разработанным и
        утвержденным в установленном порядке, которая определяет порядок сбора, обработки и защиты
        информации, а также персональных данных физических лиц, пользующихся Сайтом. Действующая
        редакция Политики конфиденциальности является публичным документом, текст которой доступен
        любому пользователю сети Интернет на Сайте.
      </Typography>
      <ul className="flex flex-col gap-5">
        {POLICY_CONFIG.map((item) => (
          <li className="flex flex-col gap-1" key={item.id}>
            <Typography variant="h3">
              {item.id}. {item.title}
            </Typography>
            <Typography variant="p2">{item.body}</Typography>
            <ul className="flex flex-col gap-1">
              {item.children?.map((paragraph) => (
                <li key={paragraph.id}>
                  <Typography variant="p2">
                    {paragraph.id}. {paragraph.body}
                  </Typography>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
