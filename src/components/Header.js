import React, { useContext } from 'react'
import OrderContext from '../store/order-context'
import styles from './Header.module.css'
import { FaShoppingCart } from 'react-icons/fa'

const Header = () => {
  const ctx = useContext(OrderContext)

  return (
    <div className={styles.wrapper}>
      <div className={styles.brand}>ReactMeals</div>
      <span></span>
      <div className={styles.checkout} onClick={ctx.toggleModal}>
        <div>
          <FaShoppingCart />
        </div>
        <div>Your Cart</div>
        <div className={styles.item_count}>{ctx.totals.count}</div>
      </div>
    </div>
  )
}

export default Header
