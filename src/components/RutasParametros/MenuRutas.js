import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuRutas extends Component {
  render() {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/tabla/9">Tabla del 9</NavLink> 
                    {/* <a href='/tabla/9'>Tabla de Multiplicar: 9</a> */}
                </li>
                <li>
                    <NavLink to="/tabla/3">Tabla del 3</NavLink>
                    {/* <a href='/tabla/3'>Tabla de Multiplicar: 3</a> */}
                </li>
                <li>
                    <NavLink to="/tabla/45">Tabla del 45</NavLink>
                    {/* <a href='/tabla/45'>Tabla de Multiplicar: 45</a> */}
                </li>
                <li>
                    <NavLink to="/noexisto">Pagina no encontrada</NavLink>
                    {/* <a href='/noexisto'>Sin ruta mapeada</a> */}
                </li>
            </ul>
        </div>
    )
  }
}
