import { getTranslations } from 'next-intl/server';
import { auth } from '@/auth';
import { Separator } from '@shadcn/separator';

export default async function Profile() {
  const t = await getTranslations();
  const session = await auth();

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">{t('Account.Profile.title')}</h3>
        <p className="text-sm text-muted-foreground">
          {t('Account.Profile.description')}
        </p>
      </div>
      <Separator />
      <div className="space-y-8">
        <article className="space-y-2">
          <h4 className="text-sm font-medium leading-none">
            {t('Account.Profile.fullname')}
          </h4>
          <p className="text-sm text-muted-foreground">{session?.user?.name}</p>
        </article>
        <article className="space-y-2">
          <h4 className="text-sm font-medium leading-none">
            {t('Account.Profile.email')}
          </h4>
          <p className="text-sm text-muted-foreground">
            {session?.user?.email}
          </p>
        </article>
      </div>
    </div>
  );
}
