import React from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';
import './header.css';

class Header extends React.Component{
    render(){
        return(
            <Navbar className="header-container">
                <NavbarBrand className="logo">News Today</NavbarBrand>
            </Navbar>
        );
    }
}

export default Header;
