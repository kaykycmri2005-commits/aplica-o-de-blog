import Link from "next/link"
import { getArtigos } from "@/lib/artigos"

export const dynamic = "force-static"

export default async function Home() {
  const artigos = await getArtigos()

  return (
    <main>
      <h1>Blog</h1>

      {artigos.map((artigo) => (
        <div key={artigo.slug}>
          <h2>{artigo.titulo}</h2>
          <p>{artigo.descricao}</p>

          <Link href={`/artigos/${artigo.slug}`}>
            Ler mais
          </Link>
        </div>
      ))}
    </main>
  )
}
