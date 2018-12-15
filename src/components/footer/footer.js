import React from 'react';
import {Container} from 'reactstrap';
import './footer.css';

class Footer extends React.Component{
    render(){
        return(
            <Container className="footer-container">
                <p className="text-center brand">&copy; Demo Project</p>
            </Container>
        );
    }
}

export default Footer;
