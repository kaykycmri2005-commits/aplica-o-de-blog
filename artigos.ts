import { Artigo } from "@/types/artigo"
import artigos from "@/data/artigos.json"

export async function getArtigos(): Promise<Artigo[]> {
  return artigos
}

export async function getArtigoPorSlug(slug: string): Promise<Artigo | undefined> {
  return artigos.find((artigo) => artigo.slug === slug)
}
