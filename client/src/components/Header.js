import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Head = styled.div`
@media screen and (max-width:450px) {
    .container {
        font-size: 1rem;
    }
    .item {
        font-size: 10px;
    }
   }
`

class Header extends Component {
    render() {
        return (
        
            <Head>
            <div>
            <div className="container">
            <div className="item">
              <Link to="/Figures">Figures</Link>
            </div>
            <div className="item">
              <Link to="/boards">Message Boards</Link>
            </div>
            <div className="item">
             <Link to="/customs">Custom Figures</Link>
             </div>
             <div className="item">
             <Link to="/MainMenu">Main Menu</Link>
             </div>
            </div>
            </div>
            </Head>
            
        );
    }
}

export default Header;