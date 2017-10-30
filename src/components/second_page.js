import React, { Component } from 'react';
import {addToDo, deleteToDo, updateTodo} from '../actions/toDoActions'
import { connect } from 'react-redux'
import Header from './header'



const mapStateToProps = ({ todos }) => ({
    todos
});

const actions = {
    addToDo,
    deleteToDo,
    updateTodo
};


class ToDoComponent extends Component {
    constructor(props){
        super(props);
        this._id = 1;
        this.clicked = false;
        this.onTextChange = this._onTextChange.bind(this);
        this.onTextInputChange = this._onTextInputChange.bind(this);

        this.state={
            input:'',
            update:''
        }
    }

    _onTextChange(e){
        this.setState({input:e.target.value})
    };

    _onTextInputChange(e){
        this.setState({update:e.target.value})
    }
    _addToDo(){
        this.props.addToDo(this.state.input,this._id);
        ++this._id;
        this.setState({input:''})

    }
    _deleteToDo(id){
        this.props.deleteToDo(id,this.props.todos)
    }
    _clickitem(name, id){
        this.clicked = true;
        this.updateId = id;
        this.setState({update:name})

    }
    _update(){
        this.props.updateTodo(this.updateId, this.state.update, this.props.todos);
        this.clicked = false;
        this.setState({update:''})
    }

    render() {
        return (
            <div>
                <Header/>
                <input
                    ref='input'
                    type="text"
                    className="login-input"
                    onChange={this.onTextChange}
                    placeholder='ToDo name'
                    value = {this.state.input}
                />
                < button onClick={() => {this._addToDo()}}>
                    Add Todo
                </button>

                <input
                    ref='input'
                    type="text"
                    className="login-input"
                    onChange={this.onTextInputChange}
                    placeholder='ToDo name'
                    value = {this.state.update}
                    disabled={!this.clicked}
                />
                    < button onClick={() => {this._update()}}>
                        Update
                    </button>
                <ul>
                    {this.props.todos.map(todo =>
                        <div  key={todo.id}>
                            <li onClick={()=>{this._clickitem(todo.name,todo.id)}}>
                                {todo.name}
                            </li>
                            <button onClick={() => {this._deleteToDo(todo.id)}}>Delete</button>
                        </div>
                    )}
                </ul>
                <span><p>About this thing. You can add to list something, delete(when create a new item appear delete button
                    if you want to update, just click to the item.
                </p></span>
            </div>
        )
    };
}
export default connect(mapStateToProps, actions)(ToDoComponent);
