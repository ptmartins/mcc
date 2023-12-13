import { useState, useEffect } from 'react';
import { Card, PageLayout, TabMenu, Table} from '../../components';
import { tab } from '@testing-library/user-event/dist/tab';

export default function Logs() {

    const [data, setData] = useState({});
    const fetchData = async () => {
        const response = await fetch('https://mcc-dataserver.vercel.app/api/tabs');
        const result = await response.json();

        setData(result);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return(
        <PageLayout title="Logs">
            <Card>

            </Card>
        </PageLayout>
  
    )
}