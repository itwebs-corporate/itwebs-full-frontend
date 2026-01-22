import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

export default function AboutTextBlock() {
  return (
    <Section>
      <Typography className="max-w-[1497px]" variant="p-big">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type
        <b className="text-foreground2/50">
          specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged.
        </b>
      </Typography>
    </Section>
  );
}
