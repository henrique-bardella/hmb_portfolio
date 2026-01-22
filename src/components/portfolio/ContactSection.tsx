import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Vamos Conversar?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades, projetos e colaborações. 
            Entre em contato!
          </p>
        </div>

        <div className="glass-card p-8 md:p-12 animate-scale-in">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-4">Informações de Contato</h3>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Localização</p>
                  <p className="text-muted-foreground">São Paulo, Brasil</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">seuemail@exemplo.com</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-4">Redes Profissionais</h3>
              
              <div className="flex flex-col gap-3">
                <Button
                  variant="outline"
                  className="justify-start h-14 rounded-xl hover:bg-muted transition-all"
                  asChild
                >
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-3 h-5 w-5 text-[#0077B5]" />
                    <span>LinkedIn</span>
                  </a>
                </Button>

                <Button
                  variant="outline"
                  className="justify-start h-14 rounded-xl hover:bg-muted transition-all"
                  asChild
                >
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-3 h-5 w-5" />
                    <span>GitHub</span>
                  </a>
                </Button>

                <Button
                  variant="outline"
                  className="justify-start h-14 rounded-xl hover:bg-muted transition-all"
                  asChild
                >
                  <a href="mailto:seuemail@exemplo.com">
                    <Mail className="mr-3 h-5 w-5 text-primary" />
                    <span>Enviar Email</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
