import React, { createContext, useState, useEffect } from 'react'

const OrderContext = createContext({
  menu: null,
})

const URL = 'http://localhost:3001/DUMMY_MEALS'

export const OrderContextProvider = props => {
  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(data => setMenu(data))
  }, [])

  const [menu, setMenu] = useState()
  // const [orderItems, setOrderItems] = useState([])

  // const addToCart = order => {
  //   const newCart = orderItems.concat(order)
  //   setOrderItems(newCart)
  // }

  return (
    <OrderContext.Provider
      value={{
        menu: menu,
      }}>
      {props.children}
    </OrderContext.Provider>
  )
}

export default OrderContext
