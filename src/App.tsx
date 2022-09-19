import { Provider } from 'react-redux'
import { Header, Footer } from './components'
import { store } from './store/store'
import Main from './views/main/Main'
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Main />
      <Footer />
    </Provider>
  )
}

export default App
