import { Button } from "./ui/Button";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_50%)]" />
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700" />

            <div className="container mx-auto px-6 relative z-10 text-center animate-fade-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Available for opportunities
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                    I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">scalable data</span><br className="hidden md:block" /> pipelines.
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                    Aspiring Data Engineer enabling data-driven decisions. Leveraging my background in Full Stack Development to build robust, scalable infrastructure.
                </p>


                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="#projects">
                        <Button size="lg" className="group">
                            View Projects <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <Button variant="outline" size="lg">
                        Download Resume <Download className="ml-2 w-4 h-4" />
                    </Button>
                </div>
            </div>
        </section>
    );
};
