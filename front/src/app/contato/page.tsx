import GetInTouchForm from '@/components/forms/get-in-touch/get-in-touch';

export default async function GetInTouchPage(): Promise<JSX.Element> {
  return (
    <main className="container py-28 flex items-center justify-center">
      <GetInTouchForm />
    </main>
  );
}
