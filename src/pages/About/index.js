import { useState, useEffect } from 'react';
import { Card, PageLayout } from '../../components';
import { v4 as uuid } from 'uuid';
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import styles from './About.module.css';

export default function About() {

    const [info, setInfo] = useState([]);
    const [plugins, setPlugins] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3001/api/info');
            const result = await response.json();
            setInfo(result); 
        }

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3001/api/plugins');
            const result = await response.json();
            if(result) {
                setPlugins(result); 
            }
        }

        fetchData();
    }, []);

    return(
        <PageLayout title="About">
            <div className={ `half_half` }>
                <Card title="Created by">
                    <div className={ styles.address }>
                        <FaLocationDot className={ styles.icon } />
                        <div className="">
                            <p>Imagen Ltd.</p>
                            <p>1 Grange Court</p>
                            <p>Covent Garden, Willingham</p>
                            <p>CB24 5AH</p>
                        </div>
                    </div>
                    <div className={ styles.phone }>
                        <FaPhone className={ styles.icon } />
                        <span>+44 (0) 1954 2620000</span>
                    </div>
                </Card>
                <Card title="License information">
                    {info.map(item => <p key={ uuid() }> <span>{ `${item.title}: ` }</span> { item.value } </p>)}
                </Card>
            </div>
            <div className={ `half_half` }>
                <Card title="Plugins" className={ styles.plugins }>
                    { plugins.map(plugin => {
                        return(
                            <p className={ styles.plugin }> { plugin.title } <span className={ styles.version }> { plugin.version } </span> </p>    
                        )
                    }) }
                </Card>
            </div>
        </PageLayout>
    )
}