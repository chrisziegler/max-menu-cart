import React, { useState } from 'react'
import styles from './MealItem.module.css'

const MealItem = ({ name, description, price, addToCart }) => {
  const [count, setCount] = useState(0)

  const itemInputHandler = event => {
    const { value } = event.target
    const { name } = event.target
    setCount(value)
    addToCart({ [name]: value })
  }

  const addHandler = event => {
    // doesn't have a value
    // should just update count so value is reflected in input
    setCount(prevState => {
      let countNum = parseInt(prevState, 10)
      return (countNum += 1)
    })
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
          className={styles.add_to_cart}
          onClick={addHandler}>
          + Add
        </button>
      </div>
    </li>
  )
}

export default MealItem
