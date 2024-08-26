'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { getPagedPosts } from '@/app/actions/posts/actions';
import { type Post } from '@/types/posts/post';

interface PostListProps {
  initialPosts: Post[];
}
const NUMBER_OF_POSTS_TO_FETCH = 3;

export default function PostList({ initialPosts }: PostListProps): JSX.Element {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [offset, setOffset] = useState(NUMBER_OF_POSTS_TO_FETCH);
  const { ref, inView } = useInView();

  async function loadMorePosts(): Promise<void> {
    const morePosts = await getPagedPosts(offset, NUMBER_OF_POSTS_TO_FETCH);
    setPosts([...posts, ...morePosts]);
    setOffset(offset + NUMBER_OF_POSTS_TO_FETCH);
  }

  useEffect(() => {
    if (inView) {
      loadMorePosts();
    }
  }, [inView]);

  if (!posts) return <></>;
  return (
    <div className="flex flex-col gap-3">
      {posts.map((post) => (
        <Card key={post.id} className="m-12">
          <CardHeader>
            <CardTitle className="flex flex-row justify-between">
              {post.title}
              <small>{new Date(post.createdDate).toLocaleDateString()}</small>
            </CardTitle>
          </CardHeader>
          <CardContent
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></CardContent>
        </Card>
      ))}
      <div ref={ref}></div>
    </div>
  );
}
