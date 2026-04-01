import { getArtigoPorSlug, getArtigos } from "@/lib/artigos"
import { notFound } from "next/navigation"

// SSG
export async function generateStaticParams() {
  const artigos = await getArtigos()

  return artigos.map((artigo) => ({
    slug: artigo.slug,
  }))
}

// SEO DINÂMICO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const artigo = await getArtigoPorSlug(params.slug)

  if (!artigo) {
    return {
      title: "Artigo não encontrado",
    }
  }

  return {
    title: artigo.titulo,
    description: artigo.descricao,
  }
}

export default async function ArtigoPage({ params }: { params: { slug: string } }) {
  const artigo = await getArtigoPorSlug(params.slug)

  if (!artigo) return notFound()

  return (
    <main>
      <h1>{artigo.titulo}</h1>
      <p><strong>Autor:</strong> {artigo.autor}</p>
      <p><strong>Data:</strong> {artigo.data}</p>

      <article>
        {artigo.conteudo}
      </article>
    </main>
  )
}
