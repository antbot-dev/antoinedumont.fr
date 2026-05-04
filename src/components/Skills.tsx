
import { motion } from 'framer-motion';
import { Cpu, PenTool, TrendingUp, Users } from 'lucide-react';

const skills = [
    {
        title: "AI Workflows & Automation",
        description: "Building automated systems that scale.",
        icon: <Cpu className="w-8 h-8 text-indigo-400" />,
        className: "md:col-span-2"
    },
    {
        title: "Thought Leadership",
        description: "Commenting on the future of tech and marketing.",
        icon: <PenTool className="w-8 h-8 text-purple-400" />,
        className: "md:col-span-1"
    },
    {
        title: "Growth Strategy",
        description: "Revenue-driven approach from day one.",
        icon: <TrendingUp className="w-8 h-8 text-green-400" />,
        className: "md:col-span-1"
    },
    {
        title: "Team Leadership",
        description: "Managing cross-functional teams across regions.",
        icon: <Users className="w-8 h-8 text-blue-400" />,
        className: "md:col-span-2"
    }
];

export const Skills = () => {
    return (
        <section id="skills" className="section-padding relative z-10">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Expertise</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Combining technical know-how with strategic vision to drive growth.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`glass-card p-8 hover:bg-white/5 transition-colors ${skill.className}`}
                        >
                            <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit">
                                {skill.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 font-syne">{skill.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {skill.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
