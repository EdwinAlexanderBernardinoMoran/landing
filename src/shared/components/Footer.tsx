import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-secondary/30 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-accent mb-4">◆ NEXUS</h3>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Transformando ideas en realidad a través de tecnología innovadora y diseño excepcional.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Producto</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="text-foreground/60 hover:text-accent text-sm transition-colors">Características</Link></li>
              <li><Link to="#" className="text-foreground/60 hover:text-accent text-sm transition-colors">Precios</Link></li>
              <li><Link to="#" className="text-foreground/60 hover:text-accent text-sm transition-colors">Seguridad</Link></li>
              <li><Link to="#" className="text-foreground/60 hover:text-accent text-sm transition-colors">Roadmap</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-foreground/60 hover:text-accent text-sm transition-colors">Sobre Nosotros</Link></li>
              <li><Link to="#" className="text-foreground/60 hover:text-accent text-sm transition-colors">Blog</Link></li>
              <li><Link to="#" className="text-foreground/60 hover:text-accent text-sm transition-colors">Carreras</Link></li>
              <li><Link to="#" className="text-foreground/60 hover:text-accent text-sm transition-colors">Prensa</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Síguenos</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="text-foreground/60 hover:text-accent text-sm transition-colors">Twitter/X</Link></li>
              <li><Link to="#" className="text-foreground/60 hover:text-accent text-sm transition-colors">LinkedIn</Link></li>
              <li><Link to="#" className="text-foreground/60 hover:text-accent text-sm transition-colors">GitHub</Link></li>
              <li><Link to="#" className="text-foreground/60 hover:text-accent text-sm transition-colors">Discord</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/50 text-sm">© 2025 NEXUS. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="#" className="text-foreground/50 hover:text-foreground text-sm transition-colors">Privacidad</Link>
            <Link to="#" className="text-foreground/50 hover:text-foreground text-sm transition-colors">Términos</Link>
            <Link to="#" className="text-foreground/50 hover:text-foreground text-sm transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
