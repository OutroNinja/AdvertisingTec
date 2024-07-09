import Image from "next/image";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { Button } from "../ui/button";
import Sparkles from "../ui/sparkles";

const companies = [
    {
        id: 1,
        name: "Mac Donalds",
        designation: "Cliente",
        image: "/companies/mac.png"
    },
    {
        id: 2,
        name: "Spotify",
        designation: "Cliente",
        image: "/companies/spotify.png"
    },
    {
        id: 3,
        name: "Apple",
        designation: "Cliente",
        image: "/companies/apple.png"
    },
    {
        id: 4,
        name: "Google",
        designation: "Cliente",
        image: "/companies/google.png"
    },
    {
        id: 5,
        name: "Coca Cola",
        designation: "Cliente",
        image: "/companies/coca.png"
    },
    {
        id: 6,
        name: "Unimed",
        designation: "Cliente",
        image: "/companies/unimed.png"
    },
    {
        id: 7,
        name: "Nike",
        designation: "Cliente",
        image: "/companies/nike.png"
    },
    {
        id: 8,
        name: "Ifood",
        designation: "Cliente",
        image: "/companies/ifood.png"
    },
    {
        id: 9,
        name: "Shopee",
        designation: "Cliente",
        image: "/companies/shopee.png"
    }
]

export default function Hero() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-24 items-center justify-center dark:bg-dot-white/[0.05] bg-dot-black/[0.05]">
        <div className="container grid items-center gap-6 pt-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Nosso objetivo é fazer o seu <Sparkles color="#FFC700"><p>brilhar!</p></Sparkles>
            </h1>
            <p className="masx-w-[600px] text-muted-foreground md:text-xl">
              Oferecer soluções integradas de terceirização e fornecimento de
              mão de obra, com a qualidade que garante ao cliente a segurança
              necessária para cuidar do seu negócio, seu patrimônio e sua
              família.
            </p>
            <div className="flex flex-row items-center mb-10 w-full">
              <AnimatedTooltip items={companies} />
            </div>
          </div>
          <Image
            src="/banner.png"
            width="600"
            height="500"
            alt="Hero Image"
            className="mx-auto aspect-video overflow-hidde rounded-xl object-cover object-center sm:w-full"
          />
        </div>
        <div className="h-[40rem] rounded-md flex flex-col antialiased relative justify-center items-center overflow-hidden">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="normal"
            />
        </div>
      </section>
    );
}

const testimonials = [
    {
      quote:
        "A AdvertisingTec transformou nossa presença online! As campanhas são incrivelmente eficazes e o retorno sobre o investimento foi imediato.",
      name: "Maria Silva",
      title: "CEO da StartupTech",
    },
    {
      quote:
        "O serviço da AdvertisingTec é excepcional. Eles entendem exatamente o que precisamos e sempre entregam resultados acima das expectativas.",
      name: "João Souza",
      title: "Diretor de Marketing da Foodies",
    },
    {
      quote: 
        "Nunca imaginei que poderíamos alcançar tantas pessoas com nossas campanhas. A AdvertisingTec é, sem dúvida, a melhor em divulgações.",
      name: "Ana Pereira",
      title: "Gerente de Vendas da EcoFashion",
    },
    {
      quote:
        "Graças à AdvertisingTec, nossa marca ganhou uma visibilidade que nunca tivemos antes. Recomendo seus serviços a todos que conheço.",
      name: "Carlos Mendes",
      title: "Fundador da HealthPlus",
    },
    {
      quote:
        "A AdvertisingTec nos ajudou a criar campanhas que realmente ressoam com nosso público-alvo. A equipe é fantástica e muito profissional.",
      name: "Luísa Costa",
      title: "CMO da FitLife",
    },
  ];
  