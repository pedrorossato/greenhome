'use client';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import './post-form.css';
import 'react-quill/dist/quill.snow.css';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { createPost, editPost } from '@/app/actions/posts/actions';
import { type Post } from '@/types/posts/post';

interface PostFormProps {
  post?: Post;
}

export default function PostForm({ post }: PostFormProps): JSX.Element {
  const router = useRouter();
  const form = useForm<Post>({
    defaultValues: post ?? {},
  });

  const { register, control, setValue, watch } = form;

  useEffect(() => {
    register('content', { required: true, minLength: 15 });
    if (post?.content) {
      setValue('content', post.content);
    }
  }, [register, post, setValue]);

  const content = watch('content');
  const onContentChange = (editorState: string): void => {
    setValue('content', editorState);
  };

  const handleAction = post
    ? async (formData: FormData) => {
        formData.append('content', content || '');
        try {
          await editPost(formData);
          toast.success('Post criado com sucesso');
          router.push('/admin');
        } catch (error: any) {
          toast.error('Erro ao criar post: ' + error);
        }
      }
    : async (formData: FormData) => {
        formData.append('content', content || '');
        try {
          await createPost(formData);
          toast.success('Post criado com sucesso');
          router.push('/admin');
        } catch (error: any) {
          toast.error('Erro ao criar post: ' + error);
        }
      };

  const ReactQuill = useMemo(
    () =>
      dynamic(async () => await import('react-quill'), {
        ssr: false,
        loading: () => <p>Carregando editor...</p>,
      }),
    [],
  );

  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image', 'video'],
      ['clean'],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  return (
    <Form {...form}>
      <form
        action={handleAction}
        className="flex flex-col justify-between w-full p-5 gap-4"
      >
        <input {...register('id', { value: post?.id })} type="hidden" />
        <FormField
          control={control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Título</FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite o título..."
                  {...register('title')}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Conteúdo</FormLabel>
              <FormControl>
                <ReactQuill
                  theme="snow"
                  value={content}
                  onChange={(value) => {
                    onContentChange(value);
                  }}
                  modules={modules}
                ></ReactQuill>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <Button type="submit">{post ? 'Editar' : 'Adicionar'}</Button>
      </form>
    </Form>
  );
}
