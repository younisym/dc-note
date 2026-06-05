"use client";

import { categories } from "@/data/products";
import type { CategoryId } from "@/types";

interface FilterBarProps {
  active: CategoryId | "all";
  onChange: (cat: CategoryId | "all") => void;
}

export default function FilterBar({ active, onChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-10">
      <button
        onClick={() => onChange("all")}
        className={`px-5 py-2 rounded-full font-cairo font-semibold text-sm transition-all duration-200 ${
          active === "all"
            ? "bg-navy text-cream shadow-md"
            : "bg-white text-navy border border-cream-dark hover:bg-blush"
        }`}
      >
        الكل
      </button>
      {categories
        .filter((c) => c.productCount > 0)
        .map((cat) => (
          <button
            key={cat.id}
            onClick={() => onChange(cat.id)}
            className={`px-5 py-2 rounded-full font-cairo font-semibold text-sm transition-all duration-200 flex items-center gap-1.5 ${
              active === cat.id
                ? "bg-navy text-cream shadow-md"
                : "bg-white text-navy border border-cream-dark hover:bg-blush"
            }`}
          >
            <span>{cat.icon}</span>
            {cat.name}
          </button>
        ))}
    </div>
  );
}
