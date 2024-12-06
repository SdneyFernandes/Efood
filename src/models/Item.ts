interface ItemProps {
  id: number
  titulo: string
  descricao: string
  capa: string
  buttonText: string
  destacado?: string
  tipo?: string
  avaliacao?: string
  porcao?: string
  preco?: number
}

class Item {
  id: number
  titulo: string
  descricao: string
  capa: string
  buttonText: string
  destacado?: string
  tipo?: string
  avaliacao?: string
  porcao?: string
  preco?: number

  constructor({
    id,
    titulo,
    descricao,
    capa,
    buttonText,
    destacado,
    tipo,
    avaliacao,
    porcao,
    preco,
  }: ItemProps) {
    this.id = id
    this.titulo = titulo
    this.descricao = descricao
    this.capa = capa
    this.buttonText = buttonText
    this.destacado = destacado
    this.tipo = tipo
    this.avaliacao = avaliacao
    this.porcao = porcao
    this.preco = preco
  }
}

export default Item
