import {
  ChevronDown,
  Coffee,
  CreditCard,
  Download,
  HelpCircle,
  Leaf,
  LogIn,
  Menu,
  Smartphone,
  Sun,
  X,
  ZoomIn,
} from "lucide-react";
import React, { useEffect, useState } from "react";

const HeaderComponent: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = [
        "hero",
        "features",
        "demo",
        "testimonials",
        "plans",
        "faq",
        "about",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (
        !target.closest(".more-menu-container") &&
        !target.closest(".more-menu-dropdown")
      ) {
        setMoreMenuOpen(false);
      }
    };

    handleScroll();
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#hero", icon: <Sun className="h-3.5 w-3.5" /> },
    {
      name: "Funciones",
      href: "#features",
      icon: <ZoomIn className="h-3.5 w-3.5" />,
    },
    {
      name: "Demo",
      href: "#demo",
      icon: <Smartphone className="h-3.5 w-3.5" />,
    },
    {
      name: "Planes",
      href: "#plans",
      icon: <CreditCard className="h-3.5 w-3.5" />,
    },

    {
      name: "Testimonios",
      href: "#testimonials",
      icon: <Coffee className="h-3.5 w-3.5" />,
    },
    { name: "FAQ", href: "#faq", icon: <HelpCircle className="h-3.5 w-3.5" /> },
    {
      name: "Nosotros",
      href: "#about",
      icon: <Leaf className="h-3.5 w-3.5" />,
    },
  ];

  const visibleNavLinks =
    windowWidth < 1000
      ? navLinks.slice(0, Math.max(1, Math.floor((windowWidth - 480) / 110)))
      : navLinks;

  const toggleMoreMenu = () => {
    setMoreMenuOpen(!moreMenuOpen);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F8F5F0] shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 flex h-16 items-center">
        <div className="flex items-center justify-between w-full">
          <a
            href="/"
            className="flex items-center gap-2 group z-50 flex-shrink-0 mr-2"
          >
            <div className="rounded-lg p-1.5 bg-white shadow-sm border border-[#E8F5E9] group-hover:bg-white group-hover:shadow-sm group-hover:border group-hover:border-[#E8F5E9]">
              <Leaf className="h-5 w-5 text-[#2E7D32]" />
            </div>
            <div>
              <span className="text-lg font-bold text-[#2E7D32]">
                HidroGreen
              </span>
            </div>
          </a>

          <div className="flex justify-center flex-1 px-2">
            <nav className="hidden md:flex gap-1 overflow-x-auto no-scrollbar items-center justify-center">
              {visibleNavLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm whitespace-nowrap font-medium relative px-3 py-2 rounded-full transition-all duration-200 ${
                    activeSection === link.href.substring(1)
                      ? "text-[#2E7D32] bg-[#E8F5E9]"
                      : "text-[#5A3921] hover:text-[#2E7D32] hover:bg-[#E8F5E9]/50"
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    {activeSection === link.href.substring(1) && (
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]"></div>
                    )}
                    <span>{link.name}</span>
                  </div>
                </a>
              ))}

              {windowWidth < 1000 &&
                navLinks.length > visibleNavLinks.length && (
                  <div className="more-menu-container">
                    <button
                      onClick={toggleMoreMenu}
                      className={`text-sm whitespace-nowrap font-medium relative px-3 py-2 rounded-full transition-all duration-200 ${
                        moreMenuOpen
                          ? "text-[#2E7D32] bg-[#E8F5E9]"
                          : "text-[#5A3921] hover:text-[#2E7D32] hover:bg-[#E8F5E9]/50"
                      } flex items-center gap-1.5`}
                    >
                      <span>Más</span>
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          moreMenuOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {moreMenuOpen && (
                      <div
                        className="fixed right-auto mt-2 bg-white rounded-lg shadow-lg overflow-hidden z-50 min-w-48 border border-gray-100 more-menu-dropdown"
                        style={{
                          top: "auto",
                          width: "180px",
                        }}
                      >
                        <div className="py-2">
                          {navLinks
                            .slice(visibleNavLinks.length)
                            .map((link) => (
                              <a
                                key={link.href}
                                href={link.href}
                                className={`flex items-center gap-2 px-4 py-2 text-sm hover:bg-[#E8F5E9] ${
                                  activeSection === link.href.substring(1)
                                    ? "text-[#2E7D32] font-medium"
                                    : "text-[#5A3921]"
                                }`}
                                onClick={() => setMoreMenuOpen(false)}
                              >
                                {React.cloneElement(link.icon, {
                                  className: `h-3.5 w-3.5 ${
                                    activeSection === link.href.substring(1)
                                      ? "text-[#2E7D32]"
                                      : "text-[#5A3921]/70"
                                  }`,
                                })}
                                <span>{link.name}</span>
                              </a>
                            ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
            </nav>
          </div>

          <div className="flex items-center gap-2 justify-end flex-shrink-0">
            <a
              href="#login"
              className="hidden sm:flex rounded-full border border-[#2E7D32] text-[#2E7D32] hover:bg-[#E8F5E9] items-center gap-1.5 h-9 px-3 transition-colors whitespace-nowrap"
            >
              <LogIn className="h-3.5 w-3.5" />
              <span>Iniciar Sesión</span>
            </a>

            <a
              href="#download"
              className="hidden sm:flex rounded-full bg-[#2E7D32] text-white hover:bg-[#1B5E20] items-center gap-1.5 h-9 px-3 transition-colors shadow-sm hover:shadow-md whitespace-nowrap"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Descargar</span>
            </a>

            <button
              className="md:hidden z-50 p-2 rounded-full hover:bg-[#E8F5E9]/50 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 text-[#5A3921]" />
              ) : (
                <Menu className="h-5 w-5 text-[#5A3921]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {moreMenuOpen && (
        <div
          className="block md:hidden mx-auto bg-white rounded-lg shadow-lg overflow-hidden z-50 min-w-48 border border-gray-100 more-menu-dropdown mt-2"
          style={{
            maxWidth: "90%",
            margin: "0 auto",
          }}
        >
          <div className="py-2">
            {navLinks.slice(visibleNavLinks.length).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 px-4 py-2 text-sm hover:bg-[#E8F5E9] ${
                  activeSection === link.href.substring(1)
                    ? "text-[#2E7D32] font-medium"
                    : "text-[#5A3921]"
                }`}
                onClick={() => setMoreMenuOpen(false)}
              >
                {React.cloneElement(link.icon, {
                  className: `h-3.5 w-3.5 ${
                    activeSection === link.href.substring(1)
                      ? "text-[#2E7D32]"
                      : "text-[#5A3921]/70"
                  }`,
                })}
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      )}

      <div
        className={`fixed inset-0 bg-[#F8F5F0] flex flex-col z-40 p-6 pt-20 transition-all duration-300 md:hidden transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-base font-medium p-3 rounded-xl transition-all flex items-center gap-3 ${
                activeSection === link.href.substring(1)
                  ? "bg-[#E8F5E9] text-[#2E7D32]"
                  : "text-[#5A3921] hover:bg-[#E8F5E9]/50"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  activeSection === link.href.substring(1)
                    ? "bg-[#2E7D32]/10"
                    : "bg-[#F1F8E9]"
                }`}
              >
                {React.cloneElement(link.icon, {
                  className: `h-4 w-4 ${
                    activeSection === link.href.substring(1)
                      ? "text-[#2E7D32]"
                      : "text-[#5A3921]"
                  }`,
                })}
              </div>
              <span>{link.name}</span>
            </a>
          ))}
        </nav>

        <div className="mt-auto pt-6 border-t border-[#E8F5E9] flex flex-col gap-3">
          <a
            href="#login"
            className="rounded-full border border-[#2E7D32] text-[#2E7D32] hover:bg-[#E8F5E9] w-full flex items-center justify-center gap-2 p-3 transition-colors"
          >
            <LogIn className="h-4 w-4" />
            <span>Iniciar Sesión</span>
          </a>
          <a
            href="#download"
            className="rounded-full bg-[#2E7D32] text-white hover:bg-[#1B5E20] w-full flex items-center justify-center gap-2 p-3 transition-colors shadow-sm"
          >
            <Download className="h-4 w-4" />
            <span>Descargar Ayni</span>
          </a>
        </div>

        <div className="mt-6 text-center">
          <div className="flex items-center justify-center gap-2">
            <Coffee className="h-4 w-4 text-[#5A3921]/40" />
            <p className="text-sm text-[#5A3921]/60">
              Ayni - Agricultura Inteligente
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
