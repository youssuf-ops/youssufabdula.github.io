import { Button } from "@/components/ui/enhanced-button"
import { ChevronRight, TrendingUp } from "lucide-react"

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Header with name */}
      <div className="absolute top-6 left-6 z-20">
        <h2 className="text-lg font-semibold text-foreground">
          Youssuf Abdula <span className="text-primary">|</span> <span className="text-muted-foreground">Analista de Dados</span>
        </h2>
      </div>
      
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-90" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-glow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl animate-glow delay-1000" />
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-full text-sm font-medium text-primary mb-6 shadow-soft">
            <TrendingUp className="w-4 h-4" />
            Especialista em Análise de Dados
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 hero-text leading-tight">
            Transforme Dados em
            <br />
            <span className="text-primary">Decisões Estratégicas</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Freelancer especializado em análise de dados, dashboards interativos e insights estratégicos.
            Ajudo empresas a descobrir oportunidades ocultas nos seus dados.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button 
              variant="hero" 
              size="xl" 
              onClick={scrollToContact}
              className="group"
            >
              Solicitar Proposta
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline-hero" 
              size="xl"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Serviços
            </Button>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 animate-scale-in">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10</div>
            <div className="text-muted-foreground">Projetos Entregues</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Satisfação dos Clientes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">2</div>
            <div className="text-muted-foreground">Anos de Experiência</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero