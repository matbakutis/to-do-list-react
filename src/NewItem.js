import React, {Component} from 'react';
import './NewItem.css';

class NewItem extends Component {
	constructor(){
		super();
		this.state = {
			todo: {
				name: '',
				note: '',
				done: false
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
		this.props.makeTodo(this.state.todo)
		const state = this.state;
		this.setState(state);
	}
	render(){
		return(
			<div className="insideModal">
				<form>
					<h3>Name:</h3>
					<input name='name' type='text' onChange={this.handleChange} placeholder='Name' value={this.state.todo.name}/>
					<h4>Notes</h4>
					<textarea name='note' type='text' onChange={this.handleChange} placeholder='Note' value={this.state.todo.note}/><br/>
					<button onClick={this.handleSubmit}>Add New List</button>
				</form>
			</div>
		)
	}
}

export default NewItem;