"use client";

import { createLink } from "@/app/actions/create-link";
import { verifyLink } from "@/app/actions/verify-link";
import Button from "@/app/components/ui/button";
import TextInput from "@/app/components/ui/text-input";
import { sanitizeLink } from "@/app/lib/utils";
import { verify } from "crypto";
import { Router } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export default function CreateLinkForm() {
  const router = useRouter();

  const searchParams = useSearchParams();

  const [link, setLink] = useState(
    sanitizeLink(searchParams.get("link") || "")
  );
  const [error, setError] = useState("");

  function handleLinkChange(e: ChangeEvent<HTMLInputElement>) {
    setLink(sanitizeLink(e.target.value));
    setError("");
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Quando o usuário submete o formulário, verificamos se o link está vazio
    if (link.length === 0) return setError("Escolha um link primeiro :)");

    // Quando o usuário submete o formulário, verificamos se o link já está sendo usado
    const isLinkTaken = await verifyLink(link);
    if (isLinkTaken)
      return setError("Desculpe, esse link já está sendo usado.");

    const isLinkCreated = await createLink(link);

    if (!isLinkCreated)
      return setError(
        "Desculpe, não foi possível criar o link. Tente novamente mais tarde."
      );

    router.push(`/${link}`);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full flex items-center gap-2">
        <span className="text-white">portfly.com/</span>
        <TextInput value={link} onChange={handleLinkChange} />
        <Button className="w-[126px]">Criar</Button>
      </form>
      <div>
        <span className="text-accent-pink">{error}</span>
      </div>
    </>
  );
}
