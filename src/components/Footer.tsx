import { Heart } from "lucide-react"

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Desenvolvido com <Heart className="w-4 h-4 text-primary fill-current" /> para transformar dados em valor
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © 2024 Data Analytics Professional. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer