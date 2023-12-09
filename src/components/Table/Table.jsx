import styles from './Table.module.css';

const Table = ({ data, columns }) => {

    if(!data || data.length === 0) {
        return <p>No Data to show!</p>
    }
    
    const keysToShow = columns ? columns.map(column => column.key) : Object.keys(data[0]);
    const modifierClass = keysToShow.length === 0 ? '' : `styles.table__${keysToShow.length}cols`;
  
    return (
        <div className={`${ styles.table } ${modifierClass}`}>
          <div className={ styles.head }>
            {keysToShow.map((key, index) => (
              <div key={index} className="header-cell" style={{ width: columns ? columns[index].width : 'auto' }}>
                {columns ? columns.find(col => col.key === key)?.label : key}
              </div>
            ))}
          </div>
          <div className={ styles.body }>
            {data.map((item, rowIndex) => (
                <div key={rowIndex} className={ styles.row }>
                {keysToShow.map((key, colIndex) => (
                    <div key={colIndex} className="table-cell" style={{ width: columns ? columns[colIndex].width : 'auto' }}>
                    {columns && key ? item[key] : (
                        <>
                        <p>Status: {item.solr_status}</p>
                        <p>Have Files: {item.solr_have_files}</p>
                        <p>Schema Name: {item.solr_schema_name}</p>
                        </>
                    )}
                    </div>
                ))}
                </div>
            ))}
        </div>
        </div>
      );
  };

export default Table;