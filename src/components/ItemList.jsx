import styles from "./itemList.module.css"

const ItemsList = ({ list, onRemoveItem, onCheckItem }) => {
  return (
    <>
      {list.length > 0 &&
        list.map(({ id, gymItems, quantity, checked }) => (
          <li key={id}>
            <input
              className={styles.checkbox}
              type="checkbox"
              checked={checked}
              onChange={(e) => {
                onCheckItem(id, e.target.checked)
              }}
            />
            <span>
              {quantity} {gymItems}
            </span>
            <button
              className={styles.buttonDelete}
              onClick={() => onRemoveItem(id)}
            >
              Remover
            </button>
          </li>
        ))}
    </>
  )
}

export default ItemsList
