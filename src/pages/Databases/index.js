import { useEffect, useState } from 'react';
import { PageLayout, Card, Table } from '../../components';
import styles from './Databases.module.css';

const Databases = () => {

    const [databases, setDatabases] = useState([]);
    const fetchDBData = async () => {
        const response = await fetch('https://mcc-dataserver.vercel.app/databases');
        const result = await response.json();

        if(result) {
            setDatabases(result);
        }
    }

    useEffect(() => {
        fetchDBData();
    },[]);

    const columnsToShow = [
        {
            key: 'id',
            label: 'ID',
            width: '50px'
        },
        {
            key: 'name',
            label: 'Name',
            width: '100%'
        },
        {
            key: 'type',
            label: 'Type',
            width: '200px'
        },
        {
            key: 'solr_status',
            label: 'SOLR',
            width: '160px'
        }
    ];

    return(
        <PageLayout title="Databases">
            <Card>
                <Table data={ databases } columns={ columnsToShow } />
            </Card>
        </PageLayout>
    )
}

export default Databases;