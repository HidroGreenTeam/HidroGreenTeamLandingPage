import {
  Check,
  Coffee,
  Crown,
  Heart,
  Leaf,
  PlaneTakeoff,
  Shield,
  Zap
} from "lucide-react";
import { useEffect, useState } from "react";

function PlansSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("mensual");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const basicFeatures = [
    {
      text: "Funcionamiento sin internet",
      icon: <Zap className="h-4 w-4" />,
    },
    {
      text: "10 diagnósticos mensuales",
      icon: <Coffee className="h-4 w-4" />,
    },
    {
      text: "Acceso a guía básica de tratamientos",
      icon: <Leaf className="h-4 w-4" />,
    },
    {
      text: "30 días de historial",
      icon: <Shield className="h-4 w-4" />,
    },
    {
      text: "Soporte por correo electrónico",
      icon: <Heart className="h-4 w-4" />,
    },
  ];

  const premiumFeatures = [
    {
      text: "Funcionamiento sin internet",
      icon: <Zap className="h-4 w-4" />,
    },
    {
      text: "Diagnósticos ilimitados",
      icon: <Coffee className="h-4 w-4" />,
    },
    {
      text: "Guía detallada de tratamientos personalizada",
      icon: <Leaf className="h-4 w-4" />,
    },
    {
      text: "Historial permanente con análisis de tendencias",
      icon: <Shield className="h-4 w-4" />,
    },
    {
      text: "Soporte prioritario 24/7 por WhatsApp",
      icon: <Heart className="h-4 w-4" />,
    },
    {
      text: "Exportación de informes detallados",
      icon: <PlaneTakeoff className="h-4 w-4" />,
    },
  ];

  return (
    <section
      id="plans"
      className="py-20 bg-gradient-to-b from-[#FAFFF7] to-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <h2
            className={`text-3xl font-bold tracking-tighter sm:text-4xl text-[#5A3921] transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Planes <span className="text-[#2E7D32]">Accesibles</span>
          </h2>
          <p
            className={`max-w-[700px] text-[#5A3921]/80 md:text-lg transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Soluciones flexibles para agricultores de todos los tamaños,
            diseñadas para adaptarse a tus necesidades
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-1 shadow-md inline-flex">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "mensual"
                  ? "bg-[#2E7D32] text-white shadow-sm"
                  : "text-[#5A3921]/70 hover:text-[#5A3921]"
              }`}
              onClick={() => setActiveTab("mensual")}
            >
              Mensual
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center ${
                activeTab === "anual"
                  ? "bg-[#2E7D32] text-white shadow-sm"
                  : "text-[#5A3921]/70 hover:text-[#5A3921]"
              }`}
              onClick={() => setActiveTab("anual")}
            >
              Anual
              <span className="ml-2 bg-amber-100 text-amber-800 text-xs px-2 py-0.5 rounded-full">
                20% ahorro
              </span>
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch max-w-5xl mx-auto">
          <div className="w-full lg:w-1/2 bg-white rounded-2xl shadow-lg overflow-hidden border border-[#E8F5E9] hover:shadow-xl transition-all duration-300 group">
            <div className="p-8 flex flex-col h-full">
              <div className="mb-6 flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-full flex items-center justify-center mr-4 shadow-sm group-hover:scale-105 transition-transform">
                  <Leaf className="h-8 w-8 text-[#2E7D32]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#5A3921]">
                    Plan Básico
                  </h3>
                  <p className="text-[#5A3921]/60 text-sm">
                    Para pequeños productores
                  </p>
                </div>
              </div>

              <div className="mb-6 pb-6 border-b border-[#E8F5E9]">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-[#5A3921]">
                    S/ 0
                  </span>
                  <span className="text-[#5A3921]/60 ml-1">/mes</span>
                </div>
                <p className="text-[#5A3921]/70 text-sm mt-2">
                  Ideal para empezar a proteger tus cultivos con tecnología
                </p>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                {basicFeatures.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <div className="mt-0.5 bg-[#E8F5E9] rounded-full p-1 mr-3">
                      <Check className="h-3 w-3 text-[#2E7D32]" />
                    </div>
                    <div className="flex items-center">
                      <div className="text-[#5A3921]/90 mr-2">
                        {feature.icon}
                      </div>
                      <span className="text-[#5A3921]/80">{feature.text}</span>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full py-3 px-4 bg-white text-[#2E7D32] border-2 border-[#2E7D32] rounded-full hover:bg-[#F0FFF0] transition-colors font-medium group-hover:shadow-md">
                <a href="#download">Comenzar Gratis</a>
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 rounded-2xl shadow-xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2E7D32] to-[#1B5E20]"></div>

            <div className="p-8 flex flex-col h-full relative z-2">
              <div className="mb-6 flex items-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-sm group-hover:scale-105 transition-transform">
                  <Crown className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Plan Premium</h3>
                  <p className="text-white/80 text-sm">
                    Para productores profesionales
                  </p>
                </div>
              </div>

              <div className="mb-6 pb-6 border-b border-white/20">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-white">
                    {activeTab === "mensual" ? "S/ 15" : "S/ 144"}
                  </span>
                  <span className="text-white/70 ml-1">
                    /{activeTab === "mensual" ? "mes" : "año"}
                  </span>
                </div>
                <p className="text-white/80 text-sm mt-2">
                  {activeTab === "anual" && "S/ 12/mes facturados anualmente. "}
                  Protección completa para optimizar tu producción
                </p>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                {premiumFeatures.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <div className="mt-0.5 bg-white/20 rounded-full p-1 mr-3">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <div className="flex items-center">
                      <div className="text-white/90 mr-2">{feature.icon}</div>
                      <span className="text-white/90">{feature.text}</span>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full py-3 px-4 bg-white text-[#2E7D32] rounded-full hover:bg-[#F8FFF8] transition-colors font-medium shadow-md group-hover:shadow-lg">
                <a href="#download">Comenzar Premium</a>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="flex items-center justify-center flex-wrap gap-4 max-w-3xl mx-auto">
            <div className="flex items-center text-[#5A3921]/60 text-sm">
              <Check className="h-4 w-4 text-[#2E7D32] mr-1" />
              <span>Sin compromiso</span>
            </div>
            <div className="flex items-center text-[#5A3921]/60 text-sm">
              <Check className="h-4 w-4 text-[#2E7D32] mr-1" />
              <span>Cancela cuando quieras</span>
            </div>
            <div className="flex items-center text-[#5A3921]/60 text-sm">
              <Check className="h-4 w-4 text-[#2E7D32] mr-1" />
              <span>15 días de garantía</span>
            </div>
            <div className="flex items-center text-[#5A3921]/60 text-sm">
              <Check className="h-4 w-4 text-[#2E7D32] mr-1" />
              <span>Soporte en español</span>
            </div>
          </div>

          <p className="mt-6 text-sm text-[#5A3921]/60 max-w-xl mx-auto">
            Todos los planes incluyen actualizaciones regulares. Pagos seguros a
            través de Yape, Plin o tarjeta de crédito/débito. Precios en soles
            peruanos (PEN), impuestos incluidos.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PlansSection;
