import { FaCheck } from "react-icons/fa6";
import { RiCloseFill } from "react-icons/ri";
import { GoCopy } from "react-icons/go";
import styles from './CopyToClipboard.module.css';
import { useEffect, useState } from "react";

const CopyToClipboard = ({ value, cssClass }) => {

    const [state, setState] = useState('default');
    const [icon, setIcon] = useState(<GoCopy />);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(value)
            .then(() => {
                setState('success');
                setTimeout(() => {
                    setState('default');
                }, 2000)
            })
            .catch(err => {
                setState('error');
                setTimeout(() => {
                    setState('default');
                }, 2000)
            })
    }

    useEffect(() => {
        switch(state) {
            case('default'):
                setIcon( <GoCopy /> );
                break;
            case('success'):
                setIcon( <FaCheck /> );
                break;
            case('error'):
                setIcon( <RiCloseFill /> );
                break;
            default: break;
        }
    }, [state])

    return(
        <div className={ cssClass }> 
            { value }
            <button className={ styles.btn } title="Copy to clipboard" onClick={ copyToClipboard }> { icon } </button>   
        </div>
 
    )

}

export default CopyToClipboard;