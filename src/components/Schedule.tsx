import Image from "next/image";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export const Schedule = () => {
  return (
    <div className="schedule w-full pl-10 pr-10 lg:container mt-1 mb-10 font-[var(--font-gotham)]">
      <h2 className="text-center mb-14 text-3xl mt-32 sm:mt-20 lg:text-4xl">
        AGENDA
      </h2>
      <Carousel className="">
        <CarouselContent className="flex">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card className="max-w-lg rounded-lg overflow-hidden shadow-lg">
                  {/* Image section */}
                  <div className="w-full h-64 relative">
                    <Image
                      src="/card01.png"
                      alt="Event image"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>

                  {/* Text section */}
                  <CardContent className="p-6 bg-[#EDEDED]">
                    <CardTitle className="text-2xl font-normal text-gray-800">
                      Lorem Ipsum
                    </CardTitle>
                    <CardDescription className="text-lg text-gray-400">
                      20 de julho
                    </CardDescription>
                    <p className="text-sm text-gray-500 mt-4">
                      Rua Bernardo Ferraz de Almeida, 172 <br /> Sala 03 - Jd.
                      Faculdade
                    </p>
                    <p className="text-sm text-gray-500 mt-4">
                      A Filarmônica Jovem de Sorocaba apresenta uma noite mágica
                      com obras de Beethoven e Tchaikovsky. Um evento imperdível
                      para os amantes da música clássica.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
