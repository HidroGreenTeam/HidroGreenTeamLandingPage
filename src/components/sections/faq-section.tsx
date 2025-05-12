import {
  Camera,
  ChevronDown,
  Coffee,
  CreditCard,
  HelpCircle,
  Leaf,
  MessageCircle,
  WifiOff
} from "lucide-react";
import { useEffect, useState } from "react";

function FAQSection() {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const faqItems = [
    {
      question: "¿Cómo funciona Ayni para detectar enfermedades en el café?",
      answer:
        "Ayni utiliza inteligencia artificial entrenada específicamente para identificar enfermedades en cultivos de café peruanos. El proceso es simple: el agricultor toma una fotografía de la parte afectada de la planta, la IA analiza los patrones visuales comparándolos con miles de casos conocidos, y en segundos entrega un diagnóstico preciso junto con el nivel de gravedad. Todo el procesamiento ocurre en el dispositivo, sin necesidad de enviar datos a servidores externos.",
      icon: <Leaf className="h-5 w-5" />,
      color: "#2E7D32",
      bgColor: "#E8F5E9",
    },
    {
      question: "¿Qué enfermedades del café puede identificar?",
      answer:
        "Actualmente, Ayni puede identificar con precisión las principales enfermedades que afectan los cultivos de café en Perú, incluyendo: Roya del café (Hemileia vastatrix), Ojo de gallo (Mycena citricolor), Broca del café (Hypothenemus hampei), Mancha de hierro (Cercospora coffeicola), Antracnosis (Colletotrichum spp.), Mal de hilachas (Pellicularia koleroga), y plagas como la araña roja. Nuestro equipo agronómico actualiza constantemente la base de conocimientos para incluir más enfermedades y variantes regionales.",
      icon: <Coffee className="h-5 w-5" />,
      color: "#795548",
      bgColor: "#EFEBE9",
    },
    {
      question: "¿Necesito internet para usar la aplicación?",
      answer:
        "No, Ayni está diseñada para funcionar completamente sin conexión a internet, lo que la hace ideal para zonas rurales con conectividad limitada o nula. Todo el procesamiento de imágenes y diagnóstico ocurre directamente en tu dispositivo. La base de datos de enfermedades, tratamientos y guías está integrada en la aplicación. Cuando tengas acceso a internet, la app puede sincronizar datos para actualizar su base de conocimientos y respaldar tu historial de diagnósticos si lo deseas.",
      icon: <WifiOff className="h-5 w-5" />,
      color: "#FF9800",
      bgColor: "#FFF3E0",
    },
    {
      question: "¿Funciona con cámaras básicas de smartphone?",
      answer:
        "Sí, Ayni está optimizada para funcionar con cámaras de smartphones básicos, no requiere dispositivos de gama alta. Nuestra IA ha sido entrenada para reconocer enfermedades incluso a partir de imágenes de menor resolución o calidad. La aplicación incluye guías visuales que ayudan a tomar fotografías adecuadas para un mejor diagnóstico, considerando aspectos como distancia, ángulo e iluminación. En condiciones de luz diurna normal, prácticamente cualquier smartphone fabricado después de 2018 será suficiente.",
      icon: <Camera className="h-5 w-5" />,
      color: "#2196F3",
      bgColor: "#E3F2FD",
    },
    {
      question: "¿Qué diferencias hay entre el plan gratuito y el premium?",
      answer:
        "El plan básico gratuito te permite realizar hasta 10 diagnósticos mensuales, funciona sin internet, ofrece recomendaciones básicas de tratamiento y guarda un historial de tus últimos 30 días. El plan premium (S/15 mensual o S/144 anual) incluye diagnósticos ilimitados, historial permanente con análisis de tendencias, recomendaciones de tratamiento personalizadas según tu región y tipo de cultivo, alertas preventivas basadas en patrones históricos, exportación de informes detallados y soporte prioritario vía WhatsApp. Ambos planes mantienen la funcionalidad sin internet y la precisión en los diagnósticos.",
      icon: <CreditCard className="h-5 w-5" />,
      color: "#9C27B0",
      bgColor: "#F3E5F5",
    },
    {
      question: "¿Qué tan precisa es la detección de enfermedades?",
      answer:
        "Nuestra IA ha sido entrenada con más de 100,000 imágenes de enfermedades específicas de cultivos de café en condiciones peruanas, alcanzando una precisión promedio del 90-95% para las enfermedades más comunes. La precisión varía ligeramente según la enfermedad, siendo mayor para casos como la roya (96%) y la broca (94%). El sistema mejora constantemente mediante aprendizaje continuo, y todas las actualizaciones son verificadas por expertos agrónomos de diversas regiones cafetaleras del Perú antes de ser implementadas. Para casos donde la IA tiene menor certeza, la app lo indica claramente.",
      icon: <HelpCircle className="h-5 w-5" />,
      color: "#4CAF50",
      bgColor: "#E8F5E9",
    },
  ];

  return (
    <section
      id="faq"
      className="py-20 bg-gradient-to-b from-white to-[#F1F8E9] relative overflow-hidden"
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
            Preguntas <span className="text-[#2E7D32]">Frecuentes</span>
          </h2>
          <p
            className={`max-w-[700px] text-[#5A3921]/80 md:text-lg transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Encuentra respuestas a las dudas más comunes sobre nuestra
            aplicación para el diagnóstico de enfermedades en cultivos de café
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-8 relative">
          <div className="absolute -left-20 top-1/3 hidden lg:block">
            <div className="relative">
              <MessageCircle className="h-16 w-16 text-green-100" />
              <Coffee className="h-8 w-8 text-amber-200 absolute top.2 left-4" />
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-[#E8F5E9] overflow-hidden">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`border-b border-[#E8F5E9] last:border-0 transition-all duration-300 ${
                  openItem === index
                    ? "bg-gradient-to-r from-white to-[#FAFFF7]"
                    : ""
                }`}
              >
                <button
                  className="w-full text-left py-5 px-6 hover:bg-[#FAFFF7] transition-all flex items-center gap-4"
                  onClick={() => setOpenItem(openItem === index ? null : index)}
                  aria-expanded={openItem === index}
                >
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center shadow-sm transition-all duration-300"
                    style={{
                      backgroundColor: item.bgColor,
                      color: item.color,
                    }}
                  >
                    {item.icon}
                  </div>
                  <span className="font-medium text-[#5A3921] text-lg">
                    {item.question}
                  </span>
                  <div className="ml-auto">
                    <ChevronDown
                      className={`h-5 w-5 text-[#5A3921]/60 transition-transform duration-300 ${
                        openItem === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openItem === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 pt-1 text-[#5A3921]/80 pl-20 leading-relaxed">
                    {item.answer}

                    {openItem === index && (
                      <div className="mt-4 flex items-center">
                        <div
                          className="h-1 w-8 rounded-full"
                          style={{ backgroundColor: item.bgColor }}
                        ></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
