import React, {useEffect, useReducer} from 'react'
import './App.css'
import Header from './components/Header'
import Items from './components/Items'
import Total from './components/Total'
import {api, actions, initialState} from './utils/constants'
import {reducer} from './utils/reducer'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const {items, totalItems, isLoading} = state
  useEffect(() => {
    const onFetch = async () => {
      try {
        let response = await fetch(api)
        let result = await response.json()
        dispatch({type: actions.SET_INITIAL_DATA, payload: result})
      } catch (err) {
        console.error(err)
      }
    }
    onFetch()
  }, [])

  const handleItemsAmount = (btnType, item) => {
    dispatch({type: actions.SET_ITEM_AMOUNT, payload: {btnType: btnType, item: item}})
  }

  const handleClearAll = () => {
    dispatch({type: actions.CLEAR_ALL_ITEMS})
  }

  const handleRemoveItem = (id) => {
    dispatch({type: actions.REMOVE_ITEM, payload: id})
  }

  return (
    <div className="App">
      {!isLoading ? (
        <>
          <Header totalCount={totalItems} />
          <div className="cart-section">
            <h1 className="text-your-cart">Your Cart</h1>
            {items.length > 0 ? (
              <>
                <Items
                  items={items}
                  onItemsAmountHandle={handleItemsAmount}
                  onRemoveItem={handleRemoveItem}
                />
                <Total items={items} onClearAll={handleClearAll} />
              </>
            ) : (
              <h3 className="empty">Is Empty</h3>
            )}
          </div>
        </>
      ) : (
        <h1 className="loading">Loading...</h1>
      )}
    </div>
  )
}

export default App
