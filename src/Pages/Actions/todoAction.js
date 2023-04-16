import {ActionTypes} from '../ActionTypes/ActionTypes';

export const IncrementCount = count => ({
    type: ActionTypes.INCREMENT_COUNT,
    payload: count
  })
