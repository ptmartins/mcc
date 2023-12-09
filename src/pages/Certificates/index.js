import { useState, useEffect } from 'react';
import { PageLayout, Card, Table } from "../../components";

const Certificates = () => {

    const [certificates, setCertificates] = useState([]);
    const [localCerts, setLocalCerts] = useState([]);
    const fetchCertificates = async () => {
        const certsResponse = await fetch('http://localhost:3001/api/certificates');
        const localCertsResponse = await fetch('http://localhost:3001/api/localCertificates');
        const certsResult = await certsResponse.json();
        const localCertsResult = await localCertsResponse.json();

        setCertificates(certsResult);
        setLocalCerts(localCertsResult);
    }

    useEffect(() => {
        fetchCertificates();
    }, [])

    return(
        <PageLayout title="Certificates">   
            <div className="half_half">
                <Card>

                </Card>
                <Card>

                </Card>
            </div>
            <Card>
                <Table />
            </Card>
        </PageLayout>
    )
}

export default Certificates;