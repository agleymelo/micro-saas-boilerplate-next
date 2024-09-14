"use client"

import { CircleDashedIcon, CreditCard, Laptop, type LucideIcon, User, HouseIcon, MessageCircleDashedIcon } from "lucide-react";

type NavItem = {
  title: string;
  href: string;
  badge?: number;
  disabled?: boolean;
  external?: boolean;
  Icon?: LucideIcon;
};

type MainNavItem = NavItem;

export type MarketingConfig = {
  mainNav: MainNavItem[];
};

export type SidebarNavItem = {
  title: string;
  items: NavItem[];
  Icon?: LucideIcon;
};


export const sidebarLinks: SidebarNavItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Onboarding",
        href: "/dashboard/onboarding",
        Icon: CircleDashedIcon,
        disabled: true
      },
      {
        title: "Overview",
        href: "/dashboard",
        Icon: Laptop,

      },
    ],
  },
  {
    title: "Settings",
    items: [
      {
        title: "Profile",
        href: "/dashboard/profile",
        Icon: User,
      },
      {
        title: "Billing",
        href: "/dashboard/billing",
        Icon: CreditCard,
      }
    ]
  },
  {
    title: "Need help?",
    items: [
      {
        title: "Homepage",
        href: "/",
        Icon: HouseIcon
      },
      {
        title: "Feedbacks",
        href: "#",
        Icon: MessageCircleDashedIcon,
        disabled: true
      }
    ]
  }
]