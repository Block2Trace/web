import styles from "./header.module.css";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import cls from "classnames";

export default function Header() {

    const [headerBackground, setHeaderBackground] = useState(false);
    const [sidebar, setSidebar] = useState(false);

    const handleClick = () => {
        setSidebar(current => !current);
    }

    const changeBackground = () => {
        if ( window.scrollY >= 100 ) {
            setHeaderBackground(true);
        } else {
            setHeaderBackground(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeBackground);
    }, [])

    return (
        <section className={headerBackground ? cls(styles.header, styles.headerBg) : styles.header}>
            <div className={styles.logoContainer}>
                <span>LOGO</span>
            </div>
            <div className={sidebar ? cls(styles.navbarContainer, styles.active) : styles.navbarContainer}>
                <ul>
                    <li>
                        <a href="#home">
                            <div className={styles.navbarItem}>
                                <span>Home</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <div className={styles.navbarItem}>
                            <span>Docs</span>
                        </div>
                    </li>
                    <li>
                        <div className={styles.navbarItem}>
                            <span>DApps</span>
                        </div>
                    </li>
                    <li>
                        <div className={styles.navbarItem}>
                            <span>Community</span>
                        </div>
                    </li>
                    <li>
                        <a href="#nodes">
                            <div className={styles.navbarItem}>
                                <span>Nodes</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#about">
                            <div className={styles.navbarItem}>
                                <span>About</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            {
                sidebar
                ?
                <AiOutlineClose className={styles.icon} onClick={handleClick} />
                :
                <FiMenu className={styles.icon} onClick={handleClick} />
            }
        </section>
    )
}