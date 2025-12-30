import PostsMainHero from '@/pages/posts/main-hero';
import { getPosts } from '@/services/posts';

export default async function Page() {
  const posts = await getPosts();
  return (
    <div>
      <PostsMainHero posts={posts} />
    </div>
  );
}
