import { Link, useNavigate } from 'react-router-dom'
import { BiSearchAlt2, BiCameraMovie } from 'react-icons/bi';
import { useContext, useState } from 'react';
import {FaShoppingCart} from 'react-icons/fa'
import AppContext from '../context/AppContext';

export const SearchBar = () => {
    const [search, setSearch] = useState('')

    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault()

        if(!search) return //Nao entra em uma pagina vazia

        navigate(`/search?q=${search}`)
        setSearch('')

    }

    const {cartItems, isCartVisible, setIsCartVisible} = useContext(AppContext)

    return (
        <nav id='navbar'>
            <h2>
                <Link to="/">Amazzone</Link>
            </h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Search...' 
                onChange={e => setSearch(e.target.value)} 
                value={search} />
                <button id='search-icon' type='submit'>
                    <BiSearchAlt2 />
                </button>
            </form>
           <button onClick={() =>  setIsCartVisible(!isCartVisible)} id='cart-icon'>
            <FaShoppingCart/>
            <span className='cart-status'>{cartItems.length}</span>
           </button> 
        </nav>
    )

}
