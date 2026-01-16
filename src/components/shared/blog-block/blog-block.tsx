import Section from '@/components/ui/section/section';

import { BLOG_CONFIG } from './blog-config';

export default function BlogBlock() {
  return (
    <Section>
      <ul>
        {BLOG_CONFIG.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </Section>
  );
}
