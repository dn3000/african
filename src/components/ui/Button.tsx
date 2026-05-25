"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center font-montserrat font-700 uppercase tracking-widest transition-all duration-300 rounded-sm cursor-pointer";

    const variants = {
      primary: "bg-[#ED1C24] text-white hover:bg-[#c8151c] shadow-lg hover:shadow-[#ED1C24]/30",
      outline:
        "border-2 border-[#009245] text-[#F5F5F5] hover:bg-[#009245]/10 hover:border-[#009245]",
      ghost: "text-[#F5F5F5] hover:text-[#FBB03B]",
    };

    const sizes = {
      sm: "px-4 py-2 text-xs",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
