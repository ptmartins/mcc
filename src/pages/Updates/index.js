import { useState, useEffect } from "react";
import { PageLayout, Card } from "../../components";
import styles from './Updates.module.css';

const Updates = () => {

    let [updates, setUpdates] = useState([]);
    const [releases, setReleases] = useState([]);
    const fetchUpdates = async () => {
        const response = await fetch('http://localhost:3001/api/updates');
        const res = await response.json();

        setUpdates(res);
    }

    useEffect(() => {
        fetchUpdates();
    }, [])

    useEffect(() => {
        setReleases(updates.releases);
    }, [updates])

    return(
        <PageLayout title="Updates">
            {releases ? 
                releases.map((release, index) => {
                    return(
                        <Card key={ index }>
                            <h4 className={ styles.update__version }> {release.version} </h4>
                            <span className={ styles.update__date }> {release.releaseDate} </span>
                            <div className="">
                                { release.release_notes[0].note.split('\n\n\n').map((paragraph, index) => {
                                        return(
                                            <p className={ styles.update__note }> { paragraph } </p>    
                                        )
                                    })  
                                }
                            </div>
                        </Card>    
                    )
                }) :
                ''
            }
        </PageLayout>        
    )
}

export default Updates;