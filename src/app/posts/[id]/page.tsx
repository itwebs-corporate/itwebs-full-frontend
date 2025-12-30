import { BackButton } from '@/components/shared/back-button';

import EditPostButton from '@/pages/posts/edit-post-button';
import { getPost } from '@/services/posts';

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await getPost(+id);

  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
      <EditPostButton />
      <BackButton />
    </div>
  );
}
