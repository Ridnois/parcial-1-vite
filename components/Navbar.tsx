import { NavLink } from "react-router";

export default function Navbar() {
    return (
        //  NAVBAR minimalista y fijo 
        <header className="navbar">
            <div className="nav-container">
                <div className="logo">
                    <img src="https://www.shutterstock.com/image-vector/cyg-letter-initial-logo-design-600nw-2495836055.jpg" alt="Logo C&G" />
                    <span>C&G</span>
                </div>
                <nav>
                    <button id="menu-toggle" aria-label="Abrir menú">&#9776;</button>
                    <ul id="nav-list">
                        <li>
                            <NavLink to="/" >
                                Inicio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/servicios" >
                                Servicios
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contacto" >
                                Contacto
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/quienes-somos" >
                                Quíenes somos
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}