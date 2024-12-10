"use client";

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { toast } from "sonner";

const plans = [
  {
    name: 'Free',
    price: '₹0',
    description: 'Perfect for getting started',
    features: [
      'Generate Upto 10 logs',
      'Limited analytics',
      'Calendar',
      'Email support'
    ]
  },
  {
    name: 'Plus',
    price: '₹299',
    description: 'Best for medical residents',
    features: [
      'Generate Upto 100 logs',
      'Full analytics dashboard',
      'Priority support',
      'Export Logs',
      'My Pay',
      '24/7 Forum'
    ],
    popular: true
  },
  {
    name: 'Pro',
    price: '₹599',
    description: 'For established practitioners',
    features: [
      'Everything in Plus',
      'Unlimited logs',
      'Copilot',
      'Dedicated support',
      'Clone Case',
      'Share Case'
    ]
  }
];

export function Pricing() {

  const handlePriceClick=()=>{
    toast.success("Thanks for your interest. We will be available soon!",{
      style:{backgroundColor:'#22c55e',color:'#ffffff'},
      position: 'top-center',
    });

  }
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-primary">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Choose the plan that best fits your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
             <Card 
                className={cn(
                  "h-full flex flex-col justify-between transition-shadow hover:shadow-lg",
                  plan.popular && "border-primary shadow-lg scale-105"
                )}
              >
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                    onClick={handlePriceClick}
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}