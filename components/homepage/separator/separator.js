import styles from "./separator.module.css";
import cls from "classnames";

export default function Separator() {
    return (
        <section className={styles.separator}>
            <div className={styles.content}>
                <div className={cls(styles.img, styles.documents)}>
                    <div className={styles.shadow}></div>
                    <span>Documents</span>
                </div>
                <div className={cls(styles.img, styles.gold)}>
                    <div className={styles.shadow}></div>
                    <span>Gold</span>
                </div>
                <div className={cls(styles.img, styles.agricultural)}>
                    <div className={styles.shadow}></div>
                    <span>Agricultural</span>
                </div>
            </div>
        </section>
    )
}