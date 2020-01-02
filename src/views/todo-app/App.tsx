import React from 'react';
import './App.css';
import { FooterComponent } from '../../components/footer/footer';
import { AddTodoContainer } from '../../containers/addTodo';
import { VisibleTodoList } from '../../containers/visible-todo-list'

interface Props { }
interface State { }

class App extends React.Component<Props, State> {
  render() {
    return <div className="App">
      <h1>Redux TODO Project</h1>
      <AddTodoContainer />
      <FooterComponent />
      <VisibleTodoList />
    </div>
  }
}

export default App;
