import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




export const Navbar = () => {
    return (
        <nav className='text-2xl text-white bg-slate-800 items-center flex justify-center w-80 '>
            <ul>
                <li>
                    <Link to="/" className='hover:text-yellow-200'> Home </Link>
                    <Link to="/about" className='hover:text-yellow-200'> About </Link>
                </li>
            </ul>
        </nav>
    )

}