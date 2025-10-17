"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type Props = { children: React.ReactNode };
export default function Reveal({ children }: Props) {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2 });

    useEffect(() => {
        if (inView) controls.start({ opacity: 1, y: 0 });
    }, [controls, inView]);

    return (
        <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.6 }}
        >
        {children}
        </motion.div>
    );
}
