import React from 'react'

import Button from './Button'

const RenderSection = ({active, onChange}) => {
  return (
    <>
      <Button isActiv={active === 'main'} buttonClick={() => onChange('main')}> Home</Button >
      <Button isActiv={active === 'feetback'} buttonClick={() => onChange('feetback')}> Fitback</Button >      
      <Button isActiv={active === 'contac'} buttonClick={() => onChange('contac')}> Contact</Button >
      <Button isActiv={active === 'effect'} buttonClick={() => onChange('effect')}> Effect</Button >

    </>
  )
}

export default RenderSection


