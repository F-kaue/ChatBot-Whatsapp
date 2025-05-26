
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

const logs = [
  {
    id: 1,
    time: "14:30",
    type: "comando",
    message: "Comando /help executado no grupo 'Família'",
    status: "sucesso",
    user: "João Silva"
  },
  {
    id: 2,
    time: "14:25",
    type: "agendamento",
    message: "Mensagem promocional enviada para 3 grupos",
    status: "sucesso",
    user: "Sistema"
  },
  {
    id: 3,
    time: "14:20",
    type: "comando",
    message: "Comando /bingo iniciado no grupo 'Amigos'",
    status: "sucesso",
    user: "Maria Santos"
  },
  {
    id: 4,
    time: "14:15",
    type: "erro",
    message: "Falha ao enviar mensagem para grupo 'Trabalho'",
    status: "erro",
    user: "Sistema"
  },
  {
    id: 5,
    time: "14:10",
    type: "conexão",
    message: "WhatsApp reconectado com sucesso",
    status: "sucesso",
    user: "Sistema"
  }
]

export function RecentLogs() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "sucesso":
        return "bg-green-100 text-green-800"
      case "erro":
        return "bg-red-100 text-red-800"
      case "aviso":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "comando":
        return "bg-blue-100 text-blue-800"
      case "agendamento":
        return "bg-purple-100 text-purple-800"
      case "conexão":
        return "bg-green-100 text-green-800"
      case "erro":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle>Logs Recentes</CardTitle>
        <CardDescription>
          Atividades mais recentes do bot
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px]">
          <div className="space-y-4">
            {logs.map((log) => (
              <div key={log.id} className="flex items-start space-x-4 p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
                <div className="text-sm text-muted-foreground min-w-[50px]">
                  {log.time}
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className={getTypeColor(log.type)}>
                      {log.type}
                    </Badge>
                    <Badge variant="outline" className={getStatusColor(log.status)}>
                      {log.status}
                    </Badge>
                  </div>
                  <p className="text-sm">{log.message}</p>
                  <p className="text-xs text-muted-foreground">
                    Por: {log.user}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
