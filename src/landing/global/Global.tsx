import { ArrowRight, Rocket, Shield, Zap } from "lucide-react"

export const Global = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative px-6 md:px-8 lg:px-12 py-20 md:py-32 max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
            El futuro de la <span className="text-accent">innovación</span> comienza aquí
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto text-balance leading-relaxed">
            NEXUS conecta tecnología de vanguardia con creatividad sin límites para transformar tu visión en realidad.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
            <button className="px-8 py-3 bg-accent text-accent-foreground rounded-full font-semibold hover:bg-accent/90 transition-colors flex items-center justify-center gap-2">
              Comenzar ahora <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-3 border border-accent/50 text-foreground rounded-full font-semibold hover:bg-accent/10 transition-colors">
              Ver demo
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border/50 bg-secondary/20 px-6 md:px-8 lg:px-12 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">10K+</div>
            <p className="text-foreground/70">Usuarios activos globales</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">500+</div>
            <p className="text-foreground/70">Empresas confían en nosotros</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">99.9%</div>
            <p className="text-foreground/70">Disponibilidad garantizada</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 md:px-8 lg:px-12 py-20 md:py-32 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Características principales</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="group p-8 rounded-xl border border-border/50 hover:border-accent/50 bg-secondary/20 hover:bg-secondary/40 transition-all">
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
              <Zap className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-3">Velocidad Extrema</h3>
            <p className="text-foreground/70 leading-relaxed">
              Renderizado instantáneo con tecnología de edge computing. Carga tu contenido en milisegundos sin compromisos.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group p-8 rounded-xl border border-border/50 hover:border-accent/50 bg-secondary/20 hover:bg-secondary/40 transition-all">
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
              <Shield className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-3">Seguridad Avanzada</h3>
            <p className="text-foreground/70 leading-relaxed">
              Encriptación de nivel militar con compliance GDPR y SOC 2. Tu data está protegida 24/7 por nuestro equipo de seguridad.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group p-8 rounded-xl border border-border/50 hover:border-accent/50 bg-secondary/20 hover:bg-secondary/40 transition-all">
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
              <Rocket className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-3">Escalabilidad Ilimitada</h3>
            <p className="text-foreground/70 leading-relaxed">
              Crece sin preocupaciones. Nuestra infraestructura se adapta automáticamente a tus necesidades en tiempo real.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 md:px-8 lg:px-12 py-20 md:py-32 max-w-7xl mx-auto text-center">
        <div className="space-y-8 p-12 rounded-2xl border border-accent/30 bg-gradient-to-b from-accent/10 to-accent/5">
          <h2 className="text-4xl md:text-5xl font-bold">¿Listo para revolucionar tu negocio?</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Únete a miles de empresas que ya están transformando su futuro con NEXUS.
          </p>
          <button className="px-8 py-3 bg-accent text-accent-foreground rounded-full font-semibold hover:bg-accent/90 transition-colors inline-flex items-center gap-2">
            Comenzar prueba gratuita <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </>
  )
}