import { Section } from "./ui/Section";
import { Card } from "./ui/Card";
import { Code2, Briefcase, FolderGit2 } from "lucide-react";
import Image from "next/image";

const stats = [
  {
    label: "Years Coding",
    value: "3+",
    icon: <Code2 className="w-5 h-5 text-blue-400" />,
  },
  {
    label: "Internships",
    value: "2+",
    icon: <Briefcase className="w-5 h-5 text-blue-400" />,
  },
  {
    label: "Projects",
    value: "15+",
    icon: <FolderGit2 className="w-5 h-5 text-blue-400" />,
  },
];

export const About = () => {
  return (
    <Section id="about" className="bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        
        {/* Image */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
          
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-border">
            <Image
              src="/profile.jpg"
              alt="Kaveesha Jayasingha"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div>
          <h2 className="text-primary font-semibold tracking-wider uppercase mb-2">
            About Me
          </h2>

          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Get to know me
          </h3>

          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Hi, I'm{" "}
            <span className="text-foreground font-medium">
              Kaveesha Jayasingha
            </span>{" "}
            — an aspiring Data Engineer and Full Stack Developer based in Sri Lanka.
          </p>

          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            My journey started in web development, but my passion lies in data.
            I bridge the gap between application development and data infrastructure,
            building systems that not only collect data but turn it into actionable insights.
          </p>

          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, idx) => (
              <Card
                key={idx}
                className="p-4 text-center hover:bg-muted/50 transition-colors border-border"
              >
                <div className="mb-2 flex justify-center">{stat.icon}</div>
                <div className="text-2xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
