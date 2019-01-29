import React, {Component} from "react"
import axios from 'axios'
import {Switch, Route} from 'react-router-dom'

class Todos extends Component {
  constructor(){
    super()
    this.state = {
      todos:[]
    }
  }
  componentDidMount(){
    this.getTodos()

  }
  getTodos = () => {
    axios
    .get("https://jsonplaceholder.typicode.com/Todos")
    .then(response => {

      this.setState({
        todos:response.data
      })

    })
    .catch(err => {
      console.log(err)
    })
  }
  renderTodos = ()=> {

    let todoList = this.state.todos.map(todo => {
      console.log(todo)
      return(
    <li id="todoItem" key ={todo.id}><i>{todo.id}</i>: {todo.title}</li>
      )
    })
    return(
      <>
      <ul>
      {todoList}
      </ul>
      </>)
  }

  render(){
    // console.log(this.state.todos);


    return(

      <Switch>
        <Route path='/todos' render={this.renderTodos}/>
      </Switch>
    )
  }
}
export default Todos;
