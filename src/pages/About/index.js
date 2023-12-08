import { useState, useEffect } from 'react';
import { Card, PageLayout } from '../../components';

export default function About() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3001/api/info');
            const result = await response.json();
            setData(result); 
        }

        fetchData();
    }, []);

    return(
        <PageLayout title="About">
            <Card title="Created by">
                <p>Imagen Ltd.</p>
                <p>1 Grange Court</p>
                <p>Covent Garden, Willingham</p>
                <p>CB24 5AH</p>
                <p>Tel. +44 (0) 1954 2620000</p>
            </Card>
            <Card title="License information">
                {data.map(item => <p> <span>{ `${item.title}: ` }</span> { item.value } </p>)}
            </Card>
        </PageLayout>
  
    )
}