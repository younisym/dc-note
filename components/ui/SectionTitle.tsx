"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
  decorative?: boolean;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  center = true,
  light = false,
  decorative = true,
  className,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        "mb-12",
        center && "text-center",
        className
      )}
    >
      {decorative && (
        <div className={cn("flex items-center gap-3 mb-3", center && "justify-center")}>
          <span className="w-8 h-px bg-rose opacity-60" />
          <span className="text-rose text-sm font-cairo">✦</span>
          <span className="w-8 h-px bg-rose opacity-60" />
        </div>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl font-cairo font-bold leading-tight",
          light ? "text-cream" : "text-navy"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg max-w-2xl leading-relaxed",
            center && "mx-auto",
            light ? "text-cream/80" : "text-navy/60"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
