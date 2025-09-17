import Image from "next/image";
import headerLogo from "@/public/images/header-logo.png";
import { headerData } from "@/data/header-data";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TextAlignJustify } from "lucide-react";
import { DropdownMenuDemo } from "../Dropdown/Dropdown";

const Header = () => {
  return (
    <header className="w-full fixed top-0 bg-blue-950 py-8 z-30">
      <div className="container">
        <div className="flex items-center justify-between">
          <Image
            src={headerLogo}
            alt="header-logo"
            className="h-[37px] w-[150px] bg-white p-1 rounded-full minmobile:w-[100px] minmobile:h-[30px]"
          />
          <nav className="mobile:hidden flex items-center gap-x-[30px]">
            <ul className="flex items-center gap-7 laptop:gap-[15px]">
              {headerData.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.path}
                    className="text-orange-500 text-[20px] relative font-dm  before:absolute before:content-[''] before:left-1/2 before:bottom-0 before:w-0 before:h-[2px] before:bg-orange-600 hover:before:w-full hover:before:left-0 before:transition-all duration-100"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <DropdownMenuDemo />
          </nav>
          <div className="flex items-center gap-7 minmobile:gap-2">
            <Button className="text-white bg-orange-400 rounded-[5px] minmobile:h-[30px] minmobile:px-[6px]">
              Login
            </Button>
            <Button className="text-white bg-orange-400 rounded-[5px] minmobile:py-1 minmobile:h-[30px] minmobile:px-[6px]">
              Login
            </Button>

            <div className="hidden mobile:block">
              <Sheet>
                <SheetTrigger>
                  <TextAlignJustify className="text-orange-500 h-8 w-8" />
                </SheetTrigger>
                <SheetContent
                  side="top"
                  className="top-0 left-0 right-0 h-[100vh]  animate-slideDown 
                  z-50 overflow-y-auto flex flex-col pt-[100px] "
                >
                  <SheetHeader></SheetHeader>
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
        </div>
      </div>
    </header>
  );
};

export default Header;
