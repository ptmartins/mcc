import { useState, useEffect } from 'react';
import { Card, PageLayout, TabMenu, Table} from '../../components';

export default function Logs() {

    const [tabs, setTabs] = useState({});
    const fetchTabs = async () => {
        const response = await fetch('http://localhost:3001/api/tabs');
        const result = await response.json();

        setTabs(result);
    };

    useEffect(() => {
        fetchTabs();
    }, []);

    return(
        <PageLayout title="Logs">
            <Card>
            </Card>
        </PageLayout>
  
    )
}