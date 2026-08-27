const modulos = import.meta.glob(['../assets/titulos/*', '../assets/jogadores/*'], {
  eager: true,
  import: 'default',
}) as Record<string, string>

const porNomeArquivo: Record<string, string> = {}
for (const caminho in modulos) {
  const nome = caminho.split('/').pop()
  if (nome) porNomeArquivo[nome] = modulos[caminho]
}

export function resolverImagem(nomeArquivo?: string): string | undefined {
  return nomeArquivo ? porNomeArquivo[nomeArquivo] : undefined
}
