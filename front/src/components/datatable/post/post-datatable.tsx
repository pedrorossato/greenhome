'use client';

import AddPostButton from '@/components/button/post/add-post-button';
import { DataTable } from '@/components/ui/data-table';

import { type Post } from '@/types/posts/post';

import { columns } from './columns';

export default function PostDatatable({
  posts,
}: {
  posts: Post[];
}): JSX.Element {
  return (
    <div className="flex flex-col justify-center items-center m-10">
      <DataTable
        addButton={AddPostButton()}
        columns={columns}
        data={posts}
        title="Posts"
      ></DataTable>
    </div>
  );
}
