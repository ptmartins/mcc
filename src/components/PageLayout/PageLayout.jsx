import Button from '../Button/Button';
import styles from './PageLayout.module.css';

const PageLayout = ({ title, actions, children }) => {
    return(

        <>
            <div className={ styles.header }>
                <h2 className={ styles.title }> {title} </h2>
                { 
                    actions && 
                        actions.map(item => <Button type={ item.type ?? ''}> { item.label } </Button> )
                }
            </div>

            { children }
        </>

    ) 
}

export default PageLayout;