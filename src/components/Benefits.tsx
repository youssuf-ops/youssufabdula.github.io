import { Card, CardContent } from "@/components/ui/enhanced-card"
import { CheckCircle, Clock, Target, Users } from "lucide-react"

const Benefits = () => {
  const benefits = [
    {
      icon: Target,
      title: "Decisões Baseadas em Dados",
      description: "Elimine suposições e tome decisões estratégicas fundamentadas em análises precisas e insights confiáveis.",
    },
    {
      icon: Clock,
      title: "Economia de Tempo",
      description: "Automatize processos manuais e relatórios repetitivos, liberando sua equipe para focar no que realmente importa.",
    },
    {
      icon: Users,
      title: "Vantagem Competitiva",
      description: "Identifique oportunidades antes da concorrência através de análises preditivas e monitoramento inteligente.",
    },
    {
      icon: CheckCircle,
      title: "ROI Comprovado",
      description: "Maximize o retorno sobre investimento com estratégias data-driven que geram resultados mensuráveis.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Por que Investir em <span className="text-primary">Análise de Dados?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubra como a análise de dados pode revolucionar seu negócio e gerar resultados extraordinários
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} variant="glass" className="group animate-slide-up" style={{ animationDelay: `${index * 150}ms` }}>
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-smooth">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits