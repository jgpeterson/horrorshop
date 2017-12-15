import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import Header from './Header'

const FlexContainer = styled.div`
display: inline-block;
text-align: center;
padding: 40px;
margin: 20px;
min-width: 340px;
max-width: 850px;
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
                    <div>
                    {toy.description}
                    </div>
                    <a href={toy.link}>Click Here to Purchase</a>
                    </div>
                </div>
                </FlexContainer>
            )
        })

        return (
            <div>
                {toys}
            </div>
        )
    }
}
  

export default Figures;