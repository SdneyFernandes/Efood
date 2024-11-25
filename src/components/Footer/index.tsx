import logo from '../../assets/images/logo.png'
import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import twiiter from '../../assets/images/twiiter.png'
import { Logo } from '../Header/styles'
import { FooterContainer, Icons, Fdescricao, Icon } from './styles'

const Footer = () => (
  <FooterContainer>
    <Logo src={logo} alt="EFOOD" />
    <Icons>
      <Icon src={instagram} alt="EFOOD" />
      <Icon src={facebook} alt="EFOOD" />
      <Icon src={twiiter} alt="EFOOD" />
    </Icons>
    <Fdescricao>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Fdescricao>
  </FooterContainer>
)

export default Footer
