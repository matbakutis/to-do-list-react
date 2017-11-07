import React, { Component } from 'react';
import ShowItem from './ShowItem.js';
import NewItem from './NewItem.js';
import EditItem from './EditItem.js';
import NewModal from './NewModal.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo: [],
      makeNewList: false,
      showEdit: false,
      editObj: {},
      editIndex: null
    }
  }

  makeTodo = (list) =>{
    const state = this.state;
    state.todo.push(list);
    state.makeNewList = false;
    this.setState(state);
  }

  showNew = () =>{
    const state = this.state;
    state.makeNewList = true;
    this.setState(state);
  }

  todoDone = (e) => {
    const state = this.state;
    const index = state.todo.findIndex((find)=>{
      return find.name;
    })
    state.todo[index].done = true;
    this.setState(state)
  }

  todoDelete = (e) => {
    const state = this.state;
    const objName = e.target.value;
    const index = state.todo.findIndex((find)=>{
      return find.name === objName;
    })
    state.todo.splice(index,1);
    this.setState(state)
  }

  showEdit = (e) => {
    const state = this.state;
    const objName = e.target.value;
     state.editIndex = state.todo.findIndex((find)=>{
      return find.name === objName;
    })
    state.editObj = state.todo[state.editIndex];
    state.showEdit = !state.showEdit;
    this.setState(state)
  }

  todoEdit = (list) => {
    const state = this.state;
    state.todo[state.editIndex] = list;
    state.showEdit = !state.showEdit;
    this.setState(state)
  }

  addNewModal = () => {
    return (
      <NewModal isOpen={this.state.makeNewList} onClose={() => this.closeAddModal()}>
        <NewItem makeTodo={this.makeTodo}/>
      </NewModal>
    )
  }

  editNewModal = () => {
    return (
      <NewModal isOpen={this.state.showEdit} onClose={() => this.closeEditModal()}>
        <EditItem editObj={this.state.editObj} todoEdit={this.todoEdit}/> 
      </NewModal>
    )
  }

  closeAddModal = () => {
    const state = this.state;
    state.makeNewList = false;
    this.setState(state);
  }

  closeEditModal = () => {
    const state = this.state;
    state.showEdit = !state.showEdit;
    this.setState(state);
  }

  render() {
    return (
      <div className="App">
        <h1>To-Do</h1>
        <ShowItem todo={this.state.todo} todoDone={this.todoDone} done={this.state.todoDone} todoDelete={this.todoDelete} showEdit={this.showEdit} doneTitle={this.state.doneTitle}/>
        {!this.state.makeNewList ? <button onClick={this.showNew}>NewList</button> : this.addNewModal()}
        {this.state.showEdit ? this.editNewModal() : null}
      </div>
    );
  }
}

export default App;
