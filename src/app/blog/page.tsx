import BlogBlock from '@/components/shared/blog-block/blog-block';
import HeroBlock from '@/components/shared/hero-block/hero-block';

export default function BlogPage() {
  return (
    <>
      <HeroBlock heading="Полезные материалы" />
      <BlogBlock />
    </>
  );
}
