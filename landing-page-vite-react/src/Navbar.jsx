import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './index.css'





export const Navbar = () => {

    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive? 'tan' : 'white',
        }
    }

    return (
        <nav className='text-2xl bg-neutral-900 xl:h-16 justify-around items-center flex w-screen '>
            <ul>
                <li className=''>
                    <NavLink to="/nike" style={navLinkStyles} className="px-4"> Nike </NavLink>
                    <NavLink to="/adidas"  style={navLinkStyles} className="px-4"> Adidas </NavLink>
                    <NavLink to="/converse" style={navLinkStyles} className="px-4"> Converse </NavLink>
                    <NavLink to="/puma"  style={navLinkStyles} className="px-4"> Puma </NavLink>
                    <NavLink to="/vans" style={navLinkStyles} className="px-4"> Vans </NavLink>

                </li>
            </ul>
        </nav>
    )

}