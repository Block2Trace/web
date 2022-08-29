import styles from "./about.module.css";
import Image from "next/image";
import main2 from "../../../public/assets/main2.png";

export default function About() {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.content}>
                <span className={styles.title}>About</span>
                <div className={styles.item}>
                    <span className={styles.subtitle}>The new internet</span>
                    <span className={styles.description}>Today's internet is moving towards the development of the web 3.0 technologies, but, what exacstly is web 3.0?<br/>
                                                         Initially there was a web 1.0 in which information was only displayed as text on the internet, without any interaction.
                                                         The came web 2.0, where new technologies were developed to create dynamic and interactive websites for users. Some
                                                         examples of web 2.0 applications would be a social network, a web game, among others.<br/>
                                                         Web 3.0 is the pinnacle of web development today, since it has technologies related to the Blockchain, whose purpose
                                                         is to securely guarantee the existence of immutable data.
                    </span>
                </div>
                <div className={styles.item}>
                    <span className={styles.subtitle}>What is the Blockchain?</span>
                    <span className={styles.description}>Is a type of network in which data can be stored permanently in a chain of blocks, guaranteeing its immutability
                                                         through the participating nodes of the network. Block2Trace implements Blockchain technologies (through HyperledgerBesu)
                                                         to offer a unique and secure network for its users.
                    </span>
                </div>
                <div className={styles.item}>
                    <span className={styles.subtitle}>HyerledgerBesu</span>
                    <span className={styles.description}>It is a software that allows you to create Blockchain networks based on Ethereum (the main network of web 3.0),
                                                         whether public or private.
                    </span>
                </div>
                <div className={styles.item}>
                    <span className={styles.subtitle}>Block2Trace security</span>
                    <span className={styles.description}>Our system implements a private network where one of its advantages is the pre-authentication of nodes, which allows
                                                         the use of consensuses that have a high transaction rate (certain activities such as uploading documents to the network
                                                         are called transactions). In addution, it allows restricting the entities that can participate in the network, thus 
                                                         increasing its security. 
                    </span>
                </div>
                <div className={styles.item}>
                    <span className={styles.subtitle}>Differences between a Database and Block2Trace</span>
                    <span className={styles.description}>The most important difference between a database and Block2Trace is Immutability. The immutbility of a chain of blocks
                                                         corroborates that the data that has been entered into the network has not been altered or corrupted in any way. In
                                                         this way, the trust of consumers is gained and a differentiating attribute is acquired compared to other companies that do not
                                                         implement a secure data storage system.

                    </span>
                </div>
                <div className={styles.item}>
                    <span className={styles.subtitle}>Why would I want immutability on my data?</span>
                    <span className={styles.description}>Let's say that you have a highly important document, the lime confirms that you are the owner of a valuable entity. Physical
                                                         environments are not very reliable, and digital environments (such as databases) could represent a higher level of security,
                                                         however these environments are very suceptible to loss or alteration of information, either by mistake, natural wear,
                                                         overwriting, theft or cyber attacks.
                                                         Once this data has been lost or altered, you no longer have the right to claim owenership of such valuable entity. With this, 
                                                         another individual could claim ownership of your valuable entity by falsifying a document.
                    </span>
                </div>
                <div className={styles.imageAll}>
                    <div className={styles.imageContainer}>
                        <Image
                            alt=""
                            src={main2}
                            layout="responsive"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}