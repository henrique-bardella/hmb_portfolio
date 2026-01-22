import { BarChart3, Database, Brain, Code2 } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  colorClass: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "BI & Analytics",
    icon: <BarChart3 className="h-6 w-6" />,
    skills: ["Power BI", "KPIs", "Segmentação", "Performance Comercial", "Governança de Métricas", "Dashboards"],
    colorClass: "skill-bi",
  },
  {
    title: "Dados",
    icon: <Database className="h-6 w-6" />,
    skills: ["SQL", "SAS", "Python", "Databricks", "ETL", "Data Pipeline", "Tratamento de Dados", "Big Data"],
    colorClass: "skill-data",
  },
  {
    title: "Machine Learning",
    icon: <Brain className="h-6 w-6" />,
    skills: ["Predição", "Recomendação", "Clusterização", "Cross-sell Models", "Deep Learning"],
    colorClass: "skill-ml",
  },
  {
    title: "Desenvolvimento Web",
    icon: <Code2 className="h-6 w-6" />,
    skills: ["HTML/CSS", "JavaScript", "PHP", "Bancos Relacionais", "APIs"],
    colorClass: "skill-web",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Competências & Stack</h2>
          <p className="text-muted-foreground">
            Ferramentas e tecnologias que domino
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`glass-card p-6 card-hover animate-slide-up stagger-${index + 1}`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${category.colorClass}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`skill-badge ${category.colorClass}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
