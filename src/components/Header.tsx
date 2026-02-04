import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 py-3 sm:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 pill-nav px-4 sm:px-6">
          {/* Logo */}
          <div className="flex items-center min-w-0">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground font-bold text-lg">HB</span>
              </div>
              <span className="text-lg font-bold hidden sm:block">Portfolio</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all"
            >
              Experiência
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all"
            >
              Formação
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all"
            >
              Contato
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-muted/60 transition-all"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 p-4 glass-card animate-fade-in">
            <nav className="flex flex-col gap-2">
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-medium hover:bg-muted/60 rounded-lg px-4 py-3 text-left transition-all"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-sm font-medium hover:bg-muted/60 rounded-lg px-4 py-3 text-left transition-all"
              >
                Experiência
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-sm font-medium hover:bg-muted/60 rounded-lg px-4 py-3 text-left transition-all"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-sm font-medium hover:bg-muted/60 rounded-lg px-4 py-3 text-left transition-all"
              >
                Projetos
              </button>
              <button
                onClick={() => scrollToSection("education")}
                className="text-sm font-medium hover:bg-muted/60 rounded-lg px-4 py-3 text-left transition-all"
              >
                Formação
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium hover:bg-muted/60 rounded-lg px-4 py-3 text-left transition-all"
              >
                Contato
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
