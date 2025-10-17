import Link from "next/link";

import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-background pt-24 text-center"
    >
      <Reveal>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-coffee-dark dark:text-coffee-light mb-8 text-3xl font-bold">
            Onde nos encontrar
          </h2>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.20633499545!2d-40.2912625!3d-20.333093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb817b2733c6c5f%3A0x8c50f2aade348c0a!2sPrainha%20Caf%C3%A9!5e0!3m2!1spt-BR!2sbr!4v1760533355724!5m2!1spt-BR!2sbr"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl"
          ></iframe>
          <div className="py-8">
            <p className="mb-2 text-neutral-600 dark:text-neutral-300">
              Rua Antônio Ataíde, 421 - Centro, Vila Velha - ES
            </p>
            <p className="mb-2 text-neutral-600 dark:text-neutral-300">
              (27) 98152-2125
            </p>
            <p className="mb-6 text-neutral-600 dark:text-neutral-300">
              prainhacafe@gmail.com
            </p>
          </div>
        </div>
        <div className="mx-20 mb-8 flex justify-center gap-4">
          <Link href="https://www.instagram.com/prainhacafe421/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="#000000"
              viewBox="0 0 256 256"
              className="transition hover:fill-pink-600 dark:fill-foreground dark:hover:fill-pink-600"
            >
              <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
            </svg>
          </Link>
          <Link href="https://wa.me/5527981522125">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="#000000"
              viewBox="0 0 256 256"
              className="transition hover:fill-green-600 dark:fill-foreground dark:hover:fill-green-600"
            >
              <path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"></path>
            </svg>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
