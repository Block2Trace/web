import Image from 'next/image';
import styles from'./featureBox.module.css';

const FeatureBox = ({img, alt, title, text}) => {
    return (
        <div className={styles.box}>
            <div className={styles.feature}>
                <Image
                    src={img} 
                    alt={alt}
                    layout="responsive"
                />
            </div>
            <p className={styles.featureTitle}>{title}</p>
            <p className={styles.featureText}>{text}</p>
        </div>
    )
}

export default FeatureBox;