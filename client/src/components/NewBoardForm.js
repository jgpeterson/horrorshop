import React, { Component } from 'react';
import axios from 'axios'

class NewBoardForm extends Component {
    state = {
        title: '',
        description: ''
    }

    handleChange = (event) => {
        const name = event.target.name
        const newState = { ...this.state }
        newState[name] = event.target.value
        this.setState(newState)
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const payload = {
            title: this.state.title,
            description: this.state.description
        }
        await axios.post('/api/boards', payload)
        await this.setState({
        title: "",
        description: ""
    })
        await this.props.getAllBoards()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} encType="multipart/form-data">
                <div class="new">
                <label htmlFor="title">Title: </label>
                <input onChange={this.handleChange} type="text" name="title" value={this.state.title} />
                <label htmlFor="description">Description: </label>
                <input onChange={this.handleChange} type="text" name="description" value={this.state.description} />
                </div>
                {/* <DropZone onDrop={this.handleDrop}>
                    <p>Click or Drag an image to upload</p>
                </DropZone> */}
                {/* <div>
                    <label htmlFor="profile_picture" />
                    <input type="file" onChange={this.changeFile} name="profile_picture" value={this.state.profile_picture} />
                </div> */}
                <button>Submit</button>
            </form>
        )
    }
}


export default NewBoardForm;