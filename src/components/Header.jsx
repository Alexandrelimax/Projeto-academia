import styles from "./header.module.css"
const Header = () => {
  return (
    <div className={styles.containerHeader}>
      <div className={styles.logo}>
        <img src="./imgs/logo-espaco-mulher.png" alt="" />
      </div>
      <h1>Espaço Mulher</h1>
    </div>
  )
}

export default Header
