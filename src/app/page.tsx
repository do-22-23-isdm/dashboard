import { MainNav } from "@/components/main-nav";
import { Sidebar } from "@/components/sidebar";
import { UserNav } from "@/components/user-nav";

const content =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut hic libero consequatur tenetur deleniti architecto laboriosam harum recusandae exercitationem, cumque dolorum, voluptatum animi sunt id distinctio assumenda quia. Expedita, inventore.";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* topbar */}
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </div>
      {/* main content */}
      <main className="flex-1 flex">
        <div className="grid lg:grid-cols-5">
          <Sidebar className="hidden lg:block" />
          <div className="col-span-3 lg:col-span-4 lg:border-l">
            <div className="h-full px-4 py-6 lg:px-8">{content}</div>
          </div>
        </div>
      </main>
    </div>
  );
}
