import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@shadcn/dropdown-menu";
import { Button } from "@shadcn/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type DropdownMenuData = {
  label: {
    name: string;
    email: string;
  };
  items: { label: string; }[];
};

const dropdownMenuData: DropdownMenuData = {
  label: {
    name: "john.doe",
    email: "john.doe@example.tld",
  },
  items: [
    { label: "Profile" },
    { label: "Settings" },
  ],
};

export function UserNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {dropdownMenuData.label.name}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {dropdownMenuData.label.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
        {dropdownMenuData.items.map((item, i) => (
          <DropdownMenuItem key={i}>{item.label}</DropdownMenuItem>
        ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}