import { useRef, useState } from "react";
import { ExternalLink, BarChart3, TrendingUp, Users, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
  link: string;
  images: string[];
}

const projects: Project[] = [
  {
    title: "Dashboard RH",
    description: "Painel estratégico para acompanhamento de metas, performance de vendas e indicadores-chave para diretoria executiva. Visão consolidada com drill-down por regional.",
    tags: ["Power BI", "DAX", "SQL Server"],
    icon: <BarChart3 className="h-6 w-6" />,
    link: "https://app.powerbi.com/view?r=eyJrIjoiMzVmMWY1OTUtNGZjZS00MjUwLTkyNDAtYTkxM2RhY2NhZjg5IiwidCI6IjM5OTdiNWRlLWMxMDMtNDczOS04NmZjLTRhZmY1MDBhZTBhMCJ9",
    images: [
      // "/01_Dashboard RH - Pagina 1.png",
      //  "/01_Dashboard RH - Pagina 2.png"
      `${import.meta.env.BASE_URL}01_Dashboard RH - Pagina 1.png`,
      `${import.meta.env.BASE_URL}01_Dashboard RH - Pagina 2.png`,
        
      ],
  },
  {
    title: "Análise de Meta e Realizado",
    description: "Painel estratégico para acompanhamento de metas, performance de vendas e indicadores-chave para diretoria executiva. Visão consolidada com drill-down por regional.",
    tags: ["Power BI", "DAX", "Python","ML"],
    icon: <BarChart3 className="h-6 w-6" />,
    link: "https://app.powerbi.com/view?r=eyJrIjoiYzdmYjg3ZmEtZjU5NS00ZTcyLThiZjYtYmQyODU2M2Y4M2Q3IiwidCI6IjM5OTdiNWRlLWMxMDMtNDczOS04NmZjLTRhZmY1MDBhZTBhMCJ9",
    images: [
      // "/Meta_Realizado_pagina_1.png", 
      // "/Meta_Realizado_pagina_2.png",
      //  "/Meta_Realizado_pagina_3.png"
      `${import.meta.env.BASE_URL}Meta_Realizado_pagina_1.png`,
      `${import.meta.env.BASE_URL}Meta_Realizado_pagina_2.png`,
      `${import.meta.env.BASE_URL}Meta_Realizado_pagina_3.png`,
      ],
  },
    {
    title: "Dashboard Fórmula 1",
    description: "Relatório com análise das corridas, equipes e pilotos no período de 1950 até 2022.",
    tags: ["Power BI", "DAX"],
    icon: <TrendingUp className="h-6 w-6" />,
    link: "https://app.powerbi.com/view?r=eyJrIjoiNzFlM2EyMWItODhlMi00NDE3LWFhYzItNjZiZGFiNTYzYmEwIiwidCI6IjM5OTdiNWRlLWMxMDMtNDczOS04NmZjLTRhZmY1MDBhZTBhMCJ9",
    images: [
      // "/Meta_Realizado_pagina_1.png", 
      // "/Meta_Realizado_pagina_2.png",
      //  "/Meta_Realizado_pagina_3.png"
      `${import.meta.env.BASE_URL}formula_1_pagina_1.png`,
      `${import.meta.env.BASE_URL}formula_1_pagina_2.png`,
      `${import.meta.env.BASE_URL}formula_1_pagina_3.png`,
      `${import.meta.env.BASE_URL}formula_1_pagina_4.png`,
      ],
  }
  // ,
  // {
  //   title: "HR Analytics Dashboard",
  //   description: "Dashboard de people analytics com indicadores de turnover, headcount, absenteísmo e performance por área. Suporte à tomada de decisão do RH.",
  //   tags: ["Power BI", "Excel", "SQL"],
  //   icon: <Users className="h-6 w-6" />,
  //   link: "https://app.powerbi.com",
  //   images: ["/img.jpg", "/img.jpg"],
  // },
  // {
  //   title: "Pipeline de Dados ALM",
  //   description: "Automação de processos ETL para produtos financeiros, integrando múltiplas fontes de dados com governança e controle de qualidade.",
  //   tags: ["SAS", "Azure DevOps", "Git"],
  //   icon: <ShoppingCart className="h-6 w-6" />,
  //   link: "https://github.com",
  //   images: ["/img.jpg", "/img.jpg"],
  // },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const handleSelect = (nextIndex: number) => {
    setActiveIndex(nextIndex);
    const track = trackRef.current;
    const target = track?.children[nextIndex] as HTMLElement | undefined;
    target?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  return (
    <div
      className={`glass-card overflow-hidden card-hover animate-slide-up stagger-${index + 1} flex flex-col relative group`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={
          project.images[activeIndex]
            ? { backgroundImage: `url(${project.images[activeIndex]})` }
            : undefined
        }
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {/* Card Header / Carousel */}
      <div className="relative px-4 pt-4">
        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 no-scrollbar"
        >
          {project.images.map((image, imageIndex) => (
            <div key={`${project.title}-${imageIndex}`} className="snap-center shrink-0 w-full">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                <img
                  src={image}
                  alt={`${project.title} preview ${imageIndex + 1}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
          {project.images.map((_, dotIndex) => {
            const isActive = dotIndex === activeIndex;
            return (
              <button
                key={`${project.title}-dot-${dotIndex}`}
                type="button"
                aria-label={`Ver imagem ${dotIndex + 1} de ${project.title}`}
                onClick={() => handleSelect(dotIndex)}
                className={`transition-all duration-200 ${
                  isActive
                    ? "h-1.5 w-6 rounded-full bg-white/90"
                    : "h-2 w-2 rounded-full bg-white/60"
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* Card Content */}
      <div className="relative p-6 space-y-4 flex-1 flex flex-col bg-black/55 backdrop-blur-md transition-colors duration-300 group-hover:bg-black/35">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

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
        <div className="mt-auto pt-4">
          <Button
            className="w-full gradient-primary text-white rounded-xl hover:opacity-90 transition-all hover:scale-[1.02]"
            asChild
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Ver Dashboard
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

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
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
