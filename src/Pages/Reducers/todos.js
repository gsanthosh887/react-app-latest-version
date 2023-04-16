import { ActionTypes } from "../ActionTypes/ActionTypes"

const initialState = {
    count: 0,
}

const todos = (state = initialState, action) => {
    switch (action.type) {
      case ActionTypes.INCREMENT_COUNT:
        return {
          ...state,
          count: action.payload + 1
        }

      default:
        return state.count
    }
  }
  
  export default todos
  