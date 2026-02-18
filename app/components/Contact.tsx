import { Section } from "./ui/Section";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

export const Contact = () => {
    return (
        <Section id="contact" className="bg-background">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-primary font-semibold tracking-wider uppercase mb-2">Get in Touch</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Let's work together</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card className="p-8 border-border bg-card">
                    <h4 className="text-xl font-bold text-foreground mb-6">Send me a message</h4>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                                placeholder="Hello, I'd like to talk about..."
                            />
                        </div>
                        <Button type="submit" className="w-full">Send Message</Button>
                    </form>
                </Card>

                <div className="flex flex-col justify-center space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg text-primary">
                            <Mail className="w-6 h-6" />
                        </div>
                        <div>
                            <h5 className="text-foreground font-medium">Email</h5>
                            <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-primary transition-colors">hello@example.com</a>
                        </div>
                    </div>

                    <div className="h-px bg-border w-full" />

                    <div className="space-y-4">
                        <h5 className="text-foreground font-medium">Connect with me</h5>
                        <div className="flex gap-4">
                            <a href="#" className="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};
