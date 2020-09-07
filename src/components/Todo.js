import React, { Component } from 'react'
import './Todo.css'

export default class Todo extends Component {

  render() {
    return (
        <div className={this.props.todo.completed ? "done" : ''}>
        <div>{this.props.todo.task}</div> 

        {!this.props.todo.completed &&
          <button
          onClick={(event) => this.props.markComplete(this.props.todo.id)}>
            Complete
        </button>} 
        <br />

      </div>
    )
  }
}