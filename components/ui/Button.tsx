"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  icon?: ReactNode;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  disabled,
  type = "button",
  fullWidth,
  icon,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-cairo font-semibold rounded-full transition-all duration-300 cursor-pointer select-none";

  const variants = {
    primary:
      "bg-navy text-cream hover:bg-navy-light shadow-lg hover:shadow-xl active:scale-95",
    secondary:
      "bg-rose text-white hover:bg-rose-dark shadow-md hover:shadow-lg active:scale-95",
    outline:
      "border-2 border-navy text-navy hover:bg-navy hover:text-cream active:scale-95",
    ghost:
      "text-navy hover:bg-blush active:scale-95",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = cn(
    base,
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    disabled && "opacity-50 cursor-not-allowed pointer-events-none",
    className
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {icon && <span>{icon}</span>}
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {icon && <span>{icon}</span>}
      {children}
    </motion.button>
  );
}
