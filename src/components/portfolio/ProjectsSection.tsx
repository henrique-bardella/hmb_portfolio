import { ExternalLink, BarChart3, TrendingUp, Users, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
  link: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "Dashboard Comercial Executivo",
    description: "Painel estratégico para acompanhamento de metas, performance de vendas e indicadores-chave para diretoria executiva. Visão consolidada com drill-down por regional.",
    tags: ["Power BI", "DAX", "SQL Server"],
    icon: <BarChart3 className="h-6 w-6" />,
    link: "https://app.powerbi.com",
  },
  {
    title: "Análise de Cross-Sell & Recomendação",
    description: "Modelo preditivo para identificação de oportunidades de venda cruzada, utilizando clusterização de clientes e score de propensão.",
    tags: ["Python", "Databricks", "ML"],
    icon: <TrendingUp className="h-6 w-6" />,
    link: "https://github.com",
  },
  {
    title: "HR Analytics Dashboard",
    description: "Dashboard de people analytics com indicadores de turnover, headcount, absenteísmo e performance por área. Suporte à tomada de decisão do RH.",
    tags: ["Power BI", "Excel", "SQL"],
    icon: <Users className="h-6 w-6" />,
    link: "https://app.powerbi.com",
  },
  {
    title: "Pipeline de Dados ALM",
    description: "Automação de processos ETL para produtos financeiros, integrando múltiplas fontes de dados com governança e controle de qualidade.",
    tags: ["SAS", "Azure DevOps", "Git"],
    icon: <ShoppingCart className="h-6 w-6" />,
    link: "https://github.com",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projetos & Cases</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Exemplos de dashboards, análises e soluções de dados que desenvolvi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`glass-card overflow-hidden card-hover animate-slide-up stagger-${index + 1}`}
            >
              {/* Card Header with gradient */}
              <div className="h-32 gradient-primary relative flex items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                  {project.icon}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  className="w-full mt-4 gradient-primary text-white rounded-xl hover:opacity-90 transition-all hover:scale-[1.02]"
                  asChild
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Ver Dashboard
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
