import { useState, useEffect } from 'react';
import styles from './Header.module.css';
import logo from './f.ico';

const Header = ()=>{
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    
// useEffect(()=>{
//   const interval = setInterval(()=>{
//     setTime(new Date().toLocaleTimeString())
//   },1000)

//   return ()=> clearInterval(interval);
// },[])

    // useEffect(() => {
    //     // Устанавливаем интервал для обновления времени каждую секунду
    //     const timer = setInterval(() => {
    //         setTime(new Date().toLocaleTimeString());
    //     }, 1000);
    //     // Очищаем интервал при размонтировании компонента
    //     return () => clearInterval(timer);
    // }, []);


    return(
      <header className={styles.header}>
        <h1 className={styles.title}>
            <img src={logo} alt="logo" />
            <span>My blog </span>            
        </h1>
        
        <span>tame: {time}</span>
      </header>
    )
  }
  export default Header;