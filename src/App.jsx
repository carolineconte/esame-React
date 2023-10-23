//style
import './App.css'

//Config React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Products } from './pages/Products'
import { SearchBar } from './components/SearchBar'
import { Search } from './pages/Search'

function App() {




  return (
    <>
    <BrowserRouter>
    <SearchBar />
    <Routes>
      <Route path='/' element={<Products/>} />
      <Route path='/product/:id' element={<Products/>} />
      <Route path='/search' element={<Search/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
