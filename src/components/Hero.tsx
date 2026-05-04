
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="container grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 text-sm mb-6 backdrop-blur-sm">
                        Head of Marketing • CMO
                    </div>
                    <h1 className="mb-6 leading-tight">
                        The GTM leader you need to drive your team's success.
                    </h1>
                    <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
                        Revenue-driven marketing lead based in Paris. I bring value and solve problems, driving impact from day one.
                    </p>

                    <div className="flex gap-4">
                        <a href="#contact" className="group px-8 py-3 bg-white text-black font-semibold rounded-full flex items-center gap-2 hover:bg-indigo-50 transition-colors">
                            Contact Me
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="/cv.pdf" className="px-8 py-3 border border-white/20 rounded-full font-semibold hover:bg-white/5 transition-colors flex items-center gap-2">
                            <Download className="w-4 h-4" />
                            Download CV
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    <div className="relative z-10 rounded-2xl overflow-hidden glass-card p-2">
                        <img
                            src="https://uploads-ssl.webflow.com/6422d3c9a4821a7d667c212e/6422d56f6b5b0376176510d9_Antoine-Dumont-Portrait.png"
                            alt="Antoine Dumont"
                            className="rounded-xl w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                    {/* Decorative Ring */}
                    <div className="absolute -inset-4 border border-white/10 rounded-[2rem] z-0" />
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-2 animate-bounce"
            >
                <div className="w-1 h-12 rounded-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            </motion.div>
        </section>
    );
};
