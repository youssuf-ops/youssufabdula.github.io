import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/enhanced-card"
import { BarChart3, Database, FileSpreadsheet, PieChart, TrendingUp, Zap } from "lucide-react"

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Análise Exploratória",
      description: "Descoberta de padrões, tendências e insights ocultos nos seus dados através de análises estatísticas avançadas.",
    },
    {
      icon: PieChart,
      title: "Dashboards Interativos",
      description: "Criação de painéis visuais intuitivos com Power BI, Tableau ou Python para monitoramento em tempo real.",
    },
    {
      icon: TrendingUp,
      title: "Modelagem Preditiva",
      description: "Desenvolvimento de modelos de machine learning para previsões de vendas, demanda e comportamento.",
    },
    {
      icon: Database,
      title: "ETL e Pipelines",
      description: "Automação de processos de extração, transformação e carregamento de dados de múltiplas fontes.",
    },
    {
      icon: FileSpreadsheet,
      title: "Relatórios Automatizados",
      description: "Geração automática de relatórios personalizados com insights acionáveis para tomada de decisão.",
    },
    {
      icon: Zap,
      title: "Consultoria Estratégica",
      description: "Orientação completa sobre estratégias data-driven e implementação de cultura analítica.",
    },
  ]

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Serviços <span className="text-primary">Especializados</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções completas em análise de dados para impulsionar o crescimento do seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} variant="feature" className="group animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader>
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-smooth">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services