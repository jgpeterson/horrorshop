import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

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
                
                <div class="photo">
                    <img src={toy.name}/>
                    <div>
                    <div>
                    {toy.description}
                    </div>
                    <a href={toy.link}>Click Here to Purchase</a>
                    </div>
                </div>
                
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