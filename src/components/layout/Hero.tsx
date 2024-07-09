import Image from "next/image";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { Button } from "../ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import Sparkles from "../ui/sparkles";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

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

const owners = [
    {
        id: 1,
        image: "/banner.png"
    },
    {
        id: 2,
        image: "/banner.png"
    },
    {
        id: 3,
        image: "/banner.png"
    }
]

export default function Hero() {
    return (
        <section className="bg-[#192255] w-full py-24 md:py-32 lg:py-40 items-center justify-center dark:bg-dot-white/[0.05] bg-dot-black/[0.05]">
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
            <div className="py-24 items-center flex flex-col w-full gap-8">
                <h1>Serviços</h1>
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-bold text-4xl">Marketing</CardTitle>
                        </CardHeader>
                        <CardContent>
                            &#x2022; Gestão e monitoramento de redes sociais <br />
                            &#x2022; Design Gráfico <br />
                            &#x2022; Desenvolvimento de Sites, Blogs e Aplicativos <br />
                            &#x2022; SEO <br />
                            &#x2022; Ibound Marketing <br />
                            &#x2022; Marketing de Conteúdo <br />
                            &#x2022; E-Mail Marketing <br />
                            &#x2022; Tráfico Pago <br />
                            &#x2022; Desenvolvimento de profissionais da área <br />
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className="py-24">
                
            </div>
            <div className="h-[40rem] rounded-md flex flex-col antialiased relative justify-center items-center overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
            <div className="container mx-auto py-12 md:py-24 grid md:grid-cols-2 gap-8 px-4 md:px-6">
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Dar o próximo passo leva menos de um minuto</h2>
                    <p className="text-muted-foreground md:text-xl">
                        Preencha o formulário na direita para receber mais detalhes sobre nossa ofertas.
                    </p>
                </div>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl md:text-3xl">Receba mais informações</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Nome</Label>
                            <Input id="name" placeholder="Qual seu nome?" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="name">Email</Label>
                            <Input id="email" type="email" placeholder="E-Mail corporativo" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="name">Telefone</Label>
                            <Input id="phone" type="tel" placeholder="Seu telefone" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="name">CNPJ</Label>
                            <Input id="cnpj" placeholder="Qual CNPJ da sua empresa?" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">Receber mais informações</Button>
                    </CardFooter>
                </Card>
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
    {
        quote:
            "Estamos muito satisfeitos com os resultados obtidos com a AdvertisingTec. Profissionalismo e eficiência são marcas registradas dessa equipe.",
        name: "Rodrigo Oliveira",
        title: "CEO da TechGadgets",
    },
    {
        quote:
            "O impacto das campanhas da AdvertisingTec foi além das nossas expectativas. Eles realmente entendem o mercado e como se destacar nele.",
        name: "Patrícia Santos",
        title: "Diretora de Marketing da HomeDecor",
    },
    {
        quote:
            "Recomendo a AdvertisingTec para quem busca resultados reais e tangíveis. Eles sabem como trazer visibilidade e crescimento para sua marca.",
        name: "Felipe Almeida",
        title: "Gerente de Vendas da EcoTech",
    },
    {
        quote:
            "A AdvertisingTec é nossa parceira estratégica em todas as nossas iniciativas de marketing. Sempre entregam com qualidade e pontualidade.",
        name: "Fernanda Lima",
        title: "CMO da GreenEnergy",
    },
    {
        quote:
            "Estamos muito satisfeitos com a AdvertisingTec. Eles não só entendem nossas necessidades como também superam nossas expectativas a cada campanha.",
        name: "Rafael Santos",
        title: "Diretor de Marketing da SmartSolutions",
    },
    {
        quote:
            "A AdvertisingTec não só nos ajudou a alcançar novos clientes, mas também a fortalecer nossa imagem de marca. Excelente trabalho!",
        name: "Camila Barbosa",
        title: "CEO da TechSolutions",
    },
    {
        quote:
            "Nossas vendas aumentaram significativamente após iniciarmos a parceria com a AdvertisingTec. Profissionalismo e resultados visíveis.",
        name: "Daniel Oliveira",
        title: "Diretor Comercial da BioHealth",
    },
    {
        quote:
            "A AdvertisingTec é fundamental para o crescimento contínuo de nossa presença digital. Sem eles, não teríamos alcançado tanto sucesso.",
        name: "Mariana Silva",
        title: "CMO da HealthTech",
    },
    {
        quote:
            "Desde que começamos a trabalhar com a AdvertisingTec, nossa marca tem sido reconhecida e admirada por um público cada vez maior.",
        name: "Pedro Santos",
        title: "Gerente de Marketing da CleanFood",
    },
    {
        quote:
            "A AdvertisingTec nos ajuda a manter nossa marca sempre à frente no mercado. Suporte excepcional e resultados consistentes.",
        name: "Carolina Almeida",
        title: "Diretora de Vendas da EcoTech",
    },
    {
        quote:
            "Nossa parceria com a AdvertisingTec tem sido essencial para nossa estratégia de crescimento. Recomendo sem hesitação!",
        name: "Roberto Lima",
        title: "CEO da GreenTech",
    },
    {
        quote:
            "A AdvertisingTec entende nosso mercado como ninguém. Suas campanhas são precisas e altamente eficazes.",
        name: "Aline Costa",
        title: "Diretora de Marketing da EcoToys",
    },
    {
        quote:
            "Os resultados falam por si. A AdvertisingTec trouxe um aumento significativo em nossa base de clientes e na receita.",
        name: "Gustavo Santos",
        title: "CMO da TechInnovations",
    },
    {
        quote:
            "Trabalhar com a AdvertisingTec é garantia de resultados positivos. Eles realmente sabem como posicionar uma marca no mercado.",
        name: "Juliana Oliveira",
        title: "Gerente de Marketing da NaturezaViva",
    },
    {
        quote:
            "A AdvertisingTec é uma parceira estratégica crucial para o sucesso de nossas campanhas de marketing digital.",
        name: "Ricardo Lima",
        title: "Diretor Comercial da GoDigital",
    },
];

