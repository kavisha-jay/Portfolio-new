"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    containerClassName?: string;
    delay?: number;
}

export const Section = ({ className, containerClassName, id, children, delay = 0 }: SectionProps) => {
    return (
        <section id={id} className={cn("py-20 md:py-32 relative", className)}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: delay }}
                className={cn("container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10", containerClassName)}
            >
                {children}
            </motion.div>
        </section>
    );
};
