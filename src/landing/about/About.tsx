import { CheckCircle } from "lucide-react"

export const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero Section */}
      <section className="relative px-6 md:px-8 lg:px-12 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-5xl md:text-6xl font-bold">Quiénes Somos</h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Una misión global para democratizar la tecnología y empoderar a las empresas de cualquier tamaño.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="border-t border-border/50 px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-secondary/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Nuestra Historia</h2>
          <div className="space-y-8 text-lg text-foreground/80 leading-relaxed">
            <p>
              NEXUS fue fundada en 2018 por un grupo de emprendedores y desarrolladores apasionados que creían que la tecnología moderna debería ser accesible para todos. Comenzamos en un pequeño garaje en San Francisco con una visión ambiciosa: eliminar las barreras que impedían que las pequeñas empresas compitieran con las grandes corporaciones.
            </p>
            <p>
              En nuestros primeros años, nos enfrentamos a desafíos significativos. Nuestro equipo trabajó incansablemente para construir una plataforma que no solo fuera poderosa, sino también intuitiva. Invertimos años en investigación y desarrollo, escuchando constantemente a nuestros usuarios para entender sus necesidades reales.
            </p>
            <p>
              Hoy, NEXUS sirve a más de 10,000 usuarios en 150 países y ha procesado millones de transacciones en todo el mundo. Pero nuestra misión original permanece sin cambios: empoderar a las empresas para que crezcan, innoven y prosperen.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="px-6 md:px-8 lg:px-12 py-20 md:py-32 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Mission */}
          <div className="p-8 rounded-xl border border-border/50 bg-secondary/20">
            <h3 className="text-2xl font-bold mb-4 text-accent">Misión</h3>
            <p className="text-foreground/80 leading-relaxed">
              Democratizar la tecnología avanzada para que cada empresa, sin importar su tamaño, pueda competir y prosperar en la era digital.
            </p>
          </div>

          {/* Vision */}
          <div className="p-8 rounded-xl border border-border/50 bg-secondary/20">
            <h3 className="text-2xl font-bold mb-4 text-accent">Visión</h3>
            <p className="text-foreground/80 leading-relaxed">
              Ser la plataforma global de confianza que impulsa la transformación digital y el crecimiento sostenible de negocios en todo el mundo.
            </p>
          </div>

          {/* Values */}
          <div className="p-8 rounded-xl border border-border/50 bg-secondary/20">
            <h3 className="text-2xl font-bold mb-4 text-accent">Valores</h3>
            <p className="text-foreground/80 leading-relaxed">
              Innovación, integridad, inclusión y excelencia. Creemos en el poder de la colaboración y en dejar un impacto positivo en el mundo.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="border-t border-border/50 px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Nuestro Equipo</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent/40 to-accent/10 flex items-center justify-center">
                <div className="text-4xl font-bold text-accent">AC</div>
              </div>
              <h3 className="text-xl font-bold mb-2">Alexandra Chen</h3>
              <p className="text-foreground/60 mb-4">CEO & Co-founder</p>
              <p className="text-foreground/70 leading-relaxed text-sm">
                Visionaria en tecnología con 15 años de experiencia en startups. Graduada del MIT en Ciencias de la Computación.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent/40 to-accent/10 flex items-center justify-center">
                <div className="text-4xl font-bold text-accent">MJ</div>
              </div>
              <h3 className="text-xl font-bold mb-2">Marcus Johnson</h3>
              <p className="text-foreground/60 mb-4">CTO & Co-founder</p>
              <p className="text-foreground/70 leading-relaxed text-sm">
                Arquitecto de sistemas distribuidos. Anteriormente en Google trabajando en infraestructura de cloud.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent/40 to-accent/10 flex items-center justify-center">
                <div className="text-4xl font-bold text-accent">SG</div>
              </div>
              <h3 className="text-xl font-bold mb-2">Sofia Garcia</h3>
              <p className="text-foreground/60 mb-4">Chief Product Officer</p>
              <p className="text-foreground/70 leading-relaxed text-sm">
                Experta en diseño UX/UI y estrategia de producto. Ha liderado productos con millones de usuarios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 md:px-8 lg:px-12 py-20 md:py-32 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16">Por qué elegir NEXUS</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex gap-4">
            <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2">Experiencia Probada</h3>
              <p className="text-foreground/70">Más de 6 años sirviendo a empresas de Fortune 500 y startups innovadores.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2">Soporte 24/7</h3>
              <p className="text-foreground/70">Equipo dedicado listo para ayudarte en cualquier momento del día.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2">Innovación Constante</h3>
              <p className="text-foreground/70">Actualizaciones mensuales con nuevas características basadas en feedback de usuarios.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2">Precio Justo</h3>
              <p className="text-foreground/70">Sin sorpresas ocultas. Transparencia total en precios desde el primer día.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}