import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import NewCustomForm from './NewCustomForm'
import styled from 'styled-components'
import Header from './Header'


const Img = styled.div`
text-align: center;
   display: inline-block;
   width:85%;
   margin-bottom: 8px;
   margin-right: 8px;
   margin-left: 170px;
   border-radius: 50px;
   padding: 15em;
   position: relative;
   min-width: 340px;
   max-width: 850px;
   `

   const Back = styled.div`
   background: black;
   @media screen and (max-width:450px) {
    .banner img {
        font-size: 1.25rem;
        max-width: 800px;
        justify-content: space-between;
        align: center;
        margin-left: -200%;
        
    }
    .del {
        margin-left: -350%;
    }
    .par {
        margin-left: -286%;
    }
    @media screen and (max-width:450px) {
        .fanphoto img {
            max-width: 150px;
            margin-left: -600%;
        }
    
        }
`
   const FanPost = styled.div `
   @media screen and (max-width:450px) {
    .des {
        font-size: 10px;
        width: 60%;
        margin-left: -300%; 
        
    }
   `




class Customs extends Component {
    state = {
        customs: [],
        showNewForm: false
      }
      componentWillMount () {
        this.getAllCustoms()
      }
    
      getAllCustoms = async () => {
        const res = await axios.get('/api/customs')
        console.log(res.data)
        this.setState({customs: res.data})
      }
      deleteCustom = async (customId) => {        
        const res = await axios.delete(`/api/customs/${customId}`)
        this.setState({customs: res.data})
      }
      toggleShowNewForm = () => {
        this.setState({showNewForm: !this.state.showNewForm})
      }
    
    render() {
        return (
            <Back>
                <Header />
            <Img>

            <div class="name">
                <div class="banner">
                <img src="https://i.imgur.com/nRryQNF.jpg"/>
                </div>
               {this.state.customs.map((custom) => {
         return ( <div key={custom.id}>
         <div class="fanphoto">
            <img src={custom.name}/>
            <FanPost>
            <p class="des">Description: {custom.description}</p>
            <p class="des">Review: {custom.review}</p>
            </FanPost>
            <div class="del">
            <button onClick={() => this.deleteCustom(custom.id)}>Delete Post</button>
            </div>
            </div>
         </div> )
               })}
        <div class="par">
        <button onClick={this.toggleShowNewForm}>Create New Post</button>
        </div>
        {this.state.showNewForm ? <NewCustomForm getAllCustoms={this.getAllCustoms}/> : null} 
            </div>
            </Img>
            </Back>
        );
    }
}

export default Customs;