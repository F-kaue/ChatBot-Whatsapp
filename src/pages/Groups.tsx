
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/layout/AppSidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, MessageSquare, Settings } from "lucide-react"

const Groups = () => {
  const groups = [
    {
      id: "1",
      name: "Família Silva",
      participants: 8,
      messages: 156,
      status: "ativo",
      commands: ["help", "sorte", "todos"]
    },
    {
      id: "2", 
      name: "Amigos da Faculdade",
      participants: 23,
      messages: 89,
      status: "ativo",
      commands: ["help", "bingo", "quiz"]
    },
    {
      id: "3",
      name: "Trabalho - Equipe Dev",
      participants: 12,
      messages: 234,
      status: "inativo",
      commands: ["help"]
    }
  ]

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-gray-50 to-gray-100">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-16 items-center gap-4 px-6">
              <SidebarTrigger />
              <div className="flex-1">
                <h1 className="text-xl font-semibold">Grupos</h1>
                <p className="text-sm text-muted-foreground">
                  Gerencie os grupos conectados ao bot
                </p>
              </div>
            </div>
          </header>
          
          <div className="flex-1 p-6 space-y-6">
            <div className="grid gap-4">
              {groups.map((group) => (
                <Card key={group.id} className="animate-fade-in">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <CardTitle className="flex items-center gap-2">
                          <Users className="w-5 h-5" />
                          {group.name}
                        </CardTitle>
                        <CardDescription>
                          {group.participants} participantes
                        </CardDescription>
                      </div>
                      <Badge variant={group.status === "ativo" ? "default" : "secondary"}>
                        {group.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <MessageSquare className="w-4 h-4" />
                          <span>{group.messages} mensagens hoje</span>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium mb-2">Comandos ativos:</p>
                        <div className="flex gap-2 flex-wrap">
                          {group.commands.map((command) => (
                            <Badge key={command} variant="outline">
                              /{command}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Enviar Mensagem
                        </Button>
                        <Button variant="outline" size="sm">
                          <Settings className="w-4 h-4 mr-2" />
                          Configurar
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}

export default Groups
