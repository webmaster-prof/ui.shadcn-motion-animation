import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import heroOne from "@/public/images/hero-1.jpg";
import heroThu from "@/public/images/hero-2.jpg";
import heroThre from "@/public/images/hero-3.jpg";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section>
      <Carousel className="relative w-full overflow-hidden">
        <CarouselContent>
          <CarouselItem>
            <Image
              src={heroOne}
              alt="image-slider"
              className="object-cover h-[700px]"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={heroThu}
              alt="image-slider"
              className="object-cover h-[700px]"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={heroThre}
              alt="image-slider"
              className="object-cover h-[700px]"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 z-10 text-white bg-orange-500" />
        <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 z-10 text-white bg-orange-500" />
      </Carousel>
    </section>
  );
};

export default Hero;
