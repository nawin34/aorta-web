"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function ExcitementRating() {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  const handleRating = (value:any) => {
    setRating(value);
    toast.success("Thanks for rating! We're excited too!",{
      style:{backgroundColor:'#22c55e',color:'#ffffff'},
      position: 'top-center',
    });
  };

  return (
    <section className="py-24 bg-primary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-primary">How Excited Are You?</h2>
        <p className="mt-4 text-xl text-muted-foreground">
          Let us know how excited you are to try our app!
        </p>
        
        <div className="mt-8 flex justify-center gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <Button
              key={star}
              variant="ghost"
              className="p-2 hover:bg-primary/20"
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              onClick={() => handleRating(star)}
            >
              <Star
                className={`h-8 w-8 ${
                  star <= (hover || rating)
                    ? "fill-primary text-primary"
                    : "text-muted-foreground"
                }`}
              />
            </Button>
          ))}
        </div>
        
        <p className="mt-4 text-muted-foreground">
          {rating ? `You rated ${rating} stars!` : "Click to rate"}
        </p>
      </div>
    </section>
  );
}