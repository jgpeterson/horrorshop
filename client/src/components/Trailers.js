import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Header from './Header'

class Trailers extends Component {
        state = {
            trailers: [],
           
        }
    
        componentWillMount() {
            this.getAllTrailers()
        }
    
        getAllTrailers = async () => {
            const res = await axios.get('/api/trailers')
            this.setState({ trailers: res.data })
        }
    
        render() {
    
            const previews = this.state.trailers.map((preview) => {
                return (
                    
                    <div class="photo">
                        <iframe src={preview.name}/>
                    {preview.description}
                    </div>

                    
                  
                
                   
                )
            })
    
            return (
                <div>
                    <Header />
                    {previews}
                </div>
            )
        }
    }

export default Trailers;