import type { Metadata } from 'next'

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
 
export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const id = (await params).id;
  const isEven = Number(id) % 2 ? "ímpar" : "par";

  return {
    title: `partida ${id}`,
    openGraph: {
      title: `Partida com id ${isEven}`,
      description: 'Tentei colocar imagem dinamica na imagem pra falar se eh partida par ou impar',
      images: [`https://dynamichead.vercel.app/${isEven}.png`],
    },
  };
}
 
export default function Page({}: Props) {
    return <h1>teste</h1>
}