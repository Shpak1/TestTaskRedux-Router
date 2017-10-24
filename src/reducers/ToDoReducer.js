import * as Type from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
        case Type.ADD:
            return [
                ...state,
                action.payload
            ];

        case Type.UPDATE:
            return {
                ...state,
                ...action.payload
            };

        case Type.DELETE:
            return [
                ...action.payload
            ];

        default:
            return state;
    }
}
