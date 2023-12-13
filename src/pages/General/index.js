import { Card, PageLayout, Input } from "../../components";

const General = () => {

    const actions = [
        {
            type: 'primary',
            label: 'Save'
        }
    ];

    return(
        <PageLayout title="General" actions={ actions }>
            <div className="thirds">
                <Card title="General Settings">
                    <Input label="Management HTTP port" value={ 83 }/> 
                </Card>
                <Card title="File Server">
                    <>
                        <Input label="Port" value={ 0 }/> 
                        <Input label="IP interface" value={ '*' }/> 
                        <Input label="URL" value={ 'https://dev-svr-qc7.grange.local' }/> 
                    </> 
                </Card>
                <Card title="Database SOAP Interface">
                    <>
                        <Input label="Port" value={ 82 }/> 
                        <Input label="Max. queue size" value={ 1000 }/> 
                        <Input label="Max. connections" value={ 10 }/> 
                    </> 
                </Card>
            </div>
            <div className="thirds">
                <Card title="General SOAP Interface">
                    <Input label="Port" value={ 81 }/> 
                    <Input label="Max. queue size" value={ 50 }/> 
                    <Input label="Max. connections" value={ 5 }/> 
                </Card>
                <Card title="Plugins">
                    <Input label="Max. simultaneous stores" value={ 10 }/> 
                    <Input label="Plugin timeout (mins.)" value={ 1 }/> 
                </Card>
                <Card title="Multicast">
                    <Input label="IP address" value={ '224.21.21.21' }/> 
                    <Input label="Port" value={ 1111 }/> 
                </Card>
            </div>
            <div className="thirds">
                <Card title="Event Logging">
                    <Input label="Logging level" value={ 'Notice' }/> 
                    <Input label="Keep log files for (days)" value={ 7 }/> 
                    <Input label="Remote log server" value={ 'logs5.papertrailapp.com:49121' }/>  
                </Card>
            </div>
        </PageLayout>   
    )
};

export default General;