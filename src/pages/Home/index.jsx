import { useState, useEffect } from 'react';
import { Card, PageLayout } from '../../components';

export default function Home() {

    const [data, setData] = useState([]);
    const fetchData = async () => {
        const response = await fetch('http://localhost:3001/api/general');
        const result = await response.json();
        setData(result); 

        // Just to prove it's polling the data every 10 secs
        console.log(result);
    }

    // Fetch data every 10 secs like our MCC
    useEffect(() => {
        fetchData();

        const dataInterval = setInterval(() => {
            fetchData();
        }, 10000)

        return () => clearInterval(dataInterval);
    }, []);

    return(
        <PageLayout title="Home">
            <div className={ `half_half` }>
                <Card title="Details">
                    <p>
                        <span>Version:</span>
                        <span>{ data.version }</span>
                    </p>
                    <p>
                        <span>Service running as user:</span>
                        <span>{ data.account }</span>
                    </p>
                    <p>
                        <span>Process up-time:</span>
                        <span>{ data.up_time }</span>
                    </p>
                    <p>
                        <span>System up-time:</span>
                        <span>{ data.server_up_time }</span>
                    </p>
                    <p>
                        <span>Memory usage:</span>
                        <span>{ data.memory_usage }</span>
                    </p>
                    <p>
                        <span>Databases:</span>
                        <span>{ data.databases }</span>
                    </p>
                    <p>
                        <span>Running SOLR instances:</span>
                        <span>{ data.solr_instance }</span>
                    </p>
                    <p>
                        <span>Database backup:</span>
                        <span>{ data.last_backup }</span>
                    </p>
                </Card>
                <Card title="Job counts">
                    <p>
                        <span>Processing:</span>
                        <span>{ data.processing }</span>
                    </p>
                    <p>
                        <span>Total completed:</span>
                        <span>{ data.completed }</span>
                    </p>
                    <p>
                        <span>Total failed:</span>
                        <span>{ data.failed }</span>
                    </p>
                    <p>
                        <span>Failed, retryable:</span>
                        <span>{ data.retryable_jobs }</span>
                    </p>
                </Card>
            </div>
            <div className={ `half_half` }>
                <Card title="Jobs completed in the last 12 hours">

                </Card>
                <Card title="Job failed in the last 12 hours">

                </Card>
            </div>
        </PageLayout>
    )
}