import FeatureList from './../FeatureList'

import styles from './Features.module.scss'

import glassesImg from '../../img/glasses.svg'


export default function Features(){
    return(
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <div className={styles.glassesImg}>
                    <img src={glassesImg} alt='Glasses'/>
                </div>
            </div>
            <div className={styles.rightSide}>
                <h2>Our Virtual Headsets Shine with Unique Features!</h2>
                <FeatureList
                    className = {styles.featureList}
                />
            </div>
        </div>
    );
}


