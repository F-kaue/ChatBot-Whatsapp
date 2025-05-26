
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Edit, Plus, Trash2 } from "lucide-react"

interface Command {
  id: string
  name: string
  description: string
  response: string
  isActive: boolean
  usage: number
  groups: string[]
}

const initialCommands: Command[] = [
  {
    id: "help",
    name: "/help",
    description: "Mostra a lista de comandos disponíveis",
    response: "📋 *Comandos Disponíveis:*\n\n/help - Lista de comandos\n/todos - Menciona todos\n/bingo - Inicia bingo\n/sorte - Sorte do dia\n/tag - Marca todos\n/forca - Jogo da forca\n/quiz - Quiz interativo",
    isActive: true,
    usage: 45,
    groups: ["todos"]
  },
  {
    id: "todos",
    name: "/todos",
    description: "Menciona todos os membros do grupo",
    response: "📢 Atenção todos! @everyone",
    isActive: true,
    usage: 23,
    groups: ["todos"]
  },
  {
    id: "bingo",
    name: "/bingo",
    description: "Inicia uma rodada de bingo",
    response: "🎲 *BINGO INICIADO!*\n\nPrimeiro número: {numero}",
    isActive: true,
    usage: 12,
    groups: ["entretenimento"]
  },
  {
    id: "sorte",
    name: "/sorte",
    description: "Mostra a sorte do dia em porcentagem",
    response: "🍀 Sua sorte hoje está em {porcentagem}%!",
    isActive: true,
    usage: 34,
    groups: ["entretenimento"]
  },
  {
    id: "forca",
    name: "/forca",
    description: "Inicia o jogo da forca",
    response: "🎯 *JOGO DA FORCA*\n\n_ _ _ _ _\n\nDigite uma letra!",
    isActive: false,
    usage: 8,
    groups: ["jogos"]
  },
  {
    id: "quiz",
    name: "/quiz",
    description: "Inicia um quiz interativo",
    response: "🧠 *QUIZ TIME!*\n\nPergunta 1: Qual é a capital do Brasil?",
    isActive: true,
    usage: 19,
    groups: ["educativo"]
  }
]

export function CommandsManager() {
  const [commands, setCommands] = useState<Command[]>(initialCommands)
  const [editingCommand, setEditingCommand] = useState<Command | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const toggleCommand = (id: string) => {
    setCommands(prev => prev.map(cmd => 
      cmd.id === id ? { ...cmd, isActive: !cmd.isActive } : cmd
    ))
  }

  const handleEdit = (command: Command) => {
    setEditingCommand(command)
    setIsDialogOpen(true)
  }

  const handleSave = () => {
    if (editingCommand) {
      setCommands(prev => prev.map(cmd => 
        cmd.id === editingCommand.id ? editingCommand : cmd
      ))
      setEditingCommand(null)
      setIsDialogOpen(false)
    }
  }

  const handleDelete = (id: string) => {
    setCommands(prev => prev.filter(cmd => cmd.id !== id))
  }

  const handleAddNew = () => {
    const newCommand: Command = {
      id: `custom_${Date.now()}`,
      name: "/novo",
      description: "Novo comando personalizado",
      response: "Resposta do novo comando",
      isActive: true,
      usage: 0,
      groups: ["personalizado"]
    }
    setEditingCommand(newCommand)
    setIsDialogOpen(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Gerenciamento de Comandos</h2>
          <p className="text-muted-foreground">Configure e gerencie todos os comandos do bot</p>
        </div>
        <Button onClick={handleAddNew} className="bg-whatsapp hover:bg-whatsapp-dark">
          <Plus className="w-4 h-4 mr-2" />
          Novo Comando
        </Button>
      </div>

      <div className="grid gap-4">
        {commands.map((command) => (
          <Card key={command.id} className="animate-fade-in">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-lg font-mono">{command.name}</CardTitle>
                  <CardDescription>{command.description}</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">
                    {command.usage} usos
                  </Badge>
                  <Switch 
                    checked={command.isActive}
                    onCheckedChange={() => toggleCommand(command.id)}
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label className="text-sm font-medium">Resposta:</Label>
                  <div className="mt-1 p-3 bg-gray-50 rounded-lg text-sm">
                    {command.response}
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">
                    Grupos: {command.groups.join(", ")}
                  </Badge>
                  <div className="flex-1"></div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(command)}
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    Editar
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(command.id)}
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Excluir
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              {editingCommand?.id.startsWith('custom_') ? 'Novo Comando' : 'Editar Comando'}
            </DialogTitle>
            <DialogDescription>
              Configure os detalhes do comando
            </DialogDescription>
          </DialogHeader>
          
          {editingCommand && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome do Comando</Label>
                  <Input
                    id="name"
                    value={editingCommand.name}
                    onChange={(e) => setEditingCommand({
                      ...editingCommand,
                      name: e.target.value
                    })}
                    placeholder="/comando"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="groups">Grupos</Label>
                  <Input
                    id="groups"
                    value={editingCommand.groups.join(", ")}
                    onChange={(e) => setEditingCommand({
                      ...editingCommand,
                      groups: e.target.value.split(", ")
                    })}
                    placeholder="todos, entretenimento"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Descrição</Label>
                <Input
                  id="description"
                  value={editingCommand.description}
                  onChange={(e) => setEditingCommand({
                    ...editingCommand,
                    description: e.target.value
                  })}
                  placeholder="Descrição do comando"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="response">Resposta</Label>
                <Textarea
                  id="response"
                  value={editingCommand.response}
                  onChange={(e) => setEditingCommand({
                    ...editingCommand,
                    response: e.target.value
                  })}
                  placeholder="Mensagem que será enviada quando o comando for executado"
                  rows={4}
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch
                  id="active"
                  checked={editingCommand.isActive}
                  onCheckedChange={(checked) => setEditingCommand({
                    ...editingCommand,
                    isActive: checked
                  })}
                />
                <Label htmlFor="active">Comando ativo</Label>
              </div>
              
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancelar
                </Button>
                <Button onClick={handleSave} className="bg-whatsapp hover:bg-whatsapp-dark">
                  Salvar
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
