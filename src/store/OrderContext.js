import { createContext } from 'react'

const OrderContext = createContext({
  menu: null,
  cart: null,
  totals: null,
  clearCart: () => {},
  addToCart: () => {},
  toggleModal: () => {},
})

export default OrderContext
