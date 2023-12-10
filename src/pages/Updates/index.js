import { useState, useEffect } from "react";
import { PageLayout, Card, Accordion } from "../../components";
import styles from './Updates.module.css';

const Updates = () => {

    let [updates, setUpdates] = useState([]);
    const [releases, setReleases] = useState([]);
    const [accordionData, setAccordionData] = useState([]);
    const fetchUpdates = async () => {
        const response = await fetch('http://localhost:3001/api/updates');
        const res = await response.json();

        setUpdates(res);
    }


    /**
     * Fetch updates data
     */
    useEffect(() => {
        fetchUpdates();
    }, [])


    /**
     * On updatesData, set releases
     */
    useEffect(() => {
        setReleases(updates.releases);
    }, [updates])


    /**
     * On releases, set Accordion data
     */
    useEffect(() => {
        if(releases) {
            const updatedData = releases.map(release => {

                let result = {
                    title: null,
                    content: null
                }

                Object.keys(release).map(item => {
                    switch(item) {
                        case('version'):
                            result.title = release[item];
                            break;
                        case('release_notes'):
                            result.content = release[item][0].note;  
                            break;
                        default: break;                  
                    }
                })

                return result;
            })

            setAccordionData(updatedData);
        }

    }, [releases])

    return(
        <PageLayout title="Updates">
            {
                accordionData.length > 0 ? <Accordion items={ accordionData } /> : ''
            }
        </PageLayout>        
    )
}

export default Updates;