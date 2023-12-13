import { useState, useEffect } from 'react';
import { PageLayout, Card, Table } from "../../components";

const Applications = () => {

    const [apps, setApps] = useState([]);
    const fetchApps = async () => {
        const response = await fetch('https://mcc-dataserver.vercel.app/api/applications');
        const result = await response.json();

        setApps(result);
    };
    const actions = [
        {
            type: 'primary',
            label: 'Add Workflow Editor'
        }
    ];

    useEffect(() => {
        fetchApps();
    }, [])

    const columnsToShow = [
        {
            key: 'name',
            label: 'Application',
            width: '25%'
        },
        {
            key: 'id',
            label: 'Database ID',
            width: '25%'
        },
        {
            key: 'contact',
            label: 'Contact',
            width: '25%'
        },
        {
            key: 'created',
            label: 'Date created',
            width: '25%'
        }
    ];

    return(
        <PageLayout title="Applications" actions= { actions }>   
            <Card>
                <Table data={ apps } columns={ columnsToShow }/>
            </Card>
        </PageLayout>
    )
}

export default Applications;