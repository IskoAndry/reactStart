import React, {useState, useRef} from 'react'
import Button from './Button'

function StateVsRef() {
  const input = useRef()
  
  return (
    <>
      <h2>State vs Ref: {input.current?.value}</h2>      
      <input ref={input} type='text' />        
    </>
  )        
}

const ContactSection = () => {
  const [form, setForm] = useState({
    name:"",
    reason:"help",
    hasError: false,
  })
  // const[name, setName] = useState("")
  // const[reason, setReason] = useState("help")
  // const[hasError, setHasError] = useState(false)

  function handlerInput(e){
    // setName(e.target.value)
    // setHasError(e.target.value.trim().length === 0)

    setForm((prev)=>{
      return{
        ...prev,
        name:e.target.value,
        hasError:e.target.value.trim().length === 0,
      }
    })
  }
    

  return (
    <>
        <h1>Contact</h1>
        <form>
          <label htmlFor="name">Yuor name</label>
          <input id='name' type="text" placeholder="name" value={form.name} onChange={handlerInput} 
          style={{border: form.hasError ? '2px solid red' : null}} />
<br/>
          <label htmlFor="reason">Reason</label>
          <select className="control" id="reason" value={form.reason} onChange={(e)=>setForm((prev)=>({...prev, reason:e.target.value}))}>
            <option value="error">Error</option>
            <option value="help">Help</option>
            <option value="suggest">Suggest</option>
          </select>
          <pre>Name: {form.name}</pre><br/>
          <pre>Reason: {form.reason}</pre>
          <Button disabled={form.hasError} isActiv={form.hasError}>Send</Button>
        </form>  

        <StateVsRef />    
    </>
  )
}

export default ContactSection
