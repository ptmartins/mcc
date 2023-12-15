import { useState, useEffect } from 'react';
import { Card, PageLayout, KeyValue } from '../../components';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { fileSizeConvert, formatTimeStamp } from '../../utils';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);    

const setTimeLabels = (count, hoursInterval) => {
    const now = new Date().getTime();
    const interval = ((hoursInterval * 60) / count) * 60 * 1000;
    let labels = [];

    let res = now;

    for(let i = count; i > 0; i--) {
        res -= interval;
        labels.push(new Date(res));
    }

    labels = labels.map(label => label.toLocaleTimeString());

    return labels;
}

export default function Home() {

    const [data, setData] = useState([]);
    const [labels, setLabels] = useState([]);
    const [chartData, setChartData] = useState({});
    const chartOptions = {
        responsive: true
    };

    /**
     * Fetch data 
     */
    const fetchData = async () => {
        const response = await fetch('https://mcc-dataserver.vercel.app/api/general');  
        const result = await response.json();
        setData(result); 

        // Just to prove it's polling the data every 10 secs
        console.log(result);
    };

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
                    <KeyValue label="Version: " value={ data.version } />
                    <KeyValue label="Service running as user: " value={ data.account } />
                    <KeyValue label="Process up-time: " value={ formatTimeStamp(data.up_time) } />
                    <KeyValue label="System up-time: " value={ formatTimeStamp(data.server_up_time) } />
                    <KeyValue label="Memory usage: " value={ fileSizeConvert(data.memory_usage, undefined, ' ') } />
                    <KeyValue label="Databases: " value={ data.databases } />
                    <KeyValue label="Running SOLR instances: " value={ data.solr_instance } />
                    <KeyValue label="Database backup: " value={ formatTimeStamp(data.last_backup) } /> 
                </Card>
                <Card title="Job counts">
                    <KeyValue label="Processing: " value={ data.processing } />
                    <KeyValue label="Total completed: " value={ data.completed } />
                    <KeyValue label="Total failed: " value={ data.failed } />
                    <KeyValue label="Failed, retryable: " value={ data.retryable_jobs } />
                </Card>
            </div>
            <div className={ `half_half` }>
                <Card title="Jobs completed in the last 12 hours">
                   {/* <Line options={ chartOptions } data= { chartData } /> */}
                </Card>
                <Card title="Jobs failed in the last 12 hours">

                </Card>
            </div>
        </PageLayout>
    )
}