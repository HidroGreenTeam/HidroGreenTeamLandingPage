import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Wifi, WifiOff, Camera, CreditCard, Languages, HelpCircle, Leaf } from "lucide-react"

export default function FAQSection() {
    return (
        <section className="w-full py-12 md:py-24 bg-white">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center text-center space-y-4 mb-12">
                    <div className="inline-block rounded-lg bg-[#E8F5E9] px-3 py-1 text-sm text-[#2E7D32]">
                        Preguntas Frecuentes
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#5A3921]">Got questions?</h2>
                    <p className="max-w-[700px] text-[#5A3921]/80 md:text-lg">
                        Find answers to the most common questions about our plant disease detection platform.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto mt-8 rounded-xl border border-[#E8F5E9] bg-[#FAFAF8] p-1">
                    <Accordion type="single" collapsible className="w-full">
                        {[
                            {
                                question: "Do I need internet to use the app?",
                                answer:
                                    "No, our app works completely offline! You can take photos, get diagnoses, and view treatment recommendations without any internet connection. The app will sync your data when you're back online if you want to access additional resources.",
                                icon: <WifiOff className="h-5 w-5 text-[#2E7D32]" />,
                            },
                            {
                                question: "What happens if my camera isn't very good?",
                                answer:
                                    "Our app is designed to work with basic smartphone cameras. We provide guidance on how to take clear photos even with lower quality cameras. The AI has been trained to recognize diseases even from less-than-perfect images. If the diagnosis is uncertain, we'll let you know and provide tips for taking better photos.",
                                icon: <Camera className="h-5 w-5 text-[#2E7D32]" />,
                            },
                            {
                                question: "Is the diagnosis free?",
                                answer:
                                    "Yes! The basic diagnosis feature is completely free. You can identify common plant diseases and get general treatment recommendations at no cost. We offer a premium version with additional features like detailed treatment plans, direct consultation with agronomists, and historical tracking of your crops' health.",
                                icon: <CreditCard className="h-5 w-5 text-[#2E7D32]" />,
                            },
                            {
                                question: "Can I use it if I only speak Quechua?",
                                answer:
                                    "Our app fully supports Quechua. You can switch between Spanish and Quechua in the settings menu. All text is translated, and we also offer voice instructions and audio explanations in both languages to ensure accessibility for all users.",
                                icon: <Languages className="h-5 w-5 text-[#2E7D32]" />,
                            },
                            {
                                question: "How accurate is the disease detection?",
                                answer:
                                    "Our AI has been trained on thousands of images of plant diseases specific to Peruvian crops and conditions. It achieves an accuracy rate of over 85% for the most common diseases. The system is constantly learning and improving with each use. For less common diseases or uncertain cases, we connect you with agricultural experts for verification.",
                                icon: <HelpCircle className="h-5 w-5 text-[#2E7D32]" />,
                            },
                            {
                                question: "Will it work with all my crops?",
                                answer:
                                    "The app currently supports major Peruvian crops including potato, corn, quinoa, coffee, cacao, and avocado. We're continuously adding more crops based on farmer feedback. If you're growing a crop that isn't yet supported, you can still submit photos, and our team will work to provide manual assistance while we expand our AI capabilities.",
                                icon: <Leaf className="h-5 w-5 text-[#2E7D32]" />,
                            },
                        ].map((item, index) => (
                            <AccordionItem key={Number(index)} value={`item-${index}`} className="border-b border-[#E8F5E9] last:border-0">
                                <AccordionTrigger className="py-4 px-4 hover:no-underline hover:bg-[#E8F5E9]/20 rounded-lg transition-all text-[#5A3921] font-medium">
                                    <div className="flex items-center gap-3 text-left">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E8F5E9] flex items-center justify-center">
                                            {item.icon}
                                        </div>
                                        <span>{item.question}</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="px-4 pb-4 pt-1 text-[#5A3921]/80">
                                    <div className="pl-11">{item.answer}</div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
                    <div className="p-4 rounded-lg bg-[#E8F5E9] text-[#2E7D32]">
                        <Wifi className="h-6 w-6 mx-auto mb-2" />
                        <p className="text-sm font-medium">Still have questions?</p>
                    </div>
                    <div className="max-w-md text-[#5A3921]">
                        <p>
                            Contact our support team at{" "}
                            <a href="mailto:ayuda@plantasana.pe" className="text-[#2E7D32] font-medium underline">
                                ayuda@plantasana.pe
                            </a>{" "}
                            or visit our community forum to connect with other farmers.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
