import React, {Component} from 'react';
import './EditItem.css';

class EditItem extends Component {
	constructor(props){
		super(props);
		this.state ={
			todo : {
				name: '',
				note: ''
			}
		}
	}
  handleChange = (e) => {
    const state = this.state;
    const name = e.currentTarget.name;
    state.todo[name] = e.currentTarget.value;
    this.setState(state);
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    this.props.todoEdit(this.state.todo)
    const state = this.state;
    this.setState(state);
  }
	render(){
		return (
      <div className="insideModal">
        <form>
          <h3>Name:</h3>
          <input name='name' type='text' onChange={this.handleChange} placeholder={this.props.editObj.name} value={this.state.todo.name}/>
          <h4>Note:</h4>
          <textarea name='note' type='text' onChange={this.handleChange} placeholder={this.props.editObj.notes} value={this.state.todo.note}/><br/>
          <button onClick={this.handleSubmit}>Edit</button>
        </form>
      </div>
    )
	}
}

export default EditItem;