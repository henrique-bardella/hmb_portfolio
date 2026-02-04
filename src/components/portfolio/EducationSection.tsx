import { GraduationCap, Award, Languages } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Formação & Certificações</h2>
          <p className="text-muted-foreground">
            Educação e qualificações profissionais
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Education */}
          <div className="glass-card p-6 card-hover animate-slide-up stagger-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold">Formação Acadêmica</h3>
            </div>

            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-semibold">MBA em Data Science</h4>
                <p className="text-muted-foreground">FIAP</p>
                <p className="text-sm text-muted-foreground">2022 – 2023</p>
              </div>

              <div className="border-l-2 border-border pl-4">
                <h4 className="font-semibold">Tecnólogo em Mecânica de Precisão</h4>
                <p className="text-muted-foreground">FATEC-SP</p>
                <p className="text-sm text-muted-foreground">2016 – 2019</p>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="glass-card p-6 card-hover animate-slide-up stagger-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center">
                <Languages className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold">Idiomas</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">Português</span>
                <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">
                  Nativo
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Inglês</span>
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                  Profissional
                </span>
              </div>
            </div>
          </div>

          {/* Certifications - Full width */}
          <div className="glass-card p-6 card-hover animate-slide-up stagger-3 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[hsl(var(--skill-ml)/0.15)] flex items-center justify-center">
                <Award className="h-6 w-6 text-[hsl(var(--skill-ml))]" />
              </div>
              <h3 className="text-xl font-bold">Certificações</h3>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

              <div className="p-4 rounded-xl bg-muted/50">
                <h4 className="font-semibold text-sm">Data Science para Análise Multivariada</h4>
                <p className="text-xs text-muted-foreground mt-1">Data Science Academy</p>
            </div>

            <div className="p-4 rounded-xl bg-muted/50">
                <h4 className="font-semibold text-sm">Inteligência Artificial Explicável (XAI)</h4>
                <p className="text-xs text-muted-foreground mt-1">Data Science Academy</p>
            </div>
            
            
            <div className="p-4 rounded-xl bg-muted/50">
                <h4 className="font-semibold text-sm">Big Data Real-Time Analytics com Python e Spark</h4>
                <p className="text-xs text-muted-foreground mt-1">Data Science Academy</p>
            </div>
            
            <div className="p-4 rounded-xl bg-muted/50">
                <h4 className="font-semibold text-sm">Engenharia de Dados com Hadoop e Spark</h4>
                <p className="text-xs text-muted-foreground mt-1">Data Science Academy</p>
            </div>
            
              <div className="p-4 rounded-xl bg-muted/50">
                <h4 className="font-semibold text-sm">SAS Programming: Essentials</h4>
                <p className="text-xs text-muted-foreground mt-1">SAS Institute</p>
              </div>

              <div className="p-4 rounded-xl bg-muted/50">
                <h4 className="font-semibold text-sm">SAS Programming 2: Data Manipulation Techniques</h4>
                <p className="text-xs text-muted-foreground mt-1">SAS Institute</p>
              </div>

              <div className="p-4 rounded-xl bg-muted/50">
                <h4 className="font-semibold text-sm">SAS Programming 3: Advanced Techniques</h4>
                <p className="text-xs text-muted-foreground mt-1">SAS Institute</p>
              </div>


             
              <div className="p-4 rounded-xl bg-muted/50">
                <h4 className="font-semibold text-sm">Outras certificações</h4>
                <p className="text-xs text-muted-foreground mt-1">Diversas plataformas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
