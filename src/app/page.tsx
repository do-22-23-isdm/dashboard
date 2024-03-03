import { Topbar } from '@/components/topbar';
import { Sidebar } from '@/components/sidebar';

const content =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut hic libero consequatur tenetur deleniti architecto laboriosam harum recusandae exercitationem, cumque dolorum, voluptatum animi sunt id distinctio assumenda quia. Expedita, inventore.';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* topbar */}
      <Topbar />

      {/* main content */}
      <main className="flex-1 flex">
        <div className="grid lg:grid-cols-5 flex-1">
          <Sidebar className="hidden lg:block" />
          <div className="col-span-3 lg:col-span-4 lg:border-l">
            <div className="h-full px-4 py-6 lg:px-8">{content}</div>
          </div>
        </div>
      </main>
    </div>
  );
}
