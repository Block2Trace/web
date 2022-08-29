import styles from "./features.module.css";
import ethCompatible_img from '../../../public/assets/icons/compatibilidad.png';
import escalabilidad_img from '../../../public/assets/icons/escalabilidad.png';
import seguridad_img from '../../../public/assets/icons/seguridad.png';
import ecofriendly_img from '../../../public/assets/icons/ambiental.png';
import velocidad_img from '../../../public/assets/icons/velocidad.png';
import gasRate_img from '../../../public/assets/icons/menor.png';
import privacidad_img from '../../../public/assets/icons/privacidad.png';
import transparencia_img from '../../../public/assets/icons/transparencia.png';
import FeatureBox from "../../featureBox/featureBox";


export default function Features() {
    return (
        <section className={styles.features}>
            <div className={styles.content}>
                <span className={styles.title}>Why Block2Trace?</span>
                <div className={styles.subtitleContainer}>
                    <span className={styles.subtitle}>This system has the best qualities of Ethereum and sovereign blockchains, in 
                                                    such a way that it provides a unique and efficient product for users.
                    </span>
                </div>
                <div className={styles.featuresTopContainer}>
                    <div className={styles.featuresContainer}>
                        <FeatureBox img={ethCompatible_img}
                                    title="EVM Compatibility"
                                    text="Contracts deployed in the Ethereum Virtual Machine through Solidity."
                                    alt="evm-compatibility"
                        />
                        <FeatureBox img={escalabilidad_img}
                                    title="Scalability"
                                    text="Blockchains and scalable consensus algorithms implementations."
                                    alt="scalability"
                        />
                        <FeatureBox img={seguridad_img}
                                    title="Security"
                                    text="Validating nodes are in charge of verifying that the deployed transactions are not malicious."
                                    alt="security"
                        />
                        <FeatureBox img={ecofriendly_img}
                                    title="Eco-friendly"
                                    text="PoA consensus implementation, which doesn't require high energy demands, as occurs with the PoW consensus."
                                    alt="eco-friendly"
                        />
                    </div>
                    <div className={styles.featuresContainer}>
                        <FeatureBox img={velocidad_img}
                                    title="Velocity"
                                    text="The average waiting time in which a transaction is deployed within the network is 96% faster than the Ethereum mainnet."
                                    alt="velocity"
                        />
                        <FeatureBox img={gasRate_img}
                                    title="Low Gas-Rate"
                                    text="The cost to deploy transactions within the network are relatively low compared to Ethereum's mainnet."
                                    alt="gas-rate"
                        />
                        <FeatureBox img={privacidad_img}
                                    title="Privacy"
                                    text="The documents are identified by their hash coda, which allows their content to remain confidential."
                                    alt="privacy"
                        />
                        <FeatureBox img={transparencia_img}
                                    title="Transparency"
                                    text="The processes deployed within the network are transparent. This benefits the user because there is no dependency of third parties for transaction's deployment."
                                    alt="transparency"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}