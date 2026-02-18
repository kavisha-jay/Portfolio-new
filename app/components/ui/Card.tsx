import { cn } from "@/lib/utils";
import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hoverEffect?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, hoverEffect = false, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 shadow-xl transition-all duration-300",
                    hoverEffect && "hover:border-primary/50 hover:shadow-primary/10 hover:-translate-y-1",
                    className
                )}
                {...props}
            />
        );
    }
);
Card.displayName = "Card";
