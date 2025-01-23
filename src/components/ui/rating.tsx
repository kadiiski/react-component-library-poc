import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingProps extends React.HTMLAttributes<HTMLDivElement> {
  topLabel?: string;
  levelText?: string;
  levelDescription?: string;
  value: number;
  maxStars?: number;
  className?: string;
}

export const Rating = React.forwardRef<HTMLDivElement, RatingProps>(
  ({ topLabel = "top label", levelText = "level text", levelDescription = "level description", value = 0, maxStars = 5, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("p-6 bg-[#eee] rounded-lg shadow-sm space-y-4", className)} {...props}>
        {topLabel && (
          <div className="text-lg font-medium text-navy-900">{topLabel}</div>
        )}
        <div className="flex justify-center gap-1">
          {[...Array(maxStars)].map((_, index) => (
            <Star
              key={index}
              className={cn(
                "w-8 h-8",
                index < value
                  ? "fill-blue-500 text-blue-500"
                  : "fill-gray-200 text-gray-200"
              )}
            />
          ))}
        </div>
        {levelText && (
          <div className="text-xl font-semibold text-navy-900">{levelText}</div>
        )}
        {levelDescription && (
          <div className="text-gray-600">{levelDescription}</div>
        )}
      </div>
    );
  }
);

Rating.displayName = "Rating";