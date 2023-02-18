import styles from "../styles/Service.module.scss";

export default function Service({ params }) {
  const { title, bgImg, text, link } = params
  return(
    <div className={styles.service}>
      <div className={styles.serviceContainer}>
      <div
        className={styles.front}
        style={{
          backgroundImage: `url(${bgImg.src})`,
        }}
      >
        <p>{title}</p>
      </div>
      <div
        className={styles.back}
      >
        <div className={styles.serviceContent}>
          <h3>{title}</h3>
          <p>{text}</p>
          <button>Scopri di più</button>
        </div>
      </div>
      </div>
    </div>
  )
}