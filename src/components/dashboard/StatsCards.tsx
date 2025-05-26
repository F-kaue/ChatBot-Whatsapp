
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, MessageSquare, Calendar, BarChart3 } from "lucide-react"

const stats = [
  {
    title: "Grupos Ativos",
    value: "12",
    description: "Grupos conectados",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    title: "Mensagens Hoje",
    value: "1,247",
    description: "+12% desde ontem",
    icon: MessageSquare,
    color: "text-whatsapp",
    bgColor: "bg-green-50"
  },
  {
    title: "Comandos Executados",
    value: "89",
    description: "Nas últimas 24h",
    icon: BarChart3,
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    title: "Agendamentos",
    value: "5",
    description: "Ativos para hoje",
    icon: Calendar,
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  }
]

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={stat.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {stat.title}
            </CardTitle>
            <div className={`p-2 rounded-lg ${stat.bgColor}`}>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">
              {stat.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
