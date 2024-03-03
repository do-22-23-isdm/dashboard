import { Header } from '@/components/ui-custom/header';
import { Card, CardContent, CardHeader, CardTitle } from '@shadcn/card';
import { Separator } from '@shadcn/separator';

export default function Home() {
  return (
    <>
      <Header
        title="Dashboard"
        subtitle="Welcome to your overview's dashboard"
      />
      <Separator className="my-4" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle>Card header</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
