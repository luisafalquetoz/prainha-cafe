import Image from "next/image";
import Link from "next/link";

import Reveal from "./Reveal";

export default function Menu() {
    const products = [
        {
        title: "Cafés",
        image: "/coffee.JPG",
        desc: "Cafés especiais preparados com grãos selecionados.",
        },
        {
        title: "Polentas",
        image: "/polenta.JPG",
        desc: "Especialidade da casa, a tradicional polenta na chapa.",
        },
        {
        title: "Prato Executivo",
        image: "/meal.JPG",
        desc: "Comida caseira, massa fresca, com toque de afeto.",
        },
    ];

    return (
        <section
        id="menu"
        className="bg-muted dark:bg-secondary-foreground py-24 text-center"
        >
        <Reveal>
            <h2 className="text-coffee-dark dark:text-coffee-light mb-12 text-3xl font-bold">
            Nosso Menu
            </h2>
        </Reveal>
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3">
            {products.map(({ title, image, desc }) => (
            <Reveal key={title}>
                <article className="dark:bg-background flex transform flex-col items-center rounded-xl bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-coffee-dark dark:text-coffee-light mb-2 text-xl font-semibold">
                    {title}
                </h3>
                <Image
                    src={image}
                    alt={title}
                    width={300}
                    height={300}
                    className="my-4 rounded-xl"
                />
                <p className="text-neutral-600 dark:text-neutral-300">{desc}</p>
                </article>
            </Reveal>
            ))}
        </div>
        <div className="hover:text-primary bg-secondary-foreground dark:bg-background dark:text-coffee-light mx-auto mt-18 w-fit rounded-xl px-6 py-4 font-bold text-white transition hover:-translate-y-1 hover:shadow-lg">
            <Link href="https://menu.yoogLink.app/prainha-cafe">
            Cardápio completo
            </Link>
        </div>
        </section>
    );
}
