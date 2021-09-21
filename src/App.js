import React, {useEffect, useReducer, useState} from 'react'
import './App.css'
import Header from './components/Header'
import Items from './components/Items'
import Total from './components/Total'
import {api, actions, initialState} from './utils/constants'
import {reducer} from './utils/reducer'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const [state, dispatch] = useReducer(reducer, initialState)
  const {items, totalItems} = state
  useEffect(() => {
    const onFetch = async () => {
      try {
        let response = await fetch(api)
        let result = await response.json()
        dispatch({type: actions.SET_INITIAL_DATA, payload: result})
        setIsLoading(false)
      } catch (err) {
        console.error(err)
      }
    }
    onFetch()
  }, [])

  const handleItemsAmount = (btnType, index) => {
    dispatch({type: actions.SET_ITEM_AMOUNT, payload: {btnType: btnType, index: index}})
  }

  return (
    <div className="App">
      {!isLoading ? (
        <>
          <Header totalCount={totalItems} />
          <div className="cart-section">
            <h1 className="text-your-cart">Your Items</h1>
            {items.length > 0 ? (
              <>
                <Items items={items} onItemsAmountHandle={handleItemsAmount} />
                <Total items={items} />
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
