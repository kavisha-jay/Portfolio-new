import { Github, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="footer bg-background border-t border-border py-10 mt-auto">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <p className="text-muted-foreground text-sm">
                        © {new Date().getFullYear()} Kaveesha Jayasingha. All rights reserved.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                        <Twitter className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
};
