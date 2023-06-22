import {ActionTypes} from '../ActionTypes/ActionTypes';

export const IncrementCount = count => ({
    type: ActionTypes.INCREMENT_COUNT,
    payload: count
  })

  export const storeMessages = (msgs) => ({
    type: ActionTypes.USER_MESSAGES,
    payload: msgs
  })
