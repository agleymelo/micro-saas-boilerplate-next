import { type PropsWithChildren } from "react";
import { DashboardSidebar } from "~/components/dashboard/dashboard-sidebar";
import { MobileSidebar } from "~/components/dashboard/mobile-sidebar";
import { sidebarLinks } from "~/config/dashboard-links";

export default async function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="relative flex min-h-screen w-full">
      <DashboardSidebar links={sidebarLinks} />

      <div className="flex flex-1 flex-col">
        <header className="sticky top-0 z-50 flex h-14 bg-background px-4 lg:h-[60px] xl:px-8">
          <div className="flex max-w-7xl items-center gap-x-3 px-0 container max-w-6xl">
            <MobileSidebar links={sidebarLinks} />
          </div>
        </header>

        <main className="flex-1 p-4 xl:px-8">{children}</main>
      </div>
    </div>
  );
}
