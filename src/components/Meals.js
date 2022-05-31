import React, { useState } from 'react'
import MealItem from './MealItem'
import styles from './Meals.module.css'

const Meals = ({ meals }) => {
  const [inputCount, setInputCount] = useState(0)
  const changeCount = num => {
    setInputCount(num)
  }

  const menu = meals.map(meal => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      inputCount={inputCount}
      changeCount={changeCount}
    />
  ))

  return (
    <div className={styles.wrapper}>
      <ul>{menu}</ul>
    </div>
  )
}

export default Meals
