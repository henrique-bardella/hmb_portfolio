import { Briefcase, Calendar } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  responsibilities: string[];
}

const experiences: Experience[] = [
  {
    company: "Bradesco",
    role: "Analista de Business Intelligence II",
    period: "ago/2024 – atual",
    current: true,
    responsibilities: [
      "Estudos e análises para direcionamento comercial (executivo → campo)",
      "Modelos de dados, KPIs, governança e dashboards (Power BI)",
      "Engenharia/tratamento de dados: SAS, SQL, Python, Databricks",
      "Análises preditivas (cross-sell, recomendação, clusterização)",
      "Desenvolvimento de aplicações web integradas a bancos relacionais",
    ],
  },
  {
    company: "SONDA",
    role: "Desenvolvedor de Software",
    period: "dez/2021 – ago/2024",
    responsibilities: [
      "Produtos financeiros para Caixa (ALM) com SAS Studio/IRM, Git e Azure DevOps",
      "Soluções de analytics (Power BI) e Power Platform",
      "Automações com Power Automate e RPA",
      "Iniciativas em cloud e on-premises",
    ],
  },
  {
    company: "Bureau Veritas",
    role: "Analista de Desempenho",
    period: "2019 – 2021",
    responsibilities: [
      "Dashboards gerenciais/operacionais (Power BI/Excel/SQL Server)",
      "HR Analytics e people analytics",
      "Coleta, limpeza, tratamento e análise ponta a ponta",
      "Visualização de dados para diferentes audiências",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experiência Profissional</h2>
          <p className="text-muted-foreground">
            Trajetória em dados, analytics e desenvolvimento
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={`glass-card p-6 md:p-8 card-hover animate-slide-up stagger-${index + 1}`}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                {/* Company Icon */}
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                  <Briefcase className="h-7 w-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold">{exp.company}</h3>
                      <p className="text-primary font-medium">{exp.role}</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                      {exp.current && (
                        <span className="ml-2 px-2 py-0.5 text-xs font-medium rounded-full bg-accent/20 text-accent">
                          Atual
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
