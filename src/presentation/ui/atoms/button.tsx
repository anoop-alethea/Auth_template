import * as React from "react";

import { cn } from "@/lib/utils"; // Using the configured alias instead of relative path

// Define a basic set of props extending standard button attributes
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // You could add a 'variant' prop here later if you want different button styles
  // variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  // size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, ...props }, ref) => {
    // Base styles common to all button variants (if you add them later)
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    // Default (Primary) button styles using your theme variables
    const defaultVariantStyles = "bg-primary text-primary-foreground hover:bg-primary/90";

    // Default size styles
    const defaultSizeStyles = "h-10 px-4 py-2";


    return (
      <button
        className={cn(baseStyles, defaultVariantStyles, defaultSizeStyles, className)}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };