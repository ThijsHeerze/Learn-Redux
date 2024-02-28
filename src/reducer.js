import * as actions from './actiontypes';
// []
let lastId = 0;

export default function reducer(state = [], action){
    switch (action.type){
        case actions.BUG_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    descripton: action.payload.discription,
                    resolved: false
                }
            ]
        case actions.BUG_REMOVED:
            return state.filter(bug => bug.id !== action.payload)

        case actions.BUG_RESOLVED:
            return state.map(bug => bug.id !== action.payload.id ? bug : {...bug, resovled: true})

        default:
            return state;
    }
}