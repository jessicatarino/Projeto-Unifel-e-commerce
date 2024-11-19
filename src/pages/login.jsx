import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Login() {

    const navigate = useNavigate()
    const [password, setpasseword] = useState('')

    const handleClick = () => {
            navigate('/products')
    }

    return (
        <>
            <h2>Login</h2>
            <input type="text" />
            <input onChange={ (event) => setpasseword(event.target.value)} type="password" />
            <button disabled={password.length <= 8 } onClick={ handleClick}>Entrar</button>
            <br /> <br /> 
            <Link to='/products'> Entrar via Link </Link>
        </>
    )
    }
