import { NavLink } from 'react-router-dom';

import BtnDarkMode from '../btnDarkMode/BtnDarkMode';

const Navbar = () => {


    const linkActive = 'nav-list__link nav-list__link--active'
    const linkNormal = 'nav-list__link'

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink className="logo" to="/">
                        <strong>My</strong> App
                    </NavLink>

                    <BtnDarkMode />

                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink className={({ isActive }) => isActive ? linkActive : linkNormal} to="/">Home</NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink className={({ isActive }) => isActive ? linkActive : linkNormal} to="/projects">Projects</NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink className={({ isActive }) => isActive ? linkActive : linkNormal} to="/todo">Todo App</NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink className={({ isActive }) => isActive ? linkActive : linkNormal} to="/contacts">Contacts</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;