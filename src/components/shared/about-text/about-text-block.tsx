import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

export default function AboutTextBlock() {
  return (
    <Section>
      <Typography className="max-w-[1497px]" variant="p-big">
        Компания ITWEBS уже <b className="text-foreground2/50"> более пяти лет</b> является надежным
        технологическим партнером для бизнеса. За годы работы мы накопили экспертизу в создании
        эффективных digital-решений: от профессиональной
        <b className="text-foreground2/50"> разработки продуктов и комплексной поддержки</b> до
        <b className="text-foreground2/50"> предоставления первоклассных специалистов</b> на
        внутренние проекты в крупные компании. Наш подход, доказавший результативность в различных
        сферах, позволяет предлагать клиентам только
        <b className="text-foreground2/50"> проверенные решения.</b> Наша компания успешно помогает
        бизнесу развиваться в цифровом поле
      </Typography>
    </Section>
  );
}
