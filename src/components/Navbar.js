import React from 'react'
import { Navbar, Nav, NavItem, NavLink, NavbarBrand } from 'shards-react'

import { Link } from 'react-router-dom'

export default function NavExample() {
  return (
    <Navbar type="dark" theme="primary" expand="md">
      <NavbarBrand href="#">Corona Vírus // Mundo</NavbarBrand>
      <Nav className={'navbar-collapse justify-content-end'} navbar>
        <NavItem>
          <NavLink href='#'><Link to="/">Painel Geral</Link></NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='#'>Sobre</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  )
}