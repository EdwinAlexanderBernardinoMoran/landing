import { Link } from "react-router";

export default function Header() {

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <nav className="flex h-16 items-center justify-between px-6 md:px-8 lg:px-12 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-accent hover:text-accent/90 transition-colors">
          ◆ NEXUS
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8">
          <Link
            to="/"
          >
            Inicio
          </Link>
          <Link
            to="/about"
          >
            Quiénes Somos
          </Link>
          <Link
            to="/contact"
          >
            Contacto
          </Link>
        </div>

        {/* CTA Button */}
        <button className="px-6 py-2 bg-accent text-accent-foreground rounded-full text-sm font-semibold hover:bg-accent/90 transition-colors">
          Get Started
        </button>
      </nav>
    </header>
  )
}
