import Button from '../Button';
import styles from './Subscribe.module.scss';

export default function Subscribe(){

    const handleSubmite = (e) => {
        e.preventDefault();
        alert('You subscribe!')
    }

    return(
            <form onSubmit={handleSubmite} className={styles.subscribeForm}>
                <h5>Subscribe Our News Letter</h5>
                <p>Sure, please provide your email address to subscribe to newsletter</p>
                <div className={styles.subscribe}>
                    <input className='input-subscribe' placeholder='Enter your mail...'/>
                    <Button 
                        className = 'aquaButton aquaButton-meduim'
                    >  
                        Subscribe
                    </Button>
                </div>
                </form>
    );
}

