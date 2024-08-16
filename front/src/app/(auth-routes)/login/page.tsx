import LoginForm from '@/components/forms/login/login';

export default async function LoginPage(): Promise<JSX.Element> {
  return (
    <main className="container py-64 flex items-center justify-center">
      <LoginForm />
    </main>
  );
}
