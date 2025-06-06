
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/layout/AppSidebar"
import { ConnectionStatus } from "@/components/dashboard/ConnectionStatus"
import { StatsCards } from "@/components/dashboard/StatsCards"
import { RecentLogs } from "@/components/dashboard/RecentLogs"

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-gray-50 to-gray-100">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-16 items-center gap-4 px-6">
              <SidebarTrigger />
              <div className="flex-1">
                <h1 className="text-xl font-semibold">Dashboard</h1>
                <p className="text-sm text-muted-foreground">
                  Painel principal do WhatsApp Bot Manager
                </p>
              </div>
            </div>
          </header>
          
          <div className="flex-1 p-6 space-y-6">
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-6">
                <StatsCards />
                <RecentLogs />
              </div>
              <div>
                <ConnectionStatus />
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}

export default Index
