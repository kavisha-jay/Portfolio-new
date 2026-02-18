import { Section } from "./ui/Section";
import { Card } from "./ui/Card";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        role: "Full Stack Developer Intern",
        company: "Tech Solutions Inc.",
        period: "Jun 2025 - Present",
        description: "Designed and implemented scalable API endpoints and database schemas. Optimized SQL queries, reducing reporting latency by 40%.",
    },
    {
        role: "Frontend Developer",
        company: "Creative Agency",
        period: "Jan 2024 - May 2025",
        description: "Built responsive dashboards for analytics visualization. Integrated complex REST APIs to fetch and display real-time business metrics.",
    },
    {
        role: "Open Source Contributor",
        company: "Data Tools & Libraries",
        period: "2023 - Present",
        description: "Contributed to data processing libraries, improving documentation and adding new features for data validation.",
    },
];

export const Experience = () => {
    return (
        <Section id="experience" className="bg-background">
            <div className="mb-12 text-center">
                <h2 className="text-primary font-semibold tracking-wider uppercase mb-2">Career Path</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">Professional Experience</h3>
            </div>

            <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/50 before:to-transparent">
                {experiences.map((exp, index) => (
                    <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/50 bg-card group-hover:bg-primary/20 transition-colors shadow-[0_0_10px_rgba(59,130,246,0.2)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 ml-0 md:ml-0">
                            <Briefcase className="w-5 h-5 text-primary" />
                        </div>

                        <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 border-border bg-card hover:bg-muted/50 transition-colors ml-4 md:ml-0">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-bold text-foreground text-lg">{exp.role}</h4>
                                <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded border border-primary/20 whitespace-nowrap ml-2">{exp.period}</span>
                            </div>
                            <p className="text-muted-foreground text-sm font-medium mb-2">{exp.company}</p>
                            <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                        </Card>

                    </div>
                ))}
            </div>
        </Section>
    );
};
