import React, { useContext } from 'react'
import OrderContext from './store/order-context'
import MainHeader from './components/MainHeader'
import Banner from './components/Banner'
import Meals from './components/Meals'
import styles from './App.module.css'

// const URL = 'http://localhost:3001/DUMMY_MEALS'
function App() {
  const ctx = useContext(OrderContext)
  // useEffect(() => {
  //   fetch(URL)
  //     .then(response => response.json())
  //     .then(data => setMeals(data))
  // }, [])

  // const [meals, setMeals] = useState()
  return (
    <div className={styles.wrapper}>
      <MainHeader />
      <Banner />
      {ctx.menu.length > 0 && <Meals meals={ctx.menu} />}
    </div>
  )
}

export default App
