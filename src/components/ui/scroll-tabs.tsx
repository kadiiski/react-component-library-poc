import * as React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScrollTabsProps extends React.HTMLAttributes<HTMLDivElement> {
  items: {
    label: string;
    icon?: React.ReactNode;
  }[];
  activeIndex?: number;
  onTabChange?: (index: number) => void;
}

export const ScrollTabs = React.forwardRef<HTMLDivElement, ScrollTabsProps>(
  ({ items, activeIndex = 0, onTabChange, className, ...props }, ref) => {
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);
    const [showRightArrow, setShowRightArrow] = React.useState(false);

    const checkForOverflow = React.useCallback(() => {
      if (scrollContainerRef.current) {
        const { scrollWidth, clientWidth } = scrollContainerRef.current;
        setShowRightArrow(scrollWidth > clientWidth);
      }
    }, []);

    React.useEffect(() => {
      checkForOverflow();
      window.addEventListener('resize', checkForOverflow);
      return () => window.removeEventListener('resize', checkForOverflow);
    }, [checkForOverflow]);

    const scrollRight = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
      }
    };

    return (
      <div ref={ref} className={cn("relative", className)} {...props}>
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide space-x-6 relative"
        >
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => onTabChange?.(index)}
              className={cn(
                "flex items-center gap-2 whitespace-nowrap pb-2 border-b-2 transition-colors",
                index === activeIndex
                  ? "border-blue-500 text-blue-500"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              )}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>
        {showRightArrow && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white via-white pl-4 pr-1"
          >
            <ChevronRight className="w-5 h-5 text-blue-500" />
          </button>
        )}
      </div>
    );
  }
);

ScrollTabs.displayName = "ScrollTabs";