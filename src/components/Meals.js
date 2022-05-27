import React, { useState } from 'react'
import MealItem from './MealItem'
import styles from './Meals.module.css'

const Meals = ({ meals }) => {
  const [orderedMeals, setOrderedMeals] = useState(null)

  const addMenuItem = mealObj => {
    console.log(mealObj)
  }

  return (
    <div className={styles.wrapper}>
      <ul>
        {meals.map(meal => (
          <MealItem
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
          />
        ))}
      </ul>
    </div>
  )
}

export default Meals
