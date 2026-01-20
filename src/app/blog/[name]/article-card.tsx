import { BlogCard } from '@/components/shared/blog-block/blog-config';
import { Media } from '@/components/ui/media';
import Typography from '@/components/ui/typography/typography';

export default function ArticleCard({ article }: { article: BlogCard }) {
  return (
    <div className="flex flex-col">
      {article.image && (
        <Media
          className="sm:h-[290px] sm:w-[890px]"
          image={{
            src: '/public/default/card-article.png',
            alt: article.image?.alt,
          }}
        />
      )}
      <div className="flex flex-col gap-[24px]">
        <Typography className="text-foreground3" variant="h3">
          {article.title}
        </Typography>
      </div>
    </div>
  );
}
