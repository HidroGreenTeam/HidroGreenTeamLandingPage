import { Button } from "@/components/ui/button"
import { ArrowRight, Camera, Check, Smartphone } from "lucide-react"

export default function DemoSection() {
    return (
        <section className="w-full py-12 md:py-24 bg-[#E8F5E9]">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center text-center space-y-4 mb-12">
                    <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm text-[#2E7D32]">Ver la demo</div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#5A3921]">See it in Action</h2>
                    <p className="max-w-[700px] text-[#5A3921]/80 md:text-lg">
                        Watch how easy it is to identify plant diseases and get treatment recommendations in seconds.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#2E7D32] flex items-center justify-center text-white">
                                    1
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-[#5A3921]">Take a Photo</h3>
                                    <p className="text-[#5A3921]/80">
                                        Simply open the app and take a clear photo of the affected plant leaf or stem. The app works even
                                        without internet connection.
                                    </p>
                                    <div className="mt-2 p-2 bg-white rounded-lg inline-flex items-center gap-2 text-sm text-[#2E7D32]">
                                        <Camera className="h-4 w-4" />
                                        <span>Works with basic smartphone cameras</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#2E7D32] flex items-center justify-center text-white">
                                    2
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-[#5A3921]">Get Instant Diagnosis</h3>
                                    <p className="text-[#5A3921]/80">
                                        Our AI analyzes the image and identifies the disease affecting your crop. Results appear in seconds,
                                        with confidence level and detailed information.
                                    </p>
                                    <div className="mt-2 p-2 bg-white rounded-lg inline-flex items-center gap-2 text-sm text-[#2E7D32]">
                                        <Check className="h-4 w-4" />
                                        <span>Supports Spanish and Quechua</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#2E7D32] flex items-center justify-center text-white">
                                    3
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-[#5A3921]">Receive Treatment Suggestions</h3>
                                    <p className="text-[#5A3921]/80">
                                        Get practical treatment recommendations using locally available resources. Save the results for
                                        future reference or share with other farmers.
                                    </p>
                                    <div className="mt-2 p-2 bg-white rounded-lg inline-flex items-center gap-2 text-sm text-[#2E7D32]">
                                        <Smartphone className="h-4 w-4" />
                                        <span>Access offline anytime</span>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4">
                                <Button className="rounded-full bg-[#2E7D32] text-white hover:bg-[#1B5E20] h-12 px-8 text-base">
                                    Try the Demo <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 flex justify-center">
                        <div className="relative">
                            {/* Phone frame */}
                            <div className="relative w-[280px] h-[580px] bg-[#5A3921] rounded-[3rem] p-3 shadow-xl">
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-[#5A3921] rounded-b-xl" />
                                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                                    {/* App screens - we'll show 3 screens with a simple animation */}
                                    <div className="relative w-full h-full">
                                        <div className="absolute inset-0 flex flex-col">
                                            {/* App header */}
                                            <div className="bg-[#2E7D32] text-white p-4 flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                                        <Camera className="h-4 w-4" />
                                                    </div>
                                                    <span className="font-bold">PlantaSana</span>
                                                </div>
                                                <div className="w-8 h-8 rounded-full bg-white/20" />
                                            </div>

                                            {/* Main content area */}
                                            <div className="flex-1 p-4 flex flex-col items-center justify-center gap-4">
                                                <div className="w-full aspect-square rounded-xl overflow-hidden relative">
                                                    <img
                                                        src="/placeholder.svg?height=300&width=300"
                                                        alt="Potato leaf with disease"
                                                        className="object-cover"
                                                    />
                                                    <div className="absolute bottom-0 left-0 right-0 bg-[#2E7D32]/80 text-white text-center py-2 text-sm">
                                                        Analyzing...
                                                    </div>
                                                </div>

                                                <div className="w-full bg-[#E8F5E9] rounded-xl p-4 text-left">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <h4 className="font-bold text-[#2E7D32]">Diagnosis Result</h4>
                                                        <span className="text-xs bg-[#2E7D32] text-white px-2 py-1 rounded-full">95% Match</span>
                                                    </div>
                                                    <p className="text-[#5A3921] font-bold">Late Blight (Phytophthora infestans)</p>
                                                    <p className="text-[#5A3921]/70 text-sm mt-1">
                                                        Common fungal disease affecting potato crops in humid conditions.
                                                    </p>
                                                </div>

                                                <div className="w-full bg-white border border-[#E8F5E9] rounded-xl p-4 text-left">
                                                    <h4 className="font-bold text-[#2E7D32] mb-2">Recommended Treatment</h4>
                                                    <ul className="text-sm text-[#5A3921] space-y-2">
                                                        <li className="flex items-start gap-2">
                                                            <Check className="h-4 w-4 text-[#2E7D32] mt-0.5 flex-shrink-0" />
                                                            <span>Remove and destroy infected leaves</span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <Check className="h-4 w-4 text-[#2E7D32] mt-0.5 flex-shrink-0" />
                                                            <span>Apply copper-based fungicide in early morning</span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <Check className="h-4 w-4 text-[#2E7D32] mt-0.5 flex-shrink-0" />
                                                            <span>Improve drainage around plants</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* Bottom navigation */}
                                            <div className="bg-white border-t border-[#E8F5E9] p-2 flex justify-around">
                                                <div className="w-10 h-10 rounded-full bg-[#E8F5E9] flex items-center justify-center">
                                                    <Camera className="h-5 w-5 text-[#2E7D32]" />
                                                </div>
                                                <div className="w-10 h-10 rounded-full bg-[#E8F5E9] flex items-center justify-center">
                                                    <Check className="h-5 w-5 text-[#2E7D32]" />
                                                </div>
                                                <div className="w-10 h-10 rounded-full bg-[#E8F5E9] flex items-center justify-center">
                                                    <Smartphone className="h-5 w-5 text-[#2E7D32]" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-[#E8F5E9] rounded-full z-[-1]" />
                            <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#F8F5F0] rounded-full z-[-1]" />
                        </div>
                    </div>
                </div>

                <div className="mt-16 bg-white rounded-xl p-6 shadow-sm border border-[#E8F5E9]">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="w-full md:w-2/3 space-y-4">
                            <h3 className="text-xl font-bold text-[#5A3921]">View Sample Diagnosis</h3>
                            <p className="text-[#5A3921]/80">
                                Not ready to download? Try our web demo to see how the app identifies common diseases in potato, corn,
                                and coffee plants. No registration required.
                            </p>
                            <Button
                                variant="outline"
                                className="rounded-full border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white"
                            >
                                View Sample Diagnosis
                            </Button>
                        </div>
                        <div className="relative w-full md:w-1/3 h-48 rounded-lg overflow-hidden">
                            <img
                                src="/placeholder.svg?height=300&width=400"
                                alt="Sample diagnosis results"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
