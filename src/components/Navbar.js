import React from 'react'
import { Navbar, Nav, NavItem, NavLink, NavbarBrand } from 'shards-react'
import { Link } from 'react-router-dom'
import barraLogo from '../assets/img/barra-logo.png'

export default function NavExample() {
  return (
    <Navbar type="dark" expand="md" className={'pt-0 pb-0'} style={{backgroundColor: '#ffff'}}>
      <NavbarBrand href="#">
        <div className={'logo-name'}>
          <div className={'brand-first mr-1'}>CORONAVÍRUS</div>
          <img src={barraLogo} alt="barra-logo" width='10' />
          <div className={'brand-second ml-1'}>MUNDO</div>
        </div>
      </NavbarBrand>
      <Nav className={'navbar-collapse justify-content-end nav-main'} navbar>
        <NavItem>
          <NavLink href='#'><Link className={'nav-link mb-0'} to="/">Painel Geral</Link></NavLink>
        </NavItem>
        <NavItem >
          <NavLink href='#'><Link className={'nav-link'} to="/Sobre">Sobre</Link></NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  )
}
