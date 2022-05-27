import React, { useContext } from 'react'
import OrderContext from './store/order-context'
import MainHeader from './components/MainHeader'
import Banner from './components/Banner'
import Meals from './components/Meals'
import styles from './App.module.css'

function App() {
  const ctx = useContext(OrderContext)

  return (
    <div className={styles.wrapper}>
      <MainHeader />
      <Banner />
      {ctx.menu && <Meals meals={ctx.menu} />}
    </div>
  )
}

export default App
