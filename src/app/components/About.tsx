import Reveal from "./Reveal";

export default function About() {
    return (
        <section
        id="about"
        className="bg-background py-24 text-center"
        >
        <Reveal>
            <div className="mx-auto max-w-3xl px-4">
            <h2 className="text-coffee-dark dark:text-coffee-light mb-4 text-3xl font-bold">
                Sobre Nós
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300">
                O <strong>Prainha Café</strong> nasceu do desejo de compartilhar memórias, sabores e
                tradições que atravessam gerações. Localizado no charmoso <strong>Sítio
                Histórico da Prainha</strong>, nosso espaço é um convite para desacelerar e
                saborear receitas que carregam afeto e história. 
                <br/>
                <br/>
                À frente da cozinha
                está a <strong>Chef Valéria Falchetto</strong>, que transforma lembranças de família
                em experiências gastronômicas autênticas. Inspirada na imigração
                italiana de seus antepassados, vindos de <strong>Venda Nova do Imigrante</strong>,
                Valéria celebra suas origens em cada prato — desde o famoso Pão de
                Polenta até as tradicionais <strong>polentas</strong> na chapa, preparadas com
                ingredientes frescos e produtos vindos das montanhas capixabas. 
                <br/>
                <br/>
                Mais
                do que uma cafeteria, o Prainha Café é um ponto de encontro entre
                passado e presente. Cada receita é feita com carinho, valorizando o
                trabalho de <b>pequenos produtores locais</b> e o sabor genuíno da nossa
                terra. Aqui, cada detalhe foi pensado para que você sinta o calor da
                hospitalidade do interior, um lugar para reunir os amigos,
                compartilhar boas conversas, risadas e saborear momentos simples —
                <b> como se fosse a casa da gente</b>.
            </p>
            </div>
        </Reveal>
        </section>
    );
}
