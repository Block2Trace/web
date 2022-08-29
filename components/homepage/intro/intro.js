import styles from "./intro.module.css";
import cls from "classnames";
import { AiOutlineArrowDown } from "react-icons/ai";
import Image from "next/image";
import main from "../../../public/assets/main.png";

export default function Intro() {
    return (
        <section id="home" className={styles.intro}>
            <div className={styles.content}>
                <div className={styles.leftContainer}>
                    <span className={cls(styles.subtitle, styles.bottomSpace)}>EASY TRACEABILITY</span>
                    <span className={styles.title}>The Value<br/>of Trust</span>
                    <button className={cls(styles.button, styles.topSpace)}>DAPPS</button>
                    <span className={cls(styles.subtitle, styles.topSpace)}>Discover more</span>
                    <a href="#hyper" ><AiOutlineArrowDown className={styles.icon} /></a>
                </div>
                <div className={styles.rightContainer}>
                    <div className={styles.blockchainImage}>
                        <Image
                            alt=""
                            src={main}
                            layout="responsive"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}