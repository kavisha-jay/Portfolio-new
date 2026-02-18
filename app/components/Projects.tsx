import { Section } from "./ui/Section";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "Real-time ETL Pipeline",
        description: "Built a streaming data pipeline using Apache Kafka and Spark Streaming to process user activity logs in real-time, storing aggregated metrics in PostgreSQL.",
        tags: ["Kafka", "Spark", "Python", "Docker", "PostgreSQL"],
        links: { demo: "#", code: "#" },
    },
    {
        title: "Data Visualization Dashboard",
        description: "A full-stack analytics dashboard visualizing complex datasets. Features dynamic filtering and interactive charts for business intelligence.",
        tags: ["Next.js", "D3.js", "Python", "FastAPI", "Pandas"],
        links: { demo: "#", code: "#" },
    },
];

export const Projects = () => {
    return (
        <Section id="projects" className="bg-background">
            <div className="mb-10">
                <h2 className="text-primary font-semibold tracking-wider uppercase mb-2">Projects</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">Featured work</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <Card key={index} hoverEffect className="group overflow-hidden border-border bg-card">
                        <div className="h-48 bg-muted rounded-lg mb-6 relative overflow-hidden">
                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
                            {/* Image placeholder */}
                            <div className="absolute top-4 left-4 right-4 h-full bg-card rounded-t-lg border border-border p-4 transform translate-y-4 group-hover:translate-y-2 transition-transform duration-500">
                                <div className="w-full h-2 bg-muted rounded-full mb-2 opacity-50" />
                                <div className="w-3/4 h-2 bg-muted rounded-full opacity-30" />
                            </div>
                        </div>

                        <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{project.title}</h4>
                        <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center gap-4 pt-4 border-t border-border">
                            <Button size="sm" className="gap-2">
                                <ExternalLink className="w-4 h-4" /> Live Demo
                            </Button>
                            <Button variant="ghost" size="sm" className="gap-2">
                                <Github className="w-4 h-4" /> Source
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
};
