import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

export default function AboutTextBlock() {
  return (
    <Section>
      <Typography className="max-w-[1497px]" variant="p-big">
        — Компания ITWEBS уже более пяти лет является надежным технологическим партнером для
        бизнеса. За годы работы мы накопили экспертизу в создании эффективных digital-решений: от
        профессиональной <b className="text-foreground2/50">разработки сайта</b> и мощного
        <b className="text-foreground2/50"> SEO продвижения</b> до комплексной
        <b className="text-foreground2/50"> IT поддержки бизнеса</b>. Наш подход, доказавший
        результативность в различных сферах, позволяет предлагать клиентам только проверенные
        решения. Для вашего роста — свяжитесь с ITWEBS, чтобы
        <b className="text-foreground2/50"> заказать мобильное приложение</b> или другое IT-решение.
      </Typography>
    </Section>
  );
}
