"use client";

import { useMediaQuery } from "~/hooks/use-media-query";
import { ScrollArea } from "../ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { cn } from "~/lib/utils";
import { Fragment, useState } from "react";
import { Button } from "../ui/button";
import {
  CircleDashedIcon,
  Laptop,
  PanelLeftClose,
  PanelRightClose,
} from "lucide-react";
import { type SidebarNavItem } from "~/config/dashboard-links";
import { usePathname } from "next/navigation";
import { DashboardNextLink } from "../wrappers/dashboard-next-link";

type DashboardSidebarProps = {
  links: SidebarNavItem[];
};

export function DashboardSidebar({ links }: DashboardSidebarProps) {
  const path = usePathname();

  const { isTablet } = useMediaQuery();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(!isTablet);

  function handleToggleSidebar() {
    setIsSidebarExpanded(!isSidebarExpanded);
  }

  // useEffect

  return (
    <TooltipProvider delayDuration={0}>
      <div className="sticky top-0 h-full">
        <ScrollArea className="h-full overflow-y-auto border-r">
          <aside
            className={cn(
              isSidebarExpanded ? "w-[220px] xl:w-[260px]" : "w-[68px]",
              "hidden h-screen md:block",
            )}
          >
            <div className="flex h-full max-h-screen flex-1 flex-col gap-2">
              <div className="flex h-14 items-center p-4 lg:h-[60px]">
                {isSidebarExpanded ? (
                  <select name="" id="">
                    Teams
                  </select>
                ) : null}

                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-auto size-9 lg:size-8"
                  onClick={handleToggleSidebar}
                >
                  {isSidebarExpanded ? (
                    <PanelLeftClose
                      size={18}
                      className="stroke-muted-foreground"
                    />
                  ) : (
                    <PanelRightClose
                      size={18}
                      className="stroke-muted-foreground"
                    />
                  )}

                  <span className="sr-only">Toggle sidebar</span>
                </Button>
              </div>

              <nav className="flex flex-1 flex-col gap-8 px-4">
                {links.map((section) => (
                  <section
                    key={section.title}
                    className="flex flex-col gap-1"
                  >
                    {isSidebarExpanded ? (
                      <p className="text-xs text-muted-foreground">
                        {section.title}
                      </p>
                    ) : (
                      <div className="h-4" />
                    )}

                    {section.items.map((item) => {
                      const Icon = item.Icon

                      return (
                        item.href && (
                          <Fragment key={item.title}>
                            {isSidebarExpanded ? (
                              <DashboardNextLink
                                key={`link-${item.title}`}
                                href={item.href}
                                disabled={item.disabled}
                              >
                                {Icon && <Icon className="size-5" />}
                                {item.title}
                              </DashboardNextLink>
                            ) : (
                              <Tooltip key={`tooltip-${item.title}`}>
                                <TooltipTrigger asChild>
                                  <DashboardNextLink
                                    key={`link-tooltip-${item.title}`}
                                    href={item.href}
                                    disabled={item.disabled}
                                  >
                                    <span className="flex size-full items-center justify-center">
                                    {Icon && <Icon className="size-5" />}
                                    </span>
                                  </DashboardNextLink>
                                </TooltipTrigger>
                                <TooltipContent side="right">
                                  {item.title}
                                </TooltipContent>
                              </Tooltip>
                            )}
                          </Fragment>
                        )
                      );
                    })}
                  </section>
                ))}
              </nav>
            </div>
          </aside>
        </ScrollArea>
      </div>
    </TooltipProvider>
  );
}
