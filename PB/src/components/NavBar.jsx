import { NavLink } from "react-router-dom"
export const NavBar = () => {
  return (
    <div className="w3-bar w3-border w3-light-grey">
        <NavLink to='/' className="w3-bar-item w3-button">Eliminar</NavLink>
        <NavLink to='/mostrar' className="w3-bar-item w3-button">Mostrar</NavLink>
        <NavLink to='/insertar' className="w3-bar-item w3-button">Insertar</NavLink>
        <NavLink to='/buscar' className="w3-bar-item w3-button">Buscar</NavLink>
    </div>
  )
}
