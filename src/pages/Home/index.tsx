import ProductsList from '../../components/ProductsList'
import Comida from '../../models/Comida'

import imagem from '../../assets/images/imagem.png'
import image from '../../assets/images/image.png'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

const Cardapio: Comida[] = [
  {
    id: 1,
    category: 'Japonesa',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sushi',
    image: imagem,
    destaque: 'Destaques da Semana',
    button: 'Saiba mais',
    nota: '4.9 ⭐',
    infos: '',
  },
  {
    id: 2,
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    image: image,
    button: 'Saiba mais',
    nota: '4.6 ⭐',
    infos: '',
    destaque: '',
  },
  {
    id: 3,
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    image: image,
    destaque: '',
    button: 'Saiba mais',
    nota: '4.6 ⭐',
    infos: '',
  },
  {
    id: 4,
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    image: image,
    destaque: '',
    button: 'Saiba mais',
    nota: '4.6 ⭐',
    infos: '',
  },
  {
    id: 5,
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    image: image,
    destaque: '',
    button: 'Saiba mais',
    nota: '4.6 ⭐',
    infos: '',
  },
  {
    id: 6,
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    image: image,
    destaque: '',
    button: 'Saiba mais',
    nota: '4.6 ⭐',
    infos: '',
  },
]

const Home = () => (
  <div>
    <Header variant="home" />
    <ProductsList comidas={Cardapio} columns={2} variant="home" />
    <Footer />
  </div>
)

export default Home
