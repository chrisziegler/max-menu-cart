import React, { useState, useContext } from 'react'
import OrderContext from '../store/order-context'
import styles from './MealItem.module.css'

const MealItem = ({ name, description, price }) => {
  const [inputCount, setInputCount] = useState(1)

  const ctx = useContext(OrderContext)

  const inputHandler = event => {
    const { value } = event.target
    const numVal = parseInt(value, 10)
    setInputCount(numVal)
  }

  const addHandler = e => {
    e.preventDefault()
    if (inputCount > 0) {
      ctx.addToCart({ name: name, price: price, count: inputCount })
      setInputCount(1)
    }
  }

  return (
    <li className={styles.li}>
      <div className="menu_item">
        <p className={styles.name}>{name}</p>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>${price.toFixed(2)}</p>
      </div>
      <form className={styles.add_item} onSubmit={addHandler}>
        <label htmlFor="item_count" className={styles.amount}>
          Amount
          <input
            type="number"
            min="1"
            name={name}
            id="item_count"
            value={inputCount}
            onChange={inputHandler}></input>
        </label>
        <button
          type="submit"
          name={name}
          value={inputCount}
          className={styles.button_add}>
          + Add
        </button>
      </form>
    </li>
  )
}

export default MealItem
