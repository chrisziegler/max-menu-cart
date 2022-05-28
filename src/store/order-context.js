import React, { createContext, useState, useEffect } from 'react'

const OrderContext = createContext({
  menu: null,
  cart: null,
  addToCart: () => {},
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

  const addToCart = order => {
    if (cart && cart.some(item => item.name === order.name)) {
      const filteredArr = cart.filter(
        item => item.name !== order.name,
      )
      const updatedArr = filteredArr.concat(order)
      setCart(updatedArr)
    } else {
      setCart(cart.concat(order))
    }
  }

  return (
    <OrderContext.Provider
      value={{
        menu: menu,
        cart: cart,
        addToCart: addToCart,
      }}>
      {props.children}
    </OrderContext.Provider>
  )
}

export default OrderContext
