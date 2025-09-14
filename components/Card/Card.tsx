import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import Image, { StaticImageData } from "next/image";

type Props = {
  image: string | StaticImageData;
  title: string;
  desc: string;
};

const CardItem = ({ image, title, desc }: Props) => {
  return (
    <Card className="w-full">
      <CardHeader className="p-2">
        <div className="w-full h-64 relative mobile2:h-96">
          <Image
            src={image}
            alt="card-image"
            fill
            className="object-cover rounded-sm mb-3"
          />
        </div>
        <CardTitle className="text-orange-500 text-[27px] text-center">
          {title}
        </CardTitle>
        <CardDescription className="text-black text-center text-[18px] font-semibold fontDM capitalize">
          {desc}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex-col gap-2">
        <Button
          type="submit"
          className="w-full bg-orange-400 hover:bg-orange-600"
        >
          Login
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardItem;
