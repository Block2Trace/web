import styles from "./footer.module.css";
import { GrInstagram } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <hr />
                <div className={styles.logoContainer}>
                    <GrInstagram className={styles.icon} />
                    <BsFacebook className={styles.icon} />
                </div>
                <div className={styles.privacyContainer}>
                    <span>Block2Trace Privacy policy. Terms of Use</span>
                    <span>All Rights Reserved</span>
                </div>
            </div>
        </footer>
    )
}