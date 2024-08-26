import PostList from '@/components/list/post/post-list';

import { getPagedPosts } from '../actions/posts/actions';

const INITIAL_NUMBER_OF_USERS = 3;

export default async function Blog(): Promise<JSX.Element> {
  const initialPosts = await getPagedPosts(0, INITIAL_NUMBER_OF_USERS);

  return (
    <div className="container">
      <PostList initialPosts={initialPosts} />
    </div>
  );
}
