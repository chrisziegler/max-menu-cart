import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import OrderContext from '../../store/order-context'
import styles from './CartModal.module.css'

const Backdrop = () => <div className={styles.container}></div>

const ModalOverlay = () => {
  const ctx = useContext(OrderContext)
  let cartCopy = [...ctx.cart]

  const handleAddToOrder = (name, price, count) => {
    ctx.addToCart({ name: name, price: price, count: (count += 1) })
  }

  const handleSubtractFromOrder = (name, price, count) => {
    ctx.addToCart({ name: name, price: price, count: (count -= 1) })
  }

  const handleOrder = total => {
    console.log(
      `Thanks, your order for $${total.toFixed(
        2,
      )} will be ready in 30 minutes.`,
    )
    ctx.toggleModal()
    ctx.clearCart()
  }

  if (ctx.totals.count === 0) {
    return (
      <>
        <div
          className={styles.backdrop}
          onClick={ctx.toggleModal}></div>
        <div className={`${styles.container} ${styles.empty_cart}`}>
          <p>
            Your cart is empty. Please select 1 or more items to add
            to the cart!
          </p>
          <div className={styles.controller}>
            <button type="button" className={styles.button_close}>
              Close
            </button>
            <button type="button" className={styles.button_order}>
              Order
            </button>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      <div
        className={styles.backdrop}
        onClick={ctx.toggleModal}></div>
      <ul className={styles.container}>
        {cartCopy
          .sort((a, b) =>
            a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1,
          )
          .map(({ name, price, count }) => (
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
                <button
                  className={styles.button_minus}
                  onClick={() =>
                    handleSubtractFromOrder(name, price, count)
                  }>
                  &ndash;
                </button>
                <button
                  className={styles.button_plus}
                  onClick={() =>
                    handleAddToOrder(name, price, count)
                  }>
                  +
                </button>
              </div>
            </li>
          ))}
        <div className={styles.controller}>
          <div className={styles.controller_top}>
            <div>Total Amount</div>
            <div>${ctx.totals.amount.toFixed(2)}</div>
          </div>
          <div className={styles.controller_bottom}>
            <button
              type="button"
              className={styles.button_close}
              onClick={ctx.toggleModal}>
              Close
            </button>
            <button
              type="button"
              className={styles.button_order}
              onClick={() => handleOrder(ctx.totals.amount)}>
              Order
            </button>
          </div>
        </div>
      </ul>
    </>
  )
}

const CartModal = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById('backdrop-root'),
      )}
      {ReactDOM.createPortal(
        <ModalOverlay />,
        document.getElementById('overlay-root'),
      )}
    </>
  )
}

export default CartModal
