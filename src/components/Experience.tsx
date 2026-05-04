import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
    {
        role: "Head of Marketing - CMO",
        company: "Stealth Startup",
        period: "2023 - Present",
        description: "Leading GTM strategy and building the marketing engine from scratch."
    },
    {
        role: "CMO",
        company: "Coorpacademy",
        period: "Sep 2017 - Jun 2022",
        description: "Building and leading the team as Chief Marketing Officer, driving impact and revenue into the pipeline. Scaled form 1 to 10M ARR."
    },
    {
        role: "Digital Project Manager",
        company: "Laureate",
        period: "May 2013 - Sep 2017",
        description: "Managed all online activities for France of the worldwide leader of higher education. Promote campus and programs for 40 000 students."
    }
];

export const Experience = () => {
    return (
        <section id="experience" className="section-padding relative">
            <div className="container max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience</h2>
                </motion.div>

                <div className="relative border-l border-white/10 ml-4 md:ml-0 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />

                            <div className="glass-card p-6 md:p-8 hover:bg-white/5 transition-colors">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                                    <div className="flex items-center gap-2 text-indigo-400 font-mono text-sm">
                                        <Calendar className="w-4 h-4" />
                                        <span>{exp.period}</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 mb-4 text-lg text-gray-300">
                                    <Briefcase className="w-4 h-4" />
                                    <span className="font-semibold">{exp.company}</span>
                                </div>

                                <p className="text-gray-400 leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
