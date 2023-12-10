import { useState, useEffect } from "react";
import { Card, PageLayout, Input, Button } from "../../components";
import { IoMdDownload } from "react-icons/io";

const RemoteTools = () => {

    const [data, setData] = useState([]);
    const fetchData = async () => {
        const response = await fetch('http://localhost:3001/api/tools');
        const result = await response.json();

        setData(result);
    };

    useEffect(() => {
        fetchData();
    }, [])

    return(
        <PageLayout title="Remote tools">
            <div className="thirds">
                <Card>
                    {
                        Object.keys(data).map((key, index) => {
                            return(
                                key === 'rdp_port' ?
                                    <>
                                        <Input label="RDP port number" value={ data[key] }/> 
                                        <Button type="submit">Workflow editor <IoMdDownload /> </Button> 
                                    </> 
                                    :  ''  
                            )
                        })
                    }
                </Card>
            </div>
        </PageLayout>   
    )
}

export default RemoteTools;