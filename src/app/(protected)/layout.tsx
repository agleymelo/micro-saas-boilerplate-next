import { type PropsWithChildren } from "react";
import { DashboardSidebar } from "~/components/dashboard/dashboard-sidebar";
import { sidebarLinks } from "~/config/dashboard-links";

export default async function DashboardLayout({ children }: PropsWithChildren) {

  return (
    <div className="relative flex min-h-screen w-full">
    <DashboardSidebar links={sidebarLinks} />
      {children}
    </div>
  )
}