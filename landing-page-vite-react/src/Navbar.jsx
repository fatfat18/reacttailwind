import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './index.css'





export const Navbar = () => {

    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? '900' : 'lighter',
            color: isActive? 'red' : 'black',
            borderTop: isActive? 'thick solid black': 'white',
            borderBottom: isActive? 'thick solid black': 'white',
    
            
          
          
        }
    }

    return (
        <nav className='text-2xl bg-white xl:h-16 justify-around items-center flex w-screen'>
            <ul>
                <li className='transition ease-in-out delay-300'>
                    <NavLink to="/nike" style={navLinkStyles} className="px-8 xl:py-4"> NIKE </NavLink>
                    <NavLink to="/adidas"  style={navLinkStyles} className="px-8 xl:py-4"> ADIDAS </NavLink>
                    <NavLink to="/converse" style={navLinkStyles} className="px-8 xl:py-4"> CONVERSE </NavLink>
                    <NavLink to="/puma"  style={navLinkStyles} className="px-8 xl:py-4"> PUMA </NavLink>
                    <NavLink to="/vans" style={navLinkStyles} className="px-8 xl:py-4"> VANS </NavLink>
                </li>
            </ul>

    
        </nav>
    )

}