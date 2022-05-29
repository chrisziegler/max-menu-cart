import React, { createContext, useState, useEffect } from 'react'

const OrderContext = createContext({
  menu: null,
  cart: null,
  totals: null,
  clearCart: () => {},
  addToCart: () => {},
  toggleModal: () => {},
})

const URL = 'http://localhost:3001/DUMMY_MEALS'

export const OrderContextProvider = props => {
  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        setMenu(data)
      })
  }, [])

  const [menu, setMenu] = useState()
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
    if (cart && cart.some(item => item.name === order.name)) {
      const filteredArr = cart.filter(
        item => item.name !== order.name,
      )
      const updatedArr = filteredArr.concat(order)
      setCart(updatedArr)
    } else {
      setCart(prevState => prevState.concat(order))
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
        menu: menu,
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

export default OrderContext
