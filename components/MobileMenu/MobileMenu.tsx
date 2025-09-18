import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TextAlignJustify } from "lucide-react";
import { DropdownMenuDemo } from "../Dropdown/Dropdown";
import { ModeToggle } from "../DarkMode/ModeToggle";
import { Button } from "../ui/button";
import { headerData } from "@/data/header-data";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <div className="flex items-center gap-[20px] mobile2:gap-[10px]">
      <Button className="text-white bg-orange-400 rounded-[5px] minmobile:h-[30px] minmobile:px-[6px]">
        Login
      </Button>
      <Button className="text-white bg-orange-400 rounded-[5px] minmobile:py-1 minmobile:h-[30px] minmobile:px-[6px]">
        Login
      </Button>
      <ModeToggle />
      <div className="hidden mobile:block">
        <Sheet>
          <SheetTrigger>
            <TextAlignJustify className="text-orange-500 h-8 w-8 translate-y-[4px]" />
          </SheetTrigger>
          <SheetContent
            side="top"
            className="top-0 left-0 right-0 h-[100vh]  animate-slideDown 
                  z-50 overflow-y-auto flex flex-col pt-[100px] "
          >
            <ul className="flex items-center flex-col  gap-[15px]">
              {headerData.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.path}
                    className="text-orange-500 text-[40px] relative font-dm  before:absolute before:content-[''] before:left-1/2 before:bottom-0 before:w-0 before:h-[2px] before:bg-orange-600 hover:before:w-full hover:before:left-0 before:transition-all duration-100"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <DropdownMenuDemo />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default MobileMenu;
