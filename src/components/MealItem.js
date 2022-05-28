import React, { useState, useContext } from 'react'
import OrderContext from '../store/order-context'
import styles from './MealItem.module.css'

const MealItem = ({ name, description, price }) => {
  const [inputCount, setInputCount] = useState(0)

  const ctx = useContext(OrderContext)

  const inputHandler = event => {
    const { value } = event.target
    const numVal = parseInt(value, 10)
    setInputCount(numVal)
  }

  const addHandler = () => {
    if (inputCount > 0) {
      ctx.addToCart({ name: name, price: price, count: inputCount })
    }
  }

  return (
    <li className={styles.li}>
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
            value={inputCount}
            onChange={inputHandler}></input>
        </label>
        <button
          type="button"
          name={name}
          value={inputCount}
          className={styles.button_add}
          onClick={addHandler}>
          + Add
        </button>
      </div>
    </li>
  )
}

export default MealItem
