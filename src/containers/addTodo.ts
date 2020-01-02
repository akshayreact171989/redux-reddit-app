import { addTodo } from './../actions/index';
import { AddTodoComponent, AddTodoDispatchProps } from './../components/addTodo/addTodo';
import React from 'react'
import { connect } from 'react-redux'


const mapDispatchToProps = (dispatch: any): AddTodoDispatchProps => ({
  addTodoClick: (text: string) => dispatch(addTodo(text))

})

export const AddTodoContainer = connect(
  null,
  mapDispatchToProps
)(AddTodoComponent)

