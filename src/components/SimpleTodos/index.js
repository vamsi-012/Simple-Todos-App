import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {
    todosList: initialTodosList,
  }

  deleteTodo = id => {
    const {todosList} = this.state
    const filteredTodosData = todosList.filter(each => each.id !== id)
    this.setState({todosList: filteredTodosData})
  }

  render() {
    const {todosList} = this.state
    return (
      <div className="app-container">
        <div className="todos-container">
          <h1 className="todos-heading">Simple Todos</h1>
          <ul className="todo-cards-conatiner">
            {todosList.map(eachTodo => (
              <TodoItem
                deleteTodo={this.deleteTodo}
                key={eachTodo.id}
                todoDetails={eachTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
