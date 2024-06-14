import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import globalStyle from './globalStyles'

import './global.css'

function App() {
  return (
    <>
      <globalStyle />
      <Header />
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
    </>
  )
}

export default App
