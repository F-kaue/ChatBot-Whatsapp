
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/layout/AppSidebar"
import { CommandsManager } from "@/components/commands/CommandsManager"

const Commands = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-gray-50 to-gray-100">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-16 items-center gap-4 px-6">
              <SidebarTrigger />
              <div className="flex-1">
                <h1 className="text-xl font-semibold">Comandos</h1>
                <p className="text-sm text-muted-foreground">
                  Gerencie todos os comandos do bot
                </p>
              </div>
            </div>
          </header>
          
          <div className="flex-1 p-6">
            <CommandsManager />
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}

export default Commands
