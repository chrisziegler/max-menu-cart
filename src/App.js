import React, { useContext } from 'react'
import OrderContext from './store/order-context'
import Header from './components/UI/Header'
import Banner from './components/Banner'
import Meals from './components/Meals'
import CartModal from './components/UI/CartModal'
import styles from './App.module.css'

function App() {
  const ctx = useContext(OrderContext)

  return (
    <div className={styles.wrapper}>
      <Header />
      <Banner />
      {ctx.menu && <Meals meals={ctx.menu} />}
      {ctx.modalIsVisible > 0 && <CartModal />}
    </div>
  )
}

export default App
