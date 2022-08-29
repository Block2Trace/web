import styles from "./hyper.module.css";
import Image from "next/image";
import hyperImage from "../../../public/assets/hyperledger.png";

export default function Hyper() {
    return (
        <section id="hyper" className={styles.hyperledger}>
            <div className={styles.content}>
                <div className={styles.left}>
                    <span className={styles.title}>Technology based on</span>
                    <div className={styles.image}>
                        <Image 
                            alt="HyperledgerBesu" 
                            src={hyperImage}
                            layout="responsive" 
                        />
                    </div>
                </div>
                <div className={styles.right}>
                    <span>Hyperledger Besu is a framework mounted on the Ethereum mainnet, whose objective
                          is to solve some problems presented in current blockhcains, such as managing the
                          cost of each transaction and gaps in the network security.
                          <br />
                          <br />
                          This framework allows the implementation of IBFT 2.0 consensus, which has a robust
                          system against cyber attacks from malicious nodes, spam nodes and concurrent blocks.
                    </span>
                </div>
            </div>
        </section>
    )
}