import { ActionTypes } from "../ActionTypes/ActionTypes"

const initialState = {
    allMessges: []
}

const Messages = (state = initialState, action) => {
    switch (action.type) {
    
      case ActionTypes.USER_MESSAGES:
        return {
          ...state,
          allMessges: [...state.allMessges, action.payload]
        }

      default:
        return state
    }
  }
  
  export default Messages;
  