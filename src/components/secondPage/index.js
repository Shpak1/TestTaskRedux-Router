import React, { Component } from 'react';
import {addToDo, deleteToDo, updateTodo} from '../../actions/toDoActions'
import { connect } from 'react-redux'


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
        this.updateId;
        this.clicked = false;
        this.onTextChange = this._onTextChange.bind(this)
        this.state={
            input:''
        }
    }

     _onTextChange(e){
        this.text = e.target.value;
         this.setState({input:e.target.value})
     }

    _addToDo(){
        this.props.addToDo(this.state.input,this._id)
        ++this._id;
        this.setState({input:''})

    }
     _deleteToDo(id){
         this.props.deleteToDo(id,this.props.todos)
    }
     _clickitem(name, id){
         this.clicked = true;
         this.updateId = id;
         this.setState({input:name})

     }
     _update(){
         this.props.updateTodo(this.updateId, this.state.input, this.props.todos)
         this.clicked = false
     }

    render() {
        return (
            <div>
                <input
                    ref='input'
                    type="text"
                    className="login-input"
                    onChange={this.onTextChange}
                    placeholder='ToDo name'
                    value = {this.state.input}
                />
                {!this.clicked ?
                < button onClick={() => {this._addToDo()}}>
                    Add Todo
                    </button>
                    :
                    < button onClick={() => {this._update()}}>
                        Update
                    </button>
                }
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
