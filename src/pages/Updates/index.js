import { useState, useEffect } from "react";
import { PageLayout, Card } from "../../components";

const Updates = () => {

    const [updates, setUpdates] = useState({});
    const [releases, setReleases] = useState([]);
    const fetchUpdates = async () => {
        const response = await fetch('http://localhost:3001/api/updates');
        const res = await response.json();

        console.log(res);
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
            {/* {releases.map(release => {
                return(
                    <Card>
                        <h4>{ release }</h4>
                    </Card>    
                )
            })} */}
        </PageLayout>        
    )
}

export default Updates;