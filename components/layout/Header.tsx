'use client';

import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { getDeviceType, storeLinks } from '@/lib/utils/device';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [deviceType, setDeviceType] = useState<string>('web');

  useEffect(() => {
    setDeviceType(getDeviceType(navigator.userAgent));
  }, []);

  const handleDownload = () => {
    if (deviceType === 'web') {
      toast.info('Thanks for your interest. We will be available soon!',{position: 'top-center'});
      return;
    }

    const storeUrl = storeLinks[deviceType as keyof typeof storeLinks];
    window.open(storeUrl, '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">LogBook</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm font-medium hover:text-primary"
            >
              Features
            </a>
            <a
              href="#contactus"
              className="text-sm font-medium hover:text-primary"
            >
              Contact Us
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium hover:text-primary"
            >
              Pricing
            </a>
            <a
              href="#screenshots"
              className="text-sm font-medium hover:text-primary"
            >
              Screenshots
            </a>
            <Button onClick={handleDownload}>
              <Download className="mr-2 h-4 w-4" />
              Download Now
            </Button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#features"
              className="block px-3 py-2 text-base font-medium hover:text-primary"
            >
              Features
            </a>
            <a
              href="#contactus"
              className="block px-3 py-2 text-base font-medium hover:text-primary"
            >
              Contact Us
            </a>
            <a
              href="#pricing"
              className="block px-3 py-2 text-base font-medium hover:text-primary"
            >
              Pricing
            </a>
            <a
              href="#screenshots"
              className="block px-3 py-2 text-base font-medium hover:text-primary"
            >
              Screenshots
            </a>
            <Button className="w-full mt-2" onClick={handleDownload}>
              <Download className="mr-2 h-4 w-4" />
              Download Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
