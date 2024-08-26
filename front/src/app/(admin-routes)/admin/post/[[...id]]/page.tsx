import PostForm from '@/components/forms/post/post-form';

import { fetcher } from '@/services/fetcher';
import { type Post } from '@/types/posts/post';

export default async function PostPage({
  params,
}: {
  params: { id?: string };
}): Promise<JSX.Element> {
  const post = params.id
    ? await fetcher<Post>(`/post/${params.id}`, 'GET')
    : undefined;
  return (
    <div className="container py-48">
      <h1 className="text-center text-2xl">
        {params.id ? 'Editar' : 'Adicionar'} post
      </h1>
      <PostForm post={post} />
    </div>
  );
}
