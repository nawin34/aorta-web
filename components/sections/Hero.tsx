"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import start from "../../public/images/start.png";
import { toast } from "sonner";
import { StoreButtons } from "./StoreButtons";

export function Hero() {
  const handleDownload = () => {
    toast.info('Please download our app from your mobile device',{position: 'top-center'});
  };
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="mt-10 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl tracking-tight font-extrabold sm:text-4xl md:text-6xl"
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-pink-500 to-primary animate-pulse">
                Your Digital Medical Logbook
              </span>
            </motion.h1>
            <p className="mt-3 text-base text-muted-foreground sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Streamline your medical practice with digital case logging, analytics, and exporting logs. Join thousands of healthcare professionals using LogBook.
            </p>
            <StoreButtons/>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative aspect-[1/1] w-full max-w-md mx-auto"
            >
              <Image
                src={"https://img.freepik.com/premium-photo/smiling-female-doctor-using-mobile-phone-isolated-gray-background-portrait-young-beautiful-wo_1015980-627589.jpg"}
                alt="LogBook App Screenshot"
                fill
                className="rounded-lg object-contain shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}