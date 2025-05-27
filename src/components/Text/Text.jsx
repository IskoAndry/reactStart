
import styles from './Text.module.css';

function Text(props){
    return(
        
        <li className={styles.li}>
            <p>{props.id}. {props.title} </p>
            <p>{props.description} </p>
        </li>
    )
}
export default Text;