"use client";

import { Fragment, useState } from "react";
import { type SidebarNavItem } from "~/config/dashboard-links";
import { useMediaQuery } from "~/hooks/use-media-query";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import Link from "next/link";
import { DashboardNextLink } from "../wrappers/dashboard-next-link";
import { SelectTeams } from "./select-teams";

type MobileSidebarProps = {
  links: SidebarNavItem[];
};

export function MobileSidebar({ links }: MobileSidebarProps) {
  const [open, setOpen] = useState(false);
  const { isSm, isMobile } = useMediaQuery();

  if (isSm || isMobile) {
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="size-9 shrink-0 md:hidden"
          >
            <MenuIcon className="size-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="flex flex-col p-0">
          <ScrollArea className="h-full overflow-y-auto">
            <div className="flex h-screen flex-col">
              <nav className="flex flex-1 flex-col gap-y-8 p-6 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  Logo
                  <span className="font-urban text-xl font-bold">
                    Micro Saas Boilerplate
                  </span>
                </Link>

                <SelectTeams large={true} />

                {links.map(section => (
                  <section key={section.title} className="flex flex-col gap-1">
                    <p className="text-xs text-muted-foreground">{section.title}</p>

                    {section.items.map((item) => {
                      const Icon = item.Icon

                      return (
                        item.href && (
                          <Fragment key={item.title}>
                            <DashboardNextLink href={item.href} disabled={item.disabled} onClick={() => { if(!item.disabled) { setOpen(false) } }}>
                            {Icon && <Icon className="size-5" />}
                            {item.title}
                            </DashboardNextLink>
                          </Fragment>
                        )
                      )
                    })}
                  </section>
                ))}
              </nav>
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div className="flex size-9 animate-pulse rounded-lg bg-muted md:hidden" />
  );
}
