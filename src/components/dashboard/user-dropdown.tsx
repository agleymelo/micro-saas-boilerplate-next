"use client";

import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import { LayoutDashboard, LogOutIcon, User2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

type UserDropdownProps = {
  user: {
    name?: string;
    avatar?: string;
    email: string;
  };
};

export function UserDropdown({ user }: UserDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger>
        <Avatar className="size-8 border">
          <AvatarImage
            alt="Picture"
            src={user.avatar}
            referrerPolicy="no-referrer"
          />
          <AvatarFallback>
            <span className="sr-only">{user.name}</span>
            <User2 className="size-4" />
          </AvatarFallback>
        </Avatar>

        <DropdownMenuContent align="end">
          <div className="flex items-center justify-start gap-2 p-2">
            <div className="flex flex-col space-y-1 leading-none">
              {user.name && <p className="font-medium">{user.name}</p>}
              {user.email && (
                <p className="w-[200px] truncate text-sm text-muted-foreground">
                  {user?.email}
                </p>
              )}
            </div>
          </div>

          <DropdownMenuSeparator />

          <DropdownMenuItem asChild className="cursor-pointer">
            <Link href="/dashboard" className="flex items-center space-x-2.5">
              <LayoutDashboard className="size-4" />
              <p className="text-sm">Dashboard</p>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild className="cursor-pointer">
            <Link
              href="/dashboard/settings"
              className="flex items-center space-x-2.5"
            >
              <MixerHorizontalIcon className="size-4" />
              <p className="text-sm">Settings</p>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer">
            <div className="flex items-center space-x-2.5">
              <LogOutIcon className="size-4" />
              <p className="text-sm">Log out </p>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
}
