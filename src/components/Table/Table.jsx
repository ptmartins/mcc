import styles from './Table.module.css';

const Table = ({ data }) => {

    const headers = Object.keys(data[0]);

    if(!data) {
        return(<p>No data available!</p>)
    }

    return(
        <div className="table">
            <div className="head">
                {headers.map(item => {
                    return(
                        <div className="header_cell">item</div>    
                    )
                })}
            </div>
            <div className="body">
                {data.map((item, index) => {
                    return(
                        <div className="row">
                            {Object.values(item).map() => {
                            
                            }}
                        </div>    
                    )
                })}
            </div>
        </div>
    ) 
}

export default Table;