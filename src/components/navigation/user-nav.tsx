import Link from 'next/link';
import { User } from 'next-auth';
import { useTranslations } from 'next-intl';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@shadcn/dropdown-menu';
import { Button } from '@shadcn/button';
import { Avatar, AvatarFallback } from '@shadcn/avatar';

type Props = {
  user: User;
};

export function UserNav({ user }: Props) {
  const t = useTranslations();

  // get the initials of the user's name
  // supports separation for: space, dot, hyphen, underscore
  const initials = user.name
    ?.split(/[ .\-_]/)
    .map((part) => part.charAt(0).toUpperCase())
    .join('');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div
            className="flex flex-col space-y-1"
            title={user.email ? user.email : undefined}
          >
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-xs leading-none text-muted-foreground text-ellipsis overflow-hidden">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/account" className="w-full cursor-pointer">
              {t('Account.title')}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/account/settings" className="w-full cursor-pointer">
              {t('Account.Settings.title')}
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/api/auth/signout" className="w-full cursor-pointer">
            {t('Common.logout')}
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
