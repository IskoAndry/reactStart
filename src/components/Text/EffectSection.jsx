import React, {useState} from 'react'
import Button from './Button'
import Modal from './Modal'


const EffectSection = () => {
    const[show,setShow]=useState(false);
    const [loading, setLoading]=useState(false);

    function openModel(){
        setShow(prev =>  !prev)
    }
    
    
  return (
    <section>
        <h3>Effect</h3>

        <Button buttonClick={openModel}>{show ? 'Close information' : 'Open information'} </Button>
      
        <Modal open={show} >
            <h3>yello modal</h3>
            <p> Lorem ipsum dolor sit amet consectetur</p>
            <Button buttonClick={()=>setShow(false)}>Close Modal</Button>
        </Modal>

    </section>
  )
}

export default EffectSection
