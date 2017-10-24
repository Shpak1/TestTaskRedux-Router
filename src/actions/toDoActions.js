import * as Type from './index'

export const addToDo = (name, _id) => {
    return((dispatch) =>(
        dispatch({
            type:Type.ADD,
            payload: {name : name, id : _id}
        })
    ))
}

export const deleteToDo = (id, array) => {
    return((dispatch) => {
        let pureArray = array.filter((_id=>_id.id!==id));
        dispatch({
            type: Type.DELETE,
            payload: pureArray
        })
    })
}

export const updateTodo = (object) => {
    return((dispatch) =>(
        dispatch({
            type:Type.USER_INFO,
            payload: object
        })
    ))
}