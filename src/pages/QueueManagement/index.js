import { Card, PageLayout, Input } from "../../components";

const QueueManagement = () => {

    const actions = [
        {
            type: 'primary',
            label: 'Save'
        },
        {
            type: null,
            label: 'Refresh' 
        }
    ];

    return(
        <PageLayout title="Queue management" actions={ actions }>
            <div className="thirds">
                <Card title="Completed job settings">
                    <Input label="Keep for (hrs.)" value={ 12 } /> 
                </Card>
                <Card title="Failed job settings">
                    <>
                        <Input label="Keep for (hrs.)" value={48 } /> 
                        <Input label="Automatically retry" value={ 3 } /> 
                    </>
                </Card>
                <Card title="General job settings">
                    <Input label="Check workflow plugins for progress every (ms)" value={ 2000 } /> 
                </Card>
            </div>
            <div className="thirds">
                <Card title="Maintenance settings">
                    <>
                        <Input label="Backup jobs every (mins.)" value={ 12 } /> 
                    </>
                </Card>
            </div>
        </PageLayout>
    )
}

export default QueueManagement;