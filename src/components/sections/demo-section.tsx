import {
    Camera,
    Check,
    ChevronRight,
    FileCheck,
    Smartphone,
    Sprout
} from "lucide-react";
import { useEffect, useState } from "react";

export default function AyniDemoSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const demoSteps = [
    {
      icon: <Camera className="h-5 w-5" />,
      color: "#2E7D32",
      title: "1. Fotografía la planta",
      description:
        "Toma una foto clara de la hoja o fruto afectado del café usando la cámara de tu smartphone. Intenta capturar bien los síntomas visibles.",
      badge: {
        icon: <Camera className="h-4 w-4" />,
        text: "Compatible con cámaras básicas",
      },
    },
    {
      icon: <FileCheck className="h-5 w-5" />,
      color: "#795548",
      title: "2. Recibe diagnóstico",
      description:
        "La inteligencia artificial analiza inmediatamente el patrón de la enfermedad y compara con su base de datos para determinar qué está afectando a tu planta.",
      badge: {
        icon: <Check className="h-4 w-4" />,
        text: "Resultados en segundos",
      },
    },
    {
      icon: <Sprout className="h-5 w-5" />,
      color: "#FF9800",
      title: "3. Aplica tratamientos",
      description:
        "Recibe recomendaciones específicas para tratar la enfermedad detectada, incluyendo métodos preventivos y correctivos adecuados para tu región.",
      badge: {
        icon: <Smartphone className="h-4 w-4" />,
        text: "Instrucciones detalladas",
      },
    },
  ];

  return (
    <section
      id="demo"
      className="py-20 bg-gradient-to-b from-[#FAFFF7] to-[#FAFAF8] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#FAFFF7] to-transparent opacity-70"></div>
      <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-green-100 opacity-40"></div>
      <div className="absolute bottom-40 -left-32 w-96 h-96 rounded-full bg-amber-100 opacity-30"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <h2
            className={`text-3xl font-bold tracking-tighter sm:text-4xl text-[#5A3921] transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Cómo <span className="text-[#2E7D32]">Funciona</span>
          </h2>
          <p
            className={`max-w-[700px] text-[#5A3921]/80 md:text-lg transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Ayni te ayuda a identificar y tratar enfermedades del café mediante
            un proceso sencillo de tres pasos
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-6">
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            {demoSteps.map((step, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 transition-all duration-700 delay-${300 + index * 100} ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }`}
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-md"
                  style={{ backgroundColor: step.color }}
                >
                  {step.icon}
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#5A3921] leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-[#5A3921]/80 mt-2 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="mt-3 py-2 px-3 bg-white rounded-lg inline-flex items-center gap-2 text-sm shadow-sm border border-gray-100">
                    <span style={{ color: step.color }}>{step.badge.icon}</span>
                    <span className="text-[#5A3921]/80 font-medium">
                      {step.badge.text}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            <div
              className={`transition-all duration-700 delay-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <a
                href="#download"
                className="inline-flex items-center px-6 py-3 bg-[#2E7D32] text-white rounded-full font-medium shadow-md hover:bg-[#1B5E20] transition-colors group"
              >
                Probar Ayni
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div
            className={`w-full lg:w-1/2 flex justify-center items-center transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative shadow-xl rounded-3xl overflow-hidden max-w-[300px] w-full border-8 border-[#3B2C22]">
              <img
                src="/src/assets/screen1.png"
                alt="Aplicación Ayni"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
