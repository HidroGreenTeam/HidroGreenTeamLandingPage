import {
  ChevronLeft,
  ChevronRight,
  Coffee,
  Leaf,
  MapPin,
  Quote,
  Star
} from "lucide-react";
import React, { useEffect, useState } from "react";

type Testimonial = {
  name: string;
  location: string;
  occupation: string;
  quote: string;
  color: string;
  bgColor: string;
};

const TestimonialsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials: Testimonial[] = [
    {
      name: "Carlos Mamani",
      location: "Puno",
      occupation: "Productor de café",
      quote:
        "Gracias a Ayni identifiqué la roya en mi cafetal a tiempo. Con el tratamiento recomendado, logré salvar mi cosecha y mejorar mis ingresos en un 35% comparado con el año anterior.",
      color: "#1B5E20",
      bgColor: "#E8F5E9",
    },
    {
      name: "María Huamán",
      location: "Cusco",
      occupation: "Agricultora",
      quote:
        "Me encanta que funcione sin internet. En mi zona la señal es muy mala, pero puedo diagnosticar sin problemas y tomar decisiones rápidas. Ha sido un cambio total en cómo manejo mis cultivos.",
      color: "#795548",
      bgColor: "#EFEBE9",
    },
    {
      name: "José Quispe",
      location: "Cajamarca",
      occupation: "Caficultor",
      quote:
        "La aplicación es muy fácil de usar. Me ha ayudado a detectar la broca del café antes de que se propagara, salvando mi producción. El sistema de alertas tempranas es especialmente útil.",
      color: "#7CB342",
      bgColor: "#F1F8E9",
    },
  ];

  const itemsPerPage = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  };

  const nextPage = () => {
    setCurrentPage((prev) =>
      prev < Math.ceil(testimonials.length / itemsPerPage.mobile) - 1
        ? prev + 1
        : 0,
    );
  };

  const prevPage = () => {
    setCurrentPage((prev) =>
      prev > 0
        ? prev - 1
        : Math.ceil(testimonials.length / itemsPerPage.mobile) - 1,
    );
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-[#FAFAF8] to-[#FAFFF7] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <h2
            className={`text-3xl font-bold tracking-tighter sm:text-4xl text-[#5A3921] transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Historias de <span className="text-[#2E7D32]">Éxito</span>
          </h2>
          <p
            className={`max-w-[700px] text-[#5A3921]/80 md:text-lg transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Descubre cómo Ayni está transformando la agricultura en Perú a
            través de las experiencias de nuestros usuarios
          </p>
        </div>

        <div className="hidden lg:grid grid-cols-3 gap-8 mb-10">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        <div className="hidden md:grid lg:hidden grid-cols-2 gap-8 mb-10">
          {testimonials.slice(0, 2).map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-1">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentPage === index
                    ? "bg-[#2E7D32] scale-125"
                    : "bg-[#E8F5E9] hover:bg-[#C8E6C9]"
                }`}
                onClick={() => setCurrentPage(index)}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 mt-6 md:hidden">
          <button
            onClick={prevPage}
            className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-[#5A3921]/70 hover:text-[#2E7D32] hover:shadow-md transition-all"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextPage}
            className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-[#5A3921]/70 hover:text-[#2E7D32] hover:shadow-md transition-all"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const getInitials = (name: string): string =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("");

  return (
    <div
      className="rounded-2xl shadow-lg p-8 relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group h-full"
      style={{ backgroundColor: testimonial.bgColor }}
    >
      <div
        className="absolute rounded-full w-40 h-40 -right-16 -top-16 opacity-10 group-hover:opacity-20 transition-opacity"
        style={{ backgroundColor: testimonial.color }}
      ></div>
      <div
        className="absolute rounded-full w-20 h-20 -left-10 -bottom-10 opacity-10 group-hover:opacity-15 transition-opacity"
        style={{ backgroundColor: testimonial.color }}
      ></div>

      <div className="flex mb-2">
        {[1, 2, 3, 4, 5].map((_, i) => (
          <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
        ))}
      </div>

      <div className="mb-5 relative">
        <Quote
          className="h-10 w-10 opacity-30 group-hover:opacity-40 transition-opacity"
          style={{ color: testimonial.color }}
        />
      </div>

      <p className="text-[#5A3921] mb-8 relative z-10 font-medium leading-relaxed">
        "{testimonial.quote}"
      </p>

      <div
        className="w-16 h-1 rounded-full mb-6 transition-all duration-300 group-hover:w-20"
        style={{ backgroundColor: testimonial.color }}
      ></div>

      <div className="flex items-center mt-auto">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4 shadow-md"
          style={{ backgroundColor: testimonial.color }}
        >
          {getInitials(testimonial.name)}
        </div>

        <div>
          <h3 className="font-bold text-[#5A3921]">{testimonial.name}</h3>
          <div className="flex items-center text-xs text-[#5A3921]/70 mt-1">
            <Coffee className="h-3 w-3 mr-1" />
            <span>{testimonial.occupation}</span>
            <div className="mx-2 w-1 h-1 rounded-full bg-[#5A3921]/30"></div>
            <MapPin className="h-3 w-3 mr-1" />
            <span>{testimonial.location}</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-40 transition-all duration-300 group-hover:rotate-12">
        <Leaf
          className="h-5 w-5 transition-transform"
          style={{ color: testimonial.color }}
        />
      </div>
    </div>
  );
};

export default TestimonialsSection;
