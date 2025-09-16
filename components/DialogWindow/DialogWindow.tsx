import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { X } from "lucide-react";

const DialogWindow = () => {
  return (
    <section>
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="bg-orange-500 text-white text-[16px] font-mont hover:bg-orange-800 hover:text-white"
            >
              Open Dialog
            </Button>
          </DialogTrigger>

          <DialogContent
            className="]"
            overlayClassName="bg-gray-800/70 backdrop-blur-md"
          >
            <DialogHeader>
              <DialogTitle className="text-orange-500 text-[20px] mb-[20px]">
                Edit profile
              </DialogTitle>
              <DialogClose asChild>
                <button
                  className="absolute right-3 top-3 rounded-full px-[3px] py-[3px]
                         bg-orange-500 text-white hover:bg-orange-800 
                         transition z-20"
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </button>
              </DialogClose>
              <DialogDescription className="text-orange-400">
                Make changes to your profile here. Click save when you&apos;re
                done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="name-1" className="text-orange-500">
                  Name
                </Label>
                <Input
                  id="name-1"
                  name="name"
                  defaultValue="Pedro Duarte"
                  className="text-orange-700"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="username-1" className="text-orange-500">
                  Username
                </Label>
                <Input
                  id="username-1"
                  name="username"
                  defaultValue="@peduarte"
                  className="text-orange-700"
                />
              </div>
            </div>
            <DialogFooter className="mobile:flex-col mobile:gap-y-[10px] mobile:space-x-0">
              <DialogClose asChild>
                <Button
                  variant="outline"
                  className="bg-orange-500 text-white text-[16px] font-mont hover:bg-orange-800 hover:text-white "
                >
                  Cancel
                </Button>
              </DialogClose>
              <Button
                type="submit"
                className="bg-orange-500 text-white text-[16px] font-mont hover:bg-orange-800 hover:text-white"
              >
                Save changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </section>
  );
};

export default DialogWindow;
