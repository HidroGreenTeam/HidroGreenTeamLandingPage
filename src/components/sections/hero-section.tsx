import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#E8F5E9] to-[#F8F5F0]">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#5A3921]">
              Diagnóstico instantáneo y soluciones para tus cultivos
            </h1>
            <p className="max-w-[600px] text-[#5A3921]/80 md:text-xl">
              Ayni, la aplicación de HidroGreen impulsada por IA, identifica y ofrece tratamientos para enfermedades de plantas, 
              funcionando incluso sin conexión a internet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button className="rounded-full bg-[#2E7D32] text-white hover:bg-[#1B5E20] h-12 px-8 text-base">
                <Download className="mr-2 h-5 w-5" /> Descargar Ayni
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white h-12 px-8 text-base"
              >
                Probar Demo
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
            <img
              src="/src/assets/hero2.avif?height=400&width=600"
              alt="Agricultor peruano usando Ayni en su campo"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}