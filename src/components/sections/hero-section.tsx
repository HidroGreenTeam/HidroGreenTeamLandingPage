import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="w-full min-h-screen flex items-center py-10 bg-gradient-to-b from-[#E8F5E9] to-[#F8F5F0] overflow-hidden"
    >
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-block rounded-lg bg-[#2E7D32]/10 px-4 py-1.5 text-sm text-[#2E7D32] font-medium">
              Solución agrícola impulsada por IA
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-[#5A3921]">
              Diagnóstico <span className="text-[#2E7D32]">instantáneo</span> de
              plagas en tu cultivo de café
            </h1>
            <p className="max-w-[600px] text-[#5A3921]/80 md:text-xl">
              <strong>Ayni</strong>, la aplicación de HidroGreen que te ayuda a
              identificar y tratar las enfermedades más comunes del café,
              funcionando incluso sin conexión a internet.
            </p>

            <div className="flex flex-wrap sm:flex-nowrap gap-4 mt-8">
              <Button
                asChild
                className="w-full sm:w-auto rounded-full bg-[#2E7D32] text-white hover:bg-[#1B5E20] h-14 px-8 text-base shadow-lg hover:shadow-xl transition-all"
              >
                <a href="#download">
                  <span className="flex items-center">
                    <Download className="mr-2 h-5 w-5" />
                    Descargar Ayni
                  </span>
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="w-full sm:w-auto rounded-full border-2 border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white h-14 px-8 text-base transition-all"
              >
                <a href="#demo">
                  <span className="flex items-center">
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Ver Demo
                  </span>
                </a>
              </Button>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative h-[500px] w-full overflow-hidden rounded-2xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2E7D32]/20 to-transparent z-10"></div>

              <img
                src="/src/assets/hero2.avif"
                alt="Agricultor usando Ayni en su cultivo de café"
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg z-20 max-w-[180px]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#E8F5E9] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#2E7D32] font-bold text-sm">
                      95%
                    </span>
                  </div>
                  <p className="text-xs text-[#5A3921]">
                    <span className="font-bold">Precisión</span> en la detección
                    de enfermedades
                  </p>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg z-20">
                <p className="text-sm font-bold text-[#5A3921]">
                  Funciona sin internet
                </p>
                <p className="text-xs text-[#5A3921]/80">
                  Ideal para zonas rurales de Perú
                </p>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-[#F8F5F0] rounded-full z-[-1] border-2 border-[#2E7D32]/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
