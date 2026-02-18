import { Section } from "./ui/Section";
import { Card } from "./ui/Card";
import {
    Code2,
    Database,
    Server,
    Terminal,
    Layout,
    Palette
} from "lucide-react";

const skillCategories = [
    {
        title: "Data Engineering",
        icon: <Database className="w-6 h-6 text-primary" />,
        skills: [
            { name: "Python", level: 95 },
            { name: "SQL", level: 90 },
            { name: "Apache Spark", level: 75 },
            { name: "Kafka", level: 70 },
            { name: "Airflow", level: 70 },
            { name: "Pandas/NumPy", level: 85 },
        ],
    },
    {
        title: "Cloud & DevOps",
        icon: <Server className="w-6 h-6 text-primary" />,
        skills: [
            { name: "AWS", level: 75 },
            { name: "Docker", level: 80 },
            { name: "Kubernetes", level: 65 },
            { name: "Terraform", level: 60 },
            { name: "CI/CD", level: 75 },
        ],
    },
    {
        title: "Backend & DB",
        icon: <Terminal className="w-6 h-6 text-primary" />,
        skills: [
            { name: "PostgreSQL", level: 85 },
            { name: "MongoDB", level: 80 },
            { name: "Redis", level: 70 },
            { name: "Node.js", level: 80 },
            { name: "FastAPI", level: 75 },
        ],
    },
    {
        title: "Frontend",
        icon: <Layout className="w-6 h-6 text-primary" />,
        skills: [
            { name: "React", level: 85 },
            { name: "Next.js", level: 80 },
            { name: "TypeScript", level: 80 },
            { name: "Tailwind CSS", level: 90 },
        ],
    },
];

export const Skills = () => {
    return (
        <Section id="skills" className="bg-background">
            <div className="mb-12 text-center md:text-left">
                <h2 className="text-primary font-semibold tracking-wider uppercase mb-2">My Toolbox</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">Technologies I work with</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skillCategories.map((category) => (
                    <Card key={category.title} className="p-6 border border-border bg-card hover:bg-card/80 transition-colors">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                {category.icon}
                            </div>
                            <h4 className="text-lg font-bold text-foreground">{category.title}</h4>
                        </div>

                        <div className="space-y-3">
                            {category.skills.map((skill) => (
                                <div key={skill.name} className="flex items-center justify-between group">
                                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">{skill.name}</span>
                                    <span className="h-1.5 w-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                                </div>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
};
