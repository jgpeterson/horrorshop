import React, { Component } from 'react';

class Figures extends Component {
    state = {
        figures: [],
    }

    componentWillMount() {
        this.getAllFigures()
    }

    getAllFigures = async () => {
        const res = await axios.get('/api/figures')
        this.setState({ discography: res.data })
    }

    render() {

        const albums = this.state.discography.map((album) => {
            return (
                <FlexContainer>
                <div class="photo">
                    <img src={album.name}/>
                    <div>
                    <a href={album.description}>Click Here to Purchase</a>
                    </div>
                </div>
                </FlexContainer>
            )
        })

        return (
            <div>
                <Header />
                {albums}
            </div>
        )
    }
}
  

export default Figures;