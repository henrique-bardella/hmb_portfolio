import { Linkedin, Mail, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Avatar placeholder */}
        <div className="w-32 h-32 mx-auto rounded-full gradient-primary flex items-center justify-center animate-scale-in">
          <span className="text-4xl font-bold text-primary-foreground">BI</span>
        </div>

        {/* Title */}
        <div className="space-y-4 animate-slide-up stagger-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Analista de{" "}
            <span className="gradient-text">Business Intelligence</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Empresas & Negócios | Bradesco
          </p>
        </div>

        {/* Description */}
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-slide-up stagger-2">
          Atuo com inteligência analítica para apoiar decisões e ações comerciais para públicos que 
          vão de Direção Executiva a agências e gerentes de conta. Trabalho com modelagem de dados, 
          KPIs e governança de regras, além de dashboards no Power BI e pipelines de dados em SAS, 
          SQL, Python e Databricks, com atenção à performance em grandes volumes.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center animate-slide-up stagger-3">
          <Button 
            onClick={scrollToContact}
            className="gradient-primary text-primary-foreground rounded-full px-8 py-6 text-base hover:opacity-90 transition-all hover:scale-105"
          >
            <Mail className="mr-2 h-5 w-5" />
            Entre em Contato
          </Button>
          <Button 
            variant="outline"
            className="rounded-full px-8 py-6 text-base hover:bg-muted transition-all"
            asChild
          >
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>
          <Button 
            variant="outline"
            className="rounded-full px-8 py-6 text-base hover:bg-muted transition-all"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
