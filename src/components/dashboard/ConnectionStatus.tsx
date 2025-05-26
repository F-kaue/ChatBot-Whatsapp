
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wifi, WifiOff, RotateCcw, QrCode } from "lucide-react"

export function ConnectionStatus() {
  const [isConnected, setIsConnected] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const [qrCode, setQrCode] = useState<string>("")

  const handleConnect = () => {
    setIsConnecting(true)
    // Simular processo de conexão
    setTimeout(() => {
      setIsConnected(true)
      setIsConnecting(false)
      setQrCode("")
    }, 3000)
    
    // Simular geração de QR Code
    setQrCode("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2ZmZiIvPgogIDx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjE0Ij5RUiBDb2RlPC90ZXh0Pgo8L3N2Zz4K")
  }

  const handleDisconnect = () => {
    setIsConnected(false)
    setQrCode("")
  }

  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {isConnected ? (
            <>
              <Wifi className="w-5 h-5 text-whatsapp" />
              <span>WhatsApp Conectado</span>
            </>
          ) : (
            <>
              <WifiOff className="w-5 h-5 text-destructive" />
              <span>WhatsApp Desconectado</span>
            </>
          )}
        </CardTitle>
        <CardDescription>
          Status da conexão com o WhatsApp via Baileys
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium">Status da Conexão</p>
            <Badge variant={isConnected ? "default" : "destructive"} className={isConnected ? "bg-whatsapp" : ""}>
              {isConnecting ? "Conectando..." : isConnected ? "Ativo" : "Inativo"}
            </Badge>
          </div>
          
          <div className="flex gap-2">
            {isConnected ? (
              <Button onClick={handleDisconnect} variant="destructive" size="sm">
                Desconectar
              </Button>
            ) : (
              <Button 
                onClick={handleConnect} 
                disabled={isConnecting}
                className="bg-whatsapp hover:bg-whatsapp-dark"
                size="sm"
              >
                {isConnecting ? (
                  <>
                    <RotateCcw className="w-4 h-4 mr-2 animate-spin" />
                    Conectando
                  </>
                ) : (
                  "Conectar"
                )}
              </Button>
            )}
          </div>
        </div>

        {qrCode && !isConnected && (
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <QrCode className="w-4 h-4" />
              <p className="text-sm font-medium">Escaneie o QR Code no WhatsApp</p>
            </div>
            <div className="flex justify-center p-4 bg-gray-50 rounded-lg">
              <img src={qrCode} alt="QR Code" className="w-48 h-48 border-2 border-gray-200 rounded-lg" />
            </div>
            <p className="text-xs text-muted-foreground text-center">
              Abra o WhatsApp → Menu → Dispositivos conectados → Conectar um dispositivo
            </p>
          </div>
        )}

        {isConnected && (
          <div className="p-4 bg-whatsapp/10 rounded-lg border border-whatsapp/20">
            <div className="flex items-center gap-2 text-whatsapp">
              <div className="w-2 h-2 bg-whatsapp rounded-full animate-pulse-glow"></div>
              <p className="text-sm font-medium">Bot ativo e funcionando</p>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Última conexão: agora mesmo
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
