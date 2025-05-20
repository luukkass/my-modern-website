import React from "react";
import Link from "next/link";

interface IconButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  disabled?: boolean;
}

export function IconButton({ href, icon, label, disabled }: IconButtonProps) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition text-white font-semibold text-lg shadow-md ${
        disabled ? "opacity-50 pointer-events-none" : ""
      }`}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
    >
      <span className="w-6 h-6 flex items-center justify-center">{icon}</span>
      {label}
    </Link>
  );
}
