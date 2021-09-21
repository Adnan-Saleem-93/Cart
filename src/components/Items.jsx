import React from 'react'
import '../css/Items.css'
import {AiFillCaretUp, AiFillCaretDown} from 'react-icons/ai'

const Items = ({items, onItemsAmountHandle}) => {
  return (
    <>
      <section className="item-section">
        {items.map((item, index) => {
          let {id, title, price, img, amount} = item
          return (
            <article key={index} className={`item_${id}`}>
              <div className="item-details">
                <img src={img} alt={title} />
                <div className="description">
                  <p className="title">{title}</p>
                  <p className="price">${price}</p>
                </div>
              </div>
              <div className="amount-section">
                <button className="btn-updown" onClick={() => onItemsAmountHandle('up', index)}>
                  <AiFillCaretUp />
                </button>
                <p className="amount">{amount}</p>
                <button className="btn-updown" onClick={() => onItemsAmountHandle('down', index)}>
                  <AiFillCaretDown />
                </button>
              </div>
            </article>
          )
        })}
      </section>
    </>
  )
}

export default Items
