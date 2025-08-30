import illustration from "@/assets/illustration.svg"
import FormComponent from "@/components/forms/FormComponent"
// import Footer from "@/components/common/Footer";

function HomePage() {
    return (
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900">
            {/* Geometric Background Pattern */}
            <div className="absolute inset-0">
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
                
                {/* Floating Geometric Shapes */}
                <div className="absolute top-20 left-20 w-20 h-20 border border-cyan-400/30 rotate-45 animate-spin-slow"></div>
                <div className="absolute top-40 right-32 w-16 h-16 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full animate-pulse"></div>
                <div className="absolute bottom-32 left-16 w-12 h-12 bg-gradient-to-r from-orange-400/20 to-red-400/20 transform rotate-12 animate-bounce"></div>
                <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-indigo-400/30 rounded-full animate-ping"></div>
                
                {/* Diagonal Lines */}
                <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent transform -skew-x-12"></div>
                <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-emerald-400/20 to-transparent transform skew-x-12"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex min-h-screen">
                {/* Left Side - Hero Section */}
                <div className="flex-1 flex flex-col justify-center items-start px-8 lg:px-16 max-w-2xl">
                    <div className="space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-400/20 text-cyan-300 text-sm font-medium">
                            <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
                            Real-time Collaboration
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-4">
                            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight">
                                Code
                                <span className="block bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                                    Together
                                </span>
                            </h1>
                            <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
                                Collaborate in real-time with your team. Share code, ideas, and build amazing things together.
                            </p>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 flex items-center justify-center">
                                    <span className="text-cyan-400">⚡</span>
                                </div>
                                <span className="text-gray-300 text-sm">Real-time sync</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-emerald-500/20 to-teal-500/20 flex items-center justify-center">
                                    <span className="text-emerald-400">🎨</span>
                                </div>
                                <span className="text-gray-300 text-sm">Visual drawing</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-teal-500/20 to-cyan-500/20 flex items-center justify-center">
                                    <span className="text-teal-400">💬</span>
                                </div>
                                <span className="text-gray-300 text-sm">Live chat</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-orange-500/20 to-red-500/20 flex items-center justify-center">
                                    <span className="text-orange-400">🚀</span>
                                </div>
                                <span className="text-gray-300 text-sm">Instant setup</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Form and Illustration */}
                <div className="flex-1 flex flex-col justify-center items-center px-8 lg:px-16 relative">
                    {/* Floating Code Blocks */}
                    <div className="absolute top-20 left-10 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-3 text-xs text-gray-300 font-mono transform -rotate-6 animate-float">
                        <div className="text-cyan-400">const</div>
                        <div className="text-white">collaborate = true</div>
                    </div>
                    <div className="absolute bottom-32 right-10 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-3 text-xs text-gray-300 font-mono transform rotate-12 animate-float delay-1000">
                        <div className="text-emerald-400">function</div>
                        <div className="text-white">sync() {}</div>
                    </div>

                    {/* Main Illustration */}
                    <div className="relative mb-8">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
                        <img
                            src={illustration}
                            alt="Code Sync Illustration"
                            className="relative w-[300px] lg:w-[400px] drop-shadow-2xl filter brightness-110 contrast-110"
                        />
                    </div>

                    {/* Form Component */}
                    <div className="w-full max-w-md">
                        <FormComponent />
                    </div>
                </div>
            </div>

            {/* Bottom Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
        </div>
    )
}

export default HomePage
