import { Link, useNavigate } from 'react-router-dom'
import { BiSearchAlt2, BiCameraMovie } from 'react-icons/bi';
import { useState } from 'react';
import {FaShoppingCart} from 'react-icons/fa'

export const SearchBar = () => {
    const [search, setSearch] = useState('')

    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault()

        if(!search) return //Nao entra em uma pagina vazia

        navigate(`/search?q=${search}`)
        setSearch('')

    }

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
           <button id='cart-icon'>
            <FaShoppingCart/>
            <span className='cart-status'>1</span>
           </button> 
        </nav>
    )

}
