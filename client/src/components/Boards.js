import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import NewBoardForm from './NewBoardForm'
import Header from './Header'

class Boards extends Component {
    state = {
        boards: [],
        showNewForm: false
      }
      componentWillMount () {
        this.getAllBoards()
      }
    
      getAllBoards = async () => {
        const res = await axios.get('/api/boards')
        console.log(res.data)
        this.setState({boards: res.data})
      }
      deleteBoard = async (boardId) => {        
        const res = await axios.delete(`/api/boards/${boardId}`)
        this.setState({boards: res.data})
      }
      
      toggleShowNewForm = () => {
        this.setState({showNewForm: !this.state.showNewForm})
      }
    
    render() {
        return (
            
            <div class="name">
                <div>
                </div>
               {this.state.boards.map((board) => {
         return ( <div key={board.id}>
         <div class="fanphoto">
            {board.title}
            
            <p class="des">Description: {board.description}</p>
            
            <div class="del">
            <button onClick={() => this.deleteBoard(board.id)}>Delete Post</button>
            </div>
            </div>
         </div> )
               })}
        <div class="par">
        <button onClick={this.toggleShowNewForm}>Create New Post</button>
        </div>
        {this.state.showNewForm ? <NewBoardForm getAllBoards={this.getAllBoards}/> : null} 
            </div>
           
        );
    }
}


export default Boards;