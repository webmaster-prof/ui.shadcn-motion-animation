"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "../ui/card";
import Image from "next/image";
import { infoData } from "@/data/info-data";
import { motion } from "framer-motion";

const Info = () => {
  return (
    <section className="mt-[130px]  desktop2:mt-[90px] mobile2:mt-[40px]">
      <div className="container">
        <div className="flex justify-center relative">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full relative"
          >
            <CarouselContent>
              {infoData.map((item, i) => (
                <CarouselItem
                  key={item.id}
                  className="basis-1/3 desktop2:basis-1/2 mobile2:basis-full"
                >
                  <Card className="flex aspect-square items-center justify-center p-2">
                    <div className="relative w-full h-full">
                      <Image
                        src={item.image}
                        alt="image"
                        fill
                        className="rounded-[5px] object"
                      />
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="absolute flex w-full  top-1/2 -translate-y-1/2 z-20  desktop2:static desktop2:justify-center desktop2:translate-y-[40px]">
              <CarouselPrevious className=" text-white bg-orange-500  h-[50px] w-[50px] [&>svg]:w-8 [&>svg]:h-8 ml-[30px] desktop2:static desktop2:mr-[10px]" />
              <CarouselNext className=" text-white bg-orange-500 h-[50px] w-[50px] [&>svg]:w-8 [&>svg]:h-8 mr-[30px] desktop2:static desktop2:ml-[10px]" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Info;
