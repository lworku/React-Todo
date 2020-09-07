import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state


  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        }
      ],
      inputValue: '',
    }}

  changeHandler = (event) => {
    this.setState({
      inputValue: event.target.value
    })
    console.log(this.state.inputValue)
  }

  submitHander = (event) => {
    event.preventDefault();
    const newItem = {
      task: this.state.inputValue,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newItem],
      inputValue: ''
    })
  }

  markComplete = (markedItem) => {
    console.log(markedItem)
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === markedItem) {
          return {
            ...item,
            completed: true
          }
        }
        else {
          return item;
        }
      })
    })
  }

  clearAll = () => {

    this.setState({
      todos: this.state.todos.filter(todo => todo.completed === false)
    })
  }

  render() {

    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          submitHander={this.submitHander}
          inputValue={this.state.inputValue}
          changeHandler={this.changeHandler}

          clearAll={this.clearAll}

        />
        <TodoList todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}
export default App;