import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import Header from './Header'

const FlexContainer = styled.div`



min-width: 340px;
max-width: 850px;
`

const Back = styled.div`
`

class Figures extends Component {
    state = {
        figures: [],
    }

    componentWillMount() {
        this.getAllFigures()
    }

    getAllFigures = async () => {
        const res = await axios.get('/api/figures')
        this.setState({ figures: res.data })
    }

    render() {

        const toys = this.state.figures.map((toy) => {
            return (

                
                
                <FlexContainer>
                <div class="photo">
                    <img src={toy.name}/>
                    <div>
                    <div class="text">
                    {toy.description}
                    </div>
                    <a href={toy.link}>Click Here to Purchase</a>
                    </div>
                </div>
                </FlexContainer>
            )
        })

        return (
            <Back>
                <Header />
            <div>
                {toys}
            </div>
            </Back>
        )
    }
}
  

export default Figures;