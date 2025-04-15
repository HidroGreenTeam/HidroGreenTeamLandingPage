import { Leaf, ChevronDown } from "lucide-react";
import { Button } from "../ui/button";

export default function HeaderComponent() {
    return (<header className="sticky top-0 z-40 w-full border-b bg-[#F8F5F0]/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
            <a href="/" className="flex items-center gap-2">
                <Leaf className="h-6 w-6 text-[#2E7D32]" />
                <span className="text-lg font-bold text-[#2E7D32]">PlantaSana</span>
            </a>
            <nav className="hidden md:flex gap-6">
                <a
                    href="#how-it-works"
                    className="text-sm font-medium text-[#5A3921] hover:text-[#2E7D32] transition-colors"
                >
                    Cómo Funciona
                </a>
                <a
                    href="#features"
                    className="text-sm font-medium text-[#5A3921] hover:text-[#2E7D32] transition-colors"
                >
                    Características
                </a>
                <a
                    href="#testimonials"
                    className="text-sm font-medium text-[#5A3921] hover:text-[#2E7D32] transition-colors"
                >
                    Testimonios
                </a>
                <a href="#contact" className="text-sm font-medium text-[#5A3921] hover:text-[#2E7D32] transition-colors">
                    Contacto
                </a>
            </nav>
            <Button variant="outline" size="icon" className="md:hidden">
                <ChevronDown className="h-4 w-4" />
                <span className="sr-only">Menú</span>
            </Button>
            <div className="hidden md:flex items-center gap-4">
                <Button
                    variant="outline"
                    className="rounded-full border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white"
                >
                    Iniciar Sesión
                </Button>
                <Button className="rounded-full bg-[#2E7D32] text-white hover:bg-[#1B5E20]">Descargar App</Button>
            </div>
        </div>
    </header>)
}