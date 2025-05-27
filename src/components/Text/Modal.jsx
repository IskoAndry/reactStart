import  {createPortal} from 'react-dom'
import React, {useRef, useEffect} from 'react'

const Modal = ({children, open}) => {
  const dialog = useRef()

  useEffect(()=>{
    if(open){
    dialog.current.showModal()
  }else{
    dialog.current.close()
  }
  },[open])

  return createPortal(
    <dialog ref={dialog} style={{margin:'150px', width:'800px',height:'500px', padding:'2rem', background: '#ccc', border: '2px solid #ccc', zIndex:'100'}} >
      {children}
    </dialog>,
    document.getElementById('modal')
  )
}

export default Modal
