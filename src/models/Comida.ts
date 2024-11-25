class Comida {
  id: number
  title: string
  description: string
  image: string
  destaque: string
  button: string
  infos: string
  category: string
  nota: string

  constructor(
    id: number,
    title: string,
    description: string,
    image: string,
    destaque: string,
    button: string,
    infos: string,
    category: string,
    nota: string
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.image = image
    this.destaque = destaque
    this.infos = infos
    this.button = button
    this.category = category
    this.nota = nota
  }
}

export default Comida
