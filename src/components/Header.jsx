import React from 'react'
import {AiFillShopping} from 'react-icons/ai'
import '../css/Header.css'

const Header = ({totalCount}) => {
  return (
    <div className="header">
      <h1>Cart App</h1>
      <div className="cart">
        <AiFillShopping className="cart-icon" />
        <span className="cart-count">{totalCount || 0}</span>
      </div>
    </div>
  )
}

export default Header
