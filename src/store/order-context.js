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
        // return data
      })
  }, [])

  const [menu, setMenu] = useState()
  const [cart, setCart] = useState([])

  const addToCart = order => {
    if (cart && cart.find(item => item.name === order.name)) {
      const filteredArr = cart.filter(
        item => item.name !== order.name,
      )
      const updatedArr = filteredArr.concat(order)
      setCart(updatedArr)
    } else {
      setCart(cart.concat(order))
    }
  }

  // const addToCart = order => {
  //   const newCart = orderItems.concat(order)
  //   setOrderItems(newCart)
  // }

  // updateOrder = {sushi: 2}

  // const addToCart = order => {
  //   const orderKey = Object.keys(order)[0]
  //   const itemToUpdate = menuMap.find(item => item.name === orderKey)
  //   itemToUpdate.count = order[orderKey]
  //   console.log(itemToUpdate)
  //   setOrderItems(prevState => ({
  //     ...prevState,
  //     ...itemToUpdate,
  //   }))
  // }

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
