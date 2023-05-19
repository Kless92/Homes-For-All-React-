import {useState} from 'react';
import {Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <Navbar dark sticky='top' expand='md'>
            <NavbarBrand className='ms-5' href='/'>
                <h1 className='mt-2'>Homes for All</h1>
            </NavbarBrand>

            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>

            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className='fa fa-home fa-lg'/> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/news'>
                            <i className='fa fa-newspaper-o fa-lg'/> News
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/volinteer'>
                            <i className='fa fa-handshake-o fa-lg'/> Volinteer
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/donations'>
                            <i className='fa fa-money fa-lg'/> Donations
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Header;