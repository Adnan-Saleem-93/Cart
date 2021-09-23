import React, {useEffect, useState} from 'react'
import '../css/Total.css'

const Total = ({items, onClearAll}) => {
  const [totalAmount, setTotalAmount] = useState(0)
  useEffect(() => {
    // count total amount of selected products
    setTotalAmount(() => {
      return items.reduce((sum, item) => {
        return (parseFloat(sum) + parseFloat(item.price * item.amount)).toFixed(2)
      }, 0.0)
    })
  }, [items])

  return (
    <>
      <hr />
      <section className="total">
        <h3>Total</h3>
        <h3>${totalAmount}</h3>
      </section>
      <button className="btn-clearAll" onClick={onClearAll}>
        Clear All
      </button>
    </>
  )
}

export default Total
