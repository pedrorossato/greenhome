import PostDatatable from '@/components/datatable/post/post-datatable';
import PropertyDatatable from '@/components/datatable/property/property-datatable';

import { verifySession } from '@/app/lib/session';
import { fetcher } from '@/services/fetcher';
import { type Post } from '@/types/posts/post';
import { type Property } from '@/types/properties/property';

export default async function AdminPage(): Promise<JSX.Element> {
  const session = await verifySession();
  if (!session) return <></>;

  const [posts, properties] = await Promise.all([
    fetcher<Post[]>('/post', 'GET', undefined, ['posts']),
    fetcher<Property[]>('/property', 'GET', undefined, ['properties']),
  ]);

  return (
    <div className="container">
      <PropertyDatatable properties={properties} />
      <PostDatatable posts={posts} />
    </div>
  );
}
