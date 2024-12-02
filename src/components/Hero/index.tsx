import { HeroContainer } from './styles'

interface HeroProps {
  capa: string
  titulo: string
  tipo: string
}

const Hero: React.FC<HeroProps> = ({ capa, titulo, tipo }) => (
  <HeroContainer>
    <img src={capa} alt="Imagem de fundo" className="hero-image" />
    <div>
      <p>{tipo}</p>
      <p className="titulo">{titulo}</p>
    </div>
  </HeroContainer>
)

export default Hero
