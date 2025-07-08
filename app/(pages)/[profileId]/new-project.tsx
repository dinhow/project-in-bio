"use client";

import Button from "@/app/components/ui/button";
import Modal from "@/app/components/ui/modal";
import TextArea from "@/app/components/ui/text-area";
import TextInput from "@/app/components/ui/text-input";
import { ArrowUpFromLine, Plus } from "lucide-react";
import { useState } from "react";

export default function NewProject({ profileId }: { profileId: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const [projectName, setProjectName] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const [projectUrl, setProjectUrl] = useState("");
    const [projectImage, setProjectImage] = useState<string | null>(null);

    const handleOpenModal = () => {
        setIsOpen(true);
    }

    function triggerImageInput(id: string) {
        document.getElementById(id)?.click();
    }

    function handleImageInput(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0] ?? null;
        if (file) {
            const imageURL = URL.createObjectURL(file);
            return imageURL;
        }
        return null;
    }

    return (
        <>
            <button onClick={handleOpenModal} className="w-[340px] h-[132px] rounded-[20px] bg-background-secondary flex items-center gap-2 justify-center hover:border border-dashed border-border-secondary">
                <Plus className="size-10 text-accent-green" />
                <span>Novo Projeto</span>
            </button>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                <div className="bg-background-primary p-8 rounded-[20px] flex flex-col justify-between gap-10">
                    <p className="text-white text-xl font-bold">Novo Projeto</p>
                    <div className="flex gap-10">
                        <div className="flex flex-col items-center gap-3 text-xs">
                            <div className="w-[100px] h-[100px] rounded-xl bg-background-tertiary overflow-hidden">
                                {projectImage ? (
                                    <img src={projectImage} alt="Project Image" className="object-center object-cover"></img>
                                ) : (
                                    <button onClick={() => triggerImageInput("imageInput") } className="w-full h-full">100x100</button>
                                )}
                            </div>
                            <button className="text-white flex items-center gap-2" onClick={() => triggerImageInput("imageInput")}>
                                <ArrowUpFromLine className="size-4" />
                                <span>Adicionar Imagem</span>
                            </button>
                            <input
                                type="file"
                                id="imageInput"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => setProjectImage(handleImageInput(e))}
                            />
                        </div>
                        <div className="flex flex-col gap-4 w-[293px]">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="project-name" className="text-white font-bold">Título do projeto</label>
                                <TextInput id="project-name" placeholder="Digite o nome do projeto" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="project-description" className="text-white font-bold">
                                    Descrição
                                </label>
                                <TextArea
                                    id="project-description"
                                    placeholder="Dê uma breve descrição do seu projeto"
                                    className="h-36"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="projetc-url" className="text-white font-bold">
                                    URL do projeto
                                </label>
                                <TextInput
                                    type="url"
                                    id="projetc-url"
                                    placeholder="Digite a URL do seu projeto"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 justify-end">
                        <button className="text-white font-bold">Voltar</button>
                        <Button>
                            Salvar
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    );
}