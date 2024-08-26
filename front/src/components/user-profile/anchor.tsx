'use server';

import { logout } from '@/app/actions/auth/auth';
import { verifySession } from '@/app/lib/session';

import RedirectButton from '../button/redirect-button';
import { Avatar, AvatarImage } from '../ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

export default async function Profile(): Promise<JSX.Element> {
  const session = await verifySession();
  if (!session) return <></>;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="cursor-pointer mx-4 rounded-lg">
          <Avatar>
            <AvatarImage src={session.user.image} alt="@shadcn" />
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-[10000]">
        <DropdownMenuLabel className="text-center">
          {session.user.name}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {session.user.roles.includes('ROLE_ADMIN') ? (
          <DropdownMenuItem>
            <RedirectButton path="/admin">Painel administrativo</RedirectButton>
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem>
            <RedirectButton path="/user">Painel</RedirectButton>
          </DropdownMenuItem>
        )}
        <DropdownMenuItem>
          <form className="w-full" action={logout}>
            <button className="w-full" type="submit">
              Sair
            </button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
