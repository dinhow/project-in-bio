export default function FAQ() {

    const faqItems = [
        {
            title: "Como funciona a criação de portfólio e links com Project in Bio?",
            description: "Com o Project in Bio, você pode criar um portfólio personalizado e uma página de links de forma rápida e fácil. Basta escolher um modelo, adicionar suas informações e personalizar o design para refletir sua marca pessoal."
        },
        {
            title: "Posso personalizar o design do meu portfólio?",
            description: "Sim, você pode personalizar o design do seu portfólio. O Project in Bio oferece várias opções de personalização, incluindo cores, fontes e layout, para que você possa criar uma página que se destaque e represente sua identidade visual."
        },
        {
            title: "O que acontece se eu cancelar minha assinatura?",
            description: "Se você cancelar sua assinatura, você ainda terá acesso ao seu portfólio e links até o final do período de faturamento atual. Após isso, seu portfólio será desativado, mas você poderá reativar sua conta a qualquer momento."
        },
        {
            title: "Há um período de teste gratuito?",
            description: "Sim, oferecemos um período de teste gratuito de 7 dias para que você possa experimentar todos os recursos do Project in Bio sem compromisso. Durante esse período, você terá acesso total ao seu portfólio e links."
        },
        {
            title: "Preciso de habilidades técnicas para usar a plataforma?",
            description: "Não, o Project in Bio foi projetado para ser fácil de usar, mesmo para quem não tem habilidades técnicas. Nossa interface intuitiva permite que você crie e gerencie seu portfólio e links com facilidade, sem a necessidade de codificação ou design avançado."
        },
        {
            title: "Posso compartilhar meu portfólio em redes sociais?",
            description: "Sim, você pode compartilhar seu portfólio em todas as principais redes sociais. O Project in Bio gera um link exclusivo para o seu portfólio, que você pode compartilhar facilmente em plataformas como Instagram, Twitter, Facebook e LinkedIn."
        }
    ]
    return (
        <div className="my-20 flex flex-col items-center gap-16">
            <h3 className="text-4xl font-bold text-white">Perguntas Frequentes</h3>
            <div className="flex gap-3">
                
                <div className="flex flex-col gap-3">
                    {faqItems.slice(0, Math.ceil(faqItems.length / 2)).map((item, index) => (
                        <FAQItem key={index} title={item.title} description={item.description} />
                    ))}
                </div>
                <div className="flex flex-col gap-3">
                    {faqItems.slice(Math.ceil(faqItems.length / 2)).map((item, index) => (
                        <FAQItem key={index} title={item.title} description={item.description} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function FAQItem({ title, description }: { title: string; description: string }) {
    return (
        <div className="w-[351px] h-min flex flex-col gap-3 p-5 rounded-2xl border border-border-primary bg-background-primary">
            <p className="font-bold text-white">{title}</p>
            <p className="text-content-body">{description}</p>
        </div>
    );
}