import React, { Component } from 'react';
import {addToDo, deleteToDo} from '../../actions/toDoActions'
import { connect } from 'react-redux'


const mapStateToProps = ({ todos }) => ({
    todos
});

const actions = {
    addToDo,
    deleteToDo
};


 class ToDoComponent extends Component {
    constructor(props){
        super(props);
        this._id = 1;
        this.text;
        this.onTextChange = this._onTextChange.bind(this)
    }

     _onTextChange(e){
        this.text = e.target.value
     }

    _addToDo(){
        this._id++;
        this.props.addToDo(this.text,this._id)
    }
     _deleteToDo(id){
         this.props.deleteToDo(id,this.props.todos)
    }
     _clickitem(id){
         console.log('clicked')
     }

    render() {
        return (
            <div>
                <input
                    type="text"
                    className="login-input"
                    onChange={this.onTextChange}
                    placeholder='ToDo name'
                />
                <button onClick={() => {this._addToDo()}}>
                    Add Todo
                </button>
                <ul>
                    {this.props.todos.map(todo =>
                        <li key={todo.id} ref={ref => (this.liRefHolder = ref)} onClick={()=>{this._clickitem()}}>
                            {todo.name}
                            <button onClick={() => {this._deleteToDo(todo.id)}}>Delete</button>
                        </li>
                    )}
                </ul>
            </div>
        )
    };
}
export default connect(mapStateToProps, actions)(ToDoComponent);
