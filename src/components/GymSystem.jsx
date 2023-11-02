import { useState } from "react"
import styles from "./gymSystem.module.css"
import AddItem from "./AddItem"
import Footer from "./Footer"
import ItemsList from "./ItemList"

const GymSystem = () => {
  const [items, setItem] = useState([])
  const [id, setId] = useState(1)
  const [typeOrder, setTypeOrder] = useState("recentlyAdded")
  const [concluded, setConcluded] = useState([])

  const handleAddItem = (item) => {
    setItem([...items, item])
    setId((id) => id + 1)
  }

  const checkedItem = (idItem, checkedThisItem) => {
    setItem(
      items.map((item) => {
        if (item.id === idItem) {
          return { ...item, checked: checkedThisItem }
        }
        return item
      }),
    )
  }
  const handleItemsChecked = () => {
    const guard = items.filter((item) => item.checked === true)
    setConcluded(guard)
  }

  const handleRemoveItem = (itemId) => {
    const checkedItems = items.filter((item) => item.id !== itemId)
    setItem(checkedItems)
  }
  const handleClearAll = () => setItem([])

  const handleAlphabeticOrder = () => {
    const AlphabeticList = [...items]
    setItem(
      AlphabeticList.sort((a, b) => {
        return a.gymItems.localeCompare(b.gymItems)
      }),
    )
  }
  const handleRecentlyAdded = () => {
    const recentItems = [...items]
    recentItems.sort((a, b) => {
      return b.id - a.id
    })
    setItem(recentItems)
  }
  const selectTypeOrder = (event) => {
    const selectedOrder = event.target.value
    if (selectedOrder === "alphabeticOrder") {
      handleAlphabeticOrder()
    } else if (selectedOrder === "itemsChecked") {
      handleItemsChecked()
    } else {
      handleRecentlyAdded()
    }
    setTypeOrder(selectedOrder)
  }

  return (
    <main>
      <div>
        <AddItem onAddItem={handleAddItem} id={id} />
        <div className={styles.mainContainer}>
          <ul className={styles.listItems}>
            {typeOrder === "recentlyAdded" && (
              <ItemsList
                list={items}
                onRemoveItem={handleRemoveItem}
                onCheckItem={checkedItem}
              />
            )}
            {typeOrder === "itemsChecked" && (
              <ItemsList
                list={concluded}
                onRemoveItem={handleRemoveItem}
                onCheckItem={checkedItem}
              />
            )}
            {typeOrder === "alphabeticOrder" && (
              <ItemsList
                list={items}
                onRemoveItem={handleRemoveItem}
                onCheckItem={checkedItem}
              />
            )}
          </ul>

          <div className={styles.settersButtons}>
            <select
              className={styles.typeOrder}
              value={typeOrder}
              onChange={selectTypeOrder}
            >
              <option value="alphabeticOrder">Ordem Alfabética</option>
              <option value="itemsChecked">Mostrar guardados</option>
              <option value="recentlyAdded">Ordenar Por mais recente</option>
            </select>
            <button className={styles.clearAll} onClick={handleClearAll}>
              Limpar lista
            </button>
          </div>
        </div>
        <Footer totalItems={items.length} totalConcluded={concluded.length} />
      </div>
    </main>
  )
}

export default GymSystem
