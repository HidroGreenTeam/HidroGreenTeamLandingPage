import {
    Camera,
    Coffee,
    LogIn,
    PlayCircle,
    Shield,
    Smartphone,
    WifiOff
} from "lucide-react";
import { useEffect, useState } from "react";

export default function DownloadSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const section = document.getElementById("download");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const downloadFeatures = [
    { icon: <WifiOff className="h-4 w-4" />, text: "Funciona sin internet" },
    { icon: <Camera className="h-4 w-4" />, text: "Diagnósticos inmediatos" },
    { icon: <Coffee className="h-4 w-4" />, text: "Especializada en café" },
    { icon: <Shield className="h-4 w-4" />, text: "Datos protegidos" },
  ];

  return (
    <section
      id="download"
      className="py-20 bg-gradient-to-b from-[#FAFAF8] to-[#FAFFF7] relative overflow-hidden"
    >
      <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2
            className={`text-3xl font-bold tracking-tighter sm:text-4xl text-[#5A3921] transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Descarga <span className="text-[#2E7D32]">Ayni</span>
          </h2>
          <p
            className={`max-w-[700px] text-[#5A3921]/80 md:text-lg transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Obtén la aplicación ahora y comienza a proteger tus cultivos de café
            con tecnología avanzada
          </p>
        </div>

        <div
          className={`transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#E8F5E9] hover:shadow-xl transition-all duration-300 overflow-hidden relative group">
            <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-green-50 group-hover:bg-green-100 transition-colors duration-300"></div>
            <div className="absolute -left-10 -bottom-10 w-32 h-32 rounded-full bg-amber-50 group-hover:bg-amber-100 transition-colors duration-300"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-green-100 to-green-200 rounded-full flex items-center justify-center shadow-sm">
                  <Smartphone className="h-7 w-7 text-[#2E7D32]" />
                </div>
                <h3 className="text-2xl font-bold text-[#2E7D32]">App Móvil</h3>
              </div>

              <div className="space-y-6">
                <p className="text-[#5A3921]/80 leading-relaxed">
                  Lleva el poder del diagnóstico avanzado en tu bolsillo. Ayni
                  funciona incluso en las zonas más remotas,{" "}
                  <span className="font-medium">sin necesidad de internet</span>
                  .
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {downloadFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#E8F5E9] flex items-center justify-center flex-shrink-0">
                        {feature.icon}
                      </div>
                      <span className="text-[#5A3921]/90">{feature.text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <a
                    href="https://github.com/HidroGreenTeam/AnyiMobileApp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-[#2E7D32] text-white rounded-full font-medium shadow-md hover:bg-[#1B5E20] transition-colors flex items-center justify-center gap-2 group"
                  >
                    <PlayCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span>Google Play Store</span>
                  </a>

                  <a
                    href="#login"
                    className="w-full py-4 border border-[#2E7D32] text-[#2E7D32] rounded-full font-medium hover:bg-[#E8F5E9] transition-colors flex items-center justify-center gap-2 group"
                  >
                    <LogIn className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span>Versión Web</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
