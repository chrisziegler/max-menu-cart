import React from 'react'
import styles from './MainHeader.module.css'
import { FaShoppingCart } from 'react-icons/fa'

const MainHeader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.brand}>ReactMeals</div>
      <span></span>
      <div className={styles.checkout}>
        <div>
          <FaShoppingCart />
        </div>
        <div>Your Cart</div>
        <div className={styles.item_count}>0</div>
      </div>
    </div>
  )
}

export default MainHeader
