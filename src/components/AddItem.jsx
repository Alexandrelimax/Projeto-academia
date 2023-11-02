import styles from "./addItem.module.css"
import { useState } from "react"

const AddItem = ({ onAddItem, id }) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const [quantity, setQuantity] = useState(1)
  const [gymItem, setGymItem] = useState({})

  const handleSelectQuantity = (event) => {
    const chooseQuantity = Number(event.target.value)
    setQuantity(chooseQuantity)
  }
  const handleGymItem = (event) => {
    const { value } = event.target
    setGymItem((prev) => ({
      ...prev,
      id,
      gymItems: value,
      quantity,
      checked: false,
    }))
  }
  const submitItem = () => {
    onAddItem(gymItem)
  }

  return (
    <div className={styles.container}>
      <p>O que vc precisa guardar ?</p>
      <select
        className={styles.select}
        name="quantity"
        value={quantity}
        onChange={handleSelectQuantity}
      >
        {numbers.map((number, index) => (
          <option key={index} value={number}>
            {number}
          </option>
        ))}
      </select>
      <input
        type="text"
        name="gymItems"
        onChange={handleGymItem}
        placeholder="Manda aqui"
      />
      <button className={styles.addButton} onClick={submitItem}>
        Adicionar
      </button>
    </div>
  )
}

export default AddItem
