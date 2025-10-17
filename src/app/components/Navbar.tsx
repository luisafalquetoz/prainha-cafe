"use client";

import Image from "next/image";
import { useState } from "react";

import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        { label: "Home", href: "#home" },
        { label: "Sobre Nós", href: "#about" },
        { label: "Menu", href: "#menu" },
        { label: "Contato", href: "#contact" },
    ];

    return (
        <header className="fixed top-0 z-50 w-full bg-primary/80 text-white backdrop-blur dark:bg-background/80">
        <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
            <Image
            src="/logo-prainha-sem-nome.svg"
            alt="Prainha Café"
            width={70}
            height={70}
            />
            <ul className="hidden gap-8 md:flex">
            {links.map(({ label, href }) => (
                <li key={href}>
                <a href={href} className="transition hover:text-primary-foreground">
                    {label}
                </a>
                </li>
            ))}
            </ul>
            <button className="md:hidden" onClick={() => setOpen(!open)}>
            ☰
            </button>
            <ModeToggle />
        </nav>
        {open && (
            <div className="bg-background/50 py-4 text-center md:hidden">
            {links.map(({ label, href }) => (
                <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="block py-2"
                >
                {label}
                </a>
            ))}
            </div>
        )}
        </header>
    );
}
