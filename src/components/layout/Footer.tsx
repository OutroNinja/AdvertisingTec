import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#c4c4c4] py-12 text-muted-foreground border-t">
            <div className="container flex flex-col items-start justify-between gap-8 md:flex-row">
                <div className="flex flex-col items-start gap-4">
                    <Link href="#" className="flex items-center gap-2" prefetch={false}>
                        <Image src="/logo.png" alt="logo" width={30} height={30} />
                    </Link>
                    <p className="max-w-[300px] text-sm leading-relaxed">
                    Oferecer soluções integradas de terceirização e fornecimento de mão de obra, com a qualidade que garante ao cliente a segurança necessária para cuidar do seu negócio, seu patrimônio e sua família.
                    </p>
                    <div className="text-sm">Made with ❤️ by OutroNinja</div>
                </div>
                <div className="grid grid-cols-2 gap-8 md:grid-cols-2">
                    <div className="grid gap-2">
                        <h2 className="text-sm font-semibold">Início</h2>
                        <Link href="#" className="text-sm hover:underline" prefetch={false}> 
                            Quem somos
                        </Link>
                        <Link href="#" className="text-sm hover:underline" prefetch={false}> 
                            Serviços
                        </Link>
                        <Link href="#" className="text-sm hover:underline" prefetch={false}> 
                            Contato
                        </Link>
                    </div>
                    <div className="grid gap-2">
                        <h2 className="text-sm font-semibold">Outros</h2>
                        <Link href="#" className="text-sm hover:underline" prefetch={false}> 
                            Se torne um parceiro
                        </Link>
                        <Link href="#" className="text-sm hover:underline" prefetch={false}> 
                            Termos e Condições
                        </Link>
                        <Link href="#" className="text-sm hover:underline" prefetch={false}> 
                            Suporte 24h
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container mt-8 flex items-center justify-between border-t pt-4 text-sm">
                <div>&copy; 2024 AdvertisingTec. All rights reserved.</div>
                <div />
            </div>
        </footer>
    )
}
