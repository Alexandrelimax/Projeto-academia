import styles from "./footer.module.css"

const Footer = ({ totalItems, totalConcluded }) => {
  return (
    <div className={styles.containerFooter}>
      {totalItems === 0 ? (
        <p>Você tem {totalItems} na lista</p>
      ) : (
        <p>
          Você tem {totalItems} itens na lista e já guardou {totalConcluded}
        </p>
      )}
    </div>
  )
}

export default Footer
