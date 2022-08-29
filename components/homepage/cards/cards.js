import styles from "./cards.module.css";
import Image from 'next/image';
import seguridad_img from '../../../public/assets/icons/seguridad.png';
import documentos_img from '../../../public/assets/icons/documentos.png';
import blockchain_img from '../../../public/assets/icons/blockchain.png';

export default function Cards() {
    return (
        <section className={styles.cards}>
            <div className={styles.content}>
                <div className={styles.cardsContainer}>
                    <div className={styles.card}>
                        <div className={styles.textContainer}>
                            <span className={styles.title}>Document Validation</span>
                            <span className={styles.description}>The existence record of a digital entity, a timestamp, and the signature of the creator is stored.<br />
                                                                This data is sent to the validator nodes that are part of the Blockchain in order to verify the existence of this gigital entity.<br />
                                                                Nowadays, there is a wide avaliability of information on the internet, however, the problem is that there is no way to ensure that the information shared is authetic.
                            </span>
                        </div>
                        <div className={styles.bottom}>
                            <div className={styles.imageContainer}>
                                <Image
                                    src={blockchain_img} 
                                    alt={"blockchain"}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.textContainer}>
                            <span className={styles.title}>Types of Documents</span>
                            <span className={styles.description}>The documents can be verified at any time. For these verifications, the transaction id or the document hash can be provided.
                                                                 Some types of documents that can be verified on this network are: identity document, driver license, birth certificate and death certificate.
                            </span>
                        </div>
                        <div className={styles.bottom}>
                            <div className={styles.imageContainer}>
                                <Image
                                    src={documentos_img} 
                                    alt={"documents"}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.textContainer}>
                            <span className={styles.title}>Security and Privacy</span>
                            <span className={styles.description}>The security and privacy of the data is guaranteed through the implementation of Proof of Existence consensus.<br />
                                                                This allows users to have access to reliable sources of information that could potentially work in public sectors (such as agencies and governments) in an automated way over time.
                            </span>
                        </div>
                        <div className={styles.bottom}>
                            <div className={styles.imageContainer}>
                                <Image
                                    src={seguridad_img} 
                                    alt={"security"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <button className={styles.button}>DOCUMENTATION ABOUT THE API</button>
            </div>
        </section>
    )
}