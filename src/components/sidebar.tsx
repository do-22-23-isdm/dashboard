import { cn } from "@/lib/utils";
import { Button } from "@shadcn/button";
import { Apple } from "lucide-react";

type SidebarProps = {} & React.HTMLAttributes<HTMLDivElement>;

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Lorem Ipsum
          </h2>
          <div className="space-y-1">
            <Button variant="secondary" className="w-full justify-start gap-2">
              <Apple />
              <span>button</span>
            </Button>

            {/* other links */}
          </div>
        </div>

        {/* other sections */}
      </div>
    </div>
  );
}
