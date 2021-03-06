import React, { useState, useContext, useEffect } from 'react'
import OrderContext from '../store/OrderContext'
import styles from './MealItem.module.css'

const MealItem = ({ name, description, price, id }) => {
  const [inputCount, setInputCount] = useState(1)
  const [countInCart, setCountInCart] = useState(0)

  const ctx = useContext(OrderContext)

  useEffect(() => {
    ctx.cart.map(item => {
      if (item.name === name) {
        setCountInCart(item.count)
      }
      return null
    })
    if (ctx.cart.length === 0) {
      setCountInCart(0)
    }
  }, [ctx.cart, name])

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
        <div className={styles.count_wrapper}>
          <p className={styles.price}>${price.toFixed(2)}</p>
          {countInCart > 0 && (
            <span className={styles.order_count}>x{countInCart}</span>
          )}
        </div>
      </div>
      <form className={styles.add_item} onSubmit={addHandler}>
        <label className={styles.amount}>
          Amount
          <input
            type="number"
            min="1"
            name={name}
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
