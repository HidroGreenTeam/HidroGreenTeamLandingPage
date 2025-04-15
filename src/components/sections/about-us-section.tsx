import { Users, Leaf, Code, LineChart } from "lucide-react"

export default function AboutUsSection() {
    return (
        <section className="w-full py-12 md:py-24 bg-[#F8F5F0]">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center text-center space-y-4 mb-12">
                    <div className="inline-block rounded-lg bg-[#E8F5E9] px-3 py-1 text-sm text-[#2E7D32]">El equipo detrás</div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#5A3921]">Who We Are</h2>
                    <p className="max-w-[700px] text-[#5A3921]/80 md:text-lg">
                        We are a passionate team of engineers and agricultural experts working to bring smart, accessible solutions
                        to rural farmers in Peru.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
                    {[
                        {
                            name: "Diego",
                            role: "Software Engineer",
                            bio: "Expert in Andean crop diseases with 8 years of field experience in rural Peru.",
                            image: "/placeholder.svg?height=200&width=200",
                            icon: <Code className="h-5 w-5" />,
                        },
                        {
                            name: "Tatiana",
                            role: "Software Engineer",
                            bio: "Develops the AI algorithms that power our disease detection technology.",
                            image: "/placeholder.svg?height=200&width=200",
                            icon: <Code className="h-5 w-5" />,
                        },
                        {
                            name: "David",
                            role: "Software Engineer",
                            bio: "Creates intuitive interfaces accessible to farmers with varying levels of tech literacy.",
                            image: "/placeholder.svg?height=200&width=200",
                            icon: <Code className="h-5 w-5" />,
                        },
                        {
                            name: "Daniel",
                            role: "Software Engineer",
                            bio: "Analyzes crop disease patterns across different Peruvian regions and climates.",
                            image: "/placeholder.svg?height=200&width=200",
                            icon: <Code className="h-5 w-5" />,
                        },
                        {
                            name: "Abel",
                            role: "Software Engineer",
                            bio: "Analyzes crop disease patterns across different Peruvian regions and climates.",
                            image: "/placeholder.svg?height=200&width=200",
                            icon: <Code className="h-5 w-5" />,
                        },
                    ].map((member, index) => (
                        <div
                            key={Number(index)}
                            className="flex flex-col items-center text-center space-y-3 p-6 rounded-xl bg-white shadow-sm border border-[#E8F5E9] transition-all hover:shadow-md"
                        >
                            <div className="relative h-32 w-32 rounded-full overflow-hidden border-4 border-[#E8F5E9]">
                                <img src={member.image || "/placeholder.svg"} alt={member.name} className="object-cover w-full h-full" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-bold text-xl text-[#5A3921]">{member.name}</h3>
                                <div className="flex items-center justify-center space-x-1 text-[#2E7D32]">
                                    <span className="bg-[#E8F5E9] p-1 rounded-full">{member.icon}</span>
                                    <span className="text-sm font-medium">{member.role}</span>
                                </div>
                                <p className="text-[#5A3921]/70 text-sm">{member.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 p-6 rounded-xl bg-[#E8F5E9] border border-[#2E7D32]/20">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="relative w-full md:w-1/3 h-48 rounded-lg overflow-hidden">
                            <img
                                src="/placeholder.svg?height=300&width=400"
                                alt="Our team in the field with Peruvian farmers"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="w-full md:w-2/3 space-y-4">
                            <h3 className="text-xl font-bold text-[#2E7D32]">Our Mission</h3>
                            <p className="text-[#5A3921]">
                                Founded in 2023, our team combines expertise in agriculture, technology, and design to create solutions
                                that address the unique challenges faced by Peruvian farmers. We've spent months in rural communities
                                across the Andes and coastal regions, working directly with farmers to understand their needs.
                            </p>
                            <p className="text-[#5A3921]">
                                Our platform is built with and for the people who grow Peru's food, ensuring it works in the real
                                conditions they face every day.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
