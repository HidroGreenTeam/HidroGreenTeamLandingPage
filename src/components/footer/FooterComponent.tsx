import {
  ArrowUpRight,
  ChevronRight,
  Coffee,
  Download,
  Facebook,
  Globe,
  Heart,
  Instagram,
  Leaf,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  SmartphoneNfc,
  Twitter
} from "lucide-react";

function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-b from-[#1B5E20] to-[#2e7232] py-16 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8">
          <div className="flex flex-col col-span-1 md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-5 group">
              <div className="relative p-1.5 rounded-lg bg-white shadow-sm border border-[#E8F5E9] group-hover:border-[#4CE0B3] transition-colors">
                <Leaf className="h-5 w-5 text-[#2E7D32]" />
              </div>
              <div>
                <span className="flex text-lg font-bold text-white">
                  HidroGreen
                </span>
              </div>
            </a>
            <p className="text-sm text-white/80 max-w-xs leading-relaxed">
              Ayudando a los productores de café peruanos a proteger sus
              cultivos con tecnología accesible e inteligencia artificial.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <Coffee className="h-4 w-4 text-[#4CE0B3]/70" />
              <p className="text-xs font-medium text-white/80">
                Hecho con <Heart className="h-3 w-3 text-red-400 inline mx-1" />{" "}
                en Perú
              </p>
            </div>

            <div className="mt-6 bg-[#246828] p-4 rounded-lg border border-[#4CE0B3]/10">
              <h4 className="flex items-center gap-2 text-sm font-medium text-white mb-2">
                <Download className="h-4 w-4 text-[#4CE0B3]" />
                <span>Descarga Ayni</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                <button className="flex items-center gap-1.5 bg-[#2E7D32] hover:bg-[#246828] border border-[#4CE0B3]/20 text-white text-xs rounded-full py-1.5 px-3 transition-colors">
                  <SmartphoneNfc className="h-3 w-3" />
                  <span>Android</span>
                </button>
                <button className="flex items-center gap-1.5 bg-[#2E7D32] hover:bg-[#246828] border border-[#4CE0B3]/20 text-white text-xs rounded-full py-1.5 px-3 transition-colors">
                  <Globe className="h-3 w-3" />
                  <span>Web App</span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-base font-medium text-white flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#4CE0B3]"></div>
              Ayuda
            </h3>

            <div className="space-y-3 ml-3">
              <a
                href="#plans"
                className="text-sm text-white/70 hover:text-[#4CE0B3] flex items-center gap-2 group transition-colors"
              >
                <ChevronRight className="h-3 w-3 text-[#4CE0B3]/50 group-hover:text-[#4CE0B3] transition-colors" />
                <span>Planes y Precios</span>
              </a>
              <a
                href="#download"
                className="text-sm text-white/70 hover:text-[#4CE0B3] flex items-center gap-2 group transition-colors"
              >
                <ChevronRight className="h-3 w-3 text-[#4CE0B3]/50 group-hover:text-[#4CE0B3] transition-colors" />
                <span>Cómo Funciona</span>
              </a>
              <a
                href="#faq"
                className="text-sm text-white/70 hover:text-[#4CE0B3] flex items-center gap-2 group transition-colors"
              >
                <ChevronRight className="h-3 w-3 text-[#4CE0B3]/50 group-hover:text-[#4CE0B3] transition-colors" />
                <span>Preguntas Frecuentes</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-base font-medium text-white flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#4CE0B3]"></div>
              Empresa
            </h3>

            <div className="space-y-3 ml-3">
              <a
                href="#testimonials"
                className="text-sm text-white/70 hover:text-[#4CE0B3] flex items-center gap-2 group transition-colors"
              >
                <ChevronRight className="h-3 w-3 text-[#4CE0B3]/50 group-hover:text-[#4CE0B3] transition-colors" />
                <span>Testimonios</span>
              </a>
              <a
                href="#about"
                className="text-sm text-white/70 hover:text-[#4CE0B3] flex items-center gap-2 group transition-colors"
              >
                <ChevronRight className="h-3 w-3 text-[#4CE0B3]/50 group-hover:text-[#4CE0B3] transition-colors" />
                <span>Sobre Nosotros</span>
              </a>
              <a
                href="#features"
                className="text-sm text-white/70 hover:text-[#4CE0B3] flex items-center gap-2 group transition-colors"
              >
                <ChevronRight className="h-3 w-3 text-[#4CE0B3]/50 group-hover:text-[#4CE0B3] transition-colors" />
                <span>Características</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-base font-medium text-white flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#4CE0B3]"></div>
              Contacto
            </h3>

            <div className="space-y-4 ml-3">
              <a
                href="mailto:contacto@hidrogreen.pe"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-[#4CE0B3] group transition-colors"
              >
                <div className="p-1.5 rounded-full bg-[#246828] group-hover:bg-[#4CE0B3]/20 transition-colors">
                  <Mail className="h-3.5 w-3.5 text-[#4CE0B3]" />
                </div>
                <span>contacto@hidrogreen.pe</span>
              </a>

              <a
                href="tel:+51923456789"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-[#4CE0B3] group transition-colors"
              >
                <div className="p-1.5 rounded-full bg-[#246828] group-hover:bg-[#4CE0B3]/20 transition-colors">
                  <Phone className="h-3.5 w-3.5 text-[#4CE0B3]" />
                </div>
                <span>+51 923 456 789</span>
              </a>

              <div className="flex items-center gap-3 text-sm text-white/70">
                <div className="p-1.5 rounded-full bg-[#246828]">
                  <MapPin className="h-3.5 w-3.5 text-[#4CE0B3]" />
                </div>
                <span>Lima, Perú</span>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3 ml-2">
              <a
                href="#"
                className="p-2 rounded-full bg-[#246828] hover:bg-[#4CE0B3]/20 transition-colors border border-[#4CE0B3]/20"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4 text-[#4CE0B3]" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-[#246828] hover:bg-[#4CE0B3]/20 transition-colors border border-[#4CE0B3]/20"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 text-[#4CE0B3]" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-[#246828] hover:bg-[#4CE0B3]/20 transition-colors border border-[#4CE0B3]/20"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4 text-[#4CE0B3]" />
              </a>
            </div>

            <div className="bg-[#246828] p-3 rounded-lg mt-2 border border-[#4CE0B3]/10">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#4CE0B3]" />
                <span className="text-xs font-medium text-white">
                  Datos protegidos y seguros
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-12 mb-8">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs text-white/50 flex items-center">
            <span>© 2025 HidroGreen. </span>
            <span className="hidden sm:inline">
              Todos los derechos reservados.
            </span>
          </p>
          <div className="flex flex-wrap gap-6 items-center justify-center">
            <a
              href="#"
              className="text-xs text-white/50 hover:text-[#4CE0B3] transition-colors"
            >
              Política de Privacidad
            </a>
            <a
              href="#"
              className="text-xs text-white/50 hover:text-[#4CE0B3] transition-colors"
            >
              Términos de Uso
            </a>
          </div>
        </div>

        <a
          href="#hero"
          className="absolute -top-5 right-8 p-3 rounded-full bg-[#4CE0B3] text-[#1B5E20] shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
          aria-label="Volver arriba"
        >
          <ArrowUpRight className="h-5 w-5" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
