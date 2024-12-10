"use client";

import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

import { Smartphone, FileText, Cpu, ShieldCheck, Wallet, BarChart2 } from "lucide-react";

const features = [
  {
    name: "Digital Log",
    description: "Easily create and manage logs for all your cases.",
    icon: Smartphone, // Represents a modern, mobile-friendly solution
  },
  {
    name: "Export",
    description: "Seamlessly export your logs in PDF format for sharing.",
    icon: FileText, // Icon representing document export
  },
  {
    name: "Copilot",
    description: "Leverage AI to craft precise case summaries effortlessly.",
    icon: Cpu, // Represents AI and computational tasks
  },
  {
    name: "Fast & Secure",
    description: "Experience lightning-fast, secure, and reliable performance.",
    icon: ShieldCheck, // Combines speed and security themes
  },
  {
    name: "My Pay",
    description: "Track your earnings with an intuitive payment dashboard.",
    icon: Wallet, // Icon representing payments and finances
  },
  {
    name: "Analytics",
    description: "Gain insights with comprehensive data visualizations and stats.",
    icon: BarChart2, // Represents graphs and analytics
  },
  
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export function Features() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-primary">Amazing Features</h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Everything you need to enhance your daily workflow
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 items-stretch"
        >
          {features.map((feature) => (
            <motion.div key={feature.name} variants={itemVariants}>
              <Card className="h-full flex flex-col justify-between border-2 hover:border-primary/50 transition-colors">
                <CardHeader className="flex-grow">
                  <feature.icon className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>{feature.name}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}