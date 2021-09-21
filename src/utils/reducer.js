import {actions} from './constants'

export const reducer = (state, {type, payload}) => {
  switch (type) {
    case actions.SET_INITIAL_DATA:
      return {...state, items: payload, totalItems: payload.length}
    case actions.SET_ITEM_AMOUNT:
      let updatedItems = [...state.items]
      console.log(updatedItems[payload.index].amount + 1)
      if (payload.btnType === 'up') {
        updatedItems[payload.index].amount = updatedItems[payload.index].amount + 1
      } else {
        updatedItems[payload.index].amount = updatedItems[payload.index].amount - 1
      }
      // console.log(updatedItems)
      return {...state, items: updatedItems}
    default:
      return state
  }
}
