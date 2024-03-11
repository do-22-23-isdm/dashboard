import Link from 'next/link';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { ArrowUpRightFromSquare, LayoutDashboard, LogIn } from 'lucide-react';
import { auth } from '@/auth';
import { Button } from '@/components/ui/button';

export default async function Home() {
  const t = await getTranslations();
  const session = await auth();

  return (
    <section className="container flex flex-wrap items-center justify-center xl:justify-between gap-4">
      <div className="space-y-8 text-left max-w-xl">
        <h1 className="font-extrabold text-4xl/snug lg:text-5xl/snug">
          Welcome to your <br />
          <span className="tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            MESO@LR
          </span>{' '}
          Dashboard
        </h1>
        <div className="text-xl/relaxed space-y-3 mx-auto">
          <p>Your hub for HPC, data processing, and Cloud solutions.</p>
          <p>
            Use shared resources and top-tier architectures for public, private,
            and academic needs. Hosted at CINES, part of the University of
            Montpellier&apos;s technology platform.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 text-xl">
          <Button asChild className="text-lg font-bold p-6 space-x-2">
            {session ? (
              <Link href="/dashboard">
                <LayoutDashboard />
                <span>Get started</span>
              </Link>
            ) : (
              <Link href="/api/auth/signin">
                <LogIn className="w-5 h-5" />
                <span>{t('Common.login')}</span>
              </Link>
            )}
          </Button>
          <Button
            asChild
            variant="outline"
            className="text-lg font-bold p-6 space-x-2"
          >
            <a href="https://meso-lr.umontpellier.fr/" target="_blank">
              <ArrowUpRightFromSquare className="w-5 h-5" />
              <span>Learn More</span>
            </a>
          </Button>
        </div>
      </div>
      <Image
        src="/images/muse.webp"
        alt="Muse supercomputer at CINES"
        width={550}
        height={310}
        className="border w-xs rounded-md shadow-md transition-transform ease duration-300 hover:-translate-y-2 hover:-translate-x-2"
        priority
      />
    </section>
  );
}
