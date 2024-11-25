import image3 from '../../assets/images/image3.png'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import ProductsList from '../../components/ProductsList'
import Comida from '../../models/Comida'

const Cardapio: Comida[] = [
  {
    id: 1,
    category: 'Japonesa',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: image3,
    destaque: 'Destaque da semana',
    button: 'Adicionar ao carrinho',
    nota: '4.9',
    infos: '',
  },
  {
    id: 2,
    category: 'Bebidas',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: image3,
    destaque: 'Italiana',
    button: 'Adicionar ao carrinho',
    nota: '4.9',
    infos: '',
  },
  {
    id: 3,
    category: 'Bebidas',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: image3,
    destaque: 'Italiana',
    button: 'Adicionar ao carrinho',
    nota: '4.9',
    infos: '',
  },
  {
    id: 4,
    category: 'Bebidas',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza MArguerita',
    image: image3,
    destaque: 'Italiana',
    button: 'Adicionar ao carrinho',
    nota: '4.9',
    infos: '',
  },
  {
    id: 5,
    category: 'Bebidas',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: image3,
    destaque: 'Italiana',
    button: 'Adicionar ao carrinho',
    nota: '4.9',
    infos: '',
  },
  {
    id: 6,
    category: 'Bebidas',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: image3,
    destaque: 'Italiana',
    button: 'Adicionar ao carrinho',
    nota: '4.9',
    infos: '',
  },
]

const Categories = () => (
  <div>
    <Header variant="categories" />
    <Hero />
    <ProductsList comidas={Cardapio} columns={3} variant="categories" />
    <Footer />
  </div>
)

export default Categories
