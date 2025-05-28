import React from 'react';
import styles from './Button.module.css';

const Button = ({children, buttonClick, isActiv, ...props}) => {
    // let classes = 'myBtn'
    // if(isActiv) classes += ' activeBtn'
// const handleClick = () => {
//     console.log('Кликнули на кнопку')
// }
    return (
        <button {...props}  onClick={buttonClick} className={isActiv ? `${styles.activeBtn}` : styles.myBtn}>
            {children}
        </button>
    );
}
export default Button;



