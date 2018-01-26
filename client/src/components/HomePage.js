import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'




class HomePage extends Component {
    render() {
        return (

            
            <div>
             <button>
                  <Link to="/Trailers">ENTER</Link>
                 </button>
            </div>
        );
    }
}

export default HomePage;