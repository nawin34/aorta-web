"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Apple, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getDeviceType } from '@/lib/utils/device';

export function StoreButtons() {
  const [deviceType, setDeviceType] = useState<string>('web');

  useEffect(() => {
    setDeviceType(getDeviceType(navigator.userAgent));
  }, []);

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-semibold text-seconday-700 mb-8">Available Soon</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-black hover:bg-black/90"
              onClick={() => window.open('https://apps.apple.com/app/your-app', '_blank')}
            >
              <span className="mr-2 h-5 w-5"></span>
              App Store
            </Button>
            <Button
              size="lg"
              className="bg-[#2CB742] hover:bg-[#2CB742]/90"
              onClick={() => window.open('https://play.google.com/store/apps/details?id=your.app', '_blank')}
            >
              <Play className="mr-2 h-4 w-4" />
              Play Store
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}