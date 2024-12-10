"use client";


import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react";

import calender from "../../public/images/calender.png";
import stats from "../../public/images/stats.png";
import start from "../../public/images/start.png";
import caseImg from "../../public/images/case.png";
import chat from "../../public/images/chat.png";
import exportImg from "../../public/images/export.png";
import home from "../../public/images/home.png";
import React from "react";


const screenshots = [
  {
    url: home,
    alt: "LogBook Subscriptions",
  },
  {
    url: exportImg,
    alt: "LogBook Export",
  },
  {
    url: stats,
    alt: "LogBook Analytics",
  },
  {
    url: calender,
    alt: "LogBook Calendar",
  },
  {
    url: caseImg,
    alt: "LogBook Case Details",
  },
  {
    url: chat,
    alt: "LogBook Forum",
  },
];

export function Screenshots() {
  // Initialize embla carousel with the Autoplay plugin
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
   
    <section id="screenshots" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary">App Screenshots</h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Experience the intuitive interface of LogBook
          </p>
        </div>

        <div className="mt-20">
          <Carousel className="w-full max-w-xs mx-auto"
          plugins={[plugin.current]}
          
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}

            >
            <CarouselContent>
              {screenshots.map((screenshot, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-[9/19] w-full border rounded-2xl">
                    <Image
                      src={screenshot.url}
                      alt={screenshot.alt}
                      fill
                      className="rounded-lg object-contain p-1"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={index === 0}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

