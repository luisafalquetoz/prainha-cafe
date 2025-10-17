"use client";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
        id="home"
        className="flex h-screen items-center justify-center bg-[url('/photo-hero.jpg')] bg-cover bg-center text-center text-white"
        >
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex h-full w-full flex-col items-center justify-center bg-black/50 p-8"
        >
            <h1 className="mb-4 text-4xl font-bold dark:text-foreground md:text-6xl">
            Bem-vindo(a) ao Prainha Café
            </h1>
            <p className="mb-6 text-lg md:text-2xl">Sabores que contam histórias</p>
            <a
            href="#menu"
            className="bg-secondary-foreground hover:bg-secondary rounded-md px-6 py-3 font-medium text-white transition"
            >
            Conheça nosso menu
            </a>
        </motion.div>
        </section>
    );
}
