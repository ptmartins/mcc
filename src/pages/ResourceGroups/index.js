import { useState, useEffect } from 'react';
import { PageLayout, Card, Table } from "../../components";

const ResourceGroups = () => {

    const [groups, setGroups] = useState([]);
    const fetchGroups = async () => {
        const response = await fetch('http://localhost:3001/api/resourceGroups');
        const result = await response.json();

        setGroups(result.resourceGroups);
    }

    useEffect(() => {
        fetchGroups();
        console.log(groups);
    }, [])

    const columnsToShow = [
        {
            key: 'name',
            label: 'Application',
            width: '35%'
        },
        {
            key: 'storageService',
            label: 'StorageService',
            width: '65%'
        }
    ];

    return(
        <PageLayout title="Resource groups">   
            <Card>
                <Table data={ groups } columns={ columnsToShow }/>
            </Card>
        </PageLayout>
    )
}

export default ResourceGroups;