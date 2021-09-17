import {actions} from './constants'

export const reducer = (state, {type, payload}) => {
  switch (type) {
    case actions.SET_INITIAL_DATA:
      return {...state, items: payload, totalCount: payload.length}
    default:
      return state
  }
}
