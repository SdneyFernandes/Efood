import { HeaderBar, Logo, Titulo } from './styles'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

type HeaderProps = {
  variant: 'home' | 'categories'
  onCartClick?: () => void // Prop para abrir o carrinho
}

const Header = ({ variant, onCartClick }: HeaderProps) => {
  const cartCount = useSelector((state: RootState) => state.cart.items.length)

  return (
    <HeaderBar layout={variant === 'home' ? 'vertical' : 'horizontal'}>
      {variant === 'home' && (
        <>
          <Logo src={logo} alt="EFOOD" />
          <Titulo>
            Viva experiências gastronômicas no conforto da sua casa
          </Titulo>
        </>
      )}
      {variant === 'categories' && (
        <>
          <Link to="/" className="link">
            <p>Restaurantes</p>
          </Link>
          <Logo src={logo} alt="EFOOD" />
          <p onClick={onCartClick} style={{ cursor: 'pointer' }}>
            {cartCount} produto(s) no carrinho
          </p>
        </>
      )}
    </HeaderBar>
  )
}

export default Header
