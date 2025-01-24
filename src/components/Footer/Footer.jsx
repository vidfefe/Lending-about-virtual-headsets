import Links from './../Links/Links';

import styles from './Footer.module.scss';


export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.container}>
                <Links />
                <div className={styles.companyName}>
                    <p>© 2024 Your Company Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
        
    );
}

