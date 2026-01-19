import { Mail, MapPin, Phone, Send } from "lucide-react"
import { useState } from "react"

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero Section */}
      <section className="relative px-6 md:px-8 lg:px-12 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold">Contacto</h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            ¿Tienes preguntas? Nos encantaría escucharte. Contacta con nuestro equipo y responderemos lo más rápido posible.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="border-t border-border/50 px-6 md:px-8 lg:px-12 py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mb-20">
          {/* Email */}
          <div className="text-center p-8 rounded-xl border border-border/50 bg-background hover:bg-background/80 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-bold text-lg mb-2">Email</h3>
            <p className="text-foreground/70 mb-4">Envíanos un mensaje y responderemos en 24 horas.</p>
            <a href="mailto:hello@nexus.io" className="text-accent hover:text-accent/80 font-medium">
              hello@nexus.io
            </a>
          </div>

          {/* Phone */}
          <div className="text-center p-8 rounded-xl border border-border/50 bg-background hover:bg-background/80 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mx-auto mb-6">
              <Phone className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-bold text-lg mb-2">Teléfono</h3>
            <p className="text-foreground/70 mb-4">Soporte disponible de lunes a viernes 9am - 6pm EST.</p>
            <a href="tel:+12025551234" className="text-accent hover:text-accent/80 font-medium">
              +1 (202) 555-1234
            </a>
          </div>

          {/* Address */}
          <div className="text-center p-8 rounded-xl border border-border/50 bg-background hover:bg-background/80 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-bold text-lg mb-2">Ubicación</h3>
            <p className="text-foreground/70">
              123 Innovation Ave<br />
              San Francisco, CA 94105
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-6 md:px-8 lg:px-12 py-20 md:py-32 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Envíanos un mensaje</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Nombre Completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-secondary/40 border border-border/50 text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-colors"
              placeholder="Juan Pérez"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-secondary/40 border border-border/50 text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-colors"
              placeholder="juan@ejemplo.com"
            />
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-2">
              Asunto
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-secondary/40 border border-border/50 text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-colors"
              placeholder="¿Cómo podemos ayudarte?"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 rounded-lg bg-secondary/40 border border-border/50 text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-colors resize-none"
              placeholder="Cuéntanos más sobre tu consulta..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors flex items-center justify-center gap-2"
          >
            {submitted ? '✓ Mensaje enviado' : 'Enviar mensaje'}
            {!submitted && <Send className="w-5 h-5" />}
          </button>

          {submitted && (
            <p className="text-center text-accent text-sm">
              Gracias por tu mensaje. Nos pondremos en contacto pronto.
            </p>
          )}
        </form>
      </section>

      {/* FAQ Section */}
      <section className="border-t border-border/50 px-6 md:px-8 lg:px-12 py-20 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            <div className="p-6 rounded-lg border border-border/50 bg-background">
              <h3 className="font-bold text-lg mb-2">¿Cuál es el tiempo de respuesta?</h3>
              <p className="text-foreground/70">
                Respondemos todos los mensajes dentro de 24 horas durante días hábiles. Para urgencias, llama a nuestro teléfono de soporte.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border/50 bg-background">
              <h3 className="font-bold text-lg mb-2">¿Ofrece prueba gratuita?</h3>
              <p className="text-foreground/70">
                Sí, ofrecemos una prueba gratuita de 14 días sin necesidad de tarjeta de crédito. Acceso completo a todas las características.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border/50 bg-background">
              <h3 className="font-bold text-lg mb-2">¿Puedo cambiar de plan?</h3>
              <p className="text-foreground/70">
                Por supuesto. Puedes cambiar, actualizar o cancelar tu suscripción en cualquier momento desde tu panel de control.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border/50 bg-background">
              <h3 className="font-bold text-lg mb-2">¿Qué métodos de pago aceptan?</h3>
              <p className="text-foreground/70">
                Aceptamos todas las tarjetas de crédito principales, transferencias bancarias y criptomonedas en planes anuales.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}