import React from "react";
import Button from "../Text/Button";
import {differences} from '../Text/data';
import styles from "./main.module.css";


function Main(){
    const [contentType, setContentType] = React.useState(null);
    
    function hendelClick(type) {     
        // console.log(type)
        setContentType(type)       
    }

let tabContentType = null
if(contentType){
    tabContentType = <p className={styles.mainp}>  {differences[contentType]}</p>
}else{
    tabContentType = <p className={styles.mainp}>'Click of button'</p>
}

    return (
        <section className={styles.sectionMain}>
            <p>Отличие Main</p>
            <Button buttonClick={()=>hendelClick()}>Text</Button>

            <Button isActiv={contentType==='way'} buttonClick={()=> hendelClick('way')}>Подход</Button>
            <Button isActiv={contentType==='easy'} buttonClick={()=> hendelClick('easy')}>Доступность</Button>
            <Button isActiv={contentType==='program'} buttonClick={()=> hendelClick('program')}>Концентрация</Button>

            {/* {contentType ? (<p className={styles.mainp}> Enter name verabel: {differences[contentType]}</p>)
            : (<p className={styles.mainp}>Enter name verabel: 'Click of button'</p>)} */}

            {/* {!contentType && <p className={styles.mainp}>'Click of button'</p>}
            {contentType && <p className={styles.mainp}>  {differences[contentType]}</p>} */}


            {tabContentType}
        </section>
    )
}
export default Main;