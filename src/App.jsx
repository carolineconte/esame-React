//style
import './App.css'

//Config React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Products } from './pages/Products'
import { SearchBar } from './components/SearchBar'
import { Search } from './pages/Search'
import { Cart } from './pages/Cart'

function App() {




  return (
    <>
    <BrowserRouter>
    <SearchBar />
    <Routes>
      <Route path='/' element={<Products/>}>
      <Route path='/cart' element={<Cart/>} />
      </Route>
      <Route path='/search' element={<Search/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
