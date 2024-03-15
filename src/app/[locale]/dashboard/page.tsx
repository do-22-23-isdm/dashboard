import { Separator } from '@shadcn/separator';
import { Header } from '@@/ui-custom/header';

export default function Home() {
  return (
    <>
      <Header
        title="Dashboard"
        subtitle="Welcome to your overview's dashboard"
      />
      <Separator className="my-4" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Content */}
      </div>
    </>
  );
}
