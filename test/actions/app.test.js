
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../src/actions/toDoActions'
import * as types from '../../src/actions/index'
import fetchMock from 'fetch-mock'
import expect from 'expect' // You can use any testing library

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore()
    });

    it('creates ADD_TODO when fetching todos has been done', () => {

        const text = 'Finish docs';

        const id = 2;
        const expectedAction = [{
            type: types.ADD,
            payload: {name:text,id:id}
        }];
        const store = mockStore({ todos: [] });

         store.dispatch(actions.addToDo(text, id)) ;
        expect(store.getActions()).toEqual(expectedAction)
    })
});


describe('async actions', () => {
    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore()
    })

    it('creates DELETE TODO when fetching todos has been done', () => {

        const id = 2;

        const array = [
            {name:'name', id : id},
            {name:'name', id : 4}
        ];

        const expectedAction = [{
            type: types.DELETE,
            payload: [{name:'name', id : 4}]
        }];
        const store = mockStore({ todos: [] })

        store.dispatch(actions.deleteToDo(id,array)) ;
        expect(store.getActions()).toEqual(expectedAction)
    })
});

describe('async actions', () => {
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    });

    it('creates UPDATE TO DO when fetching todos has been done', () => {

        const id = 2;

        const name = "Bill";

        const array = [
            {name:'name', id : id},
            {name:'name', id : 4}
        ];

        const expectedAction = [{
            type: types.UPDATE,
            payload: [  {name:"Bill", id : id},
                        {name:'name', id : 4}]
        }];
        const store = mockStore({ todos: [] })

        store.dispatch(actions.updateTodo(id,name, array)) ;
        expect(store.getActions()).toEqual(expectedAction)
    })
})