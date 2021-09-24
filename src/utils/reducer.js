import {actions} from './constants'

export const reducer = (state, {type, payload}) => {
  switch (type) {
    // this action will be called when the project loads for the first time
    case actions.SET_INITIAL_DATA:
      return {...state, items: payload, totalItems: payload.length, isLoading: false}
    // this action will be called when the users increases/decreases the amount of items

    case actions.SET_ITEM_AMOUNT:
      let {btnType, item} = payload // destructuring payload
      let indexOfItem = state.items.indexOf(item) // find index of selected item
      let newItem = {...item} // duplicate item object into new object
      // if increase button is clicked
      if (btnType === 'increase') {
        newItem.amount += 1
      }
      // if decrease button is clicked
      else {
        newItem.amount -= 1
      }
      // duplicate items object into new object
      let updatedItems = [...state.items]
      // set the updated item in place of the old item
      updatedItems[indexOfItem] = newItem
      // count new total no. of items in cart
      let newCount = updatedItems.reduce((sum, {amount}) => {
        return parseInt(sum) + parseInt(amount)
      }, 0)
      return {...state, items: updatedItems, totalItems: newCount}

    // this action will be used to empty the item list
    case actions.CLEAR_ALL_ITEMS:
      return {...state, items: [], totalItems: 0}

    // this action will be used to remove a single item
    case actions.REMOVE_ITEM:
      let filteredList = state.items.filter((item) => item.id !== payload)
      return {...state, items: filteredList, totalItems: filteredList.length}

    default:
      return state
  }
}
