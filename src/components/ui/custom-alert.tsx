import React from 'react';
import { cn } from "@/lib/utils";
import { CheckCircle2, Info, AlertTriangle } from 'lucide-react';

export interface CustomAlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'success' | 'info' | 'warning';
  message: string;
}

export const CustomAlert = React.forwardRef<HTMLDivElement, CustomAlertProps>(
  ({ variant = 'info', message, className, ...props }, ref) => {
    const variants = {
      success: {
        containerClass: 'bg-[#F2FCE2] border-[#E3F7CC] text-[#1A1D1F]',
        icon: <CheckCircle2 className="h-5 w-5 text-green-600" />
      },
      info: {
        containerClass: 'bg-[#D3E4FD] border-[#B9D5FE] text-[#1A1D1F]',
        icon: <Info className="h-5 w-5 text-blue-600" />
      },
      warning: {
        containerClass: 'bg-[#FEF7CD] border-[#FEF0A0] text-[#1A1D1F]',
        icon: <AlertTriangle className="h-5 w-5 text-yellow-600" />
      }
    };

    const { containerClass, icon } = variants[variant];

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex items-start gap-3 rounded-xl border p-4 text-sm transition-all",
          containerClass,
          className
        )}
        {...props}
      >
        <div className="flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1 leading-relaxed">
          {message}
        </div>
      </div>
    );
  }
);

CustomAlert.displayName = 'CustomAlert';