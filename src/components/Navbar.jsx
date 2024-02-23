import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'

function Navbar() {
    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (evento) => {
        evento.preventDefault()
        console.log(search)

        if (!search) return 

        navigate(`/search?q=${search}`)
        setSearch('')
    }


    return <>
    <nav id="navbar">
        <h2>
            <Link to='/'>
                <BiCameraMovie /> ProjetoFilmes
            </Link>
        </h2>
        <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="Busque um filme" 
            onChange={(evento) => setSearch(evento.target.value)}
            value={search}/>
            <button type="submit">
                <BiSearchAlt2 />
            </button>
        </form>
    </nav>
    </>
}

export default Navbar;