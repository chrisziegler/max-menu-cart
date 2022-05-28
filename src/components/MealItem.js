import React, { useState, useContext } from 'react'
import OrderContext from '../store/order-context'
import styles from './MealItem.module.css'

const MealItem = ({ name, description, price }) => {
  const [count, setCount] = useState(0)

  const ctx = useContext(OrderContext)

  const itemInputHandler = event => {
    const { value } = event.target
    const numVal = parseInt(value, 10)
    setCount(numVal)
    ctx.addToCart({ name: name, price: price, count: numVal })
  }

  const addHandler = event => {
    const { value } = event.target
    let numVal = parseInt(value, 10)
    setCount((numVal += 1))
    ctx.addToCart({ name: name, price: price, count: numVal })
  }

  return (
    <li>
      <div className="menu_item">
        <p className={styles.name}>{name}</p>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>${price.toFixed(2)}</p>
      </div>
      <div className={styles.add_item}>
        <label htmlFor="item_count" className={styles.amount}>
          Amount
          <input
            type="number"
            name={name}
            id="item_count"
            value={count}
            onChange={itemInputHandler}></input>
        </label>
        <button
          type="button"
          name={name}
          value={count}
          className={styles.button_add}
          onClick={addHandler}>
          + Add
        </button>
      </div>
    </li>
  )
}

export default MealItem
