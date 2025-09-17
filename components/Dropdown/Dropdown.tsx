import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export function DropdownMenuDemo() {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          className="w-[15%] shadow-none mx-auto bg-transparent pb-0 mb-[10px] border-none text-orange-500 
          text-[20px] mobile:text-[40px] relative font-dm  
          before:absolute before:content-[''] before:left-1/2 before:bottom-0 before:w-0 before:h-[2px]
           before:bg-orange-600 hover:bg-transparent hover:before:w-full  hover:before:left-0
            before:transition-all duration-100"
        >
          Open
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 " align="start">
        <DropdownMenuLabel className="text-orange-500 text-[20px]">
          My Account
        </DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="#" className="text-orange-500 text-[20px]">
              Profile
            </Link>
            {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="#" className="text-orange-500 text-[20px]">
              Billing
            </Link>
            {/* <DropdownMenuShortcut>⌘B</DropdownMenuShortcut> */}
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="#" className="text-orange-500 text-[20px]">
              Settings
            </Link>
            {/* <DropdownMenuShortcut>⌘S</DropdownMenuShortcut> */}
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="#" className="text-orange-500 text-[20px]">
              Keyboard shortcuts
            </Link>
            {/* <DropdownMenuShortcut>⌘K</DropdownMenuShortcut> */}
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {/* <DropdownMenuItem>Team</DropdownMenuItem> */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="text-orange-500 text-[20px]">
              Invite users
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem className="text-orange-500 text-[20px]">
                  Email
                </DropdownMenuItem>
                <DropdownMenuItem className="text-orange-500 text-[20px]">
                  Message
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-orange-500 text-[20px]">
                  More...
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          {/* <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem> */}
        </DropdownMenuGroup>
        {/* <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem> */}
        {/* <DropdownMenuSeparator /> */}
        {/* <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
