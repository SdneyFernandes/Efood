import { HeaderBar, Logo, Titulo, Paragraph } from './styles'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

type HeaderProps = {
  variant: 'home' | 'categories'
}

const Header = ({ variant }: HeaderProps) => (
  <HeaderBar layout={variant === 'home' ? 'vertical' : 'horizontal'}>
    {variant === 'home' && (
      <>
        <Logo src={logo} alt="EFOOD" />
        <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
      </>
    )}
    {variant === 'categories' && (
      <>
        <Paragraph>Restaurantes</Paragraph>
        <Link to="/home">
          <Logo src={logo} alt="EFOOD" />
        </Link>
        <Paragraph>0 produto(s) no carrinho</Paragraph>
      </>
    )}
  </HeaderBar>
)

export default Header
