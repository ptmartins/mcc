import {useState, useEffect} from 'react';
import styles from './TabMenu.module.css';

const TabMenu = ({items}) => {
    const [activeTab, setActiveTab] = useState(0);
    const [sliderStyles, setSliderStyles] = useState({});

    useEffect(() => {
        const firstItem = document.querySelector(`.${styles.tab_button}:first-child`);
        const firstItemRect = firstItem.getBoundingClientRect();
        if (firstItem) {
            setSliderStyles({
            width: `${firstItemRect.width}px`,
            transform: `translateX(0))`,
            });
        }
      }, []);
    
      const handleTabClick = (index, event) => {
        const firstItem = document.querySelector(`.${styles.tab_button}:first-child`);
        const takeAway = firstItem.getBoundingClientRect().left;
        const item = event.currentTarget;
        const itemRect = item.getBoundingClientRect();
        const result = itemRect.left - takeAway;
    
        setActiveTab(index);
        setSliderStyles({
          width: `${itemRect.width}px`,
          transform: `translateX(${result}px)`,
        });
      };

    return (
        <div className={styles.tabbed_menu}>
            <div className={styles.tab_buttons}>
                {items.map((tab, index) => (
                    <button key={index}
                            onClick={ev => handleTabClick(index, ev)}
                            className={index === activeTab ? `${styles.tab_button} ${styles.active}` : `${styles.tab_button}`}
                    >
                        {tab.title}
                    </button>
                ))}
                <span className={styles.slider} style={sliderStyles}></span>
            </div>
            <div className={styles.tab_content}>
                {items[activeTab].content}
            </div>
        </div>
    );
}

export default TabMenu;