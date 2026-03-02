import Card from "@/components/Card";

export default function Projects(){
    return(
        <main className="h-screen w-screen bg-white flex items-center flex-col gap-4">
            <h1 className="text-6xl mt-4 text-black">Meus projetos</h1>

            <Card 
                src="/images.jpg"
                title="lua"
                desciption="imagem da lua"
                url="https://github.com/antonysantos9/LP.git"
            />

            <Card 
                src="/ppp.jpg"
                title="carlos"
                desciption="imagem do carlos"
                url="https://github.com/antonysantos9/lista-c-complementar-Antony.git"
            />

            <Card 
                src="/jogo.jpg"
                title="jogo da velha"
                desciption="imagem do jogo da velha"
                url="https://github.com/antonysantos9/pesquisasTecnologias.Tarde.git"
            />
        </main>
    );
}