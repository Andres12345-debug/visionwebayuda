import { CSSProperties, ReactNode } from "react";
import { motion } from "framer-motion";

type ScrollRevealProps = {
    children: ReactNode;
    delay?: number;
    y?: number;
    style?: CSSProperties;
};

export default function ScrollReveal({ children, delay = 0, y = 40, style }: ScrollRevealProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            style={{ height: "100%", ...style }}
        >
            {children}
        </motion.div>
    );
}
