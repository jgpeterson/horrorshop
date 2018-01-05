import React, { Component } from 'react'
import axios from 'axios'
import DropZone from 'react-dropzone'

class NewCustomForm extends Component {
    state = {
        name: '',
        description: '',
        review: ''
    }

    handleChange = (event) => {
        const name = event.target.name
        const newState = { ...this.state }
        newState[name] = event.target.value
        this.setState(newState)
    }

    uploadWidget = () => {
        window.cloudinary.openUploadWidget({ cloud_name: 'dvxweknce', upload_preset: 'i8c4rkri'},
            (error, result) => {
                console.log(result);
                this.setState({name: result[0].url})
            });
    }
    handleDrop = (files) => {
        console.log(files)
        this.setState({name: files[0]})
    }

    changeFile = (e) => {
        var reader = new FileReader();
        var file = e.currentTarget.files[0];
        console.log(file)
        var that = this;

        reader.onloadend = function () {
            that.setState({ name: reader.result, imageFile: file });
        }

        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ name: "", imageFile: null });
        }
    }


    handleSubmit = async (event) => {
        event.preventDefault()
        const payload = {
            name: this.state.name,
            description: this.state.description,
            review: this.state.review
        }
        await axios.post('/api/customs', payload)
        await this.setState({
            name: "",
        description: "",
        review: ""
    })
        await this.props.getAllCustoms()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} encType="multipart/form-data">
                <div class="new">
                    <label htmlFor="description">Description: </label>
                    <input onChange={this.handleChange} type="text" name="description" value={this.state.description} />
                </div>
                <div onClick={this.uploadWidget}><button>Upload Fan Picture</button></div>
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

export default NewCustomForm