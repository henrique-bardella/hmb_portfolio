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
    role: "Analista de Business Intelligence | Empresas e Negócios",
    period: "ago/2024 – atual",
    current: true,
    responsibilities: [
      "Realizo análises e estudos que subsidiam decisões e direcionam ações comerciais para múltiplos públicos: Direção Executiva, Estratégia, Centro de Comando e Agências (Gerentes de Conta).",
      "Estruturação de modelos de dados, criação de métricas e indicadores (KPIs) e governança de regras de negócio.",
      "Desenvolvo dashboards no Power BI com foco em segmentação, comportamento e performance, garantindo clareza e usabilidade para diferentes audiências.",
      "Realizo extração, tratamento e consolidação com SAS/SQL/Python/Databricks, priorizando performance e escalabilidade em grandes volumes.",
      "Gerencio workspaces e governança no Power BI Service (acessos, organização, publicação e ciclo de entrega).",
      "Apoio iniciativas de analytics avançado (cross-sell, recomendação, clusterização e propensão), conectando modelagem a casos de uso do negócio.",
      "Desenvolvimento de aplicações web, implementando interfaces (HTML/CSS/JavaScript) e APIs/rotinas de servidor em PHP, com integração a bancos de dados relacionais.",
    ],
  },
  {
    company: "SONDA",
    role: "Desenvolvedor de Software | Digital Business",
    period: "dez/2021 – ago/2024",
    responsibilities: [
      "Soluções de analytics e Inovação Digital.",
      "Automações com Power Automate e RPA.",
      "Atuei em projetos com cloud e ambientes híbridos, apoiando implantação e sustentação de soluções.",
      "Desenvolvimento de produtos financeiros, projeto para Caixa Econômica Federal de ALM (Asset and Liability Management) utilizando plataforma SAS (Studio e IRM - Infrastructure for Risk Management) e ferramentas de versionamento e DevOps (git e Azure DevOps).",
      "Mantive contato direto com clientes/parceiros internacionais na América Latina, alinhando requisitos, evolução e entregas."
    ],
  },
  {
    company: "Bureau Veritas",
    role: "Analista de Desempenho | Power&Utilities",
    period: "mar/2019 – dez/2021",
    responsibilities: [
      "Criei dashboards gerenciais e operacionais (Power BI/Excel/SQL Server) para acompanhamento de performance das operações.",
      "Produzi relatórios de frota/administrativo e análises de HR/People Analytics para apoiar gestão.",
      "Desenvolvimento ponta a ponta em dados: coleta, limpeza, tratamento e análise.",
      "Desenvolvi visualizações para diferentes públicos (Diretoria/Gerência), reforçando storytelling e tomada de decisão.",
      "Desenvolvimento web - HTML/CSS/JS.",
      "Administrei sistema interno de inspeção em campo (~1200 usuários), apoiando operação e melhoria contínua."
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
