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
    <section id="about" className="py-16 md:py-15">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Avatar */}
        <div className="w-60 h-60 mx-auto rounded-full overflow-hidden animate-scale-in">
          <img
            src="/img.jpg"
            alt="Foto de perfil"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title */}
         <div className="space-y-4 animate-slide-up stagger-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Henrique Bardella
          </h1>
        </div>
        <div className="space-y-4 animate-slide-up stagger-1">
          <h1 className="text-3xl md:text-2xl lg:text-2xl font-bold leading-tight">
            Analista de{" "}
            <span className="gradient-text">Business Intelligence, Data Science & Analytics</span>
          </h1>
          {/* <p className="text-xl text-muted-foreground">
          Analista de Business Intelligence, Data Science & Analytics
          </p> */}
        </div>

        {/* Description */}
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-slide-up stagger-2">
          Sou Analista de Business Intelligence, Data Science & Analytics com trajetória construída entre desenvolvimento de sistemas e inteligência analítica. Ao longo da carreira, atuei em projetos de dados e produtos digitais em diferentes contextos — de soluções internas e automações a entregas para clientes e parceiros — sempre conectando dados, regras de negócio e decisão.
            <br></br>
            <br></br>

Atualmente, no Bradesco (Empresas & Negócios), desenvolvo estudos e dashboards no Power BI para orientar ações comerciais e decisões em diferentes níveis (estratégico ao operacional), com foco em segmentação, comportamento e performance. Trabalho com modelagem de dados, KPIs e governança, além de pipelines e análises em SAS, SQL, Python e Databricks, buscando consistência, escalabilidade e impacto mensurável. 
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
            <a href="https://www.linkedin.com/in/henrique-bardella/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>
          <Button 
            variant="outline"
            className="rounded-full px-8 py-6 text-base hover:bg-muted transition-all"
            asChild
          >
            <a href="https://github.com/henrique-bardella" target="_blank" rel="noopener noreferrer">
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
