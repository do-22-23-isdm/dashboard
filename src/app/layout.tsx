import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';
import './globals.css';

type Props = {
  children: React.ReactNode;
  session: Session;
};

export default function RootLayout({ children, session }: Props) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
