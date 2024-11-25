import { BrowserRouter } from 'react-router-dom'
import { Container, GlobalCss } from './styles'

import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Container>
        <Rotas />
      </Container>
    </BrowserRouter>
  )
}

export default App
