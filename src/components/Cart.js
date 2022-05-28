import React, { useContext } from 'react'
import OrderContext from '../store/order-context'
import styles from './Cart.module.css'

const Cart = () => {
  const ctx = useContext(OrderContext)
  return (
    <ul className={styles.wrapper}>
      {ctx.cart.map(({ name, price, count }) => (
        <li key={name} className={styles.cart_item}>
          <div className={styles.order_left}>
            <div className={styles.order_name}>{name}</div>
            <div className={styles.order_price}>
              ${price.toFixed(2)}
            </div>
            <div className={styles.order_count}>
              <div>x{count}</div>
            </div>
          </div>
          <div className={styles.order_right}>
            <button className={styles.button_minus}>&ndash;</button>
            <button className={styles.button_plus}>+</button>
          </div>
        </li>
      ))}
      <div className={styles.controller}>
        <button type="button" className={styles.button_close}>
          Close
        </button>
        <button type="button" className={styles.button_order}>
          Order
        </button>
      </div>
    </ul>
  )
}

export default Cart
