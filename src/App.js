import React, { useContext, useState, useEffect } from 'react'
import OrderContext from './store/order-context'
import MainHeader from './components/MainHeader'
import Banner from './components/Banner'
import Meals from './components/Meals'
import Cart from './components/Cart'
import styles from './App.module.css'

function App() {
  const [order, setOrder] = useState({
    menu: null,
    orderItems: null,
  })
  const ctx = useContext(OrderContext)

  return (
    <div className={styles.wrapper}>
      <MainHeader />
      <Banner />
      {ctx.menu && <Meals meals={ctx.menu} />}
      {ctx.cart.length > 0 && <Cart />}
    </div>
  )
}

export default App
