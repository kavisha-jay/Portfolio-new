"use client";
import { Github, Linkedin } from "lucide-react";
import { Button } from "./ui/Button";
import { Section } from "./ui/Section";

export const SocialCallout = () => {
    return (
        <Section className="py-10 bg-background border-y border-border">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <Button
                    size="lg"
                    variant="outline"
                    className="w-full md:w-auto gap-3 text-lg h-14 border-input hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white transition-all group"
                    onClick={() => window.open('https://linkedin.com', '_blank')}
                >
                    <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Connect on LinkedIn
                </Button>

                <Button
                    size="lg"
                    variant="outline"
                    className="w-full md:w-auto gap-3 text-lg h-14 border-input hover:bg-[#333] hover:border-[#333] hover:text-white transition-all group dark:hover:bg-white dark:hover:border-white dark:hover:text-black"
                    onClick={() => window.open('https://github.com', '_blank')}
                >
                    <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Follow on GitHub
                </Button>
            </div>
        </Section>
    );
};
