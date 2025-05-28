import React, {useEffect, useState, useCallback} from 'react'
import Button from './Button'
import Modal from './Modal'
import styles from './Text.module.css';
import classes from '../UI/input/input.module.css';
import useInput from '../../hooks/useInput.js'


const EffectSection = () => {
  const input = useInput()
    const[show,setShow]=useState(false);
    const [loading, setLoading]=useState(false);
    const[dataUsers, setDataUsers]=useState([])


    function openModel(){
        setShow(prev =>  !prev)
    }

    const fetchUsers = useCallback(async ()=>{
      setLoading(true)
      const respons = await fetch('https://jsonplaceholder.typicode.com/users');
    
      const dataUsers = await respons.json();
      setDataUsers(dataUsers)
      setLoading(false)
    },[])

    useEffect(() => {
      fetchUsers()
    },[fetchUsers])
// аналогичная функция
    // useEffect(() => {
    //   setLoading(true)
    //   const respons = await fetch('https://jsonplaceholder.typicode.com/users');
    
    //   const dataUsers = await respons.json();
    //   setDataUsers(dataUsers)
    //   setLoading(false)

    //   fetchUsers()
    // },[])
    
  return (
    <section>
        <h3>Effect</h3>

        <Button buttonClick={openModel}>{show ? 'Close information' : 'Open information'} </Button>
      
        <Modal open={show} >
            <h3>yello modal</h3>
            <p> Lorem ipsum dolor sit amet consectetur</p>
            <Button buttonClick={()=>setShow(false)}>Close Modal</Button>
        </Modal>

        {loading && <p>Loading...</p>}
        {!loading && 
        <>
        <input type="text" className={classes.myInput} {...input}/>
          <ul>
            {dataUsers.filter((user)=> user.name.toLowerCase().includes(input.value.toLowerCase())).map(user => <li className={styles.li} key={user.id}>{user.name}</li>)}
          </ul>
        </>}

    </section>
  )
}

export default EffectSection
