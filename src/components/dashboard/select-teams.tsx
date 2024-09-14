"use client";

import { Check, ChevronsUpDownIcon, Plus } from "lucide-react";
import { useState } from "react";
import { cn } from "~/lib/utils";
import { Button, buttonVariants } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import Link from "next/link";

type SelectTeamsProps = {
  large?: boolean;
};

export function SelectTeams({ large = false }: SelectTeamsProps) {
  const [openPopover, setOpenPopover] = useState(false);

  return (
    <div>
      <Popover open={openPopover} onOpenChange={setOpenPopover}>
        <PopoverTrigger>
          <Button
            className="h-8 px-2"
            variant={openPopover ? "secondary" : "ghost"}
            onClick={() => setOpenPopover(!openPopover)}
          >
            <div className="flex items-center space-x-3 pr-2">
              <div>ICON</div>
              <div className="flex items-center space-x-3">
                <span
                  className={cn(
                    "inline-block truncate text-sm font-medium xl:max-w-[120px]",
                    large ? "w-full" : "max-w-[80px]",
                  )}
                >
                  AGLEYX
                </span>
              </div>
            </div>
            <ChevronsUpDownIcon
              className="size-4 text-muted-foreground"
              aria-hidden="true"
            />
          </Button>
        </PopoverTrigger>

        <PopoverContent align="start" className="max-w-60 p-2">
          <div className="flex flex-col gap-1">
            <Link
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "relative flex h-9 items-center gap-3 p-3 text-muted-foreground hover:text-foreground",
              )}
              href="#"
              onClick={() => setOpenPopover(false)}
            >
              <div>ICON</div>
              <span className="flex-1 truncate text-sm font-medium text-foreground">
                AGLEYX
              </span>

              <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-foreground">
                <Check size={18} aria-hidden="true" />
              </span>
            </Link>

            <Link
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "relative flex h-9 items-center gap-3 p-3 text-muted-foreground hover:text-foreground",
              )}
              href="#"
              onClick={() => setOpenPopover(false)}
            >
              <div>ICON</div>
              <span className={`flex-1 truncate text-sm font-normal`}>
                AGLEY.DEV
              </span>
            </Link>

            <Button
              variant="outline"
              className="relative flex h-9 items-center justify-center gap-2 p-2"
              onClick={() => {
                setOpenPopover(false);
              }}
            >
              <Plus size={18} className="absolute left-2.5 top-2" />
              <span className="flex-1 truncate text-center">New Teams</span>
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
