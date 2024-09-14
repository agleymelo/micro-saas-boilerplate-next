"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { cn } from "~/lib/utils";

type DashboardNextLink = {
  children: ReactNode;
  href: string
  className?: string;
  disabled?: boolean
} & LinkProps;

export function DashboardNextLink({
  href,
  children,
  className,
  disabled = false,
  ...props
}: DashboardNextLink) {
  const pathname = usePathname();

  function isActivePathRouter(path: string) {
    return pathname === path;
  }

  return (
    <Link
    {...props}
      href={disabled ? "#" : href}
      className={cn([
        "flex items-center gap-3 rounded-md p-2 text-sm font-medium hover:bg-muted",
        isActivePathRouter(href)
          ? "bg-muted"
          : "text-muted-foreground hover:text-accent-foreground",
        disabled &&
          "cursor-not-allowd opacity-80 hover:bg-transparent hover:text-muted-foreground",
          className
      ])}
    >
      {children}
    </Link>
  );
}
