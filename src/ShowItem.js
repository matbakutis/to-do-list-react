import React, { Component } from 'react';
import './ShowItem.css';

class ShowItem extends Component {
	render(){
		const todoList = this.props.todo.map((item, i)=> {
            const crossOut = item.done ? 'crossOut' : '';
            const doneBtn = item.done ? 'doneBtn' : '';
    		return (
                <div key={i} className="item">
                    <h4 className={crossOut}>{item.name}</h4>
                    <p>{item.note}</p>
                    <div className="btn-group btn-group-sm" role="group">
                        <button onClick={this.props.todoDone} className={doneBtn + " btn btn-secondary"}>Done</button>
                        <button onClick={this.props.showEdit} value={item.name} className="btn btn-secondary">Edit</button>
                        <button onClick={this.props.todoDelete} value={item.name} className="btn btn-secondary">Delete</button>
                    </div>
                </div>
              )
        });
    return (<ul id="items">
              {todoList}
            </ul>)
	}
}

export default ShowItem;