import {
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  FileText,
  ShieldCheck,
  Smartphone,
  WifiOff
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef(null);

  const features = [
    {
      icon: <Clock className="h-8 w-8" />,
      color: "#2E7D32",
      bgColor: "#E8F5E9",
      title: "Diagnóstico Inmediato",
      description:
        "Identifica enfermedades en segundos con solo una fotografía. Resultados precisos al instante en cualquier lugar.",
      benefits: [
        "Ahorra tiempo valioso",
        "Actúa antes que se propague",
        "Reduce pérdidas de producción",
      ],
    },
    {
      icon: <WifiOff className="h-8 w-8" />,
      color: "#795548",
      bgColor: "#EFEBE9",
      title: "Trabaja Sin Internet",
      description:
        "Funciona completamente offline en el campo. Accede a todas las funciones incluso en zonas remotas de la sierra peruana.",
      benefits: [
        "Diagnósticos en cualquier ubicación",
        "No depende de señal móvil",
        "Sincronización automática cuando hay conexión",
      ],
    },
    {
      icon: <FileText className="h-8 w-8" />,
      color: "#FF9800",
      bgColor: "#FFF3E0",
      title: "Tratamientos Precisos",
      description:
        "Recibe recomendaciones específicas para tu cultivo de café y región. Soluciones adaptadas a tus condiciones locales.",
      benefits: [
        "Optimiza uso de recursos",
        "Prioriza tratamientos naturales",
        "Instrucciones paso a paso",
      ],
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      color: "#2196F3",
      bgColor: "#E3F2FD",
      title: "Interfaz Intuitiva",
      description:
        "Diseñada para ser fácil de usar por cualquier agricultor, independientemente de su experiencia tecnológica. Navegación sencilla y clara.",
      benefits: [
        "Fácil de aprender",
        "Menos de 3 toques para diagnóstico",
        "Instrucciones visuales",
      ],
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      color: "#9C27B0",
      bgColor: "#F3E5F5",
      title: "Datos Protegidos",
      description:
        "Tu información y registros de cultivos están seguros. Ayni protege tus datos y solo tú decides cuándo compartirlos.",
      benefits: [
        "Historial de diagnósticos privado",
        "Control total de tus datos",
        "Exportación segura",
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [features.length]);

  const nextFeature = () => {
    setActiveFeature((prev) => (prev + 1) % features.length);
  };

  const prevFeature = () => {
    setActiveFeature((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-b from-white to-[#FAFFF7] relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="container px-4 md:px-6 lg:px-8 mx-auto relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <h2
            className={`text-3xl font-bold tracking-tighter sm:text-4xl text-[#5A3921] transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            ¿Por qué elegir <span className="text-[#2E7D32]">Ayni</span>?
          </h2>
          <p
            className={`max-w-[700px] text-[#5A3921]/80 md:text-lg transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Diseñada específicamente para productores de café, nuestra
            aplicación ofrece soluciones prácticas a los problemas más comunes
            que enfrentan los agricultores peruanos
          </p>
        </div>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 relative">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col h-full bg-white rounded-2xl p-6 shadow-md transition-all duration-500 hover:shadow-lg hover:-translate-y-1 cursor-pointer border border-[#E8F5E9] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
              onClick={() => setActiveFeature(index)}
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center transition-transform group-hover:rotate-12"
                  style={{
                    backgroundColor: feature.bgColor,
                    color: feature.color,
                  }}
                >
                  {feature.icon}
                </div>
                <h3
                  className="text-lg font-bold leading-tight"
                  style={{ color: feature.color }}
                >
                  {feature.title}
                </h3>
              </div>

              <p className="text-[#5A3921]/80 text-sm mb-4 flex-grow">
                {feature.description}
              </p>

              <div className="mt-2">
                <div
                  className="h-1 w-12 rounded-full mb-4"
                  style={{ backgroundColor: feature.bgColor }}
                ></div>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check
                        className="h-4 w-4 mt-0.5 flex-shrink-0"
                        style={{ color: feature.color }}
                      />
                      <span className="text-[#5A3921]/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden">
          <div className="relative px-4 pb-6">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeFeature * 100}%)` }}
              >
                {features.map((feature, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-1">
                    <div className="flex flex-col h-full bg-white rounded-2xl p-6 shadow-md border border-[#E8F5E9]">
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className="w-14 h-14 rounded-full flex items-center justify-center"
                          style={{
                            backgroundColor: feature.bgColor,
                            color: feature.color,
                          }}
                        >
                          {feature.icon}
                        </div>
                        <h3
                          className="text-lg font-bold leading-tight"
                          style={{ color: feature.color }}
                        >
                          {feature.title}
                        </h3>
                      </div>

                      <p className="text-[#5A3921]/80 text-sm mb-4">
                        {feature.description}
                      </p>

                      <div className="mt-2">
                        <div
                          className="h-1 w-12 rounded-full mb-4"
                          style={{ backgroundColor: feature.bgColor }}
                        ></div>
                        <ul className="space-y-2">
                          {feature.benefits.map((benefit, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm"
                            >
                              <Check
                                className="h-4 w-4 mt-0.5 flex-shrink-0"
                                style={{ color: feature.color }}
                              />
                              <span className="text-[#5A3921]/80">
                                {benefit}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevFeature}
                className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-[#5A3921]/70 hover:text-[#2E7D32] hover:shadow-md transition-all"
                aria-label="Característica anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex gap-1.5">
                {features.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      activeFeature === index
                        ? "bg-[#2E7D32] scale-125"
                        : "bg-[#E8F5E9] hover:bg-[#C8E6C9]"
                    }`}
                    onClick={() => setActiveFeature(index)}
                    aria-label={`Ir a característica ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextFeature}
                className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-[#5A3921]/70 hover:text-[#2E7D32] hover:shadow-md transition-all"
                aria-label="Siguiente característica"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
