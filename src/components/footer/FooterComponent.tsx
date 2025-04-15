import { ChevronDown, Leaf } from "lucide-react";

export default function FooterComponent() {
    return (<footer id="contact" className="w-full border-t bg-[#F8F5F0] py-12">
        <div className="container grid grid-cols-2 gap-8 px-4 md:px-6 md:grid-cols-4 lg:grid-cols-5">
            <div className="flex flex-col col-span-2 md:col-span-1 lg:col-span-2">
                <a href="/" className="flex items-center gap-2 mb-4">
                    <Leaf className="h-6 w-6 text-[#2E7D32]" />
                    <span className="text-lg font-bold text-[#2E7D32]">PlantaSana</span>
                </a>
                <p className="text-sm text-[#5A3921]/80 max-w-xs">
                    Ayudando a los agricultores peruanos a proteger sus cultivos con tecnología accesible e inteligencia
                    artificial.
                </p>
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="text-sm font-medium text-[#5A3921]">Ayuda</h3>
                <a href="/use-guide" className="text-sm text-[#5A3921]/80 hover:text-[#2E7D32]">
                    Guía de Uso
                </a>
                <a href="/faq" className="text-sm text-[#5A3921]/80 hover:text-[#2E7D32]">
                    Preguntas Frecuentes
                </a>
                <a href="/support" className="text-sm text-[#5A3921]/80 hover:text-[#2E7D32]">
                    Soporte Técnico
                </a>
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="text-sm font-medium text-[#5A3921]">Comunidad</h3>
                <a href="/farmers-forum" className="text-sm text-[#5A3921]/80 hover:text-[#2E7D32]">
                    Foro de Agricultores
                </a>
                <a href="/events" className="text-sm text-[#5A3921]/80 hover:text-[#2E7D32]">
                    Eventos
                </a>
                <a href="/trainings" className="text-sm text-[#5A3921]/80 hover:text-[#2E7D32]">
                    Capacitaciones
                </a>
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="text-sm font-medium text-[#5A3921]">Idioma</h3>
                <button type="button" className="flex items-center gap-2 text-sm text-[#5A3921]/80 hover:text-[#2E7D32]">
                    Español
                    <ChevronDown className="h-4 w-4" />
                </button>
                <button type="button" className="flex items-center gap-2 text-sm text-[#5A3921]/80 hover:text-[#2E7D32]">
                    Quechua
                    <ChevronDown className="h-4 w-4" />
                </button>
            </div>
        </div>
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 px-4 md:px-6 mt-8 pt-8 border-t">
            <p className="text-xs text-[#5A3921]/60">© 2025 HidroGreen. Todos los derechos reservados.</p>
            <div className="flex gap-4">
                <a href="/privacy-politics" className="text-xs text-[#5A3921]/60 hover:text-[#2E7D32]">
                    Política de Privacidad
                </a>
                <a href="/terms-of-use" className="text-xs text-[#5A3921]/60 hover:text-[#2E7D32]">
                    Términos de Uso
                </a>
            </div>
        </div>
    </footer>)
}