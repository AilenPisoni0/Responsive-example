import styles from "../styles/CssModulesExample.module.css";

export default function CssModulesExample() {
  return (
    <section>
      <h2>CSS Modules</h2>
      <div className={styles.card}>Soy un div con estilos aislados</div>
      <div className={styles.card2}>Soy otro div con estilos aislados</div>
    </section>
  );
}
