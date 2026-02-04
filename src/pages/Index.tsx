import Header from "@/components/Header";
import HeroSection from "@/components/portfolio/HeroSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import EducationSection from "@/components/portfolio/EducationSection";
import ContactSection from "@/components/portfolio/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <ExperienceSection />
      </main>

      <SkillsSection />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectsSection />
      </main>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <EducationSection />
      </main>

      <ContactSection />

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 Portfolio Henrique Bardella.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
