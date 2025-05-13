import {
  Cpu,
  HeartHandshake,
  History,
  Leaf,
  Medal,
  Target
} from "lucide-react";

function AboutUsSection() {
  const companyValues = [
    {
      title: "Innovación",
      description:
        "Utilizamos inteligencia artificial avanzada que aprende y mejora constantemente para identificar enfermedades en cultivos con una precisión superior al 95%.",
      icon: <Cpu className="h-6 w-6" />,
      color: "#2196F3",
      bgGradient: "from-blue-50 to-blue-100",
    },
    {
      title: "Sostenibilidad",
      description:
        "Promovemos el tratamiento específico y oportuno, reduciendo hasta un 60% el uso de pesticidas y protegiendo la biodiversidad de nuestros ecosistemas agrícolas.",
      icon: <Leaf className="h-6 w-6" />,
      color: "#4CAF50",
      bgGradient: "from-green-50 to-green-100",
    },
    {
      title: "Compromiso",
      description:
        "Desarrollamos tecnología accesible para pequeños y medianos agricultores, funcionando sin internet y con interfaces adaptadas a las comunidades rurales.",
      icon: <HeartHandshake className="h-6 w-6" />,
      color: "#FF9800",
      bgGradient: "from-amber-50 to-amber-100",
    },
    {
      title: "Excelencia",
      description:
        "Nuestros algoritmos evolucionan con cada diagnóstico, alcanzando niveles de detección temprana que superan incluso a expertos agrónomos en rapidez y precisión.",
      icon: <Medal className="h-6 w-6" />,
      color: "#9C27B0",
      bgGradient: "from-purple-50 to-purple-100",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-[#F1F8E9] to-[#E8F5E9] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative">
        <div className="text-center mb-12 flex flex-col items-center">
          <h2 className="text-4xl font-bold text-[#2E7D32] mb-3">HidroGreen</h2>

          <p className="mt-2 text-[#5A3921]/70">
            Transformando la agricultura con innovación desde 2025
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 relative overflow-hidden group border border-green-100">
            <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-green-50 group-hover:bg-green-100 transition-colors duration-300"></div>

            <div className="flex items-center gap-4 mb-5 relative z-10">
              <div className="bg-gradient-to-r from-green-100 to-green-200 w-12 h-12 rounded-full flex items-center justify-center shadow-sm">
                <History className="h-6 w-6 text-green-700" />
              </div>
              <h3 className="text-2xl font-bold text-[#2E7D32]">
                Nuestra Historia
              </h3>
            </div>

            <div className="space-y-3 relative z-10">
              <p className="text-[#5A3921] leading-relaxed">
                HidroGreen nace en 2025 como una iniciativa de jóvenes
                desarrolladores con el objetivo de acercar tecnología accesible
                al agro peruano, especialmente a pequeños y medianos
                agricultores.
              </p>
              <p className="text-[#5A3921] leading-relaxed">
                A partir de este propósito creamos{" "}
                <span className="font-medium">Ayni</span>, una aplicación que
                emplea{" "}
                <span className="font-medium">
                  machine learning y visión por computadora
                </span>{" "}
                para detectar enfermedades en cultivos{" "}
                <span className="font-medium">a partir de una fotografía</span>.
              </p>
              <p className="text-[#5A3921] leading-relaxed">
                Diseñada para funcionar{" "}
                <span className="font-medium">sin conexión a internet</span>,
                Ayni se adapta a las condiciones de zonas rurales con baja
                conectividad.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 relative overflow-hidden group border border-green-100">
            <div className="absolute -right-10 -bottom-10 w-32 h-32 rounded-full bg-amber-50 group-hover:bg-amber-100 transition-colors duration-300"></div>

            <div className="flex items-center gap-4 mb-5 relative z-10">
              <div className="bg-gradient-to-r from-amber-100 to-amber-200 w-12 h-12 rounded-full flex items-center justify-center shadow-sm">
                <Target className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-[#795548]">
                Misión y Visión
              </h3>
            </div>

            <div className="space-y-6 relative z-10">
              <div>
                <h4 className="text-lg font-bold text-[#5A3921] mb-2 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-amber-400 mr-2"></div>
                  Nuestra Misión
                </h4>
                <p className="text-[#5A3921] leading-relaxed pl-4 border-l-2 border-amber-200">
                  Brindar herramientas tecnológicas simples y efectivas para
                  ayudar a los agricultores a detectar y tratar enfermedades en
                  sus cultivos a tiempo.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#5A3921] mb-2 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  Nuestra Visión
                </h4>
                <p className="text-[#5A3921] leading-relaxed pl-4 border-l-2 border-green-200">
                  Ser la plataforma de referencia en salud vegetal en Perú,
                  combinando saberes tradicionales y tecnología para una
                  agricultura más resiliente.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Valores
        <div className="mb-8">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-6 h-1 bg-green-600 rounded-full"></div>
              <div className="w-10 h-1 bg-amber-500 rounded-full"></div>
              <div className="w-6 h-1 bg-green-600 rounded-full"></div>
            </div>
            <h3 className="text-3xl font-bold text-[#2E7D32] mb-3">Nuestros Valores</h3>
            <p className="text-[#5A3921]/80 max-w-2xl mx-auto">
              Estos principios guían cada decisión que tomamos, desde el desarrollo de nuestros algoritmos hasta la forma en que nos relacionamos con las comunidades agrícolas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              <div 
                key={index}
                className={`rounded-xl shadow-md p-6 flex flex-col h-full bg-gradient-to-br ${value.bgGradient} hover:shadow-lg transition-all duration-300 border border-white`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center shadow-sm"
                    style={{ 
                      background: `${value.color}20`,
                      color: value.color
                    }}
                  >
                    {value.icon}
                  </div>
                  <h4 className="font-bold text-lg" style={{ color: value.color }}>{value.title}</h4>
                </div>
                <p className="text-[#5A3921] text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
         */}
      </div>
    </section>
  );
}

export default AboutUsSection;
