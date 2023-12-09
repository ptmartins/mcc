import { Card, PageLayout, TabMenu, Table} from '../../components';

export default function Logs() {

    const tabs =  [
        { title: 'Menu 1', content: <p>This is the content of Tab 1.</p> },
        { title: 'Menu 2', content: <p>This is the content of Tab 2.</p> },
      ];

    return(
        <PageLayout title="Logs">
            <Card>
                <TabMenu items={ tabs }/>
            </Card>
        </PageLayout>
  
    )
}