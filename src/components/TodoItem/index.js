// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails
  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-list">
      <p className="todo-title">{title}</p>
      <button onClick={onDelete} type="button" className="del-btn">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
