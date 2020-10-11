import {ACTION_TYPES} from "../actions/action.types"

const initialState ={

}
export const dCandidate = (state = initialState, action) =>{

    switch(action.type){
        case ACTION_TYPES.FETCH_ALL: 
        return {
            list:[...action.payload]
        }
        default:
            return state;
    }
}