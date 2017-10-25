
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../src/actions/TodoActions'
import * as types from '../../src/actions/index'
import fetchMock from 'fetch-mock'
import expect from 'expect' // You can use any testing library

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {

        const text = 'Finish docs';

        const id = 2;
        const expectedAction = {
            type: types.ADD,
            payload: {name:text,id:id}
        }
        const store = mockStore({ todos: [] })

        return store.dispatch(actions.addToDo(text, id))
        expect(store.getActions()).toEqual(expectedAction)
    })
})