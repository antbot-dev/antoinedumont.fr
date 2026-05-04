
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

export const Contact = () => {
    return (
        <section id="contact" className="section-padding relative">
            <div className="container max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-12 md:p-20 relative overflow-hidden"
                >
                    {/* Decorative gradients */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10 pointer-events-none" />

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to scale?</h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                        I'm always interested in talking about new, exciting and challenging adventures.
                    </p>

                    <motion.a
                        href="mailto:contact@antoinedumont.fr"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold text-lg rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-shadow"
                    >
                        <Mail className="w-5 h-5" />
                        Get in touch
                        <ArrowRight className="w-5 h-5" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};
