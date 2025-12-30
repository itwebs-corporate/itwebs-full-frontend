import Link from 'next/link';

import { Post } from '@/types/posts';

const PostsMainHero = ({ posts }: { posts: Post[] }) => {
  return (
    <div>
      Posts
      {posts?.map((post) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default PostsMainHero;
