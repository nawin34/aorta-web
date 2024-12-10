"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Linkedin } from 'lucide-react';
import Image from 'next/image';

import image1 from "../../public/images/shravan.jpeg";
import image2 from "../../public/images/ravi.jpeg";
import image3 from "../../public/images/naveen.jpeg";

const team = [
  {
    name: 'Dr. Shravan Kumar Mamidi',
    role: 'Founder, CEO',
    bio: 'MBBS, DNB(Anesthesia) with 10+ years of medical experience.',
    image: image1,
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Ravi Mamidi',
    role: 'Co-founder, CMO',
    bio: 'B-Tech, MBA in Computer Science. Focuses on Marketing, Legal and Compliance.',
    image: image2,
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Naveen Kumar Mitta',
    role: 'Co-founder, CTO',
    bio: 'B.Tech, Technology Expert who developed LogBook mobile application and website.',
    image: image3,
    linkedin: 'https://www.linkedin.com/in/naveen-kumar-mitta/'
  }
];

export function Team() {
  return (
    <section className="py-24 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-primary">Meet Our Team</h2>
          <p className="mt-4 text-xl text-muted-foreground">
            The experts behind LogBook
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{member.bio}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80"
                  >
                    <Linkedin className="h-5 w-5 mr-2" />
                    Connect on LinkedIn
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}