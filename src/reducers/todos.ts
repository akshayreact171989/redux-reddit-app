import { TodoFieldProps } from './../components/todo/todo';
import { initialState } from './main-reducer';


const todosReducer = (state = initialState.todos, action: any) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map((todo: TodoFieldProps) =>
        (
          todo.id === action.id)
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    default:
      return state
  }
}

export default todosReducer
