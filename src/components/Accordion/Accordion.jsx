import {useState} from 'react';
import styles from './Accordion.module.css';

const Accordion = ({items}) => {

    const [activeIndex, setActiveIndex] = useState(null);
    const onItemClick = (index) => {
      setActiveIndex(index === activeIndex ? null : index);
    };

    return(
        <div className={styles.accordion}>
            {items.map((item, index) => (
                <div key={index} className={styles.accordion_item}>
                    <div className={activeIndex === index ? `${styles.accordion_title} ${styles.active}` : `${styles.accordion_title}`}
                    onClick={() => onItemClick(index)}
                    >
                        {item.title}
                    </div>
                    <div className={styles.accordion_content}>
                        <p>{item.content}</p>
                    </div>

                </div>
            ))}
        </div>    
    )
}

export default Accordion;