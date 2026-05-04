
import { Twitter, Linkedin, Globe } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="py-8 border-t border-white/10 bg-black/50 backdrop-blur-sm">
            <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-sm text-gray-400">
                    © {new Date().getFullYear()} Antoine Dumont. All rights reserved.
                </div>

                <div className="flex items-center gap-6">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <Globe className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
};
