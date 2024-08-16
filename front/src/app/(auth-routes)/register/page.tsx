import RegisterForm from '@/components/forms/register/register';

export default async function RegisterPage(): Promise<JSX.Element> {
  return (
    <main className="container py-64 flex items-center justify-center">
      <RegisterForm />
    </main>
  );
}
