import React from "react";

export function CvIcon() {
  return (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M8 8h8M8 12h8M8 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function SolarIcon() {
  return (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function OtherIcon() {
  return (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
