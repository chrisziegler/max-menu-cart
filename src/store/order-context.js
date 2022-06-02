import React, { useState, useEffect } from 'react'
import OrderContext from './OrderContext'
import { MENU } from '../menu'

export const OrderContextProvider = props => {
  const [cart, setCart] = useState([])
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [totals, setTotals] = useState({
    amount: 0,
    count: 0,
  })

  useEffect(() => {
    if (cart.length >= 1) {
      const sum = (acc, cur) => {
        acc.amount =
          (acc.amount * 100 + cur.price * 100 * cur.count) / 100
        acc.count += cur.count
        return acc
      }
      const orderSummary = cart.reduce(sum, { amount: 0, count: 0 })
      setTotals(orderSummary)
    }
  }, [cart])

  const addToCart = order => {
    if (cart.some(item => item.name === order.name)) {
      const updatedCart = cart.map(item => {
        if (item.name === order.name) {
          item.count += order.count
        }
        return item
      })
      setCart(updatedCart)
    } else {
      setCart(cart.concat(order))
    }
  }

  const toggleModal = () => {
    setModalIsVisible(prevState => !prevState)
  }

  const clearCart = () => {
    setCart([])
    setTotals({ amount: 0, count: 0 })
  }

  return (
    <OrderContext.Provider
      value={{
        menu: MENU,
        cart: cart,
        totals: totals,
        addToCart: addToCart,
        modalIsVisible: modalIsVisible,
        toggleModal: toggleModal,
        clearCart: clearCart,
      }}>
      {props.children}
    </OrderContext.Provider>
  )
}
