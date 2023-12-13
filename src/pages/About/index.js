import { useState, useEffect } from 'react';
import { Card, PageLayout, KeyValue } from '../../components';
import { v4 as uuid } from 'uuid';
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import styles from './About.module.css';

export default function About() {

    const [info, setInfo] = useState([]);
    const [license, setLicense] = useState({});
    const [plugins, setPlugins] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://mcc-dataserver.vercel.app/api/info');
            const result = await response.json();
            setInfo(result); 
        }

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://mcc-dataserver.vercel.app/api/license');
            const result = await response.json();

            if(result) {
                setLicense(result); 
                setPlugins(result.plugins);
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
                    {info.map(item => <KeyValue key={ uuid() } label={item.title} value={ item.value } />)}
                </Card>
            </div>
            <div className={ `half_half` }>
                <Card title="Plugins" className={ styles.plugins }>
                    {   plugins.map(plugin => {
                            return(
                                <KeyValue key={ uuid() } label={ plugin.title } value={ plugin.version } />
                            )
                        }) 
                    }
                    { console.log(license) }
                </Card>
            </div>
        </PageLayout>
    )
}