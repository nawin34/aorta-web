"use client";

import { Heart, Github, Twitter, Linkedin, Instagram, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/med_aorta', label: 'Twitter' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/naveen-kumar-mitta/', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/aortat4', label: 'Instagram' }
];

export function Footer() {
  return (
    <footer id="contactus" className="py-12 bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-8"
        >
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span>Powered by</span>
            <span className="font-bold text-primary">Aorta</span>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 mt-6 sm:mt-8">
            {/* Social Media Links */}
            <div className="flex gap-6 mb-4 sm:mb-0">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
         <span className='hidden sm:inline'>|</span>
            {/* Phone */}
            <div className="flex items-center gap-2 mb-4 sm:mb-0">
              <Phone className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              <p className="text-muted-foreground hover:text-primary transition-colors">+91 6302930252</p>
            </div>
            <span className='hidden sm:inline'>|</span>
            {/* Email */}
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              <p className="text-muted-foreground hover:text-primary transition-colors">nawinpatel34@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            <span>in <b>India</b></span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
