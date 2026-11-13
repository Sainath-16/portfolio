import React from "react";

export function BrandGithub({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function BrandLinkedin({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" rx="1" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function BrandTryHackMe({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M10.825 0a.72.72 0 0 0-.465.174L4.85 4.673a.725.725 0 0 0-.25.552v4.868c0 .216.096.422.261.56l5.51 4.542a.724.724 0 0 0 .927-.001l5.509-4.542a.726.726 0 0 0 .262-.56V5.225a.725.725 0 0 0-.25-.552L11.309.174A.72.72 0 0 0 10.825 0zm.04 1.503l4.647 3.829-4.647 3.83-4.648-3.83 4.648-3.829zM5.967 6.37l4.137 3.41v5.772l-4.137-3.41V6.37zm9.742 0v5.772l-4.137 3.41V9.78l4.137-3.41zm-4.884 8.783v6.723a.725.725 0 0 0 .465.674l5.51 2.296a.725.725 0 0 0 .957-.674v-4.869a.725.725 0 0 0-.465-.674l-5.51-2.296a.725.725 0 0 0-.957.82zm1.449 1.157l4.032 1.68v3.473l-4.032-1.68v-3.473zm-3.541-1.977a.725.725 0 0 0-.957.674v4.869c0 .29.175.552.465.674l5.51 2.296a.725.725 0 0 0 .957-.674v-6.723a.725.725 0 0 0-.957-.82l-5.018 2.094zm.449 2.497l4.032-1.68v3.473l-4.032 1.68v-3.473z"/>
    </svg>
  );
}
